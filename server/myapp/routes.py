from flask import Blueprint, jsonify, request, make_response
from flask_pymongo import PyMongo
from bson import json_util, ObjectId
import json
from .init_xml import XMLObject
from .xml_check import XmlCheck_4210
import datetime as dt


mongo = PyMongo()
main = Blueprint('main', __name__)

# Define a function to check if the file has an allowed extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() == 'xml' 

@main.errorhandler(404)
def handle_404_error(_error):
    """Return a http 404 error to client"""
    return make_response(jsonify({'error': 'Not found'}), 404)

# 4210
# Insert xml data to mongo
@main.route('/api/create_xml/<xml_type>', methods=['POST'])
def create_xml(xml_type):
    try:
        if (xml_type=='4210'):
        # Get the file from the request
            mongo.db.drop_collection('xml4210')
            files = request.files.getlist('files')
            for file in files:
                if file and allowed_file(file.filename):
                    # Read the content of the XML file
                    xml_content = file.read()
                    xml_obj = XMLObject(xml_content)
                    obj = {}
                    for index in range(1, 6):
                        print(index, dt.datetime.now())
                        if xml_obj.xml_detail(index):
                            obj_tab = f"xml{index}"
                            obj[obj_tab] = xml_obj.xml_detail(index)
                    mongo.db.xml4210.insert_one(obj)
                else:
                    return jsonify({'error': 'Invalid file or file type not allowed'})
                # Return a response (optional)
        return jsonify({'message': 'File uploaded and processed successfully'}), 201

        # return jsonify({'error': 'Invalid file or file type not allowed'})
    except Exception as e:
        print(str(e))
        return jsonify({'error': str(e)})
    
@main.route('/api/get_xml1s/<xml_type>', methods=['GET'])
def get_xml1s(xml_type):
    result_ar = []
    if (xml_type == '4210'):
        xml4210 = mongo.db.xml4210.find()
        for xml in xml4210:
            _id = xml['_id']
            xml1 = xml['xml1'][0]
            xml_check = mongo.db.xml4210_check.find_one({'parentId': ObjectId(_id)})
            xmlcheck_disc = []
            if xml_check and 'XML1' in xml_check:
                xmlcheck_disc = [tag for tag in xml_check['XML1']]
                # print(xmlcheck_disc)
            obj = {}
            obj['_id'] = _id
            error_count = 0
            xm1_ar = []
            
            for key, value in xml1.items():
                sub_obj = {}
                sub_obj[key] = value
                if xml_check:
                    if key in xmlcheck_disc:
                        sub_obj['status'] = 'FAIL'
                        error_count += 1
                    else:
                        sub_obj['status'] = 'PASS'
                else:
                    sub_obj['status'] = 'PASS'
                xm1_ar.append(sub_obj)
            obj['xml1'] = xm1_ar 
            if (error_count > 0):
                obj['status'] = "FAIL"
            else:
                obj['status'] = "PASS"
            result_ar.append(obj)
    return json.loads(json_util.dumps(list(result_ar)))

@main.route('/api/get_otherxml/<id>', methods=['GET'])
def get_otherxml(id):
    objId = ObjectId(id)
    xml = mongo.db.xml4210.find({"_id": objId})[0]
    return json.loads(json_util.dumps(xml))

@main.route('/api/get_all_otherxml', methods=['GET'])
def get_all_otherxml():
    xml = mongo.db.xml4210.find()
    return json.loads(json_util.dumps(xml))


@main.route('/api/check_xml/<xmlType>', methods=['GET'])
def check_xml(xmlType):
    result = []
    if (xmlType == '4210'):
        mongo.db.drop_collection('xml4210_check')
        xml4210 = mongo.db.xml4210.find()
        for xml in xml4210:
            obj = {}
            _id = xml["_id"]
            
            xml_check = XmlCheck_4210(xml)
            xml1_err = xml_check.xml1_check()
            xml2_err = xml_check.xml2_check()
            if (xml1_err):
                # print("xml1_err", xml1_err)
                obj['XML1'] = xml1_err
            if (xml2_err):
                # print("xml2_err", xml2_err)
                obj['XML2'] = xml2_err
            if (obj):
               
                obj['parentId'] = ObjectId(_id)
                result.append(obj)
    print('------------------', result)
    mongo.db.xml4210_check.insert_many(result)
    
    return json.loads(json_util.dumps(result))
    
    

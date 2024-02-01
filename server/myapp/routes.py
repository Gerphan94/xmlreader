from flask import Blueprint, jsonify, request, make_response
from flask_pymongo import PyMongo
from bson import json_util, ObjectId
import json
from .init_xml import XMLObject
import datetime as dt


mongo = PyMongo()
main = Blueprint('main', __name__)

# Define a function to check if the file has an allowed extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() == 'xml'

def drop_all_collection_4210():
    mongo.db.drop_collection('xml1')
    mongo.db.drop_collection('xml2')
    mongo.db.drop_collection('xml3')
    mongo.db.drop_collection('xml4')
    mongo.db.drop_collection('xml5')
    print("Droped all collection")

def drop_all_collection__130():
    mongo.db.drop_collection('xml1_130')
    mongo.db.drop_collection('xml2_130')
    mongo.db.drop_collection('xml3_130')
    mongo.db.drop_collection('xml4_130')
    mongo.db.drop_collection('xml5_130')
    print("Droped all collection")
    
    

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
    print(xml_type)
    result_ar = []
    if (xml_type == '4210'):
        xml4210 = mongo.db.xml4210.find()
        for xml in xml4210:
            obj = {}
            obj['_id'] = xml['_id']
            obj['xml1'] = xml['xml1'][0]
            result_ar.append(obj)
    return json.loads(json_util.dumps(list(result_ar)))

@main.route('/api/get_otherxml/<id>', methods=['GET'])
def get_otherxml(id):
    objId = ObjectId(id)
    print(objId)
    xml = mongo.db.xml4210.find({"_id": objId})
    print(xml[0])
    return json.loads(json_util.dumps(xml[0]))

from flask import Blueprint, jsonify, request, make_response
from flask_pymongo import PyMongo
from bson import json_util, ObjectId
import json
from .init_xml import XMLObject


mongo = PyMongo()
main = Blueprint('main', __name__)

path = '123.xml'

@main.errorhandler(404)
def handle_404_error(_error):
    """Return a http 404 error to client"""
    return make_response(jsonify({'error': 'Not found'}), 404)

@main.route('/api/types', methods=['GET'])
def get_types():
    types = mongo.db.xml_type.find()
    return json.loads(json_util.dumps(list(types)))

# Insert xml data to mongo
@main.route('/api/create_xml', methods=['POST'])
def create_xml():
    try:
        # Get the file from the request
        drop_all_collection()
        files = request.files.getlist('files')
        for file in files:
            if file and allowed_file(file.filename):
                print(file.filename)
                # Read the content of the XML file
                xml_content = file.read()
                xml_obj = XMLObject(xml_content)
                mongo.db.xml1.insert_one(xml_obj.xml1())
                if xml_obj.xml2():
                    mongo.db.xml2.insert_many(xml_obj.xml2())
                if xml_obj.xml3():
                    mongo.db.xml3.insert_many(xml_obj.xml3())
            else:
                return jsonify({'error': 'Invalid file or file type not allowed'})
            
            # Return a response (optional)
        return jsonify({'message': 'File uploaded and processed successfully'})

        # return jsonify({'error': 'Invalid file or file type not allowed'})

    except Exception as e:
        print(str(e))
        return jsonify({'error': str(e)})

# Define a function to check if the file has an allowed extension
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() == 'xml'

def drop_all_collection():
    mongo.db.drop_collection('xml1')
    
    mongo.db.drop_collection('xml2')
    mongo.db.drop_collection('xml3')
    mongo.db.drop_collection('xml4')
    mongo.db.drop_collection('xml5')
    print("Droped all collection")

@main.route('/api/get_xml1s', methods=['GET'])
def get_xmls():
    xml1s = mongo.db.xml1.find()
    return json.loads(json_util.dumps(list(xml1s)))


@main.route('/api/get_xml_other/<ma_lk>', methods=['GET'])
def get_xml_other(ma_lk):
    result_obj = {}
    # xml2
    xml2 = mongo.db.xml2.find({'MA_LK': ma_lk})
    result_obj['xml2'] = json.loads(json_util.dumps(list(xml2)))
    # xml3
    xml3 = mongo.db.xml3.find({'MA_LK': ma_lk})
    result_obj['xml3'] = json.loads(json_util.dumps(list(xml3)))
    # xml4
    xml4 = mongo.db.xml4.find({'MA_LK': ma_lk})
    result_obj['xml4'] = json.loads(json_util.dumps(list(xml4)))
    # xml5
    xml5 = mongo.db.xml5.find({'MA_LK': ma_lk})
    result_obj['xml5'] = json.loads(json_util.dumps(list(xml5)))
    
    return jsonify(result_obj) 
    
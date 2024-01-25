from flask import Blueprint, jsonify, request, make_response
from flask_pymongo import PyMongo
from bson import json_util, ObjectId
import json
from .init_xml import XMLObject


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
@main.route('/api4210/create_xml', methods=['POST'])
def create_xml():
    try:
        # Get the file from the request
        drop_all_collection_4210()
        files = request.files.getlist('files')
        for file in files:
            if file and allowed_file(file.filename):
                # Read the content of the XML file
                xml_content = file.read()
                xml_obj = XMLObject(xml_content)
                mongo.db.xml1.insert_one(xml_obj.xml1())
                if xml_obj.xml2():
                    mongo.db.xml2.insert_many(xml_obj.xml2())
                if xml_obj.xml3():
                    mongo.db.xml3.insert_many(xml_obj.xml3())
                if xml_obj.xml4():
                    mongo.db.xml4.insert_many(xml_obj.xml4())
                if xml_obj.xml5():
                    mongo.db.xml5.insert_many(xml_obj.xml5())
            else:
                return jsonify({'error': 'Invalid file or file type not allowed'})
            
            # Return a response (optional)
        return jsonify({'message': 'File uploaded and processed successfully'}), 201

        # return jsonify({'error': 'Invalid file or file type not allowed'})
    except Exception as e:
        print(str(e))
        return jsonify({'error': str(e)})




@main.route('/api4210/get_xml1s', methods=['GET'])
def get_xmls():
    xml1s = mongo.db.xml1.find()
    return json.loads(json_util.dumps(list(xml1s)))

@main.route('/api4210/get_xml_other/<ma_lk>', methods=['GET'])
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

# 130
@main.route('/api130/create_xml', methods=['POST'])
def create_xml_130():
    try:
        # Get the file from the request
        drop_all_collection__130()
        files = request.files.getlist('files')
        for file in files:
            if file and allowed_file(file.filename):
                # Read the content of the XML file
                xml_content = file.read()
                xml_obj = XMLObject(xml_content)

                for index in range(1, 12):
                    print(index)
                    if xml_obj.xml_detail(index):
                        collection_name = f'xml{index}_130'
                        mongo.db[collection_name].insert_many(xml_obj.xml_detail(index))
  
            else:
                return jsonify({'error': 'Invalid file or file type not allowed'})
            
            # Return a response (optional)
        return jsonify({'message': 'File uploaded and processed successfully'}), 201

        # return jsonify({'error': 'Invalid file or file type not allowed'})
    except Exception as e:
        print(str(e))
        return jsonify({'error': str(e)})

@main.route('/api130/get_xml1s', methods=['GET'])
def get_xml1_130():
    xml1s = mongo.db.xml1_130.find()
    return json.loads(json_util.dumps(list(xml1s)))

@main.route('/api130/get_xml_other/<ma_lk>', methods=['GET'])
def get_xml_other_130(ma_lk):
    result_obj = {}
    # xml2
    xml2 = mongo.db.xml2_130.find({'MA_LK': ma_lk})
    result_obj['xml2'] = json.loads(json_util.dumps(list(xml2)))
    # xml3
    xml3 = mongo.db.xml3_130.find({'MA_LK': ma_lk})
    result_obj['xml3'] = json.loads(json_util.dumps(list(xml3)))
    # xml4
    xml4 = mongo.db.xml4_130.find({'MA_LK': ma_lk})
    result_obj['xml4'] = json.loads(json_util.dumps(list(xml4)))
    # xml5
    xml5 = mongo.db.xml5_130.find({'MA_LK': ma_lk})
    result_obj['xml5'] = json.loads(json_util.dumps(list(xml5)))
    
    return jsonify(result_obj) 
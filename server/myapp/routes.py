from flask import Blueprint, jsonify, request, make_response
from flask_pymongo import PyMongo
from bson import json_util, ObjectId
import json
from .xml_read import XMLreader


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

@main.route('/api/xml', methods=['POST', 'GET'])
def create_xml():
    xml_obj = XMLreader(path)
    xmls = xml_obj.read_xml()
    for xml in xmls:
        match xml['loai_hoso']:
            case 'XML1':
                xml1_content = xml_obj.xml1(xml['noi_dung'])
                _id = mongo.db.xml1.insert_one(xml1_content).inserted_id
                break
            
            case _:
                break

    return jsonify({'msg':'data created successful'})

@main.route('/api/get_xml1s', methods=['GET'])
def get_xmls():
    xml1s = mongo.db.xml1.find()
    return json.loads(json_util.dumps(list(xml1s)))
    
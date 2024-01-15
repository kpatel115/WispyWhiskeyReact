from flask import Blueprint, request, jsonify, render_template
from helpers import token_required
from models import db, User, Whiskey, whiskey_schema, whiskeys_schema

api = Blueprint('api', __name__, url_prefix='/api')
# Works
@api.route('/whiskeydata')
def getdata():
    return{'Texas': 'Ranger'}

@api.route('/whiskeys', methods = ['POST'])
@token_required
def create_whiskey(current_user_token):
    name = request.json['name']
    category = request.json['category']
    distillery = request.json['distillery']
    bottler = request.json['bottler']
    bottling_series = request.json['bottling_series']
    year_bottled = request.json['year_bottled']
    strength = request.json['strength']
    size = request.json['size']
    notes = request.json['notes']
    user_token = current_user_token.token

    print(f'SuperTest (token): {current_user_token.token}')

    whiskey = Whiskey(name,category,distillery,bottler,bottling_series,year_bottled,strength,size,notes, user_token=user_token)

    db.session.add(whiskey)
    db.session.commit()

    response = whiskey_schema.dump(whiskey)
    return jsonify(response)

@api.route('/whiskeys', methods = ['GET'])
@token_required
def get_whiskey(current_user_token):
    a_user = current_user_token.token
    whiskeys = Whiskey.query.filter_by(user_token = a_user).all()
    response = whiskeys_schema.dump(whiskeys)
    return jsonify(response)

@api.route('/whiskeys/<id>', methods = ['GET'])
@token_required
def get_whiskey_two(current_user_token, id):
    newt = current_user_token.token
    if newt == current_user_token.token:
        whiskey = Whiskey.query.get(id)
        response = whiskey_schema.dump(whiskey)
        return jsonify(response)
    else:
        return jsonify({"message": "Valid Token Required"}),401
    

# update endpoint
@api.route('/whiskeys/<id>', methods = ['POST', 'PUT'])
@token_required
def update_whiskey(current_user_token, id):
    req = request.get_json()
    whiskey = Whiskey.query.get(id)
    whiskey.name = req['name']
    whiskey.category = req['category']
    whiskey.distillery = req['distillery']
    whiskey.bottler = req['bottler']
    whiskey.bottling_series = req['bottling_series']
    whiskey.year_bottled = req['year_bottled']
    whiskey.strength = req['strength']
    whiskey.size = req['size']
    whiskey.notes = req['notes']
    whiskey.user_token = current_user_token.token

    db.session.commit()
    response = whiskey_schema.dump(whiskey)
    return jsonify(response)

# delete endpoint
@api.route('/whiskeys/<id>', methods = ['DELETE'])
@token_required
def delete_whiskey(current_user_token, id):
    whiskey = Whiskey.query.get(id)
    db.session.delete(whiskey)
    db.session.commit()
    response = whiskey_schema.dump(whiskey)
    return jsonify(response)



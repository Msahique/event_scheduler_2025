# py -3 -m pip install Flask  (install libraries in python 3.9 syntax)

#from distutils.log import error

from flask import Flask, render_template, jsonify, request,redirect
from flask_cors import CORS 
from flask import *
import json
import random
import datetime 
from datetime import datetime, timedelta
import pymysql
from db_operations import * 


# global variables
db = pymysql.connect(
  host="localhost",
  user="root",
  password="Blr@2025",
  database="event_scheduler2025",
  port=3306,
  cursorclass=pymysql.cursors.DictCursor
)

db_name = 'event_scheduler2025'

try:
    mycursor = db.cursor()
    print("DB connected")
except:
    print("DB not connected")
new_session_id=0


app = Flask(__name__)
#CORS(app)
CORS(app, resources={r"/*": {"origins": "*"}})

######################################################### TESTING ############################################################

from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import pymysql


app.config['JWT_SECRET_KEY'] = 'supersecretkey'  # Change this in production
jwt = JWTManager(app)

USERS = {
    "admin_user": {"password": "adminpass", "role": "admin"},
    "approver_user": {"password": "approverpass", "role": "approver"},
    "normal_user": {"password": "userpass", "role": "user"}
}



from functools import wraps  # Add this at the top
import logging
logging.basicConfig(level=logging.DEBUG)


def role_required(allowed_roles):
    print("Decorator called")
    def decorator(func):
        print("Inside decorator")
        @wraps(func)
        def wrapper(*args, **kwargs):
            try:
                print("Inside wrapper")
                # Simulate JWT identity for testing
                print("Authorization header:", request.headers.get('Authorization'))
                getuserrole = get_jwt_identity()
                print("User Role from JWT:", getuserrole)
                user = {"role": getuserrole}
                print(f"User: {user}")
                if not user or user["role"] not in allowed_roles:
                    print("Access denied")
                    return jsonify({"error": "Access denied"}), 403
                print("Access granted")
                return func(*args, **kwargs)
            except Exception as e:
                print(f"Error in role_required: {str(e)}")
                return jsonify({"error": str(e)}), 500
        return wrapper
    return decorator


@app.route('/test', methods=['GET'])
@role_required(["admin"])
def test_route():
    return jsonify({"message": "Access granted"})

######################################################### TESTING ############################################################

@app.route('/login', methods=['POST'])
def login():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = request.json
    print(data)
    username = data.get("username")
    password = data.get("password")
    print("Username:", username)
    affiliations_data=[]
    try:
        myresult=get_data(json_data['db_name'],"user_registration", ['*'],{'email': username,'password':password},exact_match=True) 
        print("Myresult:",myresult);    
        if(myresult):
            resource_data=get_data(json_data['db_name'],"resource_profile", ['affiliation_id'],{'resource_name': myresult[0]['name']},exact_match=True) 
            print(resource_data)
            for x in resource_data:
                affiliations=(get_data(json_data['db_name'],"affiliation", ['*'],{'id':x['affiliation_id']},exact_match=True))
                affiliations_data.append(affiliations[0])
                print(affiliations_data); 
            return jsonify({"message": "Login successful","affiliations":affiliations_data}), 200
        else:
            return jsonify({"error": "Invalid credentials"}), 401
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500
    #user = USERS.get(username)
    #if user and user["password"] == password:
    #    token = create_access_token(identity={"username": username, "role": user["role"]})
    #    return jsonify({"token": token, "role": user["role"]})
    
    #return jsonify({"error": "Invalid credentials"}), 401


# Create an Entity (Admin Only)
@app.route('/new_test', methods=['POST'])
@jwt_required()
@role_required(["admin"])  # Ensure the user is an admin
def create_entity():
    data = request.get_json()
    if not data or "entity_name" not in data or "entity_type" not in data:
        return jsonify({"error": "Missing required fields"}), 422  # Detailed error message
    print("Received Data:", data)
    try:
        connection = pymysql.connect(
            host="localhost",
            user="root",
            password="root",
            db="event_scheduler2025"
        )
        cursor = connection.cursor()
        sql = "INSERT INTO entity (entity_name, entity_type, entry_status) VALUES (%s, %s, %s)"
        cursor.execute(sql, (data["entity_name"], data["entity_type"], "active"))
        connection.commit()
        return jsonify({"message": "Entity created successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    finally:
        cursor.close()
        connection.close()

@app.route('/alive')
def alive():
    return jsonify({"ack":"hello,  welcome"}) 

@app.route('/')
def login_page():
    return render_template('login.html') 
    
@app.route('/app')
def home_page():
    aff_json = request.args.get('affiliation') 
    affiliations = json.loads(aff_json) if aff_json else [] ; print("Received affiliations:", affiliations)
    return render_template('index3.html', affiliation=affiliations)

@app.route('/preview')
def page_preview():
    '''
    data = request.get_json()
    config_data = data.get("config")
    user_tab_data=data.get("tab_config")
    user_id=data.get("user_id")
    print("User Tab Data",user_tab_data)
    
    print(">>>>!!!!>>>>",data)
    '''
    return render_template('preview.html')

@app.route('/test_att')
def test_page():
    return render_template('test.html') 

@app.route('/test3')
def test3_page():
    return render_template('test4.html') 

@app.route('/map')
def map():
    return render_template('map.html') 

@app.route('/qr')
def qr_decode():
    return render_template('qr_decoder.html') 
    

@app.route('/options', methods=['POST'])
def get_helper_data():
    data = request.get_json()  # Use request.get_json() instead of json.loads(request.data)
    print("Received Data:", data)

    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = json.loads(request.data); print(data)
    
    try:
        print(json_data['db_name'],json_data[data['type']], data['qry']['select_fields'],data['qry']['where_data'])
        myresult=get_data(json_data['db_name'],json_data[data['type']], data['qry']['select_fields'],data['qry']['where_data']) 
        print(myresult);    return jsonify(myresult)
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500
        
@app.route('/get_user_tabs',methods=['POST','GET'])
def get_user_tabs():
    data = request.data 
    y = json.loads(data) 
    print(y['role'])    # the result is a Python dictionary:
    f=open('config/new/user_tabs.json')
    tab_data = json.load(f)
    if (y['role']=="Admin"):
        response=tab_data['Admin1']
    elif (y['role']=="User"):
        response=tab_data['User']
    elif (y['role']=="Finance_admin"):
        response=tab_data['Finance_admin']
    elif (y['role']=="Campaign_admin"):
        response=tab_data['Campaign_admin']
    else:
        response=jsonify("role not defined")
    print(response)
    return jsonify(response)

@app.route('/affiliation/new', methods=['POST'])
def insert_affiliation():
    json_data = json.load(open('config/new/get_DB_data_new.json')) 
    data = stream_json()  # Receiving data in chunks
    
    success, message = insert_ignore(json_data['db_name'], json_data[data['type']], data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

@app.route('/affiliation/modifications', methods=['PUT'])
def update_affiliation():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    update_data = data.get("qry", {}).get("update")
    where_data = {"affiliation_id": data.get('affiliation_id')}

    if not update_data or not where_data.get("affiliation_id"):
        return jsonify({"error": "Missing affiliation_id or update_data"}), 400

    success = update_entry(json_data['db_name'], json_data[data['type']], update_data, where_data)
    
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

@app.route('/affiliation', methods=['DELETE'])
def Affiliation_entry_api():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    print(data)
    where_data = data.get('qry', {}).get('where_data', {})
    print("where_data :",where_data)
    
    success = delete_entry(json_data['db_name'], json_data[data['type']], where_data)
    #success = delete_entry(json_data['db_name'], json_data[data['type']], {"affiliation_id": affiliation_id})
    
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

@app.route('/affiliation/list_details', methods=['POST', 'GET'])
def affiliation_get_data():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    try:
        myresult = get_data(
            json_data['db_name'],
            json_data[data['type']],
            data['qry']['select_fields'],
            data['qry']['where_data']
        )
        
        #return jsonify(myresult if data['qry']['where_data'] else ([myresult]))
        return jsonify([myresult])
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

######################################################  ENTITY  APIs  ####################################################################

def stream_json():
    """ Reads request stream in chunks and returns parsed JSON data """
    data_chunks = []
    for chunk in request.stream:
        data_chunks.append(chunk.decode('utf-8'))
    full_data = ''.join(data_chunks)
    return json.loads(full_data) if full_data else {}

@app.route('/entity/new', methods=['POST'])
def insert_entity():
    json_data = json.load(open('config/new/get_DB_data_new.json')) 
    data = stream_json()  # Receiving data in chunks
    
    success, message = insert_ignore(json_data['db_name'], json_data[data['type']], data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

@app.route('/entity/modifications', methods=['PUT'])
def update_entry_api():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    update_data = data.get("qry", {}).get("update")
    where_data = {"entity_id": data.get('entity_id')}

    if not update_data or not where_data.get("entity_id"):
        return jsonify({"error": "Missing entity_id or update_data"}), 400

    success = update_entry(json_data['db_name'], json_data[data['type']], update_data, where_data)
    
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

@app.route('/entity', methods=['DELETE'])
def delete_entry_api():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    where_data = data.get('qry', {}).get('where_data', {})
    print("where_data :",where_data)

    success = delete_entry(json_data['db_name'], json_data[data['type']],  where_data)
    
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

@app.route('/entity/list_details', methods=['POST', 'GET'])
def entity_get_data():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    try:
        myresult = get_data(
            json_data['db_name'],
            json_data[data['type']],
            data['qry']['select_fields'],
            data['qry']['where_data']
        )
        
        #return jsonify(myresult if data['qry']['where_data'] else [myresult])
        return jsonify([myresult])
    except Exception as e:
        return jsonify({"error": str(e)}), 500

######################################################  RESOURCE  APIs  ####################################################################

@app.route('/resource/new', methods=['POST'])
def resource_new():
    data = request.json
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    data = request.json
    print(data)
    
    # Insert data into the entity table
    success, message = insert_ignore(json_data['db_name'],json_data[data['type']], data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

@app.route('/resource/list_details', methods=['POST', 'GET'])
def resource_list():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = json.loads(request.data); 
    print("data >>", json_data['db_name'],json_data[data['type']], data['qry']['select_fields'],data['qry']['where_data'])
    
    try:
        myresult=get_data(json_data['db_name'],json_data[data['type']], data['qry']['select_fields'],data['qry']['where_data']) 
        print(myresult)
        return jsonify([myresult])
     
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500

# Update Resource API
@app.route('/resource/modifications', methods=['PUT'])
def resource_update():
    # validate the qry, for assuring all the required fields are present. 
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    data = request.json
    qry = data.get("qry")
    update_data =qry.get("update")
    where_data = {"resource_id":data.get('resource_id')}
    print(">>",update_data) 
    print(">>",where_data) 

    if not update_data or not where_data:
        return jsonify({"error": "Missing table_name, update_data or where_data"}), 400
    success = update_entry(json_data['db_name'],json_data[data['type']], update_data,where_data,)
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

# Delete Entry API
@app.route('/resource', methods=['DELETE'])
def resoure_delete():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    data = request.json
    print("data :",data)
    where_data = data.get('qry', {}).get('where_data', {})
    print("where_data :",where_data)
    
    success = delete_entry(json_data['db_name'],json_data[data['type']], where_data )
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

######################################################  EVENT  APIs  ####################################################################

#new
@app.route('/event/new', methods=['POST'])
def event_new():
    data = request.json
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    data = request.json
    print(data)
   
    # Insert data into the entity table
    success, message = insert_ignore(json_data['db_name'],json_data[data['type']], data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

# List
@app.route('/event/list_details', methods=['POST', 'GET'])
def event_list():
    print("**************************************************")
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = json.loads(request.data); print(data)
   
    #where_data = {"name": "python bootcamp"}
    # "venue.city": "Manipal"
    #data['qry']['select_fields']=["venue.city","name","category"]
    try:
        myresult=get_data(json_data['db_name'],json_data[data['type']], data['qry']['select_fields'],data['qry']['where_data'])
        #print(json_data['db_name'],json_data[data['type']], data['qry']['select_fields'],where_data)
        #myresult=get_data(json_data['db_name'],json_data['general']['event_table_name'], data['qry']['select_fields'],where_data) 
        print(myresult)
        if(data['qry']['where_data']=={}):
            return jsonify([myresult])
        else:
            return jsonify([myresult])
     
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500

# Delete 
@app.route('/event', methods=['DELETE'])
def event_delete():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    where_data = data.get('qry', {}).get('where_data', {})
    
    success = delete_entry( json_data['db_name'],json_data[data['type']],where_data)
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

# Update 
@app.route('/event/modifications', methods=['PUT'])
def event_update():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    update_data = data.get("qry", {}).get("update")
    where_data = {"event_id":data.get('event_id')}
    print(">>",update_data,where_data) 
    
    success = update_entry(
        json_data['db_name'],
        json_data[data['type']], 
        update_data,
        where_data
    )
    
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500
   

######################################################  ALERTS  APIs  ####################################################################

#new
@app.route('/alert/new', methods=['POST'])
def alert_new():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = request.json
    required_columns = ["event_id", "target_category", "message_id", "alert_datetime"]
    
    # Check for missing columns
    missing_columns = [col for col in required_columns if col not in data.get("qry")]
    if missing_columns:
        return jsonify({'error': f"Missing columns: {', '.join(missing_columns)}"}), 400
    
    # Insert data into the entity table
    success, message = insert_ignore(json_data['db_name'],json_data['general']['alert_table_name'],data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

# List
@app.route('/alert/list_details', methods=['POST', 'GET'])
def alert_list():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = json.loads(request.data); print(data)
    
    try:
        myresult=get_data(json_data['db_name'],json_data['general']['alert_table_name'], data['qry']['select_fields'],data['qry']['where_data']) 
        print(myresult)
        if(data['qry']['where_data']=={}):
            return jsonify([myresult])
        else:
            return jsonify([myresult])
     
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500

# Update 
@app.route('/alert/modifications', methods=['PUT'])
def alert_update():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    update_data = data.get("qry")
    where_data = {"alert_id":data.get('alert_id')}
    print(">>",update_data,where_data) 

    if not update_data or not where_data:
        return jsonify({"error": "Missing table_name, update_data or where_data"}), 400
    success = update_entry(json_data['db_name'],json_data['general']['alert_table_name'], update_data,where_data,)
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

# Delete 
@app.route('/alert', methods=['DELETE'])
def alert_delete():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    where_data = data.get('where_data')
    
    db_name = 'event_scheduler2025'
    success = delete_entry(json_data['general']['alert_table_name'], where_data,json_data['db_name'])
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

######################################################  MESSAGE  APIs  ####################################################################

#new
@app.route('/message/new', methods=['POST'])
def message_new():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = json.loads(request.data); print(data)

    #data = request.json
    required_columns = ["message_id", "entity_id", "category", "message_body"]
    
    # Check for missing columns
    missing_columns = [col for col in required_columns if col not in data.get("qry")]
    if missing_columns:
        print("missing")
        return jsonify({'error': f"Missing columns: {', '.join(missing_columns)}"}), 400
    print("function call")
    # Insert data into the entity table
    #success, message = insert_ignore(json_data['db_name'],json_data['System Config']['com_settings'], data.get("qry"))
    success, message = insert_ignore(json_data['db_name'],json_data[data['type']], data['qry'])
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

# List
@app.route('/message/list_details', methods=['POST', 'GET'])
def message_list():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = json.loads(request.data); print(data)
    
    try:
        myresult=get_data(json_data['db_name'],json_data['general']['message_table_name'], data['qry']['select_fields'],data['qry']['where_data']) 
        print(myresult)
        if(data['qry']['where_data']=={}):
            return jsonify([myresult])
        else:
            return jsonify([myresult])
     
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500

# Update 
@app.route('/message/modifications', methods=['PUT'])
def message_update():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    qry = data.get("qry")
    update_data = qry.get("update")
    where_data = {"message_id":data.get('message_id')}
    print(">>",update_data,where_data) 

    if not update_data or not where_data:
        return jsonify({"error": "Missing table_name, update_data or where_data"}), 400
    success = update_entry(json_data['db_name'],json_data['general']['message_table_name'], update_data,where_data,)
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

# Delete
@app.route('/message', methods=['DELETE'])
def message_delete():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    where_data = data.get('qry', {}).get('where_data', {})

    #success = delete_entry(json_data['general']['message_table_name'], where_data,json_data['db_name'])
    success = delete_entry(json_data['db_name'],json_data[data['type']], where_data )
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500



######################################################  SUBSCRIBER  APIs  ####################################################################

#new
@app.route('/subscriber/new', methods=['POST'])
def subscriber_new():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = request.json
    required_columns = ["subscriber_id", "name", "category", "phone_number", "email", "alert_url", "alert_preference", "status_poll_url"]
    
    # Check for missing columns
    missing_columns = [col for col in required_columns if col not in data.get("qry")]
    if missing_columns:
        return jsonify({'error': f"Missing columns: {', '.join(missing_columns)}"}), 400
    
    # Insert data into the entity table
    success, message = insert_ignore(json_data['db_name'],json_data['general']['subscriber_table_name'], data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

# List
@app.route('/subscriber/list_details', methods=['POST', 'GET'])
def subscriber_list():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = json.loads(request.data); print(data)
    
    try:
        myresult=get_data(json_data['db_name'],json_data['general']['subscriber_table_name'], data['qry']['select_fields'],data['qry']['where_data']) 
        print(myresult)
        if(data['qry']['where_data']=={}):
            return jsonify([myresult])
        else:
            return jsonify([myresult])
     
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500

# Update 
@app.route('/subscriber/modifications', methods=['PUT'])
def subscriber_update():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    update_data = data.get("qry", {}).get("update")
    where_data = {"subscriber_id":data.get('subscriber_id')}
    print(">>",update_data,where_data) 

    if not update_data or not where_data:
        return jsonify({"error": "Missing table_name, update_data or where_data"}), 400
    success = update_entry(json_data['db_name'],json_data['general']['subscriber_table_name'], update_data,where_data,)
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

# Delete
@app.route('/subscriber', methods=['DELETE'])
def subscriber_delete():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    where_data = data.get('qry', {}).get('where_data', {})

    success = delete_entry(json_data['db_name'],json_data['general']['subscriber_table_name'], where_data)
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

######################################################  LOG  APIs  ####################################################################

#new
@app.route('/log/new', methods=['POST'])
def log_new():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = request.json
    required_columns = ["subscriber_id", "name", "category", "phone_number", "email", "alert_url", "alert_preference", "status_poll_url"]
    
    # Check for missing columns
    missing_columns = [col for col in required_columns if col not in data.get("qry")]
    if missing_columns:
        return jsonify({'error': f"Missing columns: {', '.join(missing_columns)}"}), 400
    
    # Insert data into the entity table
    success, message = insert_ignore(json_data['db_name'],json_data['general']['log_table_name'], data.get("qry") )
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

# List
@app.route('/log/list_details', methods=['POST', 'GET'])
def log_list():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = json.loads(request.data); print(data)
    
    try:
        myresult=get_data(json_data['db_name'],json_data['general']['log_table_name'], data['qry']['select_fields'],data['qry']['where_data']) 
        print(myresult)
        if(data['qry']['where_data']=={}):
            return jsonify([myresult])
        else:
            return jsonify([myresult])
     
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500

# Update 
@app.route('/log/modifications', methods=['PUT'])
def log_update():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    update_data = data.get("qry")
    where_data = {"log_id":data.get('log_id')}
    print(">>",update_data,where_data) 

    if not update_data or not where_data:
        return jsonify({"error": "Missing table_name, update_data or where_data"}), 400
    success = update_entry(json_data['db_name'],json_data['general']['log_table_name'], update_data,where_data,)
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

# Delete
@app.route('/log', methods=['DELETE'])
def log_delete():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    where_data = data.get('where_data')

    success = delete_entry(json_data['general']['log_table_name'], where_data,json_data['db_name'])
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

######################################################  APPOINTMENT  APIs  ####################################################################

#new
@app.route('/appointment/new', methods=['POST'])
def appointment_new():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = request.json
    # Insert data into the entity table
    success, message = insert_ignore(json_data['db_name'], json_data['general']['appointment_table_name'], data.get("qry") )
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

# List
@app.route('/appointment/list_details', methods=['POST', 'GET'])
def appointment_list():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = json.loads(request.data); print(data)
    
    try:
        myresult=get_data(json_data['db_name'],json_data['general']['appointment_table_name'], data['qry']['select_fields'],data['qry']['where_data']) 
        print(myresult)
        if(data['qry']['where_data']=={}):
            return jsonify([myresult])
        else:
            return jsonify([myresult])
     
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500

# Update 
@app.route('/appointment/modifications', methods=['PUT'])
def appointment_update():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    update_data = data.get("qry", {}).get("update")
    where_data = {"appointment_id":data.get('appointment_id')}
    print(">>",update_data,where_data) 

    if not update_data or not where_data:
        return jsonify({"error": "Missing table_name, update_data or where_data"}), 400
    success = update_entry(json_data['db_name'],json_data['general']['appointment_table_name'], update_data,where_data,)
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

# Delete
@app.route('/appointment', methods=['DELETE'])
def appointment_delete():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    where_data = data.get('qry', {}).get('where_data', {})

    success = delete_entry(json_data['db_name'],json_data['general']['appointment_table_name'], where_data)
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

######################################################  ENTITY_CONFIG  APIs  ####################################################################

#new
@app.route('/config/new', methods=['POST'])
def entityConfig_new():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data)
    data = request.json
    print(data.get("qry"))
    # Insert data into the entity table
    print(">>",json_data['db_name'],json_data[data['type']], data.get("qry") )
    success, message = insert_ignore(json_data['db_name'],json_data[data['type']], data.get("qry") )
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

# List
@app.route('/config/list_details', methods=['POST', 'GET'])
def entityConfig_list():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    #print("db name: ",json_data)
    #data = json.loads(request.data); print(data)
    data = request.get_json(force=True, silent=True) or {}
    print("Request Data:", data)
    
    try:
        #myresult=get_data(json_data['db_name'],json_data[data['type']], data['qry']['select_fields'],data['qry']['where_data']) 
        #myresult = get_data_list(json_data['db_name'], json_data[data['type']],data['qry']['select_fields'],data['qry']['where_data'],data['affiliations'], data['block_size'],data['block_number'])
        
        myresult = get_data_list(
            json_data.get('db_name', 'default_db'),
            json_data.get(data.get('type', ''), 'default_table'),
            data.get('qry', {}).get('select_fields', ['*']),
            data.get('qry', {}).get('where_data', {}),
            data.get('affiliations', []),
            data.get('block_size', 50),
            data.get('block_number', 1)
        )

        print(myresult)
        if(data['qry']['where_data']=={}):
            return jsonify(myresult,data['type'])
        else:
            return jsonify(myresult,data['type'])
     
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500


@app.route('/config/list_details_new', methods=['POST', 'GET'])
def Config_list_new():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    #print("db name: ",json_data)
    data = json.loads(request.data); print(data)
    
    try:
        #myresult=get_data(json_data['db_name'],json_data[data['tab']][data['type']], data['qry']['select_fields'],data['qry']['where_data']) 
        myresult = get_data(
            json_data['db_name'],
            json_data[data['type']],
            data['qry']['select_fields'],
            data['qry']['where_data'],
            "none",
            data['affiliations']
        )
        
        print(myresult)
        if(data['qry']['where_data']=={}):
            return jsonify(myresult,data['type'])
        else:
            return jsonify(myresult,data['type'])
     
    except Exception as e:
        print("Error:", e)
        return jsonify({"error": str(e)}), 500


# Update 
@app.route('/config/modifications', methods=['PUT'])
def entityConfig_update():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = request.json
    qry = data.get('qry', {})
    update_data = qry.get('update', {})
    where_data = qry.get('where_data', {})
    print(">>",update_data,where_data) 

    if not update_data or not where_data:
        return jsonify({"error": "Missing table_name, update_data or where_data"}), 400
    success = update_entry(json_data['db_name'],json_data[data['type']], update_data,where_data,)
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

# Delete
@app.route('/config', methods=['DELETE'])
def entityConfig_delete():
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    print("db name: ",json_data['db_name'])
    data = json.loads(request.data)
    qry = data.get('qry', {})

    print("Query Received:", qry)
    print("Query Received:", type(qry['where_data']))

     # Ensure 'where_data' is always a dictionary
    where_data = qry.get('where_data', {})
    for key in where_data.keys():
        print(key)

    if isinstance(where_data, str):  
        try:
            where_data = json.loads(where_data)  # Convert string to dictionary
        except json.JSONDecodeError:
            return jsonify({'error': 'Invalid format for where_data'}), 400

    if not isinstance(where_data, dict):  
        return jsonify({'error': 'where_data must be a dictionary'}), 400

    print("Processed Where Data:", where_data)
    #success = delete_entry(json_data['db_name'],json_data['entity_config'][data['type']], {"entity_id":entity_id} )
    success = delete_entry(json_data['db_name'],json_data[data['type']], where_data)
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

import encryption

@app.route('/registerQR', methods=['POST'])
def register_qr():
    data = request.get_json()
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    DocumentId = data.get('DocumentId')
    token = data.get('token')
    creator = data.get('creator')
    filedata = data.get('filedata')
    password = data.get('password')

    # Insert into DB or log it
    print(f"Received QR registration: {DocumentId}, {token}, {creator},{filedata['entity_id']}")

    #try:
    myresult=get_data(json_data['db_name'],"entity", "*",{"entity_id":filedata['entity_id']}) 
    print(myresult)
    data={
        "entityId":filedata['entity_id'],  
        "serverPath":myresult[0]['ftp_path']+","+myresult[0]['username']+","+myresult[0]['password'],
        "folderPath":"/upload/", 
        "fileName":filedata['photo'], 
        "token":token, 
        "qrFilename":"qr_"+filedata['photo'], 
        "createdBy":creator, 
        "status":"active", 
        "qrlinkscol":"qr_link",
    }
    success, message = insert_ignore("event_scheduler2025","qrlinks", data )
    
    if success:
        encoded_data = encryption.encrypt_to_qr_string("http://127.0.0.1:5000/readQR?token="+token,password)
        print("Encoded Data:", encoded_data)
        return jsonify({'message': message,'encoded_data':encoded_data}), 201
    else:
        return jsonify({'error': message}), 400
        
        #return jsonify({"message": "QR data registered successfully"}), 200
     
    #except Exception as e:
    #    print("Error:", e)
    #    return jsonify({"error": str(e)}), 500
 
######################################################  App Registry  APIs  ####################################################################


@app.route('/app_registry/new', methods=['POST'])
def insert_app_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json')) 
    data = stream_json()  # Receiving data in chunks
    
    success, message = insert_ignore(json_data['db_name'], json_data[data['type']], data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

@app.route('/app_registry/modifications', methods=['PUT'])
def update_app_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    qry = data.get("qry")
    update_data =qry.get("update")
    where_data = {"app_registry_id": data.get('app_registry_id')}

    if not update_data or not where_data.get("app_registry_id"):
        return jsonify({"error": "Missing app_registry_id or update_data"}), 400

    success = update_entry(json_data['db_name'], json_data[data['type']], update_data, where_data)
    
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

@app.route('/app_registry', methods=['DELETE'])
def delete_app_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    entity_id = data.get('entity_id')

    if not entity_id:
        return jsonify({"error": "Missing entity_id"}), 400

    success = delete_entry(json_data['db_name'], json_data[data['type']], {"entity_id": entity_id})
    
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

@app.route('/app_registry/list_details', methods=['POST', 'GET'])
def get_app_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    try:
        myresult = get_data(
            json_data['db_name'],
            json_data[data['type']],
            data['qry']['select_fields'],
            data['qry']['where_data']
        )
        
        return jsonify([myresult] if data['qry']['where_data'] else [myresult])
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


######################################################  Program Registry  APIs  ####################################################################


@app.route('/program_registry/new', methods=['POST'])
def insert_program_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json')) 
    data = stream_json()  # Receiving data in chunks
    
    success, message = insert_ignore(json_data['db_name'], json_data[data['type']], data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

@app.route('/program_registry/modifications', methods=['PUT'])
def update_program_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    update_data = data.get("qry")
    where_data = {"entity_id": data.get('entity_id')}

    if not update_data or not where_data.get("entity_id"):
        return jsonify({"error": "Missing entity_id or update_data"}), 400

    success = update_entry(json_data['db_name'], json_data[data['type']], update_data, where_data)
    
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

@app.route('/program_registry', methods=['DELETE'])
def delete_program_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    entity_id = data.get('entity_id')

    if not entity_id:
        return jsonify({"error": "Missing entity_id"}), 400

    success = delete_entry(json_data['db_name'], json_data[data['type']], {"entity_id": entity_id})
    
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

@app.route('/program_registry/list_details', methods=['POST', 'GET'])
def get_program_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    try:
        myresult = get_data(
            json_data['db_name'],
            json_data[data['type']],
            data['qry']['select_fields'],
            data['qry']['where_data']
        )
        
        return jsonify([myresult] if data['qry']['where_data'] else [myresult])
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


######################################################  Service Registry  APIs  ####################################################################

@app.route('/service_registry/new', methods=['POST'])
def insert_service_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json')) 
    data = stream_json()  # Receiving data in chunks
    
    success, message = insert_ignore(json_data['db_name'], json_data[data['type']], data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

@app.route('/service_registry/modifications', methods=['PUT'])
def update_service_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    update_data = data.get("qry")
    where_data = {"entity_id": data.get('entity_id')}

    if not update_data or not where_data.get("entity_id"):
        return jsonify({"error": "Missing entity_id or update_data"}), 400

    success = update_entry(json_data['db_name'], json_data[data['type']], update_data, where_data)
    
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

@app.route('/service_registry', methods=['DELETE'])
def delete_service_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    entity_id = data.get('entity_id')

    if not entity_id:
        return jsonify({"error": "Missing entity_id"}), 400

    success = delete_entry(json_data['db_name'], json_data[data['type']], {"entity_id": entity_id})
    
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

@app.route('/service_registry/list_details', methods=['POST', 'GET'])
def get_service_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    try:
        myresult = get_data(
            json_data['db_name'],
            json_data[data['type']],
            data['qry']['select_fields'],
            data['qry']['where_data']
        )
        
        return jsonify([myresult] if data['qry']['where_data'] else [myresult])
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

######################################################  Document Registry  APIs  ####################################################################

@app.route('/document_registry/new', methods=['POST'])
def insert_document_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json')) 
    data = stream_json()  # Receiving data in chunks
    
    success, message = insert_ignore(json_data['db_name'], json_data[data['type']], data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

@app.route('/document_registry/modifications', methods=['PUT'])
def update_document_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    update_data = data.get("qry")
    where_data = {"entity_id": data.get('entity_id')}

    if not update_data or not where_data.get("entity_id"):
        return jsonify({"error": "Missing entity_id or update_data"}), 400

    success = update_entry(json_data['db_name'], json_data[data['type']], update_data, where_data)
    
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

@app.route('/document_registry', methods=['DELETE'])
def delete_document_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    entity_id = data.get('entity_id')

    if not entity_id:
        return jsonify({"error": "Missing entity_id"}), 400

    success = delete_entry(json_data['db_name'], json_data[data['type']], {"entity_id": entity_id})
    
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

@app.route('/document_registry/list_details', methods=['POST', 'GET'])
def get_document_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    print(data)
    print("db name: ", json_data['db_name'])
    #try:
    myresult = get_data(
        json_data['db_name'],
        json_data[data['type']],
        data['qry']['select_fields'],
        data['qry']['where_data'],
        exact_match=True
    )
    print("api called:",myresult)
    
    return jsonify([myresult] if data['qry']['where_data'] else [myresult])
    
    #except Exception as e:
    #    return jsonify({"error": str(e)}), 500
    
######################################################  Document UI Template  APIs  ####################################################################

@app.route('/documentUI_registry/new', methods=['POST'])
def insert_documentUI_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json')) 
    data = stream_json()  # Receiving data in chunks
    
    success, message = insert_ignore(json_data['db_name'], json_data[data['type']], data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

@app.route('/documentUI_registry/modifications', methods=['PUT'])
def update_documentUI_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    update_data = data.get("qry")
    where_data = {"entity_id": data.get('entity_id')}

    if not update_data or not where_data.get("entity_id"):
        return jsonify({"error": "Missing entity_id or update_data"}), 400

    success = update_entry(json_data['db_name'], json_data[data['type']], update_data, where_data)
    
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

@app.route('/documentUI_registry', methods=['DELETE'])
def delete_documentUI_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    entity_id = data.get('entity_id')

    if not entity_id:
        return jsonify({"error": "Missing entity_id"}), 400

    success = delete_entry(json_data['db_name'], json_data[data['type']], {"entity_id": entity_id})
    
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

@app.route('/documentUI_registry/list_details', methods=['POST', 'GET'])
def get_documentUI_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    print( 
        ">>>>>>>",
        json_data['db_name'],
        json_data[data['type']],
        data['qry']['select_fields'],
        data['qry']['where_data'],
        data['affiliations']
    )
    try:
        myresult = get_data(
            json_data['db_name'],
            json_data[data['type']],
            data['qry']['select_fields'],
            data['qry']['where_data'],
            data['affiliations']
        )
        
        return jsonify([myresult] if data['qry']['where_data'] else [myresult])
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

######################################################  Document UI Template  APIs  ####################################################################

@app.route('/trigger_functions/new', methods=['POST'])
def insert_trigger_functions():
    json_data = json.load(open('config/new/get_DB_data_new.json')) 
    data = stream_json()  # Receiving data in chunks
    
    success, message = insert_ignore(json_data['db_name'], json_data[data['type']], data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

@app.route('/trigger_functions/modifications', methods=['PUT'])
def update_trigger_functions():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    update_data = data.get("qry")
    where_data = {"entity_id": data.get('entity_id')}

    if not update_data or not where_data.get("entity_id"):
        return jsonify({"error": "Missing entity_id or update_data"}), 400

    success = update_entry(json_data['db_name'], json_data[data['type']], update_data, where_data)
    
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

@app.route('/trigger_functions', methods=['DELETE'])
def delete_trigger_functions():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    entity_id = data.get('entity_id')

    if not entity_id:
        return jsonify({"error": "Missing entity_id"}), 400

    success = delete_entry(json_data['db_name'], json_data[data['type']], {"entity_id": entity_id})
    
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

@app.route('/trigger_functions/list_details', methods=['POST', 'GET'])
def get_trigger_functions():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    try:
        myresult = get_data(
            json_data['db_name'],
            json_data[data['type']],
            data['qry']['select_fields'],
            data['qry']['where_data']
        )
        
        return jsonify([myresult] if data['qry']['where_data'] else [myresult])
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
 

########################################################### Final Template Registry APIs ####################################################################

@app.route('/finalTemplate_registry/new', methods=['POST'])
def insert_finalTemplate_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json')) 
    data = stream_json()  # Receiving data in chunks
    
    success, message = insert_ignore(json_data['db_name'], json_data[data['type']], data.get("qry"))
    
    if success:
        return jsonify({'message': message}), 201
    else:
        return jsonify({'error': message}), 400

@app.route('/finalTemplate_registry/modifications', methods=['PUT'])
def update_finalTemplate_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    update_data = data.get("qry")
    where_data = {"entity_id": data.get('entity_id')}

    if not update_data or not where_data.get("entity_id"):
        return jsonify({"error": "Missing entity_id or update_data"}), 400

    success = update_entry(json_data['db_name'], json_data[data['type']], update_data, where_data)
    
    if success:
        return jsonify({"message": "Entry updated successfully"}), 200
    else:
        return jsonify({"error": "Failed to update entry"}), 500

@app.route('/finalTemplate_registry', methods=['DELETE'])
def delete_finalTemplate_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    entity_id = data.get('entity_id')

    if not entity_id:
        return jsonify({"error": "Missing entity_id"}), 400

    success = delete_entry(json_data['db_name'], json_data[data['type']], {"entity_id": entity_id})
    
    if success:
        return jsonify({"message": "Entry deleted successfully"}), 200
    else:
        return jsonify({"error": "Failed to delete entry"}), 500

@app.route('/finalTemplate_registry/list_details', methods=['POST', 'GET'])
def get_finalTemplate_registry():
    json_data = json.load(open('config/new/get_DB_data_new.json'))
    data = stream_json()  # Receiving data in chunks
    
    try:
        myresult = get_data(
            json_data['db_name'],
            json_data[data['type']],
            data['qry']['select_fields'],
            data['qry']['where_data']
        )
        
        return jsonify([myresult] if data['qry']['where_data'] else [myresult])
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
        
################################################## EDITOR CONFIG APIs #######################################################################
import mysql.connector
from mysql.connector import Error
from dataclasses import dataclass
from typing import List, Dict, Optional
import re
import requests

def execute_query(query, params=None):
    try:
        with db.cursor() as cursor:
            cursor.execute(query, params)
            return cursor.fetchall()
    except Exception as e:
        print(f"Query error: {e}")
        return []

def execute_non_query(query, params=None):
    try:
        with db.cursor() as cursor:
            cursor.execute(query, params)
        db.commit()
        return True
    except Exception as e:
        print(f"Non-query error: {e}")
        return False

    """Create table based on document template"""
    try:
        data = request.get_json()
        doc_type = data.get('doc_type')
        doc_template = data.get('doc_template')
        
        if not doc_type or not doc_template:
            return jsonify({'error': 'doc_type and doc_template are required'}), 400
        
        success = document_service.create_table_from_template(doc_type, doc_template)
        
        return jsonify({
            'success': success,
            'message': f'Table creation {"successful" if success else "failed"}'
        })
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

def execute_insert(query, params=None):
    try:
        with db.cursor() as cursor:
            cursor.execute(query, params)
        db.commit()
        return True
    except Exception as e:
        print(f"❌ Insert Error: {e}")
        return False

def get_user_documents(user_affiliation_id, program, service):
    query = """
    SELECT DISTINCT 
        dt.doc_type,
        dt.description,
        dt.doc_ui_template_id,
        a.program,
        a.service,
        a.role,
        a.department,
        a.entity
    FROM doc_ui_template dt
    INNER JOIN affiliation a ON dt.affiliation_id = a.affiliation_id
    WHERE dt.affiliation_id = %s 
    AND (a.program = %s OR a.program = '*')
    AND (a.service = %s OR a.service = '*')
    ORDER BY dt.doc_type
    """
    return execute_query(query, (user_affiliation_id, program, service))

def get_ui_templates_for_document(doc_type, user_affiliation_id):
    query = """
    SELECT 
        dt.doc_ui_template_id,
        dt.doc_type,
        dt.description,
        dt.ui_template,
        dt.doc_template,
        a.program,
        a.service
    FROM doc_ui_template dt
    INNER JOIN affiliation a ON dt.affiliation_id = a.affiliation_id
    WHERE dt.doc_type = %s 
    AND dt.affiliation_id = %s
    ORDER BY dt.doc_ui_template_id
    """
    results = execute_query(query, (doc_type, user_affiliation_id))
    
    for result in results:
        result['ui_template'] = json.loads(result['ui_template']) if result['ui_template'] else {}
        result['doc_template'] = json.loads(result['doc_template']) if result['doc_template'] else {}
    
    return results

def create_table_from_template(doc_type, doc_template):
    try:
        table_name = re.sub(r'[^a-zA-Z0-9_]', '_', doc_type.lower())
        
        check_query = """
        SELECT COUNT(*) AS count
        FROM information_schema.tables 
        WHERE table_schema = %s 
        AND table_name = %s
        """
        result = execute_query(check_query, ('event_scheduler2025', table_name))
        if result and result[0]['count'] > 0:
            print(f"Table {table_name} already exists")
            return True

        fields = doc_template.get('fields', [])
        if not fields:
            return False
        
        column_definitions = []
        for field in fields:
            col = f"`{field['name']}` {field['datatype']}"
            if field.get('not_null') == 'true': col += " NOT NULL"
            if field.get('unique') == 'true': col += " UNIQUE"
            if field.get('auto_increment') == 'true': col += " AUTO_INCREMENT"
            if 'default' in field: col += f" DEFAULT {field['default']}"
            column_definitions.append(col)

        primary_keys = [f"`{f['name']}`" for f in fields if f.get('primary_key') == 'true']
        if primary_keys:
            column_definitions.append(f"PRIMARY KEY ({', '.join(primary_keys)})")

        create_query = f"CREATE TABLE `{table_name}` ({', '.join(column_definitions)})"
        return execute_non_query(create_query)
    except Exception as e:
        print(f"Error creating table: {e}")
        return False

@app.route('/api/documents', methods=['GET'])
def get_documents():
    try:
        user_affiliation_id = request.args.get('user_id', type=int)
        program = request.args.get('program', '')
        service = request.args.get('service', '')
        if not user_affiliation_id:
            return jsonify({'error': 'affiliation_id is required'}), 400
        
        documents = get_user_documents(user_affiliation_id, program, service)
        return jsonify({'success': True, 'documents': documents})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/ui-templates/<doc_type>', methods=['GET'])
def get_ui_templates(doc_type):
    try:
        user_affiliation_id = request.args.get('user_id', type=int)
        if not doc_type or not user_affiliation_id:
            return jsonify({'error': 'doc_type and user_id are required'}), 400
        doc_type = doc_type.replace('%20', ' ')
        templates = get_ui_templates_for_document(doc_type, user_affiliation_id)
        return jsonify({'success': True, 'templates': templates})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/create-table', methods=['POST'])
def create_table():
    try:
        data = request.get_json()
        doc_type = data.get('doc_type')
        doc_template = data.get('doc_template')
        if not doc_type or not doc_template:
            return jsonify({'error': 'doc_type and doc_template are required'}), 400
        success = create_table_from_template(doc_type, doc_template)
        return jsonify({'success': success, 'message': f'Table creation {"successful" if success else "failed"}'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/submit-config', methods=['POST'])
def submit_config():
    print("Successfully reached here!")
    try:
        data = request.get_json()
        config_data = data.get("config")
        user_tab_data=data.get("tab_config")
        user_id=data.get("user_id")
        print("User Tab Data",user_tab_data)
        status = data.get("status")
        
        if not config_data:
            return jsonify({"message": "Missing config data"}), 400
        
        if not user_id:
            return jsonify({"message": "Missing user_id"}), 400
        
        config_json = json.dumps(config_data)
        
        # Store in database
        try:
            
            insert_query = """
                INSERT INTO doc_final_templates (template, affiliation_id,status) 
                VALUES (%s, %s,%s)
            """
            success = execute_insert(insert_query, (config_json, user_id,status))

            if not success:
                return jsonify({"message": "Database storage failed"}), 500

            print(f"✅ Config stored in database for user_id: {user_id} with status: {status}")
            
        except Exception as db_error:
            print(f"❌ Database error: {str(db_error)}")
            return jsonify({"message": "Database storage failed", "error": str(db_error)}), 500
        #print(config_data)
        configuration={"main_config":config_data,"user_tab_config":user_tab_data}
        # 🔄 Send config to Backend B (Port 5000)
        # response = requests.post('http://127.0.0.1:5000/preview', json=configuration)
        # print("📤 Forwarded to Backend B:")

        # if response.status_code != 200:
        #     return jsonify({"message": "Failed to update config in Backend B"}), 500


        # Create JS config file with the MainConfig variable declaration
        js_code = "var MainConfig = " + json.dumps(config_data, indent=4) + ";"
        with open("MainConfig.js", "w", encoding="utf-8") as js_file:
            js_file.write(js_code)
        print("✅ JS config saved to MainConfig.js")
        
        # Generate a single routes file with all subkeys
        route_file = "all_routes.py"
        
        # Start with the imports
        python_code = '''from flask import Blueprint, request, jsonify

all_routes = Blueprint("all_routes", __name__)

'''
        
        # Extract all nested subkeys from the config
        all_subkeys = []
        for superkey, superkey_data in config_data.items():
            if isinstance(superkey_data, dict):
                # Extract actual subkeys (like "Luffy", "Zoro") from within each superkey
                for subkey_name in superkey_data.keys():
                    # Skip special keys that aren't actual entities
                    if subkey_name not in ["controls", "Roles"] and isinstance(superkey_data[subkey_name], dict):
                        all_subkeys.append((superkey, subkey_name))
        
        # Add routes for each subkey found
        for superkey, current_subkey in all_subkeys:
            # Sanitize subkey for use in route paths
            safe_name = current_subkey.lower().replace(" ", "_")
            route_base = f"/{safe_name}"
            
            # Add route handlers for this subkey
            python_code += f'''
# Routes for {current_subkey} (from {superkey})
@all_routes.route("{route_base}/new", methods=["POST"])
def {safe_name}_new():
    print("📥 Arrived at {route_base}/new")
    return jsonify({{"message": "Insert endpoint hit for {current_subkey}"}}), 201

@all_routes.route("{route_base}/list_details", methods=["POST", "GET"])
def {safe_name}_list():
    print("📄 Arrived at {route_base}/list_details")
    return jsonify({{"message": "List endpoint hit for {current_subkey}"}}), 200

@all_routes.route("{route_base}/modifications", methods=["PUT"])
def {safe_name}_update():
    print("✏️ Arrived at {route_base}/modifications")
    return jsonify({{"message": "Update endpoint hit for {current_subkey}"}}), 200

@all_routes.route("{route_base}", methods=["DELETE"])
def {safe_name}_delete():
    print("🗑️ Arrived at {route_base} (DELETE)")
    return jsonify({{"message": "Delete endpoint hit for {current_subkey}"}}), 200
'''
        
        # Save single file with all routes
        with open(route_file, "w", encoding="utf-8") as py_file:
            py_file.write(python_code)
        print(f"✅ All routes saved to {route_file} for {len(all_subkeys)} subkeys")
        
        # Extract just the subkey names for the response
        subkey_names = [s[1] for s in all_subkeys]
        
        return jsonify({
            "success": True,
            "message": f"JS config and Python route file created with routes for {len(all_subkeys)} subkeys",
            "file_created": route_file,
            "subkeys_processed": subkey_names
        }), 200
    
    except Exception as e:
        print("❌ Error:", str(e))
        return jsonify({"message": f"Error submitting config: {str(e)}"}), 500

#############################################################################################################################################

from flask import Flask, request, jsonify
import os
import paramiko
import posixpath
import base64
import shutil

# SFTP Server Credentials
SFTP_HOST = "139.14.11.65"  # Change this to your external IP if needed
SFTP_PORT = 2222  # Ensure this matches the exposed Docker port
SFTP_USERNAME = "foo"
SFTP_PASSWORD = "pass"
SFTP_REMOTE_PATH = "/upload"  # Ensure this is the correct SFTP directory

@app.route('/fileupload', methods=['POST'])
def upload_chunk():
    """Handles file chunk uploads"""
    file = request.files.get('file')
    chunk_index = request.form.get('chunkIndex', type=int)
    total_chunks = request.form.get('totalChunks', type=int)
    file_name = request.form.get('fileName')

    if not file or chunk_index is None or total_chunks is None or not file_name:
        return jsonify({"message": "Invalid upload parameters"}), 400

    # Store chunks in temp directory
    chunk_dir = os.path.join("static/tmp", file_name)
    os.makedirs(chunk_dir, exist_ok=True)
    chunk_path = os.path.join(chunk_dir, f"chunk_{chunk_index}")

    file.save(chunk_path)

    return jsonify({"message": f"Chunk {chunk_index + 1}/{total_chunks} uploaded"}), 200


@app.route('/fileupload/merge', methods=['POST'])
def merge_chunks():
    """Merges uploaded chunks into a single file"""
    file_name = request.json.get("fileName")
    total_chunks = request.json.get("totalChunks", type=int)

    chunk_dir = os.path.join("static/tmp", file_name)
    final_path = os.path.join("static/tmp", file_name)

    if not os.path.exists(chunk_dir):
        return jsonify({"message": "No chunks found"}), 400

    # Merge chunks
    with open(final_path, "wb") as final_file:
        for i in range(total_chunks):
            chunk_path = os.path.join(chunk_dir, f"chunk_{i}")
            with open(chunk_path, "rb") as chunk_file:
                final_file.write(chunk_file.read())

    # Cleanup chunks
    shutil.rmtree(chunk_dir)

    return jsonify({"message": "File merged successfully!", "fileName": file_name}), 200

# Allowed preview file types
TEXT_EXTENSIONS = {".txt", ".log", ".json", ".csv"}
IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg", ".gif"}

@app.route('/list_files', methods=['GET'])
def list_files():
    """Retrieve list of files from the SFTP directory."""
    try:
        print("Connecting to SFTP server for file listing...")
        transport = paramiko.Transport((SFTP_HOST, SFTP_PORT))
        transport.connect(username=SFTP_USERNAME, password=SFTP_PASSWORD)
        sftp = paramiko.SFTPClient.from_transport(transport)

        # List files in the remote directory
        file_list = sftp.listdir(SFTP_REMOTE_PATH)
        sftp.close()
        transport.close()

        return jsonify({"files": file_list}), 200

    except Exception as e:
        return jsonify({"message": f"Error retrieving file list: {str(e)}"}), 500

'''
@app.route('/view_file', methods=['GET'])
def view_file():
    """View file content instead of downloading it."""
    filename = request.args.get('filename')
    print(">>>>>>>",filename)
    if not filename:
        return jsonify({"message": "Filename is required"}), 400
    
    try:
        print(f"Connecting to SFTP server to view file: {filename}")
        transport = paramiko.Transport((SFTP_HOST, SFTP_PORT))
        transport.connect(username=SFTP_USERNAME, password=SFTP_PASSWORD)
        sftp = paramiko.SFTPClient.from_transport(transport)

        remote_file_path = posixpath.join(SFTP_REMOTE_PATH, filename)

        _, file_extension = os.path.splitext(filename)

        # Read file content
        with sftp.open(remote_file_path, "rb") as file:
            file_data = file.read()

        sftp.close()
        transport.close()

        # Process file content based on type
        if file_extension in TEXT_EXTENSIONS:
            content = file_data.decode("utf-8", errors="ignore")  # Decode as text
            return jsonify({"type": "text", "content": content}), 200

        elif file_extension in IMAGE_EXTENSIONS:
            encoded_image = base64.b64encode(file_data).decode("utf-8")  # Convert to base64
            return jsonify({"type": "image", "content": f"data:image/{file_extension[1:]};base64,{encoded_image}"}), 200

        else:
            return jsonify({"message": "Unsupported file type"}), 400

    except Exception as e:
        return jsonify({"message": f"File preview failed: {str(e)}"}), 500
'''

@app.route('/view_file', methods=['GET'])
def view_file():
    filename = request.args.get('filename')
    file_data, status = view_file_internal(filename)
    return jsonify(file_data), status


def view_file_internal(filename):
    if not filename:
        return {"error": "Filename is required"}, 400

    try:
        print(f"Connecting to SFTP server to view file: {filename}")
        transport = paramiko.Transport((SFTP_HOST, SFTP_PORT))
        transport.connect(username=SFTP_USERNAME, password=SFTP_PASSWORD)
        sftp = paramiko.SFTPClient.from_transport(transport)

        remote_file_path = posixpath.join(SFTP_REMOTE_PATH, filename)
        _, file_extension = os.path.splitext(filename)

        with sftp.open(remote_file_path, "rb") as file:
            file_data = file.read()

        sftp.close()
        transport.close()

        if file_extension in TEXT_EXTENSIONS:
            content = file_data.decode("utf-8", errors="ignore")
            return {"type": "text", "content": content}, 200

        elif file_extension in IMAGE_EXTENSIONS:
            encoded_image = base64.b64encode(file_data).decode("utf-8")
            return {"type": "image", "content": f"data:image/{file_extension[1:]};base64,{encoded_image}"}, 200

        else:
            return {"error": "Unsupported file type"}, 400

    except Exception as e:
        return {"error": f"File preview failed: {str(e)}"}, 500

@app.route('/readQR', methods=['GET'])
def read_qr():
    print(request.args)
    token = request.args.get('token')
    password = request.args.get('password')
    data=encryption.decrypt_from_qr_string(token,password)
    print(data)
    token_data = data.split("=")
    f=open('config/new/get_DB_data_new.json');  json_data = json.load(f)
    myresult=get_data(json_data['db_name'],"qrlinks", "*",{"token":token_data[1]}) 
    print(myresult)
    # Dummy logic: resolve filename from token (you can use DB instead)
    filename = myresult[0]['fileName']     # "sahiq.jpg"  # Example; replace with real logic

    # Internally fetch file data
    file_data, status = view_file_internal(filename)

    # Return combined response
    return jsonify({
        "message": "QR read successful",
        "token": token,
        "file_data": file_data
    }), status


def delete_event(event_id):
    event = db.session.get(Event, event_id)
    if not event:
        return jsonify({"error": f"Event {event_id} not found"}), 404

    # Notify all subscribers before deleting
    subscribers = Subscriber.query.filter_by(event_id=event_id).all()
    messages = []

    for sub in subscribers:
        msg = MessageDetails(
            user_id=sub.user_id,
            event_id=event_id,
            message=f"The event '{event.name}' you subscribed to has been deleted.",
        )
        messages.append(msg)

    db.session.add_all(messages)
    db.session.delete(event)
    db.session.commit()

    return jsonify({
        "message": f"Event {event_id} and its subscribers deleted",
        "notifications_sent": len(messages)
    }), 200

@app.route('/check_resource_availability/<int:event_id>', methods=['GET'])
def check_resource_availability(event_id):
    new_time_str = request.args.get('new_time')
    if not new_time_str:
        return jsonify({"error": "New time not provided"}), 400

    new_time = datetime.strptime(new_time_str, '%Y-%m-%d %H:%M')
    event = db.session.get(Event, event_id)
    if not event:
        return jsonify({"error": "Event not found"}), 404

    resource_id = event.host_entity_id
    resource = db.session.query(ResourceProfile).filter_by(resource_id=resource_id).first()

    if not resource or not resource.schedule:
        return jsonify({"available": True})  # Assume available if no schedule

    for slot in resource.schedule:
        start = datetime.fromisoformat(slot['start'])
        end = datetime.fromisoformat(slot['end'])
        if start <= new_time <= end:
            return jsonify({"available": False})  # Time overlaps

    return jsonify({"available": True})

############################################# DAQ Config API #######################################

@app.route('/api/save-chart', methods=['POST'])
def save_chart():
    """Save chart template to database"""
    try:
        # Get JSON data from request
        data = request.get_json()
        
        # DEBUG: Log what we received
        logging.info(f"=== SAVE CHART DEBUG ===")
        logging.info(f"Received data: {data}")
        
        if not data:
            logging.error("No data provided in request")
            return jsonify({
                'success': False,
                'error': 'No data provided'
            }), 400
        
        # Extract data from request
        chart_name = data.get('chartName', '').strip()
        chart_template = data.get('chartTemplate', '')
        description = data.get('description', '').strip()
        status = data.get('status', 'active').strip()
        
        # DEBUG: Log extracted values
        logging.info(f"Chart Name: '{chart_name}' (length: {len(chart_name)})")
        logging.info(f"Chart Template: '{chart_template}' (length: {len(chart_template) if chart_template else 0})")
        logging.info(f"Description: '{description}' (length: {len(description)})")
        logging.info(f"Status: '{status}'")
        logging.info(f"=== END DEBUG ===")
        
        # Basic validation
        if not chart_name:
            logging.error("Chart name is empty after strip")
            return jsonify({
                'success': False,
                'error': 'Chart name is required'
            }), 400
        
        if not chart_template:
            logging.error("Chart template is empty")
            return jsonify({
                'success': False,
                'error': 'Chart template is required'
            }), 400
        
        # For drafts, description can be optional or have a default
        if not description:
            if status == 'draft':
                description = 'Draft chart template'  # Default description for drafts
                logging.info(f"Using default description for draft: '{description}'")
            else:
                return jsonify({
                    'success': False,
                    'error': 'Description is required'
                }), 400
        
        # Validate JSON format
        try:
            parsed_template = json.loads(chart_template)
            logging.info(f"Chart template JSON is valid: {parsed_template}")
        except json.JSONDecodeError as e:
            logging.error(f"Invalid JSON format: {e}")
            return jsonify({
                'success': False,
                'error': f'Invalid chart template JSON format: {str(e)}'
            }), 400
        
        # Rest of your existing code...
        # Get current timestamp
        created_at = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        cursor = db.cursor()
        
        # Check if chart with exact same name already exists (for update)
        check_query = "SELECT id FROM chart_templates WHERE chart_name = %s"
        cursor.execute(check_query, (chart_name,))
        existing_chart = cursor.fetchone()
        
        if existing_chart:
            # Update existing chart
            logging.info(f"Updating existing chart with ID: {existing_chart['id']}")
            update_query = """
            UPDATE chart_templates 
            SET settings = %s, description = %s, created_at = %s, status = %s
            WHERE chart_name = %s
            """
            cursor.execute(update_query, (
                chart_template,
                description,
                created_at,
                status,
                chart_name
            ))
            chart_id = existing_chart['id']
            action = 'updated'
        else:
            # Insert new chart
            logging.info(f"Creating new chart")
            insert_query = """
            INSERT INTO chart_templates 
            (chart_name, doc_type_id, settings, description, status, created_at, version)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
            """
            cursor.execute(insert_query, (
                chart_name,
                None,  # doc_type_id is NULL
                chart_template,
                description,
                status,
                created_at,
                '1.0'
            ))
            chart_id = cursor.lastrowid
            action = 'created'
        
        # Commit transaction
        db.commit()
        
        logging.info(f"Chart template {action} as {status}: {chart_name} (ID: {chart_id})")
        
        return jsonify({
            'success': True,
            'message': f'Chart template {action} successfully as {status}',
            'chart_id': chart_id,
            'chart_name': chart_name,
            'action': action,
            'status': status
        }), 200
        
    except pymysql.Error as e:
        logging.error(f"Database error: {e}")
        db.rollback()
        return jsonify({
            'success': False,
            'error': f'Database error: {str(e)}'
        }), 500
    
    except Exception as e:
        logging.error(f"Unexpected error: {e}")
        return jsonify({
            'success': False,
            'error': f'Server error: {str(e)}'
        }), 500

@app.route('/api/chart-templates', methods=['GET'])
def get_chart_templates():
    """
    Fetch all chart templates from database
    """
    try:
        mycursor = db.cursor()
        
        query = "SELECT chart_name FROM chart_templates"
        mycursor.execute(query)
        
        results = mycursor.fetchall()
        
        # Extract chart names from results (since you're using DictCursor)
        chart_names = [row['chart_name'] for row in results]
        
        return jsonify({
            'success': True,
            'chart_templates': chart_names
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/chart-template/<string:template_name>', methods=['GET'])
def get_chart_template_by_name(template_name):
    """
    Fetch a specific chart template by name from database
    """
    try:
        mycursor = db.cursor()
        
        # Query to get the specific chart template
        query = "SELECT chart_name, settings FROM chart_templates WHERE chart_name = %s"
        mycursor.execute(query, (template_name,))
        
        result = mycursor.fetchone()
        
        if result:
            return jsonify({
                'success': True,
                'chart_template': result['settings'],  # Return the chart configuration
                'template_name': result['chart_name']
            })
        else:
            return jsonify({
                'success': False,
                'error': f'Chart template "{template_name}" not found'
            }), 404
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500

@app.route('/api/db-config', methods=['GET'])
def get_db_config():
    """
    Alternative endpoint with a more RESTful path
    """
    try:
        # Path to your JSON file
        json_file_path = 'config/new/get_DB_data.json'
        
        if not os.path.exists(json_file_path):
            return jsonify({
                "error": "Database configuration file not found",
                "status": "file_not_found"
            }), 404
        
        with open(json_file_path, 'r', encoding='utf-8') as file:
            config_data = json.load(file)
        
        return jsonify({
            "status": "success",
            "data": config_data
        })
        
    except json.JSONDecodeError as e:
        return jsonify({
            "error": "Invalid JSON format in configuration file",
            "status": "json_error",
            "details": str(e)
        }), 500
    except Exception as e:
        return jsonify({
            "error": "Failed to load configuration",
            "status": "server_error",
            "details": str(e)
        }), 500


if __name__ == '__main__':
   app.run(host='0.0.0.0', port=5000, debug=True)
# check for combination of uniquness for all the columns (status, log etc not required) in insert unique.
# 

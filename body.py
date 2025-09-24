
update_body={
    "qry": {
      "update": {
        "affiliation_id": "16",
        "doc_template": {
          "fields": [
            { "name": "log", "unique": "false", "datatype": "string", "not_null": "false" },
            { "name": "status", "unique": "false", "datatype": "string", "not_null": "false" },
            { "name": "affiliation", "unique": "false", "datatype": "string", "not_null": "false" },
            { "name": "remarks", "unique": "false", "datatype": "string", "not_null": "false" },
            { "name": "description", "unique": "false", "datatype": "mediumtext", "not_null": "false" },
            { "name": "car_registation_no", "unique": "false", "datatype": "string", "not_null": "false" },
            { "name": "car_company", "unique": "false", "datatype": "string", "not_null": "false" },
            { "name": "car_model_name", "unique": "false", "datatype": "string", "not_null": "false" },
            { "name": "car_chassis_no", "unique": "false", "datatype": "string", "not_null": "false" },
            { "name": "car_owner", "unique": "false", "datatype": "string", "not_null": "false" }
          ],
          "unique_constraints": [
            ["car_registation_no", "car_chassis_no"]
          ]
        }
      },
      "where_data": {
        "id": 18
      }
    },
    "request_token": "",
    "requestor_id": "",
    "tab": "Document Config",
    "type": "Document Data Templates"
  }


list_body={
    "requestor_id":"", 
    "request_token": "", 
    "type": "Document UI Templates",
    "qry": {
        "select_fields": ["id","task_ui_template"], 
        "where_data": {"ui_template_name":"Role Registry","task_type_id":2}
        }
}

insert_body={
    "qry": {
      "doc_description": "fields to register entity",
      "doc_template": {
        "fields": [
          { "name": "log", "unique": "false", "datatype": "string", "not_null": "false" },
          { "name": "status", "unique": "false", "datatype": "string", "not_null": "false" },
          { "name": "affiliation", "unique": "false", "datatype": "string", "not_null": "false" },
          { "name": "remarks", "unique": "false", "datatype": "string", "not_null": "false" },
          { "name": "description", "unique": "false", "datatype": "mediumtext", "not_null": "false" },
          { "name": "entity_name", "unique": "false", "datatype": "string", "not_null": "false" },
          { "name": "address", "unique": "false", "datatype": "string", "not_null": "false" },
          { "name": "email", "unique": "false", "datatype": "string", "not_null": "false" }
        ],
        "unique_constraints": [
          ["entity_name", "email"]
        ]
      },
      "doc_type": "Entity Registration",
      "status": "draft"
    },
    "request_token": "",
    "requestor_id": "",
    "tab": "Document Config",
    "type": "Document Data Templates"
  }
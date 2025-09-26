var global_settings={"language":"english"}

// Datatypes to use in the code as : String, Number, Date (DD/MM/YYYY), Time (H:M:S), Location (lat,long)
var MainConfig={
   "default_fields":{},
    "Entity Config":{
        "controls":[
         {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"Download document","tag":"download","roles":["Admin"],"name":"<i class='fa fa-download'></i> ","function":"download_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tooltip":"this is a test description","tag": "chartTemplates", "roles": ["Admin"], "name": "Entity Config", "options": [],"function":"getChartTemplate","textContent": "Chart Templates"},
         {"type": "select", "tooltip":"this is a test description","tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": ["Role Registry","Affiliation Registry","Resource Category","Resource Registry","Event Category","Message Template","Application Registry","Entity log" ],"trigger":"none","helper":"none","textContent": "Items"},
         {"type": "select", "tooltip":"this is a test description","tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [1,5,10,25,50,100], "textContent": "Rows/Page"},
        ],
        "Roles":["Admin"],
        "Role Registry":{
            "doc_title":"",
            "getDataApi":"config/list_details",
            "key":"id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[ 
                            {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"entity_id","name":"Entity Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"role_name","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field": "status", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "log", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "affiliation_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "remark", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "description", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}}
                           ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/new",
                "onSuccess":"Role_created()"
                
                },
                "list":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                        "fields":[ 
                            {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"role_name","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field": "status", "edit": true, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "log", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "affiliation_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "remark", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "description", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}}
                           ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/list_details",
                "onSuccess":"Role_listed()"
                },
                "update":{
                    "roles":["Admin"],  
                    "data":[
                        {  "helper":"none",
                            "fields":[ 
                            {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"role_name","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field": "status", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "log", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "affiliation_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "remark", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "description", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}}
                           ],
                            "edit_option":true,
                            "delete_option":true
                        }
                    ],
                    "api":"config/modifications"
                    

                },
                "approver":{
                "roles":["Approver"],
                "data":[
                    {  "helper":"none",
                        "fields":[ 
                            {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"role_name","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field": "status", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "log", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "affiliation_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "remark", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field": "description", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}}
                           ],
                        "edit_option":true,
                        "delete_option":false
                    }
                ],
                "onSuccess":"Role_approved()"
                
                },
                "cancel":{"api":"config","onSuccess":"Role_canceled()"},
            }
        },
        "Affiliation Registry":{
            "doc_title":"","getDataApi":"affiliation/list_details",
            "key":"id",
            "attchment_files_path":"",
            "fields": [
               {"name": "description","datatype": "string"},
               {"name": "entity_id","datatype": "bigint"},
               {"name": "entity_name","datatype": "string"},
               {"name": "affiliation_id", "datatype":"bigint"},
               {"name": "program", "datatype" : "string"},
               {"name": "entity", "datatype" : "string"},
               {"name": "department","datatype":"string" },
               {"name": "service" , "datatype":"string"},
            ],
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields": [
                           {"seqno": "1", "field": "description", "name": "Description", "description": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Provide a brief explanation or details about the record.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "2", "field": "affiliation_id", "name": "Affiliation Id", "description": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Unique identifier for the affiliation record.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Affiliation Id", "german": "Zugehörigkeits-ID", "arabic": "معرف الانتماء", "french": "ID d'affiliation"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "3", "field": "resource_name", "name": "Resource Name", "description": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Name of the resource associated with this affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Resource Name", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "4", "field": "program", "name": "Program", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Select or enter the program this affiliation belongs to.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Program", "german": "Programm", "arabic": "البرنامج", "french": "Programme"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "5", "field": "entity", "name": "Entity", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Name of the organization or entity linked to the affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Entity", "german": "Entität", "arabic": "الكيان", "french": "Entité"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "6", "field": "department", "name": "Department", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Specify the department within the entity.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Department", "german": "Abteilung", "arabic": "القسم", "french": "Département"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "7", "field": "service", "name": "Service", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "The service category related to this affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Service", "german": "Dienst", "arabic": "الخدمة", "french": "Service"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "8", "field": "role", "name": "Role", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "The position or role assigned within the affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Role", "german": "Rolle", "arabic": "الدور", "french": "Rôle"}, "values": "", "tooltip_source": "", "tooltip_content": ""}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"affiliation/new",
                "onSuccess":"Role_created()"
                
                },
                "list":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                       "fields": [
                           {"seqno": "1", "field": "description", "name": "Description", "description": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Provide a brief explanation or details about the record.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "2", "field": "affiliation_id", "name": "Affiliation Id", "description": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Unique identifier for the affiliation record.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Affiliation Id", "german": "Zugehörigkeits-ID", "arabic": "معرف الانتماء", "french": "ID d'affiliation"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "3", "field": "resource_name", "name": "Resource Name", "description": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Name of the resource associated with this affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Resource Name", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "4", "field": "program", "name": "Program", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Select or enter the program this affiliation belongs to.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Program", "german": "Programm", "arabic": "البرنامج", "french": "Programme"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "5", "field": "entity", "name": "Entity", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Name of the organization or entity linked to the affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Entity", "german": "Entität", "arabic": "الكيان", "french": "Entité"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "6", "field": "department", "name": "Department", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Specify the department within the entity.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Department", "german": "Abteilung", "arabic": "القسم", "french": "Département"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "7", "field": "service", "name": "Service", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "The service category related to this affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Service", "german": "Dienst", "arabic": "الخدمة", "french": "Service"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "8", "field": "role", "name": "Role", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "The position or role assigned within the affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Role", "german": "Rolle", "arabic": "الدور", "french": "Rôle"}, "values": "", "tooltip_source": "", "tooltip_content": ""}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"affiliation/list_details",
                "onSuccess":"Role_listed()"
                },
                "update":{
                    "roles":["Admin"],  
                    "data":[
                        {  "helper":"none",
                           "fields": [
                              {"seqno": "1", "field": "description", "name": "Description", "description": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Provide a brief explanation or details about the record.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                              {"seqno": "2", "field": "affiliation_id", "name": "Affiliation Id", "description": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Unique identifier for the affiliation record.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Affiliation Id", "german": "Zugehörigkeits-ID", "arabic": "معرف الانتماء", "french": "ID d'affiliation"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                              {"seqno": "3", "field": "resource_name", "name": "Resource Name", "description": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Name of the resource associated with this affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Resource Name", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                              {"seqno": "4", "field": "program", "name": "Program", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Select or enter the program this affiliation belongs to.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Program", "german": "Programm", "arabic": "البرنامج", "french": "Programme"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                              {"seqno": "5", "field": "entity", "name": "Entity", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Name of the organization or entity linked to the affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Entity", "german": "Entität", "arabic": "الكيان", "french": "Entité"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                              {"seqno": "6", "field": "department", "name": "Department", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Specify the department within the entity.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Department", "german": "Abteilung", "arabic": "القسم", "french": "Département"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                              {"seqno": "7", "field": "service", "name": "Service", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "The service category related to this affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Service", "german": "Dienst", "arabic": "الخدمة", "french": "Service"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                              {"seqno": "8", "field": "role", "name": "Role", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "The position or role assigned within the affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Role", "german": "Rolle", "arabic": "الدور", "french": "Rôle"}, "values": "", "tooltip_source": "", "tooltip_content": ""}
                           ],
                            "edit_option":true,
                            "delete_option":true
                        }
                    ],
                    "api":"affiliation/modifications"
                    

                },
                "approver":{
                "roles":["Approver"],
                "data":[
                    {  "helper":"none",
                        "fields": [
                           {"seqno": "1", "field": "description", "name": "Description", "description": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Provide a brief explanation or details about the record.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "2", "field": "affiliation_id", "name": "Affiliation Id", "description": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Unique identifier for the affiliation record.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Affiliation Id", "german": "Zugehörigkeits-ID", "arabic": "معرف الانتماء", "french": "ID d'affiliation"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "3", "field": "resource_name", "name": "Resource Name", "description": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Name of the resource associated with this affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Resource Name", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "4", "field": "program", "name": "Program", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Select or enter the program this affiliation belongs to.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Program", "german": "Programm", "arabic": "البرنامج", "french": "Programme"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "5", "field": "entity", "name": "Entity", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Name of the organization or entity linked to the affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Entity", "german": "Entität", "arabic": "الكيان", "french": "Entité"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "6", "field": "department", "name": "Department", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Specify the department within the entity.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Department", "german": "Abteilung", "arabic": "القسم", "french": "Département"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "7", "field": "service", "name": "Service", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "The service category related to this affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Service", "german": "Dienst", "arabic": "الخدمة", "french": "Service"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                           {"seqno": "8", "field": "role", "name": "Role", "description": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "The position or role assigned within the affiliation.", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Role", "german": "Rolle", "arabic": "الدور", "french": "Rôle"}, "values": "", "tooltip_source": "", "tooltip_content": ""}
                        ],
                        "edit_option":true,
                        "delete_option":false
                    }
                ],
                "onSuccess":"Role_approved()"
                
                },
                "cancel":{"api":"affiliation","onSuccess":"Role_canceled()"}
            }
        },
        "Event Category":{
             "doc_title":"","getDataApi":"config/list_details",
            "key":"id",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field":"id","name":"Event Type Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Event Type Id","german":"Ereignistyp-ID","arabic":"معرف نوع الحدث","french":"ID du type d'événement"}},
                            {"seqno":"","field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"event_type_name","name":"Event Type Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Event Type Name","german":"Ereignistypname","arabic":"اسم نوع الحدث","french":"Nom du type d'événement"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/new"
                },
                "list":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                        "fields":[
                           {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field":"id","name":"Event Type Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Event Type Id","german":"Ereignistyp-ID","arabic":"معرف نوع الحدث","french":"ID du type d'événement"}},
                            {"seqno":"","field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"event_type_name","name":"Event Type Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_helper":"getEventType","filter_default_value":"","lang":{"english":"Event Type Name","german":"Ereignistypname","arabic":"اسم نوع الحدث","french":"Nom du type d'événement"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                  "api":"config/list_details",
                },
                "update":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field":"id","name":"Event Type Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Event Type Id","german":"Ereignistyp-ID","arabic":"معرف نوع الحدث","french":"ID du type d'événement"}},
                            {"seqno":"","field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"event_type_name","name":"Event Type Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Event Type Name","german":"Ereignistypname","arabic":"اسم نوع الحدث","french":"Nom du type d'événement"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                  "api":"config/modifications"
                },
                "approver":{
                    "roles":["Approver"],
                    "data":[
                        {  "helper":"none",
                            "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                            {"seqno":"","field":"entity_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                            {"seqno":"","field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                            {"seqno":"","field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                            {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["suspended","approved"]},
                            {"seqno":"","field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                            {"seqno":"","field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""}
        
                            ],
                            "edit_option":true,
                            "delete_option":false
                        }
                    ]
                    
                },
                "cancel":{"api":"config",}
        
            }
        },
        "Resource Category":{
             "doc_title":"","getDataApi":"config/list_details",
            "key":"id",        
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field":"id","name":"Resource Type Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Resource Type Id","german":"Ereignistyp-ID","arabic":"معرف نوع الحدث","french":"ID du type d'événement"}},
                            {"seqno":"","field":"entity_id","name":"Entity Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"resource_type_name","name":"Resource Type Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Resource Type Name","german":"Ereignistypname","arabic":"اسم نوع الحدث","french":"Nom du type d'événement"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/new",
                },
                "list":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field":"id","name":"Resource Type Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Resource Type Id","german":"Ereignistyp-ID","arabic":"معرف نوع الحدث","french":"ID du type d'événement"}},
                            {"seqno":"","field":"entity_id","name":"Entity Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"resource_type_name","name":"Resource Type Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Resource Type Name","german":"Ereignistypname","arabic":"اسم نوع الحدث","french":"Nom du type d'événement"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/list_details",
                },
                "update":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field":"id","name":"Resource Type Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Resource Type Id","german":"Ereignistyp-ID","arabic":"معرف نوع الحدث","french":"ID du type d'événement"}},
                            {"seqno":"","field":"entity_id","name":"Entity Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"resource_type_name","name":"Resource Type Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Resource Type Name","german":"Ereignistypname","arabic":"اسم نوع الحدث","french":"Nom du type d'événement"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/modifications",
                },
                "approver":{
                    "roles":["Approver"],
                    "data":[
                        {  "helper":"none",
                            "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                            {"seqno":"","field":"entity_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                            {"seqno":"","field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                            {"seqno":"","field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                            {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["suspended","approved"]},
                            {"seqno":"","field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                            {"seqno":"","field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""}
        
                            ],
                            "edit_option":true,
                            "delete_option":false
                        }
                    ]
                    
                },
                "cancel":{"api":"config",}
            }
        },
        "Resource Registry":{
            "db_name":"event_scheduler2025",
            "table_name":"resource_profile",
            "doc_title":"",
            "getDataApi":"resource/list_details",
            "key":"id",
            "attchment_files_path":"",
            "controls": [
               {"type": "button", "tooltip":"this is a test description","tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "calendar", "roles": ["Admin", "User"], "name": "<i class='fa fa-calendar'></i> ", "function": "fullCalendar()", "class": "btn btn-primary btn-xs my-xs-btn"}
            ],
            "job": {
               "create":{
                     "roles":["Admin"],
                     "data":[
                        {"helper":"getcurrentuserdetails",
                        "fields":[
                              {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"1","field":"entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"4"},
                              {"seqno":"3","field":"entityname","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {"helper":"getResourceCateory",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"5","field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {"helper":"get_affiliation",
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"7","field":"affiliation_id","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":"get_affiliation"}
                              ]
                           },
                        {  "helper":"none",
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                              {"seqno":"9","field":"person_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""},
                              {"seqno":"11","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""},
                              {"seqno":"13","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""},
                              {"seqno":"15","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""},
                              {"seqno":"2","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""},
                              {"seqno":"4","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""},
                              {"seqno":"6","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""},
                              {"seqno":"8","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""}, 
                              {"seqno":"10","field":"entry_status","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"12","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""},
                              {"seqno":"14","field":"archive","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""},
                              {"seqno":"16","field":"photo","edit":true,"show":true,"control":"file","type":"image","formats":"jpg,bmp,pdf,png","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"17","field":"photo1","edit":true,"show":true,"control":"attachment-control","type":"image","formats":"jpg,bmp,pdf,png","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"21","field":"Audio","edit":true,"show":true,"control":"attachment-control","type":"audio","formats":"jpg,bmp,pdf,png","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"18","field":"video","edit":true,"show":true,"control":"attachment-control","type":"video","formats":"jpg,bmp,pdf,png","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"20","field":"certificate","edit":true,"show":true,"control":"attachment-control","type":"document","formats":"jpg,bmp,pdf,png","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"19","field":"schedule","edit":true,"show":true,"control":"schedule-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                              
                              //{"seqno":"","field":"Passport Photo","edit":true,"show":true,"control":"AttachmentControl","type":"image","formats":"jpg,bmp,pdf,png","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              //{"seqno":"","field":"Voice Consent","edit":true,"show":true,"control":"AttachmentControl","type":"audio","formats":"mp3,wav","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, [Complete the types]
                              //{"seqno":"","field":"Video Consent","edit":true,"show":true,"control":"AttachmentControl","type":"video","formats":"mp4,mpeg,flv","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              //{"seqno":"","field":"Bank Statement","edit":true,"show":true,"control":"AttachmentControl","type":"file","formats":"jpg,bmp,pdf,xlxs,doc,docx","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              //{"seqno":"","field":"Degree Certificate","edit":true,"show":true,"control":"QRControl","type":"file","formats":"jpg,bmp,pdf,xlxs,doc,docx","mode":"link/encoding","encrypt":"true/false","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              // json structure all attchment 
                              /**
                               *  attachment={
                                 *  [  "file name":"passport photo",
                                    *  "type":"file", //image, audio, video, file, qr
                                    *  "folderpath":
                                    *  "formats":"jpg,bmp,pdf,xlxs,doc,docx",
                                    *  "qr":{  // the name of qr file will be qr_filename.png//
                                    *     "mode":"link/encoding",   
                                    *     "encrypt":"true/false",
                                    *     "key":"12532qwqe",
                                    *     "algorithm":"aes-256-cbc",
                                    *     "iv":"1234567890123456"
                                    *  }]
                                    "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true
                               *  }
                               */
                           ]
                        }
                        
                     ],
                     "api":"resource/new"
                  },
               "list":{
                     "roles":["Admin"],
                     "data":[
                        {  "helper":"none",
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"1","field": "person_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Person ID", "german": "Personalausweis", "arabic": "معرف الشخص", "french": "ID de personne"}},
                              {"seqno":"4","field": "resource_name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Resource Name", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}},
                              {"seqno":"5","field": "affiliation_id", "edit": true, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Affiliation ID", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}},
                              {"seqno":"7","field": "entity_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Entity ID", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}},
                              {"seqno":"9","field": "resource_category", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"dropdown","filter_helper":"getResourceCateory","filter_default_value":["Doctor","Teacher","Admin"],"lang": {"english": "Category", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}},
                              {"seqno":"11","field": "details", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Details", "german": "Einzelheiten", "arabic": "تفاصيل", "french": "Détails"}},
                              {"seqno":"13","field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                              {"seqno":"15","field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                              {"seqno":"2","field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                              {"seqno":"3","field": "alert_preference", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                              {"seqno":"6","field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Status-Abfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                              {"seqno":"8","field": "entry_status", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Entry Status", "german": "Eintragsstatus", "arabic": "حالة الإدخال", "french": "Statut d'entrée"}},
                              {"seqno":"10","field": "role", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"dropdown","filter_helper":"getRole","lang": {"english": "Role", "german": "Rolle", "arabic": "الدور", "french": "Rôle"}},
                              {"seqno":"12","field": "archive", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Archive", "german": "Archiv", "arabic": "أرشيف", "french": "Archive"}},
                              {"seqno":"14","field": "photo", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Photo", "german": "", "arabic": "", "french": ""}},
                              {"seqno":"16","field": "schedule", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Schedule", "german": "", "arabic": "", "french": ""}}
                           ],
                           "edit_option":true,
                           "delete_option":true
                        },
                        {  "helper":"getentityname",
                           "fields":[
                              {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ],
                           "edit_option":true,
                           "delete_option":true
                        }
                     ]
                  },
               "update":{
                     "roles":["Admin"],
                     "data":[
                        {  "helper":"none",
                           "fields":[
                              {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                              {"seqno":"1","field":"person_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"3","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"5","field":" entity_id","edit":false,"show":false,"control":"number","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false, "tooltip":"this is a test description","default":""},
                              {"seqno":"2","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"4","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"6","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"7","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"9","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"11","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                              {"seqno":"8","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"10","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"12","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"13","field":"schedule","edit":true,"show":true,"control":"schedule-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {"helper":"getentityname",
                           "fields":[
                                 {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                                 {"seqno":"14","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                              ]
                        }
                     ],
                     "api":"resource/modifications"
                  },
               "cancel":{
                  "api":"resource"
                  },
               "Approver":{
                  "controls":[
                     {"type":"button","name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
                     ],
                     "create":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getcurrentuserdetails",
                        "fields":[
                              {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {"helper":"getresorceCategories",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"","field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {  "helper":"none",
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                              {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                              {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        }
                     ]
                     },
                     "list":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getentityname",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {  "helper":"none",
                        
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                              {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                              {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        }
                     ]
                     },
                     "update":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getentityname",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {  "helper":"none",
                        
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                              {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                              {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        }
                     ]
                     },
                     "cancel":{
                     "roles":["admin"]
                     }
               }
            }

             
         },
         "Message Template":{
            "db_name":"event_scheduler2025",
            "table_name":"message_details",
             "doc_title":"","getDataApi":"message/list_details",
            "key":"id",
            "controls": [
               {"type": "button", "tooltip":"this is a test description","tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"}
            ],
            "job": {
               "create":{
                  "roles":["Admin"],
                  "data":[
                     {  "helper":"none",
                        "fields": [
                           {"seqno":"","field": "id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert ID", "german": "Alarm-ID", "arabic": "معرف التنبيه", "french": "ID d'alerte"}},
                           {"seqno":"","field": "entity_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                           {"seqno":"","field": "category", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Target Category", "german": "Zielkategorie", "arabic": "فئة الهدف", "french": "Catégorie cible"}},
                           {"seqno":"","field": "message_body", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Message Body", "german": "Nachrichtenkörper", "arabic": "نص الرسالة", "french": "Corps du message"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                     }
                  ],
                  "api":"message/new",
                  "key":"id"
               },
               "list":{
                     "roles":["Admin"],
                     "data":[
                        {  "helper":"none",
                           "fields": [
                              {"seqno":"","field": "id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Alert ID", "german": "Alarm-ID", "arabic": "معرف التنبيه", "french": "ID d'alerte"}},
                              {"seqno":"","field": "entity_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                              {"seqno":"","field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Target Category", "german": "Zielkategorie", "arabic": "فئة الهدف", "french": "Catégorie cible"}},
                              {"seqno":"","field": "message_body", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Message Body", "german": "Nachrichtenkörper", "arabic": "نص الرسالة", "french": "Corps du message"}}
                           ],
                           "edit_option":true,
                           "delete_option":true
                        }
                     ],
                     "api":"message/list_details",
                     "key":"id"
                  },
               "update":{
                  "roles":["Admin"],
                  "data":[
                     {  "helper":"none",
                        "fields": [
                           {"seqno":"","field": "id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert ID", "german": "Alarm-ID", "arabic": "معرف التنبيه", "french": "ID d'alerte"}},
                           {"seqno":"","field": "entity_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                           {"seqno":"","field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Target Category", "german": "Zielkategorie", "arabic": "فئة الهدف", "french": "Catégorie cible"}},
                           {"seqno":"","field": "message_body", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Message Body", "german": "Nachrichtenkörper", "arabic": "نص الرسالة", "french": "Corps du message"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                     }
                  ],
                  "api":"message/modifications",
                  "key":"id"
               },
               "cancel":{
                  "api":"message",
                  "key":"id"
                  },
               "Approver":{
                  "controls":[
                     {"type":"button","name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
                     ],
                     "create":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getcurrentuserdetails",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {"helper":"getresorceCategories",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"","field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {  "helper":"none",
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                              {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                              {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        }
                     ]
                     },
                     "list":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getentityname",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {  "helper":"none",
                        
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                              {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                              {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        }
                     ]
                     },
                     "update":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getentityname",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {  "helper":"none",
                        
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                              {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                              {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        }
                     ]
                     },
                     "cancel":{
                     "roles":["admin"]
                     }
               }
            }
         },
         "Application Registry":{
            "db_name":"event_scheduler2025",
            "table_name":"application_registry",
             "doc_title":"","getDataApi":"app_registry/list_details",
            "key":"id",
            "attchment_files_path":"",
            "controls": [
               {"type": "button", "tooltip":"this is a test description","tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tooltip":"this is a test description","tag": "calendar", "roles": ["Admin", "User"], "name": "<i class='fa fa-calendar'></i> ", "function": "fullCalendar()", "class": "btn btn-primary btn-xs my-xs-btn"}
            ],
            "job": {
               "create":{
                     "roles":["Admin"],
                     "data":[
                        {  "helper":"none",
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field": "id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "App Registry ID", "german": "Personalausweis", "arabic": "معرف الشخص", "french": "ID de personne"}},
                              {"seqno":"","field": "app_name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "App Name", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}},
                              {"seqno":"","field": "app_lisence", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "App Lisence", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}},
                              {"seqno":"","field": "app_apis", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"","filter_helper":"getResourceCateory","filter_default_value":["Doctor","Teacher","Admin"],"lang": {"english": "App APIs", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}}
                           ]
                        }
                        
                     ],
                     "api":"app_registry/new"
                  },
               "list":{
                     "roles":["Admin"],
                     "data":[
                        {  "helper":"none",
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field": "id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "App Registry ID", "german": "Personalausweis", "arabic": "معرف الشخص", "french": "ID de personne"}},
                              {"seqno":"","field": "app_name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "App Name", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}},
                              {"seqno":"","field": "app_lisence", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "App Lisence", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}},
                              {"seqno":"","field": "app_apis", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_helper":"getResourceCateory","filter_default_value":["Doctor","Teacher","Admin"],"lang": {"english": "App APIs", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}}
                           ],
                           "edit_option":true,
                           "delete_option":true
                        }
                       
                     ]
                  },
               "update":{
                     "roles":["Admin"],
                     "data":[
                        {  "helper":"none",
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field": "id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "App Registry ID", "german": "Personalausweis", "arabic": "معرف الشخص", "french": "ID de personne"}},
                              {"seqno":"","field": "app_name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "App Name", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}},
                              {"seqno":"","field": "app_lisence", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "App Lisence", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}},
                              {"seqno":"","field": "app_apis", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"","filter_helper":"getResourceCateory","filter_default_value":["Doctor","Teacher","Admin"],"lang": {"english": "App APIs", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}}
                           ],
                        }
                       
                     ],
                     "api":"app_registry/modifications"
                  },
               "cancel":{
                  "api":"resource"
                  },
               "Approver":{
                  "controls":[
                     {"type":"button","name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
                     {"type":"button","name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
                     ],
                     "create":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getcurrentuserdetails",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {"helper":"getresorceCategories",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"","field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {  "helper":"none",
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                              {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                              {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        }
                     ]
                     },
                     "list":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getentityname",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {  "helper":"none",
                        
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                              {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                              {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        }
                     ]
                     },
                     "update":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getentityname",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        },
                        {  "helper":"none",
                        
                           "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                              {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                              {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                              {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                           ]
                        }
                     ]
                     },
                     "cancel":{
                     "roles":["admin"]
                     }
               }
            }

             
         },
         "Storage Path": {
            "doc_title": "",
            "getDataApi": "config/list_details",
            "key": "id",
            "attchment_files_path": "",
            "job": {
               "create": {
               "roles": ["Admin"],
               "data": [
                  {
                     "helper": "none",
                     "fields": [
                     {"seqno": "", "field": "id", "name": "Id", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Storage path unique identifier", "default": "", "lang": {"english": "Storage Id", "german": "Speicher-ID", "arabic": "معرف التخزين", "french": "ID de stockage"}},
                     {"seqno": "", "field": "affiliation_ids", "name": "Affiliation IDs", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Associated affiliation identifiers", "default": "", "lang": {"english": "Affiliation IDs", "german": "Zugehörigkeits-IDs", "arabic": "معرفات الانتماء", "french": "IDs d'affiliation"}},
                     {"seqno": "", "field": "description", "name": "Description", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Storage path description", "default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno": "", "field": "remarks", "name": "Remarks", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Additional remarks or notes", "default": "", "lang": {"english": "Remarks", "german": "Bemerkungen", "arabic": "ملاحظات", "french": "Remarques"}},
                     {"seqno": "", "field": "status", "name": "Status", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Current status of storage path", "default": "", "lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                     {"seqno": "", "field": "log", "name": "Log", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "System log information", "default": "", "lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}},
                     {"seqno": "", "field": "created_at", "name": "Created At", "edit": false, "show": false, "control": "datime", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Creation timestamp", "default": "", "lang": {"english": "Created At", "german": "Erstellt am", "arabic": "تم إنشاؤه في", "french": "Créé le"}},
                     {"seqno": "", "field": "db_path", "name": "Database Path", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Database connection path", "default": "", "lang": {"english": "Database Path", "german": "Datenbankpfad", "arabic": "مسار قاعدة البيانات", "french": "Chemin de base de données"}},
                     {"seqno": "", "field": "db_type", "name": "Database Type", "edit": true, "show": true, "control": "dropdown", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Type of database system", "default": "", "lang": {"english": "Database Type", "german": "Datenbanktyp", "arabic": "نوع قاعدة البيانات", "french": "Type de base de données"}},
                     {"seqno": "", "field": "files_path", "name": "Files Path", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "File storage path location", "default": "", "lang": {"english": "Files Path", "german": "Dateipfad", "arabic": "مسار الملفات", "french": "Chemin des fichiers"}},
                     {"seqno": "", "field": "file_storage_type", "name": "File Storage Type", "edit": true, "show": true, "control": "dropdown", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Type of file storage system", "default": "", "lang": {"english": "File Storage Type", "german": "Dateispeichertyp", "arabic": "نوع تخزين الملفات", "french": "Type de stockage de fichiers"}},
                     {"seqno": "", "field": "db_access_cred", "name": "Database Access Credentials", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Database access credentials", "default": "", "lang": {"english": "DB Access Credentials", "german": "DB-Zugangsdaten", "arabic": "بيانات الوصول لقاعدة البيانات", "french": "Identifiants d'accès BD"}},
                     {"seqno": "", "field": "files_access_cred", "name": "Files Access Credentials", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "File storage access credentials", "default": "", "lang": {"english": "Files Access Credentials", "german": "Datei-Zugangsdaten", "arabic": "بيانات الوصول للملفات", "french": "Identifiants d'accès fichiers"}},
                     {"seqno": "", "field": "storage_pathscol", "name": "Storage Paths Collection", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Collection of storage paths", "default": "", "lang": {"english": "Storage Paths Collection", "german": "Speicherpfad-Sammlung", "arabic": "مجموعة مسارات التخزين", "french": "Collection de chemins de stockage"}}
                     ],
                     "edit_option": true,
                     "delete_option": true
                  }
               ],
               "api": "config/new",
               "onSuccess": "StoragePath_created()"
               },
               "list": {
               "roles": ["Admin"],
               "data": [
                  {
                     "helper": "none",
                     "fields": [
                     {"seqno": "", "field": "id", "name": "Id", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Storage path unique identifier", "default": "", "lang": {"english": "Storage Id", "german": "Speicher-ID", "arabic": "معرف التخزين", "french": "ID de stockage"}},
                     {"seqno": "", "field": "affiliation_ids", "name": "Affiliation IDs", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Associated affiliation identifiers", "default": "", "lang": {"english": "Affiliation IDs", "german": "Zugehörigkeits-IDs", "arabic": "معرفات الانتماء", "french": "IDs d'affiliation"}},
                     {"seqno": "", "field": "description", "name": "Description", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Storage path description", "default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno": "", "field": "remarks", "name": "Remarks", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Additional remarks or notes", "default": "", "lang": {"english": "Remarks", "german": "Bemerkungen", "arabic": "ملاحظات", "french": "Remarques"}},
                     {"seqno": "", "field": "status", "name": "Status", "edit": true, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Current status of storage path", "default": "", "lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                     {"seqno": "", "field": "log", "name": "Log", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "System log information", "default": "", "lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}},
                     {"seqno": "", "field": "created_at", "name": "Created At", "edit": false, "show": true, "control": "datime", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Creation timestamp", "default": "", "lang": {"english": "Created At", "german": "Erstellt am", "arabic": "تم إنشاؤه في", "french": "Créé le"}},
                     {"seqno": "", "field": "db_path", "name": "Database Path", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Database connection path", "default": "", "lang": {"english": "Database Path", "german": "Datenbankpfad", "arabic": "مسار قاعدة البيانات", "french": "Chemin de base de données"}},
                     {"seqno": "", "field": "db_type", "name": "Database Type", "edit": false, "show": true, "control": "dropdown", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Type of database system", "default": "", "lang": {"english": "Database Type", "german": "Datenbanktyp", "arabic": "نوع قاعدة البيانات", "french": "Type de base de données"}},
                     {"seqno": "", "field": "files_path", "name": "Files Path", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "File storage path location", "default": "", "lang": {"english": "Files Path", "german": "Dateipfad", "arabic": "مسار الملفات", "french": "Chemin des fichiers"}},
                     {"seqno": "", "field": "file_storage_type", "name": "File Storage Type", "edit": false, "show": true, "control": "dropdown", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Type of file storage system", "default": "", "lang": {"english": "File Storage Type", "german": "Dateispeichertyp", "arabic": "نوع تخزين الملفات", "french": "Type de stockage de fichiers"}},
                     {"seqno": "", "field": "db_access_cred", "name": "Database Access Credentials", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Database access credentials", "default": "", "lang": {"english": "DB Access Credentials", "german": "DB-Zugangsdaten", "arabic": "بيانات الوصول لقاعدة البيانات", "french": "Identifiants d'accès BD"}},
                     {"seqno": "", "field": "files_access_cred", "name": "Files Access Credentials", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "File storage access credentials", "default": "", "lang": {"english": "Files Access Credentials", "german": "Datei-Zugangsdaten", "arabic": "بيانات الوصول للملفات", "french": "Identifiants d'accès fichiers"}},
                     {"seqno": "", "field": "storage_pathscol", "name": "Storage Paths Collection", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Collection of storage paths", "default": "", "lang": {"english": "Storage Paths Collection", "german": "Speicherpfad-Sammlung", "arabic": "مجموعة مسارات التخزين", "french": "Collection de chemins de stockage"}}
                     ],
                     "edit_option": true,
                     "delete_option": true
                  }
               ],
               "api": "config/list_details",
               "onSuccess": "StoragePath_listed()"
               },
               "update": {
               "roles": ["Admin"],
               "data": [
                  {
                     "helper": "none",
                     "fields": [
                     {"seqno": "", "field": "id", "name": "Id", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Storage path unique identifier", "default": "", "lang": {"english": "Storage Id", "german": "Speicher-ID", "arabic": "معرف التخزين", "french": "ID de stockage"}},
                     {"seqno": "", "field": "affiliation_ids", "name": "Affiliation IDs", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Associated affiliation identifiers", "default": "", "lang": {"english": "Affiliation IDs", "german": "Zugehörigkeits-IDs", "arabic": "معرفات الانتماء", "french": "IDs d'affiliation"}},
                     {"seqno": "", "field": "description", "name": "Description", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Storage path description", "default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno": "", "field": "remarks", "name": "Remarks", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Additional remarks or notes", "default": "", "lang": {"english": "Remarks", "german": "Bemerkungen", "arabic": "ملاحظات", "french": "Remarques"}},
                     {"seqno": "", "field": "status", "name": "Status", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Current status of storage path", "default": "", "lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                     {"seqno": "", "field": "log", "name": "Log", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "System log information", "default": "", "lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}},
                     {"seqno": "", "field": "created_at", "name": "Created At", "edit": false, "show": true, "control": "datime", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Creation timestamp", "default": "", "lang": {"english": "Created At", "german": "Erstellt am", "arabic": "تم إنشاؤه في", "french": "Créé le"}},
                     {"seqno": "", "field": "db_path", "name": "Database Path", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Database connection path", "default": "", "lang": {"english": "Database Path", "german": "Datenbankpfad", "arabic": "مسار قاعدة البيانات", "french": "Chemin de base de données"}},
                     {"seqno": "", "field": "db_type", "name": "Database Type", "edit": true, "show": true, "control": "dropdown", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Type of database system", "default": "", "lang": {"english": "Database Type", "german": "Datenbanktyp", "arabic": "نوع قاعدة البيانات", "french": "Type de base de données"}},
                     {"seqno": "", "field": "files_path", "name": "Files Path", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "File storage path location", "default": "", "lang": {"english": "Files Path", "german": "Dateipfad", "arabic": "مسار الملفات", "french": "Chemin des fichiers"}},
                     {"seqno": "", "field": "file_storage_type", "name": "File Storage Type", "edit": true, "show": true, "control": "dropdown", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Type of file storage system", "default": "", "lang": {"english": "File Storage Type", "german": "Dateispeichertyp", "arabic": "نوع تخزين الملفات", "french": "Type de stockage de fichiers"}},
                     {"seqno": "", "field": "db_access_cred", "name": "Database Access Credentials", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Database access credentials", "default": "", "lang": {"english": "DB Access Credentials", "german": "DB-Zugangsdaten", "arabic": "بيانات الوصول لقاعدة البيانات", "french": "Identifiants d'accès BD"}},
                     {"seqno": "", "field": "files_access_cred", "name": "Files Access Credentials", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "File storage access credentials", "default": "", "lang": {"english": "Files Access Credentials", "german": "Datei-Zugangsdaten", "arabic": "بيانات الوصول للملفات", "french": "Identifiants d'accès fichiers"}},
                     {"seqno": "", "field": "storage_pathscol", "name": "Storage Paths Collection", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Collection of storage paths", "default": "", "lang": {"english": "Storage Paths Collection", "german": "Speicherpfad-Sammlung", "arabic": "مجموعة مسارات التخزين", "french": "Collection de chemins de stockage"}}
                     ],
                     "edit_option": true,
                     "delete_option": true
                  }
               ],
               "api": "config/modifications"
               },
               "approver": {
               "roles": ["Approver"],
               "data": [
                  {
                     "helper": "none",
                     "fields": [
                     {"seqno": "", "field": "id", "name": "Id", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Storage path unique identifier", "default": "", "lang": {"english": "Storage Id", "german": "Speicher-ID", "arabic": "معرف التخزين", "french": "ID de stockage"}},
                     {"seqno": "", "field": "affiliation_ids", "name": "Affiliation IDs", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Associated affiliation identifiers", "default": "", "lang": {"english": "Affiliation IDs", "german": "Zugehörigkeits-IDs", "arabic": "معرفات الانتماء", "french": "IDs d'affiliation"}},
                     {"seqno": "", "field": "description", "name": "Description", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Storage path description", "default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno": "", "field": "remarks", "name": "Remarks", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Additional remarks or notes", "default": "", "lang": {"english": "Remarks", "german": "Bemerkungen", "arabic": "ملاحظات", "french": "Remarques"}},
                     {"seqno": "", "field": "status", "name": "Status", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Current status of storage path", "default": "", "lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                     {"seqno": "", "field": "log", "name": "Log", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "System log information", "default": "", "lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}},
                     {"seqno": "", "field": "created_at", "name": "Created At", "edit": false, "show": true, "control": "datime", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Creation timestamp", "default": "", "lang": {"english": "Created At", "german": "Erstellt am", "arabic": "تم إنشاؤه في", "french": "Créé le"}},
                     {"seqno": "", "field": "db_path", "name": "Database Path", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Database connection path", "default": "", "lang": {"english": "Database Path", "german": "Datenbankpfad", "arabic": "مسار قاعدة البيانات", "french": "Chemin de base de données"}},
                     {"seqno": "", "field": "db_type", "name": "Database Type", "edit": true, "show": true, "control": "dropdown", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Type of database system", "default": "", "lang": {"english": "Database Type", "german": "Datenbanktyp", "arabic": "نوع قاعدة البيانات", "french": "Type de base de données"}},
                     {"seqno": "", "field": "files_path", "name": "Files Path", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "File storage path location", "default": "", "lang": {"english": "Files Path", "german": "Dateipfad", "arabic": "مسار الملفات", "french": "Chemin des fichiers"}},
                     {"seqno": "", "field": "file_storage_type", "name": "File Storage Type", "edit": true, "show": true, "control": "dropdown", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Type of file storage system", "default": "", "lang": {"english": "File Storage Type", "german": "Dateispeichertyp", "arabic": "نوع تخزين الملفات", "french": "Type de stockage de fichiers"}},
                     {"seqno": "", "field": "db_access_cred", "name": "Database Access Credentials", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Database access credentials", "default": "", "lang": {"english": "DB Access Credentials", "german": "DB-Zugangsdaten", "arabic": "بيانات الوصول لقاعدة البيانات", "french": "Identifiants d'accès BD"}},
                     {"seqno": "", "field": "files_access_cred", "name": "Files Access Credentials", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "File storage access credentials", "default": "", "lang": {"english": "Files Access Credentials", "german": "Datei-Zugangsdaten", "arabic": "بيانات الوصول للملفات", "french": "Identifiants d'accès fichiers"}},
                     {"seqno": "", "field": "storage_pathscol", "name": "Storage Paths Collection", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Collection of storage paths", "default": "", "lang": {"english": "Storage Paths Collection", "german": "Speicherpfad-Sammlung", "arabic": "مجموعة مسارات التخزين", "french": "Collection de chemins de stockage"}}
                     ],
                     "edit_option": true,
                     "delete_option": true
                  }
               ],
               "api": "config/modifications",
               },
               "cancel":{"api":"config","onSuccess":"Role_canceled()"},
            },
         },
        "Entity log":{} ,
         "Document Test Templates": {
            "job": {
               "list": {
               "api": "config/list_details",
               "data": [
                  {
                     "fields": [
                     {
                        "edit": false,
                        "lang": {
                           "arabic": "الوصف",
                           "french": "Description",
                           "german": "Beschreibung",
                           "english": "Description"
                        },
                        "show": false,
                        "field": "description",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": false,
                        "filter_type": "textbox",
                        "filter_default_value": ""
                     },
                     {
                        "edit": false,
                        "lang": {
                           "arabic": "معرف الدور",
                           "french": "ID du rôle",
                           "german": "Rollen-ID",
                           "english": "id"
                        },
                        "name": "Id",
                        "show": false,
                        "field": "id",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": "textbox",
                        "filter_default_value": ""
                     },
                     {
                        "edit": true,
                        "lang": {
                           "arabic": "معرف الكيان",
                           "french": "ID de l'entité",
                           "german": "Entitäts-ID",
                           "english": "Affiliation Id"
                        },
                        "show": true,
                        "field": "affiliation_id",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": ""
                     },
                     {
                        "edit": true,
                        "lang": {
                           "arabic": "اسم الدور",
                           "french": "Nom du rôle",
                           "german": "Rollenname",
                           "english": "DB Config"
                        },
                        "show": true,
                        "field": "db_config",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": ""
                     },
                     {
                        "edit": true,
                        "lang": {
                           "arabic": "اسم الدور",
                           "french": "Nom du rôle",
                           "german": "Rollenname",
                           "english": "UI Template"
                        },
                        "show": true,
                        "field": "task_ui_template",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": ""
                     }
                     ],
                     "helper": "none",
                     "edit_option": true,
                     "delete_option": true
                  }
               ],
               "roles": [
                  "Admin"
               ],
               "onSuccess": "Role_listed()"
               },
               "cancel": {
               "api": "config",
               "onSuccess": "Role_canceled()"
               },
               "create": {
               "api": "config/new",
               "data": [
                  {
                     "fields": [
                     {
                        "edit": false,
                        "lang": {
                           "arabic": "الوصف",
                           "french": "Description",
                           "german": "Beschreibung",
                           "english": "Description"
                        },
                        "show": false,
                        "field": "description",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": false,
                        "filter_type": "textbox",
                        "filter_default_value": ""
                     },
                     {
                        "edit": false,
                        "lang": {
                           "arabic": "معرف الدور",
                           "french": "ID du rôle",
                           "german": "Rollen-ID",
                           "english": "id"
                        },
                        "name": "Id",
                        "show": false,
                        "field": "id",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": "textbox",
                        "filter_default_value": ""
                     },
                     {
                        "edit": true,
                        "lang": {
                           "arabic": "معرف الكيان",
                           "french": "ID de l'entité",
                           "german": "Entitäts-ID",
                           "english": "Affiliation Id"
                        },
                        "show": true,
                        "field": "affiliation_id",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": ""
                     },
                     {
                        "edit": true,
                        "lang": {
                           "arabic": "اسم الدور",
                           "french": "Nom du rôle",
                           "german": "Rollenname",
                           "english": "DB Config"
                        },
                        "show": true,
                        "field": "db_config",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": ""
                     },
                     {
                        "edit": true,
                        "lang": {
                           "arabic": "اسم الدور",
                           "french": "Nom du rôle",
                           "german": "Rollenname",
                           "english": "UI Template"
                        },
                        "show": true,
                        "field": "task_ui_template",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": ""
                     }
                     ],
                     "helper": "none",
                     "edit_option": true,
                     "delete_option": true
                  }
               ],
               "roles": [
                  "Admin"
               ],
               "onSuccess": "Role_created()"
               },
               "update": {
               "api": "config/modifications",
               "data": [
                  {
                     "fields": [
                     {
                        "edit": false,
                        "lang": {
                           "arabic": "الوصف",
                           "french": "Description",
                           "german": "Beschreibung",
                           "english": "Description"
                        },
                        "show": false,
                        "field": "description",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": false,
                        "filter_type": "textbox",
                        "filter_default_value": ""
                     },
                     {
                        "edit": false,
                        "lang": {
                           "arabic": "معرف الدور",
                           "french": "ID du rôle",
                           "german": "Rollen-ID",
                           "english": "id"
                        },
                        "name": "Id",
                        "show": false,
                        "field": "id",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": "textbox",
                        "filter_default_value": ""
                     },
                     {
                        "edit": true,
                        "lang": {
                           "arabic": "معرف الكيان",
                           "french": "ID de l'entité",
                           "german": "Entitäts-ID",
                           "english": "Affiliation Id"
                        },
                        "show": true,
                        "field": "affiliation_id",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": ""
                     },
                     {
                        "edit": true,
                        "lang": {
                           "arabic": "اسم الدور",
                           "french": "Nom du rôle",
                           "german": "Rollenname",
                           "english": "DB Config"
                        },
                        "show": true,
                        "field": "db_config",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": ""
                     },
                     {
                        "edit": true,
                        "lang": {
                           "arabic": "اسم الدور",
                           "french": "Nom du rôle",
                           "german": "Rollenname",
                           "english": "UI Template"
                        },
                        "show": true,
                        "field": "task_ui_template",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": ""
                     }
                     ],
                     "helper": "none",
                     "edit_option": true,
                     "delete_option": true
                  }
               ],
               "roles": [
                  "Admin"
               ],
               "checklist": {
                  "checkpoints": []
               }
               },
               "approver": {
               "data": [
                  {
                     "fields": [
                     {
                        "edit": false,
                        "lang": {
                           "arabic": "الوصف",
                           "french": "Description",
                           "german": "Beschreibung",
                           "english": "Description"
                        },
                        "show": false,
                        "field": "description",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": false,
                        "filter_type": "textbox",
                        "filter_default_value": ""
                     },
                     {
                        "edit": false,
                        "lang": {
                           "arabic": "معرف الدور",
                           "french": "ID du rôle",
                           "german": "Rollen-ID",
                           "english": "id"
                        },
                        "name": "Id",
                        "show": false,
                        "field": "id",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": "textbox",
                        "filter_default_value": ""
                     },
                     {
                        "edit": true,
                        "lang": {
                           "arabic": "معرف الكيان",
                           "french": "ID de l'entité",
                           "german": "Entitäts-ID",
                           "english": "Affiliation Id"
                        },
                        "show": true,
                        "field": "affiliation_id",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": ""
                     },
                     {
                        "edit": true,
                        "lang": {
                           "arabic": "اسم الدور",
                           "french": "Nom du rôle",
                           "german": "Rollenname",
                           "english": "DB Config"
                        },
                        "show": true,
                        "field": "db_config",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": ""
                     },
                     {
                        "edit": true,
                        "lang": {
                           "arabic": "اسم الدور",
                           "french": "Nom du rôle",
                           "german": "Rollenname",
                           "english": "UI Template"
                        },
                        "show": true,
                        "field": "task_ui_template",
                        "seqno": "",
                        "control": "text",
                        "default": "",
                        "tooltip": "this is a test description",
                        "trigger": [
                           {
                           "event": "onchange",
                           "function": "tab_onchange_trigger"
                           },
                           {
                           "event": "onselect",
                           "function": "tab_onselect_trigger"
                           }
                        ],
                        "mandatory": true,
                        "filter_type": ""
                     }
                     ],
                     "helper": "none",
                     "edit_option": true,
                     "delete_option": false
                  }
               ],
               "roles": [
                  "Approver"
               ],
               "onSuccess": "Role_approved()"
               }
            },
            "key": "id",
            "doc_title": "",
            "getDataApi": "config/list_details",
            "attchment_files_path": ""
         }

      

    },
    "Network Config":{
      "controls":[
         {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tooltip":"this is a test description","tag": "chartTemplates", "roles": ["Admin"], "name": "Network Config", "options": [],"function":"getChartTemplate","textContent": "Chart Templates"},
         {"type": "select", "tooltip":"this is a test description","tag": "items", "roles": ["Admin"], "name": "Network Config", "options": ["Entity Category","Entity Registry","Network Log"], "function": "","textContent": "Items"},
         {"type": "select", "tooltip":"this is a test description","tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [1,5,10,25,50,100], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Entity Category":{
        "db_name":"event_scheduler2025",
        "tab_name":"Entity Category",
        "table_name":"entity_categories",
         "doc_title":"","getDataApi":"config/list_details",
        "key": "entity_id",
        "controls":[
           {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"backward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"left","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"right","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"forward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"refresh","roles":["Admin","Approver"],"name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],   
              "data":[
                 {  "helper":"none",
                    "fields":[
                       {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},   
                       {"seqno":"","field":"entity_type_id","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"entity_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"status","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"draft"},
                       {"seqno":"","field":"log","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":" "}
                    ]
                 }
              ],
              "api":"config/new",
              "key": "entity_category_id" 
           },
           "list":{
              "roles":["Admin"],  
              "data":[
                 {  "helper":"none",
                     "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"entity_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Entity Category ID","german":"Entitätskategorie-ID","arabic":"معرف فئة الكيان","french":"ID de catégorie d'entité"}},
                        {"seqno":"","field":"entity_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Entity Category Name","german":"Entitätskategoriename","arabic":"اسم فئة الكيان","french":"Nom de catégorie d'entité"}},
                        {"seqno":"","field":"status","name":"Type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                        {"seqno":"","field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"","filter_default_value":"","lang":{"english":"Log Status","german":"Protokollstatus","arabic":"حالة السجل","french":"Statut du journal"}}
                     ],
                    "edit_option":true,
                    "delete_option":true
                 }
              ],
              "api": "config/list_details'", 
              "key": "entity_category_id" 
           },
           "update":{
            "roles":["Admin"],  
            "data":[
               {  "helper":"none",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                      {"seqno":"","field":"entity_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Category ID","german":"Entitätskategorie-ID","arabic":"معرف فئة الكيان","french":"ID de catégorie d'entité"}},
                      {"seqno":"","field":"entity_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Category Name","german":"Entitätskategoriename","arabic":"اسم فئة الكيان","french":"Nom de catégorie d'entité"}},
                      {"seqno":"","field":"status","name":"Type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                      {"seqno":"","field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"textbox","filter_default_value":"","lang":{"english":"Log Status","german":"Protokollstatus","arabic":"حالة السجل","french":"Statut du journal"}}
                   ],
                  "edit_option":true,
                  "delete_option":true
               }
            ],
            "api": "config/modifications", 
            "key": "entity_category_id" 
         },
           "approver":{
            "roles":["Approver"],  
            "data":[
               {  "helper":"none",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                      {"seqno":"","field":"entity_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Category ID","german":"Entitätskategorie-ID","arabic":"معرف فئة الكيان","french":"ID de catégorie d'entité"}},
                      {"seqno":"","field":"entity_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Category Name","german":"Entitätskategoriename","arabic":"اسم فئة الكيان","french":"Nom de catégorie d'entité"}},
                      {"seqno":"","field":"status","name":"Type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                      {"seqno":"","field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"textbox","filter_default_value":"","lang":{"english":"Log Status","german":"Protokollstatus","arabic":"حالة السجل","french":"Statut du journal"}}
                   ],
                  "edit_option":true,
                  "delete_option":true
               }
            ],
            "api": "", 
            "key": "entity_category_id" 
         },
           "cancel":{
              "api": "config", 
               "key": "entity_category_id" 
           }
  
        }
       },
      "Entity Registry":{
        "db_name":"event_scheduler2025",
        "tab_name":"Entity",
        "table_name":"entity",
         "doc_title":"","getDataApi":"entity/list_details",
        "key": "entity_id",
        "controls":[
           {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"backward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"left","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"right","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"forward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"refresh","roles":["Admin","Approver"],"name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
        ],
        "fields": [
            {"name": "description","datatype": "string"},
            {"name": "entity_id","datatype": "bigint"},
            {"name": "entity_name","datatype": "string"}
         ],
        "job":{
           "create":{
              "roles":["Admin"],   
              "data":[
                 {  "helper":"none",
                    "fields":[
                       {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                       {"seqno":"","field":"entity_id","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"entity_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"entry_status","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"draft"},
                       {"seqno":"","field":"ftp_path","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"username","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"password","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"affiliation_id","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                     ]
                 },
                 {"helper":"getEntityTypes",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"entity_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":"entityTypes"}
  
                    ]
                 }
              ],
              "api":"entity/new"
           },
           "list":{
              "roles":["Admin"],  
              "data":[
                 {  "helper":"none",
                    "fields":[
                       {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                       {"seqno":"","field":"entity_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Id", "german": "Ausweis", "arabic": "هوية", "french": "Identifiant"}},
                       {"seqno":"","field":"entity_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Name", "german": "Name", "arabic": "اسم", "french": "Nom"}},
                       {"seqno":"","field":"entity_type","name":"Type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Type", "german": "Typ", "arabic": "نوع", "french": "Type"}},
                       {"seqno":"","field":"entry_status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english": "Status", "german": "Status", "arabic": "حالة", "french": "Statut"}},
                       {"seqno":"","field":"remark","name":"Remarks","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english": "Remarks", "german": "Bemerkungen", "arabic": "تعليقات", "french": "Remarques"}},
                       {"seqno":"","field":"change_log","name":"Log","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Log", "german": "Protokoll", "arabic": "سجل", "french": "Journal"}},
                       {"seqno":"","field":"ftp_path","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "FTP Path", "german": "Name", "arabic": "اسم", "french": "Nom"}},
                       {"seqno":"","field":"username","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Username", "german": "Name", "arabic": "اسم", "french": "Nom"}},
                       {"seqno":"","field":"password","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Password", "german": "Name", "arabic": "اسم", "french": "Nom"}},
                       {"seqno":"","field":"affiliation_id","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Affiliation Id", "german": "Name", "arabic": "اسم", "french": "Nom"}}
                       
                    ],
                    "edit_option":true,
                    "delete_option":true
                 }
              ],
              "api": "entity/list_details", 
              "key": "entity_id" 
           },
           "update":{
              "roles":["Admin"],  
              "data":[
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                       {"seqno":"","field":"entity_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"entity_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"entity_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"]},
                       {"seqno":"","field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"change_log","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"ftp_path","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"username","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"password","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 },
                 {"helper":"getEntityTypes",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"entity_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":"entityTypes"}
  
                    ]
                 }
              ],
              "api": "entity/modifications",
           },
           "approver":{
                 "roles":["Approver"],
                 "data":[
                    {  "helper":"none",
                       "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                          {"seqno":"","field":"entity_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["suspended","approved"]},
                          {"seqno":"","field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"ftp_path","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"username","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"password","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"affiliation_id","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
  
                       ],
                       "edit_option":true,
                       "delete_option":false
                    }
                 ]
                 
           },
           "cancel":{
              "api":"entity"
           }
  
        }
       },
      "Network Log":{}
    },
    "System Config":{
        "controls":[
         {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tooltip":"this is a test description","tag": "chartTemplates", "roles": ["Admin"], "name": "System Config", "options": [],"function":"getChartTemplate","textContent": "Chart Templates"},
         {"type": "select", "tooltip":"this is a test description","tag": "items", "roles": ["Admin"], "name": "System Config", "options": ["Doc_status_type","system log","Com Settings","API Queue"], "function": "","textContent": "Items"},
         {"type": "select", "tooltip":"this is a test description","tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [1,5,10,25,50,100], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Doc_status_type":{
         "doc_title":"","getDataApi":"config/list_details",
        "key": "doc_status_type_id",
        "controls":[
           {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"backward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"left","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"right","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"forward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"refresh","roles":["Admin","Approver"],"name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],   
              "data":[
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},   
                       {"seqno":"","field":"doc_status_type_id","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"doc_status_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"log","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"draft"}
                    ]
                 }
              ],
              "api":"config/new",
              "key": "doc_status_type_id" 
           },
           "list":{
              "roles":["Admin"],  
              "data":[
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"doc_status_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"doc_status_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Document Status Type","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Status Log","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                  ],
                    "edit_option":true,
                    "delete_option":true
                 }
              ],
              "api": "config/list_details'", 
              "key": "doc_status_type_id" 
           },
           "update":{
            "roles":["Admin"],  
            "data":[
               {  "helper":"none",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"doc_status_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"doc_status_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"textbox","filter_default_value":"","lang":{"english":"Status Log","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                  ],
                  "edit_option":true,
                  "delete_option":true
               }
            ],
            "api": "config/modifications", 
            "key": "doc_status_type_id" 
         },
           "approver":{
            "roles":["Approver"],  
            "data":[
               {  "helper":"none",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"doc_status_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"doc_status_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"textbox","filter_default_value":"","lang":{"english":"Status Log","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                  ],
                  "edit_option":true,
                  "delete_option":true
               }
            ],
            "api": "", 
            "key": "doc_status_type_id" 
         },
           "cancel":{
              "api": "config", 
               "key": "doc_status_type_id" 
           }
  
        }
      },
      "Com Settings":{},
      "system log":{} ,
      "API Queue":{
         "doc_title":"","getDataApi":"config/list_details",
        "key": "id",
        "controls":[
           {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"backward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"left","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"right","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"forward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"refresh","roles":["Admin","Approver"],"name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],   
              "data":[
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},   
                       {"seqno":"","field":"doc_status_type_id","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"doc_status_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"log","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"draft"}
                    ]
                 }
              ],
              "api":"config/new",
              "key": "doc_status_type_id" 
           },
           "list":{
              "roles":["Admin"],  
              "data":[
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"domain","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Domain","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"body","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Body","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"seqno":"","field":"endpoint","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Endpoint","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"method","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Method","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Status ","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}

                  ],
                    "edit_option":true,
                    "delete_option":true
                 }
              ],
              "api": "config/list_details'", 
              "key": "id" ,
              
           },
           "update":{
            "roles":["Admin"],  
            "data":[
               {  "helper":"none",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"doc_status_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"doc_status_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"textbox","filter_default_value":"","lang":{"english":"Status Log","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                  ],
                  "edit_option":true,
                  "delete_option":true
               }
            ],
            "api": "config/modifications", 
            "key": "doc_status_type_id" 
         },
           "approver":{
            "roles":["Approver"],  
            "data":[
               {  "helper":"none",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"doc_status_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"doc_status_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"textbox","filter_default_value":"","lang":{"english":"Status Log","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                  ],
                  "edit_option":true,
                  "delete_option":true
               }
            ],
            "api": "", 
            "key": "doc_status_type_id" 
         },
           "cancel":{
              "api": "config", 
               "key": "doc_status_type_id" 
           }
  
        }
      }
    },
    "Event Config":{
        "controls":[
         {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"edit","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tooltip":"this is a test description","tag":"delete","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type":"button","tooltip":"this is a test description","tag":"maps","roles":["Admin"],"name":"<i class='bi bi-map-fill'><i> ","function":"collectSelectedData()","class":"btn btn-secondary btn-sm"},
         {"type": "select", "tooltip":"this is a test description","tag": "chartTemplates", "roles": ["Admin"], "name": "Event Config", "options": [],"function":"getChartTemplate","textContent": "Chart Templates"},
         {"type": "select", "tooltip":"this is a test description","tag": "items", "roles": ["Admin"], "name": "Event Config", "options": [ "Event Schedule","Alert Schedule","Appointment Schedule","Event Log","Subscriber Registry","Subscriber Log"], "function": "","textContent": "Items"},
         {"type": "select", "tooltip":"this is a test description","tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [1,5,10,25,50,100], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Event Schedule":{
        "db_name":"event_scheduler2025",
        "table_name":"resource_profile",
         "doc_title":"","getDataApi":"event/list_details",
        "key":"event_id",
        "controls": [
           {"type": "button", "tooltip":"this is a test description","tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"}
        ],
        "job": {
        "create":{
              "roles":["Admin"],
              "data":[
               
                {  "helper":"none",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                      {"seqno":"","field": "event_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                      {"seqno":"","field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                      {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                      {"seqno":"","field": "category", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                      {"seqno":"","field": "host_entity_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Host Entity ID", "german": "Host-Entitäts-ID", "arabic": "معرف الكيان المضيف", "french": "ID d'entité hôte"}},
                      {"seqno":"","field": "subscriber_limit", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber Limit", "german": "Teilnehmerlimit", "arabic": "حد المشتركين", "french": "Limite d'abonnés"}},
                      {"seqno":"","field": "terms", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Terms", "german": "Bedingungen", "arabic": "الشروط", "french": "Conditions"}},
                      {"seqno":"","field": "event_ids", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Related Event IDs", "german": "Verwandte Ereignis-IDs", "arabic": "معرفات الأحداث المرتبطة", "french": "ID d'événements associés"}},
                      {"seqno":"","field": "from_datime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Start DateTime", "german": "Startdatum und -zeit", "arabic": "تاريخ ووقت البدء", "french": "Date et heure de début"}},
                      {"seqno":"","field": "to_datime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "End DateTime", "german": "Enddatum und -zeit", "arabic": "تاريخ ووقت الانتهاء", "french": "Date et heure de fin"}},
                      {"seqno":"","field": "venue", "edit": true, "show": true, "control": "venue-location-control", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Venue", "german": "Veranstaltungsort", "arabic": "مكان الحدث", "french": "Lieu"}}
                   ]
                   ,
                   "edit_option":true,
                   "delete_option":true
                }
                
             ],
             "api":"event/new"
           },
        "list":{
              "roles":["Admin"],
              "data":[
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field": "event_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                        {"seqno":"","field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                        {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field": "category", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"dropdown","filter_helper":"getEventType","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                        {"seqno":"","field": "host_entity_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Host Entity ID", "german": "Host-Entitäts-ID", "arabic": "معرف الكيان المضيف", "french": "ID d'entité hôte"}},
                        {"seqno":"","field": "subscriber_limit", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber Limit", "german": "Teilnehmerlimit", "arabic": "حد المشتركين", "french": "Limite d'abonnés"}},
                        {"seqno":"","field": "terms", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Terms", "german": "Bedingungen", "arabic": "الشروط", "french": "Conditions"}},
                        {"seqno":"","field": "event_ids", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Related Event IDs", "german": "Verwandte Ereignis-IDs", "arabic": "معرفات الأحداث المرتبطة", "french": "ID d'événements associés"}},
                        {"seqno":"","field": "from_datime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"datetime","filter_default_value":"","lang": {"english": "Start DateTime", "german": "Startdatum und -zeit", "arabic": "تاريخ ووقت البدء", "french": "Date et heure de début"}},
                        {"seqno":"","field": "to_datime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"datetime","filter_default_value":"","lang": {"english": "End DateTime", "german": "Enddatum und -zeit", "arabic": "تاريخ ووقت الانتهاء", "french": "Date et heure de fin"}},
                        {"seqno":"","field": "venue", "edit": true, "show": true, "control": "venue-location-control", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"address","filter_default_value":"","lang": {"english": "Venue", "german": "Veranstaltungsort", "arabic": "مكان الحدث", "french": "Lieu"}}
                      ]
                    ,
                    "edit_option":true,
                    "delete_option":true
                 },
                 {  "helper":"getentityname",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 },
              ],
               "api": "event/list_details",
           },
        "update":{
          "roles":["Admin"],
          "data":[
             {  "helper":"none",
                "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                    {"seqno":"","field": "event_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                    {"seqno":"","field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                    {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                    {"seqno":"","field": "category", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                    {"seqno":"","field": "host_entity_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Host Entity ID", "german": "Host-Entitäts-ID", "arabic": "معرف الكيان المضيف", "french": "ID d'entité hôte"}},
                    {"seqno":"","field": "subscriber_limit", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber Limit", "german": "Teilnehmerlimit", "arabic": "حد المشتركين", "french": "Limite d'abonnés"}},
                    {"seqno":"","field": "terms", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Terms", "german": "Bedingungen", "arabic": "الشروط", "french": "Conditions"}},
                    {"seqno":"","field": "event_ids", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Related Event IDs", "german": "Verwandte Ereignis-IDs", "arabic": "معرفات الأحداث المرتبطة", "french": "ID d'événements associés"}},
                    {"seqno":"","field": "from_datime", "edit": false, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Start DateTime", "german": "Startdatum und -zeit", "arabic": "تاريخ ووقت البدء", "french": "Date et heure de début"}},
                    {"seqno":"","field": "to_datime", "edit": false, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "End DateTime", "german": "Enddatum und -zeit", "arabic": "تاريخ ووقت الانتهاء", "french": "Date et heure de fin"}},
                    {"seqno":"","field": "venue", "edit": true, "show": true, "control": "venue-location-control", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Venue", "german": "Veranstaltungsort", "arabic": "مكان الحدث", "french": "Lieu"}}
                  ]
                ,
                "edit_option":true,
                "delete_option":true
             },
             {  "helper":"getentityname",
                "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                   {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                ],
                "edit_option":true,
                "delete_option":true
             },
          ],
            "api": "event/modifications",
        },
        "cancel":{
           "api":"event",
           },
        "Approver":{
           "controls":[
              {"type":"button","name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
              {"type":"button","name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
              {"type":"button","name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
              {"type":"button","name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
              {"type":"button","name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
              {"type":"button","name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
              {"type":"button","name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
              ],
              "create":{
              "roles":["admin"],
              "data":[
                 {"helper":"getcurrentuserdetails",
                 "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 },
                 {"helper":"getresorceCategories",
                 "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                    {"seqno":"","field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 },
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                       {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                       {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 }
              ]
              },
              "list":{
              "roles":["admin"],
              "data":[
                 {"helper":"getentityname",
                 "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 },
                 {  "helper":"none",
                 
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                       {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                       {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 }
              ]
              },
              "update":{
              "roles":["admin"],
              "data":[
                 {"helper":"getentityname",
                 "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 },
                 {  "helper":"none",
                 
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                       {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                       {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 }
              ]
              },
              "cancel":{
              "roles":["admin"]
              }
          }
        }
         
     },
      "Alert Schedule":{
        "db_name":"event_scheduler2025",
        "table_name":"alert",
         "doc_title":"","getDataApi":"alert/list_details",
        "key":"alert_id",
        "controls": [
           {"type": "button", "tooltip":"this is a test description","tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"}
        ],
        "job": {
        "create":{
              "roles":["Admin"],
              "data":[
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field": "alert_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert ID", "german": "Alarm-ID", "arabic": "معرف التنبيه", "french": "ID d'alerte"}},
                        {"seqno":"","field": "event_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                        {"seqno":"","field": "target_category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Target Category", "german": "Zielkategorie", "arabic": "فئة الهدف", "french": "Catégorie cible"}},
                        {"seqno":"","field": "message_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Message ID", "german": "Nachrichten-ID", "arabic": "معرف الرسالة", "french": "ID du message"}},
                        {"seqno":"","field": "alert_datetime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert DateTime", "german": "Alarmdatum und -zeit", "arabic": "تاريخ ووقت التنبيه", "french": "Date et heure d'alerte"}}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 },
                 {  "helper":"getentityname",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 },
              ],
              "api":"alert/new"
           },
        "list":{
              "roles":["Admin"],
              "data":[
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field": "alert_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Alert ID", "german": "Alarm-ID", "arabic": "معرف التنبيه", "french": "ID d'alerte"}},
                        {"seqno":"","field": "event_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                        {"seqno":"","field": "target_category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Target Category", "german": "Zielkategorie", "arabic": "فئة الهدف", "french": "Catégorie cible"}},
                        {"seqno":"","field": "message_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Message ID", "german": "Nachrichten-ID", "arabic": "معرف الرسالة", "french": "ID du message"}},
                        {"seqno":"","field": "alert_datetime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert DateTime", "german": "Alarmdatum und -zeit", "arabic": "تاريخ ووقت التنبيه", "french": "Date et heure d'alerte"}}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 },
                 {  "helper":"getentityname",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 },
              ],
               "api": "alert/list_details"
           },
        "update":{
              "roles":["Admin"],
              "data":[
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field": "alert_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert ID", "german": "Alarm-ID", "arabic": "معرف التنبيه", "french": "ID d'alerte"}},
                        {"seqno":"","field": "event_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                        {"seqno":"","field": "target_category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Target Category", "german": "Zielkategorie", "arabic": "فئة الهدف", "french": "Catégorie cible"}},
                        {"seqno":"","field": "message_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Message ID", "german": "Nachrichten-ID", "arabic": "معرف الرسالة", "french": "ID du message"}},
                        {"seqno":"","field": "alert_datetime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert DateTime", "german": "Alarmdatum und -zeit", "arabic": "تاريخ ووقت التنبيه", "french": "Date et heure d'alerte"}}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 },
                 {  "helper":"getentityname",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 },
              ],
               "api":"alert/modifications"
           },
        "cancel":{
           "api":"alert_id",
           },
        "Approver":{
           "controls":[
              {"type":"button","name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
              {"type":"button","name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
              {"type":"button","name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
              {"type":"button","name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
              {"type":"button","name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
              {"type":"button","name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
              {"type":"button","name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
              ],
              "create":{
              "roles":["admin"],
              "data":[
                 {"helper":"getcurrentuserdetails",
                 "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 },
                 {"helper":"getresorceCategories",
                 "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                    {"seqno":"","field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 },
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                       {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                       {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 }
              ]
              },
              "list":{
              "roles":["admin"],
              "data":[
                 {"helper":"getentityname",
                 "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 },
                 {  "helper":"none",
                 
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                       {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                       {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 }
              ]
              },
              "update":{
              "roles":["admin"],
              "data":[
                 {"helper":"getentityname",
                 "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 },
                 {  "helper":"none",
                 
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                       {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                       {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                       {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                    ]
                 }
              ]
              },
              "cancel":{
              "roles":["admin"]
              }
          }
       }   
     },
      "Appointment Schedule":{
        "db_name":"event_scheduler2025",
        "table_name":"appointment",
         "doc_title":"","getDataApi":"appointment/list_details",
        "key":"appointment_id",
        "controls": [
           {"type": "button", "tooltip":"this is a test description","tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],
              "data":[
                    {  "helper":"getEventList",
                       "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                          {"seqno":"","field": "events", "edit": true, "show": true, "control": "dropdown", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "","onchange":"handleEventSelection","filter_type":"textbox","filter_default_value":"","lang": {"english": "Appointment ID", "german": "Termin-ID", "arabic": "معرف الموعد", "french": "ID de rendez-vous"}},
                       ],
                       "edit_option":true,
                       "delete_option":true
                    },
                    {  "helper":"ResourceType",
                       "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                          {"seqno":"","field": "events", "edit": true, "show": true, "control": "dropdown", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "","onchange":"handleEventSelection","filter_type":"textbox","filter_default_value":"","lang": {"english": "Appointment ID", "german": "Termin-ID", "arabic": "معرف الموعد", "french": "ID de rendez-vous"}},
                       ],
                       "edit_option":true,
                       "delete_option":true
                    },
                    {  "helper":"none",
                       "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                          {"seqno":"","field": "resource", "edit": true, "show": true, "control": "dropdown", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Appointment ID", "german": "Termin-ID", "arabic": "معرف الموعد", "french": "ID de rendez-vous"}},
                       ],
                       "edit_option":true,
                       "delete_option":true
                    },
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field": "appointment_id", "edit": true, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Appointment ID", "german": "Termin-ID", "arabic": "معرف الموعد", "french": "ID de rendez-vous"}},
                       {"seqno":"","field": "exclusive", "edit": true, "show": true, "control": "dropdown", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "","values":["YES","NO"], "filter_type":"dropdown","filter_default_value":["0","1"],"lang": {"english": "Exclusive", "german": "Exklusiv", "arabic": "حصري", "french": "Exclusif"}},
                       {"seqno":"","field": "event_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                       {"seqno":"","field": "participant_type", "edit": true, "show": true, "control": "dropdown", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "","values":["Student","patient","user"], "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant Type", "german": "Teilnehmertyp", "arabic": "نوع المشارك", "french": "Type de participant"}},
                       {"seqno":"","field": "participant_id", "edit": true, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant ID", "german": "Teilnehmer-ID", "arabic": "معرف المشارك", "french": "ID du participant"}},
                       {"seqno":"","field": "status", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                       {"seqno":"","field": "participant_entity_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant Entity ID", "german": "Teilnehmer-Entitäts-ID", "arabic": "معرف كيان المشارك", "french": "ID d'entité du participant"}}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 }
              ],
              "api":"appointment/new"
           },
           "list":{
                 "roles":["Admin"],
                 "data":[
                    {  "helper":"none",
                       "fields": [
                          {"seqno":"","field": "appointment_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Appointment ID", "german": "Termin-ID", "arabic": "معرف الموعد", "french": "ID de rendez-vous"}},
                          {"seqno":"","field": "exclusive", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"dropdown","filter_default_value":["0","1"],"lang": {"english": "Exclusive", "german": "Exklusiv", "arabic": "حصري", "french": "Exclusif"}},
                          {"seqno":"","field": "event_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                          {"seqno":"","field": "participant_type", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant Type", "german": "Teilnehmertyp", "arabic": "نوع المشارك", "french": "Type de participant"}},
                          {"seqno":"","field": "participant_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Participant ID", "german": "Teilnehmer-ID", "arabic": "معرف المشارك", "french": "ID du participant"}},
                          {"seqno":"","field": "status", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                          {"seqno":"","field": "participant_entity_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant Entity ID", "german": "Teilnehmer-Entitäts-ID", "arabic": "معرف كيان المشارك", "french": "ID d'entité du participant"}}
                       ],
                       "edit_option":true,
                       "delete_option":true
                    }
                 ]
              },
           "update":{
              "roles":["Admin"],
              "data":[
                 {  "helper":"none",
                    "fields": [
                       {"seqno":"","field": "appointment_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Appointment ID", "german": "Termin-ID", "arabic": "معرف الموعد", "french": "ID de rendez-vous"}},
                       {"seqno":"","field": "exclusive", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Exclusive", "german": "Exklusiv", "arabic": "حصري", "french": "Exclusif"}},
                       {"seqno":"","field": "event_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                       {"seqno":"","field": "participant_type", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant Type", "german": "Teilnehmertyp", "arabic": "نوع المشارك", "french": "Type de participant"}},
                       {"seqno":"","field": "participant_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant ID", "german": "Teilnehmer-ID", "arabic": "معرف المشارك", "french": "ID du participant"}},
                       {"seqno":"","field": "status", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                       {"seqno":"","field": "participant_entity_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant Entity ID", "german": "Teilnehmer-Entitäts-ID", "arabic": "معرف كيان المشارك", "french": "ID d'entité du participant"}}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 }
              ],
              "api":"appointment/modifications",
              "checklist":[
                  {  "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},"status", "exclusive"],
                     "checkpoints":["Is the new sot available?","Are the same participants available for the new slot ","Have participants been notified about the new slot?"]},
                  {  "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},"participant_id"], "checkpoints":["Have participants been notified about the slot?"]

                  },
                  
              ]
           },
           "cancel":{
              "api":"appointment_id",
              },
           "Approver":{
              "controls":[
                 {"type":"button","name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
                 {"type":"button","name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                 {"type":"button","name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                 {"type":"button","name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                 {"type":"button","name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
                 {"type":"button","name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
                 {"type":"button","name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
                 ],
                 "create":{
                 "roles":["admin"],
                 "data":[
                    {"helper":"getcurrentuserdetails",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                          {"seqno":"","field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                       ]
                    },
                    {"helper":"getresorceCategories",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                       {"seqno":"","field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                       ]
                    },
                    {  "helper":"none",
                       "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                          {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                          {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                       ]
                    }
                 ]
                 },
                 "list":{
                 "roles":["admin"],
                 "data":[
                    {"helper":"getentityname",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                          {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                       ]
                    },
                    {  "helper":"none",
                    
                       "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                          {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                          {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                       ]
                    }
                 ]
                 },
                 "update":{
                 "roles":["admin"],
                 "data":[
                    {"helper":"getentityname",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                          {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                       ]
                    },
                    {  "helper":"none",
                    
                       "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                          {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                          {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                          {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                       ]
                    }
                 ]
                 },
                 "cancel":{
                 "roles":["admin"]
                 }
              }
        }
      
     },
     "Subscriber Registry":{
        "db_name":"event_scheduler2025",
        "table_name":"message_details",
         "doc_title":"","getDataApi":"subscriber/list_details",
        "key":"subscriber_id",
        "controls": [
           {"type": "button", "tooltip":"this is a test description","tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
          "create":{
             "roles":["Admin"],
             "data":[
                {  "helper":"none",
                   "fields": [
                         {"seqno":"","field": "subscriber_id", "edit": true, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber ID", "german": "Abonnenten-ID", "arabic": "معرف المشترك", "french": "ID d'abonné"}},
                         {"seqno":"","field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                         {"seqno":"","field": "category", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                         {"seqno":"","field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                         {"seqno":"","field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                         {"seqno":"","field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                         {"seqno":"","field": "alert_preference", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                         {"seqno":"","field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Statusabfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                         {"seqno":"","field": "log", "edit": true, "show":false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}}
                   ],
                   "edit_option":true,
                   "delete_option":true
                }
             ],
             "api":"subscriber/new"
          },
          "list":{
                "roles":["Admin"],
                "data":[
                   {  "helper":"none",
                      "fields": [
                         {"seqno":"","field": "subscriber_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber ID", "german": "Abonnenten-ID", "arabic": "معرف المشترك", "french": "ID d'abonné"}},
                         {"seqno":"","field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                         {"seqno":"","field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                         {"seqno":"","field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                         {"seqno":"","field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                         {"seqno":"","field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                         {"seqno":"","field": "alert_preference", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                         {"seqno":"","field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Statusabfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                         {"seqno":"","field": "log", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}}
                      ],
                      "edit_option":true,
                      "delete_option":true
                   }
                ]
             },
          "update":{
             "roles":["Admin"],
             "data":[
                {  "helper":"none",
                   "fields": [
                         {"seqno":"","field": "subscriber_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber ID", "german": "Abonnenten-ID", "arabic": "معرف المشترك", "french": "ID d'abonné"}},
                         {"seqno":"","field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                         {"seqno":"","field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                         {"seqno":"","field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                         {"seqno":"","field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                         {"seqno":"","field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                         {"seqno":"","field": "alert_preference", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                         {"seqno":"","field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Statusabfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                         {"seqno":"","field": "log", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}}
                   ],
                   "edit_option":true,
                   "delete_option":true
                }
             ],
             "api":"subscriber/modifications",
          },
          "cancel":{
           "api":"subscriber_id",
             },
          "Approver":{
             "controls":[
                {"type":"button","name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
                {"type":"button","name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                {"type":"button","name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                {"type":"button","name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                {"type":"button","name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
                {"type":"button","name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
                {"type":"button","name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
                ],
                "create":{
                "roles":["admin"],
                "data":[
                   {"helper":"getcurrentuserdetails",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                         {"seqno":"","field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   },
                   {"helper":"getresorceCategories",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                      {"seqno":"","field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   },
                   {  "helper":"none",
                      "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                         {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                         {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   }
                ]
                },
                "list":{
                "roles":["admin"],
                "data":[
                   {"helper":"getentityname",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                         {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   },
                   {  "helper":"none",
                   
                      "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                         {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                         {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   }
                ]
                },
                "update":{
                "roles":["admin"],
                "data":[
                   {"helper":"getentityname",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                         {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   },
                   {  "helper":"none",
                   
                      "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                         {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                         {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   }
                ]
                },
                "cancel":{
                "roles":["admin"]
                }
             }
       }
         
      },
      "Subscriber Log":{},
      "Event Log":{},
    },
    "Program Config":{
        "controls":[
         {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tooltip":"this is a test description","tag": "chartTemplates", "roles": ["Admin"], "name": "Program Config", "options": [],"function":"getChartTemplate","textContent": "Chart Templates"},
         {"type": "select", "tooltip":"this is a test description","tag": "items", "roles": ["Admin"], "name": "Program Config", "options": ["Program Registry"], "function": "","textContent": "Items"},
         {"type": "select", "tooltip":"this is a test description","tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [1,5,10,25,50,100], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Program Registry":{
         "doc_title":"","getDataApi":"program_registry/list_details",
        "key": "program_registry_id",
        "controls":[
           {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"backward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"left","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"right","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"forward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"refresh","roles":["Admin","Approver"],"name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],   
              "data":[
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"program_registry_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"program_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Program Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"program_owner_entity","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"filtertype":"textbox","filter_default_value":"","lang":{"english":"Program Owner Entity","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                     
                  ],
                 },
                 {"helper":"get_program_services",
                  "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"program_services","name":"program_services","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program Services","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                     ]
                 }
              ],
              "api":"program_registry/new",
              "key": "program_registry_id" 
           },
           "list":{
              "roles":["Admin"],  
              "data":[
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"program_registry_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"program_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Program Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"program_owner_entity","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Program Owner Entity","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"seqno":"","field":"program_services","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Program Services","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                  ],
                    "edit_option":true,
                    "delete_option":true
                 }
              ],
              "api": "program_registry/list_details'", 
              "key": "program_registry_id" 
           },
           "update":{
            "roles":["Admin"],  
            "data":[
               {  "helper":"none",
                  "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"program_registry_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"program_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Program Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"program_owner_entity","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Program Owner Entity","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"seqno":"","field":"program_services","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Program Services","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                  ],
                  "edit_option":true,
                  "delete_option":true
               }
            ],
            "api": "program_registry/modifications", 
            "key": "program_registry_id" 
         },
           "approver":{
            "roles":["Approver"],  
            "data":[
               {  "helper":"none",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"program_registry_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"program_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Program Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"program_owner_entity","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Program Owner Entity","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"seqno":"","field":"program_services","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Program Services","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                  ],
                  "edit_option":true,
                  "delete_option":true
               }
            ],
            "api": "", 
            "key": "doc_status_type_id" 
         },
           "cancel":{
              "api": "program_registry", 
               "key": "program_registry_id" 
           }
  
        }
      },
      
      "Program Type": {
         "job": {
            "list": {
            "api": "config/list_details",
            "data": [
               {
                  "fields": [
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "معرف نوع البرنامج",
                        "french": "ID du type de programme",
                        "german": "Programmtyp-ID",
                        "english": "Program Type Id"
                     },
                     "name": "Id",
                     "show": false,
                     "field": "id",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Program Type Id",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": true
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "نوع البرنامج",
                        "french": "Type de programme",
                        "german": "Programmtyp",
                        "english": "Program Type"
                     },
                     "name": "Program Type",
                     "show": true,
                     "field": "program_type",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Type of program",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": true
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "الوصف",
                        "french": "Description",
                        "german": "Beschreibung",
                        "english": "Description"
                     },
                     "name": "Description",
                     "show": true,
                     "field": "description",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Description of program type",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "الحالة",
                        "french": "Statut",
                        "german": "Status",
                        "english": "Status"
                     },
                     "name": "Status",
                     "show": true,
                     "field": "status",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Status of program type",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "السجل",
                        "french": "Journal",
                        "german": "Protokoll",
                        "english": "Log"
                     },
                     "name": "Log",
                     "show": true,
                     "field": "log",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Log information",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "ملاحظات",
                        "french": "Remarques",
                        "german": "Bemerkungen",
                        "english": "Remarks"
                     },
                     "name": "Remarks",
                     "show": true,
                     "field": "remarks",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Additional remarks",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "تم الإنشاء في",
                        "french": "Créé à",
                        "german": "Erstellt am",
                        "english": "Created At"
                     },
                     "name": "Created At",
                     "show": true,
                     "field": "created_at",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Creation timestamp",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  }
                  ],
                  "helper": "none",
                  "edit_option": true,
                  "delete_option": true
               }
            ],
            "roles": [
               "Admin"
            ],
            "onSuccess": "ProgramType_listed()"
            },
            "cancel": {
            "api": "config",
            "onSuccess": "ProgramType_canceled()"
            },
            "create": {
            "api": "config/new",
            "data": [
               {
                  "fields": [
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "معرف نوع البرنامج",
                        "french": "ID du type de programme",
                        "german": "Programmtyp-ID",
                        "english": "Program Type Id"
                     },
                     "name": "Id",
                     "show": false,
                     "field": "id",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Program Type Id",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": true
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "نوع البرنامج",
                        "french": "Type de programme",
                        "german": "Programmtyp",
                        "english": "Program Type"
                     },
                     "name": "Program Type",
                     "show": true,
                     "field": "program_type",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Type of program",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": true
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "الوصف",
                        "french": "Description",
                        "german": "Beschreibung",
                        "english": "Description"
                     },
                     "name": "Description",
                     "show": true,
                     "field": "description",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Description of program type",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "الحالة",
                        "french": "Statut",
                        "german": "Status",
                        "english": "Status"
                     },
                     "name": "Status",
                     "show": false,
                     "field": "status",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Status of program type",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "السجل",
                        "french": "Journal",
                        "german": "Protokoll",
                        "english": "Log"
                     },
                     "name": "Log",
                     "show": false,
                     "field": "log",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Log information",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "ملاحظات",
                        "french": "Remarques",
                        "german": "Bemerkungen",
                        "english": "Remarks"
                     },
                     "name": "Remarks",
                     "show": false,
                     "field": "remarks",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Additional remarks",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "تم الإنشاء في",
                        "french": "Créé à",
                        "german": "Erstellt am",
                        "english": "Created At"
                     },
                     "name": "Created At",
                     "show": false,
                     "field": "created_at",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Creation timestamp",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  }
                  ],
                  "helper": "none",
                  "edit_option": true,
                  "delete_option": true
               }
            ],
            "roles": [
               "Admin"
            ],
            "onSuccess": "ProgramType_created()"
            },
            "update": {
            "api": "config/modifications",
            "data": [
               {
                  "fields": [
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "معرف نوع البرنامج",
                        "french": "ID du type de programme",
                        "german": "Programmtyp-ID",
                        "english": "Program Type Id"
                     },
                     "name": "Id",
                     "show": false,
                     "field": "id",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Program Type Id",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": true
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "نوع البرنامج",
                        "french": "Type de programme",
                        "german": "Programmtyp",
                        "english": "Program Type"
                     },
                     "name": "Program Type",
                     "show": true,
                     "field": "program_type",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Type of program",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": true
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "الوصف",
                        "french": "Description",
                        "german": "Beschreibung",
                        "english": "Description"
                     },
                     "name": "Description",
                     "show": true,
                     "field": "description",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Description of program type",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "الحالة",
                        "french": "Statut",
                        "german": "Status",
                        "english": "Status"
                     },
                     "name": "Status",
                     "show": true,
                     "field": "status",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Status of program type",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "السجل",
                        "french": "Journal",
                        "german": "Protokoll",
                        "english": "Log"
                     },
                     "name": "Log",
                     "show": false,
                     "field": "log",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Log information",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "ملاحظات",
                        "french": "Remarques",
                        "german": "Bemerkungen",
                        "english": "Remarks"
                     },
                     "name": "Remarks",
                     "show": true,
                     "field": "remarks",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Additional remarks",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "تم الإنشاء في",
                        "french": "Créé à",
                        "german": "Erstellt am",
                        "english": "Created At"
                     },
                     "name": "Created At",
                     "show": true,
                     "field": "created_at",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Creation timestamp",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  }
                  ],
                  "helper": "none",
                  "edit_option": true,
                  "delete_option": true
               }
            ],
            "roles": [
               "Admin"
            ]
            },
            "approver": {
            "data": [
               {
                  "fields": [
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "معرف نوع البرنامج",
                        "french": "ID du type de programme",
                        "german": "Programmtyp-ID",
                        "english": "Program Type Id"
                     },
                     "name": "Id",
                     "show": false,
                     "field": "id",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Program Type Id",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": true
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "نوع البرنامج",
                        "french": "Type de programme",
                        "german": "Programmtyp",
                        "english": "Program Type"
                     },
                     "name": "Program Type",
                     "show": true,
                     "field": "program_type",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Type of program",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": true
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "الوصف",
                        "french": "Description",
                        "german": "Beschreibung",
                        "english": "Description"
                     },
                     "name": "Description",
                     "show": true,
                     "field": "description",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Description of program type",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "الحالة",
                        "french": "Statut",
                        "german": "Status",
                        "english": "Status"
                     },
                     "name": "Status",
                     "show": true,
                     "field": "status",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Status of program type",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "السجل",
                        "french": "Journal",
                        "german": "Protokoll",
                        "english": "Log"
                     },
                     "name": "Log",
                     "show": true,
                     "field": "log",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Log information",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": true,
                     "lang": {
                        "arabic": "ملاحظات",
                        "french": "Remarques",
                        "german": "Bemerkungen",
                        "english": "Remarks"
                     },
                     "name": "Remarks",
                     "show": true,
                     "field": "remarks",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Additional remarks",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  },
                  {
                     "edit": false,
                     "lang": {
                        "arabic": "تم الإنشاء في",
                        "french": "Créé à",
                        "german": "Erstellt am",
                        "english": "Created At"
                     },
                     "name": "Created At",
                     "show": true,
                     "field": "created_at",
                     "seqno": "",
                     "control": "text",
                     "default": "",
                     "tooltip": "Creation timestamp",
                     "trigger": [
                        {
                        "event": "onchange",
                        "function": "tab_onchange_trigger"
                        },
                        {
                        "event": "onselect",
                        "function": "tab_onselect_trigger"
                        }
                     ],
                     "mandatory": false
                  }
                  ],
                  "helper": "none",
                  "edit_option": true,
                  "delete_option": false
               }
            ],
            "roles": [
               "Approver"
            ],
            "onSuccess": "ProgramType_approved()"
            }
         },
         "key": "id",
         "doc_title": "",
         "getDataApi": "config/list_details",
         "attchment_files_path": ""
  
      }
     

   
    },
    "Service Config":{
        "controls":[
         {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tooltip":"this is a test description","tag": "chartTemplates", "roles": ["Admin"], "name": "Service Config", "options": [],"function":"getChartTemplate","textContent": "Chart Templates"},
         {"type": "select", "tooltip":"this is a test description","tag": "items", "roles": ["Admin"], "name": "Service Config", "options": ["Service Registry"], "function": "","textContent": "Items"},
         {"type": "select", "tooltip":"this is a test description","tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [1,5,10,25,50,100], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Service Registry":{
         "doc_title":"","getDataApi":"service_registry/list_details",
        "key": "gov_srevice_id",
        "controls":[
           {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"backward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"left","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"right","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"forward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tooltip":"this is a test description","tag":"refresh","roles":["Admin","Approver"],"name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],   
              "data":[
                 {  "helper":"none",
                     "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"gov_service_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Service Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                        {"seqno":"","field":"gov_service_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Service Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                        {"seqno":"","field":"description","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Description","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                        {"seqno":"","field":"terms&conditions","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Terms&Conditions","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                        {"seqno":"","field":"policy","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"policy","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                        {"seqno":"","field":"role","name":"Status","edit":true,"show":true,"control":"venue-location-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"role","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                     ]
                 }
              ],
              "api":"service_registry/new",
              "key": "gov_service_id" 
           },
           "list":{
              "roles":["Admin"],  
              "data":[
                 {  "helper":"none",
                    "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"gov_service_id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Service Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"gov_service_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Service Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"description","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Description","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"seqno":"","field":"terms&conditions","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Terms&Conditions","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"seqno":"","field":"policy","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"policy","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"seqno":"","field":"role","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"role","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                  ],
                    "edit_option":true,
                    "delete_option":true
                 }
              ],
              "api": "service_registry/list_details'", 
              "key": "gov_service_id" 
           },
           "update":{
            "roles":["Admin"],  
            "data":[
               {  "helper":"none",
                  "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                     {"seqno":"","field":"gov_service_id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Service Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"seqno":"","field":"gov_service_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Service Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"seqno":"","field":"description","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Description","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"seqno":"","field":"terms&conditions","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Terms&Conditions","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"seqno":"","field":"policy","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"policy","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"seqno":"","field":"role","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"role","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                  ],
                  "edit_option":true,
                  "delete_option":true
               }
            ],
            "api": "service_registry/modifications", 
            "key": "gov_service_id" 
         },
         "cancel":{
            "api": "service_registry", 
            "key": "gov_service_id" 
         }
  
        }
      }
    },
    "Subscriber Config":{
        "controls":[
         {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tooltip":"this is a test description","tag": "chartTemplates", "roles": ["Admin"], "name": "Subscriber Config", "options": [],"function":"getChartTemplate","textContent": "Chart Templates"},
         {"type": "select", "tooltip":"this is a test description","tag": "items", "roles": ["Admin"], "name": "Subscriber Config", "options": ["Subscriber Registry","Subscriber Log"], "function": "","textContent": "Items"},
         {"type": "select", "tooltip":"this is a test description","tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [1,5,10,25,50,100], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Subscriber Registry":{
        "db_name":"event_scheduler2025",
        "table_name":"message_details",
         "doc_title":"","getDataApi":"subscriber/list_details",
        "key":"subscriber_id",
        "controls": [
           {"type": "button", "tooltip":"this is a test description","tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tooltip":"this is a test description","tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
          "create":{
             "roles":["Admin"],
             "data":[
                {  "helper":"none",
                   "fields": [
                         {"seqno":"","field": "subscriber_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber ID", "german": "Abonnenten-ID", "arabic": "معرف المشترك", "french": "ID d'abonné"}},
                         {"seqno":"","field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                         {"seqno":"","field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                         {"seqno":"","field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                         {"seqno":"","field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                         {"seqno":"","field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                         {"seqno":"","field": "alert_preference", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                         {"seqno":"","field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Statusabfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                         {"seqno":"","field": "log", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}}
                   ],
                   "edit_option":true,
                   "delete_option":true
                }
             ],
             "api":"sbscriber/new"
          },
          "list":{
                "roles":["Admin"],
                "data":[
                   {  "helper":"none",
                      "fields": [
                         {"seqno":"","field": "subscriber_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber ID", "german": "Abonnenten-ID", "arabic": "معرف المشترك", "french": "ID d'abonné"}},
                         {"seqno":"","field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                         {"seqno":"","field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                         {"seqno":"","field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                         {"seqno":"","field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                         {"seqno":"","field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                         {"seqno":"","field": "alert_preference", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                         {"seqno":"","field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Statusabfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                         {"seqno":"","field": "log", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}}
                      ],
                      "edit_option":true,
                      "delete_option":true
                   }
                ]
             },
          "update":{
             "roles":["Admin"],
             "data":[
                {  "helper":"none",
                   "fields": [
                         {"seqno":"","field": "subscriber_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber ID", "german": "Abonnenten-ID", "arabic": "معرف المشترك", "french": "ID d'abonné"}},
                         {"seqno":"","field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                         {"seqno":"","field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                         {"seqno":"","field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                         {"seqno":"","field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                         {"seqno":"","field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                         {"seqno":"","field": "alert_preference", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                         {"seqno":"","field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Statusabfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                         {"seqno":"","field": "log", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}}
                   ],
                   "edit_option":true,
                   "delete_option":true
                }
             ]
          },
          "cancel":{
           "api":"subscriber_id",
             },
          "Approver":{
             "controls":[
                {"type":"button","name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
                {"type":"button","name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                {"type":"button","name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                {"type":"button","name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
                {"type":"button","name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
                {"type":"button","name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
                {"type":"button","name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
                ],
                "create":{
                "roles":["admin"],
                "data":[
                   {"helper":"getcurrentuserdetails",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                         {"seqno":"","field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   },
                   {"helper":"getresorceCategories",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                      {"seqno":"","field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   },
                   {  "helper":"none",
                      "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                         {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                         {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   }
                ]
                },
                "list":{
                "roles":["admin"],
                "data":[
                   {"helper":"getentityname",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                         {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   },
                   {  "helper":"none",
                   
                      "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                         {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                         {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   }
                ]
                },
                "update":{
                "roles":["admin"],
                "data":[
                   {"helper":"getentityname",
                   "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                         {"seqno":"","field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   },
                   {  "helper":"none",
                   
                      "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                         {"seqno":"","field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}, 
                         {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                         {"seqno":"","field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""}
                      ]
                   }
                ]
                },
                "cancel":{
                "roles":["admin"]
                }
             }
       }
         
      },
      "Subscriber Log":{}

    },
    "Notifications Config":{
        "controls":[
         {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tooltip":"this is a test description","tag": "chartTemplates", "roles": ["Admin"], "name": "Notifications Config", "options": [],"function":"getChartTemplate","textContent": "Chart Templates"},
         {"type": "select", "tooltip":"this is a test description","tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": ["Notifications"],"textContent": "Items"},
         {"type": "select", "tooltip":"this is a test description","tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [1,5,10,25,50,100], "textContent": "Rows/Page"},
        ],
        "Roles":["Admin"],
        "Notifications":{
             "doc_title":"","getDataApi":"config/list_details",
            "key":"notification_id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field":"notification_id","name":"Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"resource_id","name":"Entity Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"role","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"message","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/new",
                "onSuccess":"Role_created()"
                
                },
                "list":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field":"role_id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"entity_id","name":"Entity Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"role_name","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/list_details",
                "onSuccess":"Role_listed()"
                },
                "update":{
                    "roles":["Admin"],  
                    "data":[
                        {  "helper":"none",
                            "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                                {"seqno":"","field":"role_id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                                {"seqno":"","field":"entity_id","name":"Entity Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                                {"seqno":"","field":"role_name","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
                            ],
                            "edit_option":true,
                            "delete_option":true
                        }
                    ],
                    "api":"config/modifications",
                    "onSuccess":"Role_updated()"
                },
                "approver":{
                "roles":["Approver"],
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                        {"seqno":"","field":"entity_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                        {"seqno":"","field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                        {"seqno":"","field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                        {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["suspended","approved"]},
                        {"seqno":"","field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                        {"seqno":"","field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""}
    
                        ],
                        "edit_option":true,
                        "delete_option":false
                    }
                ],
                "onSuccess":"Role_approved()"
                
                },
                "cancel":{"api":"config","onSuccess":"Role_canceled()"}
            }
        }

    },
    "Document Config":{
        "controls":[
         {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"edit","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tooltip":"this is a test description","tag":"delete","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tooltip":"this is a test description","tag": "chartTemplates", "roles": ["Admin"], "name": "Document Config", "options": [],"function":"getChartTemplate","textContent": "Chart Templates"},
         {"type": "select", "tooltip":"this is a test description","tag": "items", "roles": ["Admin"], "name": "Document Config", "options": ["Document Data Templates","Document UI Templates","Document View Templates","HTML Template","Trigger Functions","Helper Functions"],"textContent": "Items"},
         {"type": "select", "tooltip":"this is a test description","tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [1,5,10,25,50,100], "textContent": "Rows/Page"},
        ],
        "Roles":["Admin"],
        "Document Data Templates":{
            "doc_title":"Document Data Template",
            "doc_title":"","getDataApi":"config/list_details",
            "key":"id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[
                            {"seqno":"","field":"doc_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document type","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}}, 
                            {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Affiliation ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"affiliation_id","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"doc_description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"doc_template","edit":true,"show":true,"control":"doc-template-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","lang":{"english":"Doc Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}                        
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/new",
                "onSuccess":"Role_created()",
                },
                "list":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                        "fields":[
                            {"seqno":"","field":"id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document type","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"affiliation_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"doc_description","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"doc_template","edit":false,"show":true,"control":"file","type":"file","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Doc Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}  
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/list_details",
                "onSuccess":"Role_listed()"
                },
                "update":{
                    "roles":["Admin"],  
                    "data":[

                    {  "helper":"none",
                        "fields":[
                            {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Affiliation ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"doc_description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"doc_template","edit":true,"show":true,"control":"doc-template-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","lang":{"english":"Doc Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document type","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                    "checklist":{
                        "checkpoints":[]
                    },
                    "api":"config/modifications"
                    

                },
                "approver":{
                "roles":["Approver"],
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                        {"seqno":"","field":"entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                        {"seqno":"","field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                        {"seqno":"","field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                        {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["suspended","approved"]},
                        {"seqno":"","field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                        {"seqno":"","field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""}
    
                        ],
                        "edit_option":true,
                        "delete_option":false
                    }
                ],
                "onSuccess":"Role_approved()"
                
                },
                "cancel":{"api":"config","onSuccess":"Role_canceled()"}
            }
        },
        "Document UI Templates":{
            "doc_title":"",
            "getDataApi":"config/list_details",
            "key":"id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[
                           {"seqno":"","field":"doc_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","lang": {"english": "Document Type", "german": "", "arabic": "", "french": ""}},
                           {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"ui_template","edit":true,"show":true,"control":"field-attribute-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
                           ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/new",
                "onSuccess":"Role_created()"
                
                },
                "list":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"doc_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Type","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"ui_template","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/list_details",
                "onSuccess":"Role_listed()"
                },
                "update":{
                    "roles":["Admin"],  
                    "data":[
                        {  "helper":"none",
                            "fields":[
                            {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"doc_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Type","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"ui_template","edit":true,"show":true,"control":"field-attribute-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
                        ],
                            "edit_option":true,
                            "delete_option":true
                        }
                    ],
                    "checklist":{
                        "checkpoints":[]
                    },
                    "api":"config/modifications"
                    

                },
                "approver":{
                "roles":["Approver"],
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"doc_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Type","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"ui_template","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
                        ],  
                        "edit_option":true,
                        "delete_option":false
                    }
                ],
                "onSuccess":"Role_approved()"
                
                },
                "cancel":{"api":"config","onSuccess":"Role_canceled()"}
            }
        },
        "Document View Templates":{
            "doc_title":"","getDataApi":"config/list_details",
            "key":"id",
            "attchment_files_path":"",
            "job":{
                "create":{ 
                "roles":["Admin"],   
                "data":[
                     {"helper":"none",
                        "fields":[
                           
                           {"seqno":"","field":"doc_view_template_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"seqno":"","field":"doc_view_template_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                           {"seqno":"","field": "description", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}}
                        ]
                     },
                     {"helper":"getDocTemplates1",
                        "fields":[{"seqno":"","field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document View HTML","german":"HTML-Ansicht","arabic":"عرض المستند HTML","french":"Vue HTML du document"}},]
                     },
                     {"helper":"none",
                        "fields":[
                           {"seqno":"","field":"html_template","edit":true,"show":true,"control":"textbox","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document Type","german":"Dokumenttyp","arabic":"نوع المستند","french":"Type de document"}},
                           {"seqno":"","field":"doc_data_template_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"seqno":"","field":"datamap","edit":true,"show":true,"control":"template-mapping-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                           {"seqno":"","field":"affiliation_id","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document View HTML","german":"HTML-Ansicht","arabic":"عرض المستند HTML","french":"Vue HTML du document"}},
                           {"seqno":"","field":"status","edit":true,"show":false,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document Type","german":"Dokumenttyp","arabic":"نوع المستند","french":"Type de document"}},
                           {"seqno":"","field":"remarks","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"seqno":"","field":"log","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                        ],
                        "edit_option":true,
                        "delete_option":true}
                     ],
                  "api":"config/new",
                  "onSuccess":"Template_created()"
                },
                "list":{
                  "roles":["Admin"],
                  "data":[
                     {"helper":"none",
                        "fields":[
                           {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"","field":"doc_view_template_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"seqno":"","field":"doc_view_template_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                           {"seqno":"","field":"html_template","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document View HTML","german":"HTML-Ansicht","arabic":"عرض المستند HTML","french":"Vue HTML du document"}},
                           {"seqno":"","field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document Type","german":"Dokumenttyp","arabic":"نوع المستند","french":"Type de document"}},
                           {"seqno":"","field":"doc_data_template_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"seqno":"","field":"datamap","edit":true,"show":true,"control":"template-mapping-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                           {"seqno":"","field":"affiliation_id","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document View HTML","german":"HTML-Ansicht","arabic":"عرض المستند HTML","french":"Vue HTML du document"}},
                           {"seqno":"","field":"status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document Type","german":"Dokumenttyp","arabic":"نوع المستند","french":"Type de document"}},
                           {"seqno":"","field":"remarks","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"seqno":"","field":"log","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}}   
                        ],
                        "edit_option":true,
                        "delete_option":true}
                     ],
                     "api":"template_config/list_details",
                     "onSuccess":"Template_listed()"
                  },
                "update":{
                    "roles":["Admin"],  
                    "data":[
                     {"helper":"none",
                        "fields":[
                           {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"","field":"doc_view_template_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"seqno":"","field":"doc_view_template_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                           {"seqno":"","field":"html_template","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document View HTML","german":"HTML-Ansicht","arabic":"عرض المستند HTML","french":"Vue HTML du document"}},
                           {"seqno":"","field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document Type","german":"Dokumenttyp","arabic":"نوع المستند","french":"Type de document"}},
                           {"seqno":"","field":"doc_data_template_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"seqno":"","field":"datamap","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                           {"seqno":"","field":"affiliation_id","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document View HTML","german":"HTML-Ansicht","arabic":"عرض المستند HTML","french":"Vue HTML du document"}},
                           {"seqno":"","field":"status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document Type","german":"Dokumenttyp","arabic":"نوع المستند","french":"Type de document"}},
                           {"seqno":"","field":"remarks","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"seqno":"","field":"log","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}}   
                        
                        ],
                        "edit_option":true,
                        "delete_option":true}
                     ],
                     "onSuccess":"Template_modified()",
                     "api":"config/modifications"
                    

                },
                "approver":{
                "roles":["Approver"],
                "data":[
                     {"helper":"none",
                        "fields":[
                           {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"","field":"doc_view_template_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"seqno":"","field":"doc_view_template_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                        ]
                     },
                     {"helper":"getHtmlTemplates",
                        "fields":[{"seqno":"","field":"html_template","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document View HTML","german":"HTML-Ansicht","arabic":"عرض المستند HTML","french":"Vue HTML du document"}},]
                     },
                     {"helper":"none",
                        "fields":[
                           
                           {"seqno":"","field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document Type","german":"Dokumenttyp","arabic":"نوع المستند","french":"Type de document"}},
                           {"seqno":"","field":"doc_data_template_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"seqno":"","field":"datamap","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                           {"seqno":"","field":"affiliation_id","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document View HTML","german":"HTML-Ansicht","arabic":"عرض المستند HTML","french":"Vue HTML du document"}},
                           {"seqno":"","field":"status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document Type","german":"Dokumenttyp","arabic":"نوع المستند","french":"Type de document"}},
                           {"seqno":"","field":"remarks","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"seqno":"","field":"log","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}}
                        ],
                        "edit_option":true,
                        "delete_option":true}
                     ],
                  "api":"template_config/list_details",
                  "onSuccess":""
                
                },
                "cancel":{"api":"config","onSuccess":"Role_canceled()"}
            }
        },
        "Trigger Functions":{
            "doc_terminology":[],
             "doc_title":"","getDataApi":"config/list_details",
            "key":"id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                  {  "helper":"getHelperFunction",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"","field":"helper_function","name":"Helper Function","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                        ],
                        "edit_option":true,
                        "delete_option":true
                    },
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"seqno":"","field":"trigger_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"seqno":"","field":"ui_template_id","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"seqno":"","field":"trigger_condition","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Condition","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"seqno":"","field":"control_id","name":"Control ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Control ID","german":"Steuerungs-ID","arabic":"معرف التحكم","french":"ID de contrôle"}},
                           {"seqno":"","field":"trigger_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Trigger Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"seqno":"","field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"seqno":"","field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","german":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"seqno":"","field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"seqno":"","field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}}

                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/new",
                "onSuccess":"Role_created()"
                
                },
                "list":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"seqno":"","field":"trigger_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"seqno":"","field":"ui_template_id","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"seqno":"","field":"trigger_condition","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Condition","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"seqno":"","field":"control_id","name":"Control ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Control ID","german":"Steuerungs-ID","arabic":"معرف التحكم","french":"ID de contrôle"}},
                           {"seqno":"","field":"trigger_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Trigger Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"seqno":"","field":"helper_function","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                           {"seqno":"","field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"seqno":"","field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","german":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"seqno":"","field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"seqno":"","field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}}
    
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/list_details",
                "onSuccess":"Role_listed()"
                },
                "update":{
                    "roles":["Admin"],  
                    "data":[
                        {  "helper":"none",
                            "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                              {"seqno":"","field":"trigger_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                              {"seqno":"","field":"ui_template_id","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                              {"seqno":"","field":"trigger_condition","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Condition","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                              {"seqno":"","field":"control_id","name":"Control ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Control ID","german":"Steuerungs-ID","arabic":"معرف التحكم","french":"ID de contrôle"}},
                              {"seqno":"","field":"trigger_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Trigger Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                              {"seqno":"","field":"helper_function","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                              {"seqno":"","field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                              {"seqno":"","field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","german":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                              {"seqno":"","field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                              {"seqno":"","field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}}

                           ],
                            "edit_option":true,
                            "delete_option":true
                        }
                    ],
                    "checklist":{
                        "checkpoints":[]
                    },
                    "api":"config/modifications"
                    

                },
                "approver":{
                "roles":["Approver"],
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"seqno":"","field":"trigger_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"seqno":"","field":"ui_template_id","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"seqno":"","field":"trigger_condition","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Condition","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"seqno":"","field":"control_id","name":"Control ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Control ID","german":"Steuerungs-ID","arabic":"معرف التحكم","french":"ID de contrôle"}},
                           {"seqno":"","field":"trigger_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Trigger Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"seqno":"","field":"helper_function","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                           {"seqno":"","field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"seqno":"","field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","german":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"seqno":"","field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"seqno":"","field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}}
                        ],  
                        "edit_option":true,
                        "delete_option":false
                    }
                ],
                "onSuccess":"Role_approved()"
                
                },
                "cancel":{"api":"config","onSuccess":"Role_canceled()"}
            }
        },

        "HTML Templates":{
            "doc_title":"HTML Template",
            "doc_title":"","getDataApi":"config/list_details",
            "key":"id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[
                            {"seqno":"","field":"id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"html","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document type","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"affiliation_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"description","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"status","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}}
                            
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/new",
                "onSuccess":"htmal_created()",
                },
                "list":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                        "fields":[
                            {"seqno":"","field":"id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"html","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document type","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"affiliation_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"description","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"status","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}}
                            
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/list_details",
                "onSuccess":"Role_listed()"
                },
                "update":{
                    "roles":["Admin"],  
                    "data":[

                    {  "helper":"none",
                        "fields":[
                            {"seqno":"","field":"id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"html","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document type","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"affiliation_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"description","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}}
                            
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                  ], 
                  "api":"config/modifications"
                    

                },
                "approver":{
                "roles":["Approver"],
                "data":[
                    {  "helper":"none",
                        "fields":[
                            {"seqno":"","field":"id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"html","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document type","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"affiliation_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"description","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}}
                        ],
                        "edit_option":true,
                        "delete_option":false
                    }
                ],
                "onSuccess":"Role_approved()"
                
                },
                "cancel":{"api":"config","onSuccess":"html_canceled()"}
            }
        },

        "Function Registry":{
            "doc_title":"","getDataApi":"config/list_details",
            "key":"id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[
                           {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"seqno":"","field":"helper_functions_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Helper Functions Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"seqno":"","field":"function_type","name":"Helper Function","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"source","options":["source","deposit","process"],"filter_type":"","filter_default_value":"","lang":{"english":"Type","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                           {"seqno":"","field":"frontorback","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"seqno":"","field":"helper_functions_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"seqno":"","field":"status","name":"Status","edit":false,"show":false,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"seqno":"","field":"remarks","name":"Remarks","edit":false,"show":false,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","g111erman":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"seqno":"","field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"seqno":"","field":"created_at","name":"Created At","edit":false,"show":false,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}},
                           {"seqno":"","field":"log","name":"Helper Function","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/new",
                "onSuccess":"Role_created()"
                
                },
                "list":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                        "fields":[
                           {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"seqno":"","field":"helper_functions_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Helper Functions Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"seqno":"","field":"function_type","name":"Helper Function","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"source","options":["source","deposit","process"],"filter_type":"","filter_default_value":"","lang":{"english":"Type","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                           {"seqno":"","field":"frontorback","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"seqno":"","field":"helper_functions_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"seqno":"","field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"seqno":"","field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","g111erman":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"seqno":"","field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"seqno":"","field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}},
                           {"seqno":"","field":"log","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/list_details",
                "onSuccess":"Role_listed()"
                },
                "update":{
                    "roles":["Admin"],  
                    "data":[
                        {  "helper":"none",
                            "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"seqno":"","field":"helper_functions_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Helper Functions Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"seqno":"","field":"function_type","name":"Helper Function","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","options":["source","deposit","process"],"filter_type":"","filter_default_value":"","lang":{"english":"Type","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                           {"seqno":"","field":"frontorback","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"seqno":"","field":"helper_functions_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"seqno":"","field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"seqno":"","field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","g111erman":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"seqno":"","field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"seqno":"","field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}},
                           {"seqno":"","field":"log","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}}
                        ],
                            "edit_option":true,
                            "delete_option":true
                        }
                    ],
                    "checklist":{
                        "checkpoints":[]
                    },
                    "api":"config/modifications"
                    

                },
                "approver":{
                "roles":["Approver"],
                "data":[
                    {  "helper":"none",
                        "fields":[
{"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                           {"seqno":"","field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"seqno":"","field":"helper_functions_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Helper Functions Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"seqno":"","field":"function_type","name":"Helper Function","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","options":["source","deposit","process"],"filter_type":"","filter_default_value":"","lang":{"english":"Type","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                           {"seqno":"","field":"frontorback","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"seqno":"","field":"helper_functions_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"seqno":"","field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"seqno":"","field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","g111erman":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"seqno":"","field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"seqno":"","field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}},
                           {"seqno":"","field":"log","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}}
                        ],  
                        "edit_option":true,
                        "delete_option":false
                    }
                ],
                "onSuccess":"Role_approved()"
                
                },
                "cancel":{"api":"config","onSuccess":"Role_canceled()"}
            }
        },
        "Image Registry": {
         "doc_title": "",
         "getDataApi": "config/list_details",
         "key": "id",
         "attchment_files_path": "",
         "job": {
            "create": {
                  "roles": ["Admin"],
                  "data": [
                     {
                        "helper": "none",
                        "fields": [
                              {"seqno": "", "field": "id", "name": "Id", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Unique identifier for the file", "default": "", "lang": {"english": "File Id", "german": "Datei-ID", "arabic": "معرف الملف", "french": "ID du fichier"}},
                              {"seqno": "", "field": "filename", "name": "Filename", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Name of the file", "default": "", "lang": {"english": "Filename", "german": "Dateiname", "arabic": "اسم الملف", "french": "Nom du fichier"}},
                              {"seqno": "", "field": "file_path", "name": "File Path", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Path where the file is stored", "default": "", "lang": {"english": "File Path", "german": "Dateipfad", "arabic": "مسار الملف", "french": "Chemin du fichier"}},
                              {"seqno": "", "field": "title", "name": "Title", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Title of the file", "default": "", "lang": {"english": "Title", "german": "Titel", "arabic": "العنوان", "french": "Titre"}},
                              {"seqno": "", "field": "description", "name": "Description", "edit": true, "show": true, "control": "textarea", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Description of the file", "default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno": "", "field": "affiliation_id", "name": "Affiliation ID", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Organization or affiliation identifier", "default": "", "lang": {"english": "Affiliation ID", "german": "Zugehörigkeits-ID", "arabic": "معرف الانتماء", "french": "ID d'affiliation"}},
                              {"seqno": "", "field": "status", "name": "Status", "edit": false, "show": false, "control": "select", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Current status of the file", "default": "active", "lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                              {"seqno": "", "field": "cretaed_at", "name": "Created At", "edit": false, "show": false, "control": "datetime", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "File creation timestamp", "default": "", "lang": {"english": "Created At", "german": "Erstellt am", "arabic": "تم الإنشاء في", "french": "Créé le"}},
                              {"seqno": "", "field": "log", "name": "Log", "edit": false, "show": false, "control": "textarea", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "System log information", "default": "", "lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}},
                              {"seqno": "", "field": "remarks", "name": "Remarks", "edit": true, "show": true, "control": "textarea", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Additional remarks or notes", "default": "", "lang": {"english": "Remarks", "german": "Bemerkungen", "arabic": "ملاحظات", "french": "Remarques"}}
                        ],
                        "edit_option": true,
                        "delete_option": true
                     }
                  ],
                  "api": "files/new",
                  "onSuccess": "File_created()"
            },
            "list": {
                  "roles": ["Admin"],
                  "data": [
                     {
                        "helper": "none",
                        "fields": [
                              {"seqno": "", "field": "id", "name": "Id", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Unique identifier for the file", "default": "", "lang": {"english": "File Id", "german": "Datei-ID", "arabic": "معرف الملف", "french": "ID du fichier"}},
                              {"seqno": "", "field": "filename", "name": "Filename", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Name of the file", "default": "", "lang": {"english": "Filename", "german": "Dateiname", "arabic": "اسم الملف", "french": "Nom du fichier"}},
                              {"seqno": "", "field": "file_path", "name": "File Path", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Path where the file is stored", "default": "", "lang": {"english": "File Path", "german": "Dateipfad", "arabic": "مسار الملف", "french": "Chemin du fichier"}},
                              {"seqno": "", "field": "title", "name": "Title", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Title of the file", "default": "", "lang": {"english": "Title", "german": "Titel", "arabic": "العنوان", "french": "Titre"}},
                              {"seqno": "", "field": "description", "name": "Description", "edit": true, "show": true, "control": "textarea", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Description of the file", "default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno": "", "field": "affiliation_id", "name": "Affiliation ID", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Organization or affiliation identifier", "default": "", "lang": {"english": "Affiliation ID", "german": "Zugehörigkeits-ID", "arabic": "معرف الانتماء", "french": "ID d'affiliation"}},
                              {"seqno": "", "field": "status", "name": "Status", "edit": true, "show": true, "control": "select", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Current status of the file", "default": "active", "lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                              {"seqno": "", "field": "cretaed_at", "name": "Created At", "edit": false, "show": true, "control": "datetime", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "File creation timestamp", "default": "", "lang": {"english": "Created At", "german": "Erstellt am", "arabic": "تم الإنشاء في", "french": "Créé le"}},
                              {"seqno": "", "field": "log", "name": "Log", "edit": false, "show": true, "control": "textarea", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "System log information", "default": "", "lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}},
                              {"seqno": "", "field": "remarks", "name": "Remarks", "edit": false, "show": true, "control": "textarea", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Additional remarks or notes", "default": "", "lang": {"english": "Remarks", "german": "Bemerkungen", "arabic": "ملاحظات", "french": "Remarques"}}
                        ],
                        "edit_option": true,
                        "delete_option": true
                     }
                  ],
                  "api": "config/list_details",
                  "onSuccess": "File_listed()"
            },
            "update": {
                  "roles": ["Admin"],
                  "data": [
                     {
                        "helper": "none",
                        "fields": [
                              {"seqno": "", "field": "id", "name": "Id", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Unique identifier for the file", "default": "", "lang": {"english": "File Id", "german": "Datei-ID", "arabic": "معرف الملف", "french": "ID du fichier"}},
                              {"seqno": "", "field": "filename", "name": "Filename", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Name of the file", "default": "", "lang": {"english": "Filename", "german": "Dateiname", "arabic": "اسم الملف", "french": "Nom du fichier"}},
                              {"seqno": "", "field": "file_path", "name": "File Path", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Path where the file is stored", "default": "", "lang": {"english": "File Path", "german": "Dateipfad", "arabic": "مسار الملف", "french": "Chemin du fichier"}},
                              {"seqno": "", "field": "title", "name": "Title", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Title of the file", "default": "", "lang": {"english": "Title", "german": "Titel", "arabic": "العنوان", "french": "Titre"}},
                              {"seqno": "", "field": "description", "name": "Description", "edit": true, "show": true, "control": "textarea", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Description of the file", "default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno": "", "field": "affiliation_id", "name": "Affiliation ID", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Organization or affiliation identifier", "default": "", "lang": {"english": "Affiliation ID", "german": "Zugehörigkeits-ID", "arabic": "معرف الانتماء", "french": "ID d'affiliation"}},
                              {"seqno": "", "field": "status", "name": "Status", "edit": true, "show": true, "control": "select", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Current status of the file", "default": "active", "lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                              {"seqno": "", "field": "cretaed_at", "name": "Created At", "edit": false, "show": false, "control": "datetime", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "File creation timestamp", "default": "", "lang": {"english": "Created At", "german": "Erstellt am", "arabic": "تم الإنشاء في", "french": "Créé le"}},
                              {"seqno": "", "field": "log", "name": "Log", "edit": false, "show": false, "control": "textarea", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "System log information", "default": "", "lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}},
                              {"seqno": "", "field": "remarks", "name": "Remarks", "edit": true, "show": true, "control": "textarea", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Additional remarks or notes", "default": "", "lang": {"english": "Remarks", "german": "Bemerkungen", "arabic": "ملاحظات", "french": "Remarques"}}
                        ],
                        "edit_option": true,
                        "delete_option": true
                     }
                  ],
                  "api": "files/modifications"
            },
            "approver": {
                  "roles": ["Approver"],
                  "data": [
                     {
                        "helper": "none",
                        "fields": [
                              {"seqno": "", "field": "id", "name": "Id", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Unique identifier for the file", "default": "", "lang": {"english": "File Id", "german": "Datei-ID", "arabic": "معرف الملف", "french": "ID du fichier"}},
                              {"seqno": "", "field": "filename", "name": "Filename", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Name of the file", "default": "", "lang": {"english": "Filename", "german": "Dateiname", "arabic": "اسم الملف", "french": "Nom du fichier"}},
                              {"seqno": "", "field": "file_path", "name": "File Path", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Path where the file is stored", "default": "", "lang": {"english": "File Path", "german": "Dateipfad", "arabic": "مسار الملف", "french": "Chemin du fichier"}},
                              {"seqno": "", "field": "title", "name": "Title", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Title of the file", "default": "", "lang": {"english": "Title", "german": "Titel", "arabic": "العنوان", "french": "Titre"}},
                              {"seqno": "", "field": "description", "name": "Description", "edit": false, "show": true, "control": "textarea", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Description of the file", "default": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                              {"seqno": "", "field": "affiliation_id", "name": "Affiliation ID", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "Organization or affiliation identifier", "default": "", "lang": {"english": "Affiliation ID", "german": "Zugehörigkeits-ID", "arabic": "معرف الانتماء", "french": "ID d'affiliation"}},
                              {"seqno": "", "field": "status", "name": "Status", "edit": true, "show": true, "control": "select", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Current status of the file", "default": "active", "lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                              {"seqno": "", "field": "cretaed_at", "name": "Created At", "edit": false, "show": true, "control": "datetime", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "File creation timestamp", "default": "", "lang": {"english": "Created At", "german": "Erstellt am", "arabic": "تم الإنشاء في", "french": "Créé le"}},
                              {"seqno": "", "field": "log", "name": "Log", "edit": false, "show": true, "control": "textarea", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "System log information", "default": "", "lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}},
                              {"seqno": "", "field": "remarks", "name": "Remarks", "edit": true, "show": true, "control": "textarea", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "Additional remarks or notes", "default": "", "lang": {"english": "Remarks", "german": "Bemerkungen", "arabic": "ملاحظات", "french": "Remarques"}}
                        ],
                        "edit_option": true,
                        "delete_option": false
                     }
                  ],
                  "onSuccess": "File_approved()"
            },
            "cancel": {"api": "files", "onSuccess": "File_canceled()"}
         }
      }
    },
    "App Config":{
        "controls":[
         {"type":"button","tooltip":"this is a test description","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"this is a test description","tag":"edit","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tooltip":"this is a test description","tag":"delete","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tooltip":"this is a test description","tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": ["Final Templates"],"textContent": "Items"},
         {"type": "select", "tooltip":"this is a test description","tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [1,5,10,25,50,100], "textContent": "Rows/Page"},
        ],
        "Roles":["Admin"],
        "Final Templates":{
             "doc_title":"","getDataApi":"config/list_details",
            "key":"role_id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                   {"helper":"none",
                     "fields":[
                            {"seqno":"","field":"App Configuration","edit":true,"show":true,"control":"app-config","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/new",
                "onSuccess":"Role_created()"
                
                },
                "list":{
                "roles":["Admin"],  
                "data":[
                    {  "helper":"none",
                        "fields":[
                           {"seqno":"","field": "description", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                            {"seqno":"","field":"id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"","field":"affiliation_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"","field":"template","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Final Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"status","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Status","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"log","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Log","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"seqno":"","field":"remarks","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"Remarks","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                        ],
                        "edit_option":true,
                        "delete_option":true
                    }
                ],
                "api":"config/list_details",
                "onSuccess":"Role_listed()"
                },
                "update":{
                    "roles":["Admin"],  
                    "data":[
                        {  "helper":"none",
                            "fields":[
                                 {"seqno":"","field":"App Configuration","edit":true,"show":true,"control":"app-config","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
                             ],
                            "edit_option":true,
                            "delete_option":true
                        }
                    ],
                    "checklist":{
                        "checkpoints":[]
                    },
                    "api":"config/modifications"
                    

                },
                "approver":{
                "roles":["Approver"],
                "data":[
                    {  "helper":"none",
                        "fields":[
                        {"seqno":"","field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                        {"seqno":"","field":"entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                        {"seqno":"","field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                        {"seqno":"","field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                        {"seqno":"","field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","values":["suspended","approved"]},
                        {"seqno":"","field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":""},
                        {"seqno":"","field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":""}
    
                        ],
                        "edit_option":true,
                        "delete_option":false
                    }
                ],
                "onSuccess":"Role_approved()"
                
                },
                "cancel":{"api":"config","onSuccess":"Role_canceled()"}
            }
        }
    } ,
    "DAQ Config":{
         "controls":[
         {"type":"button","tooltip":"Add","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tooltip":"Print","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"Edit","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tooltip":"Delete","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type":"button","tooltip":"Graph","tag":"graphs","roles":["Admin"],"name":"<i class='fa fa-chart-bar'></i> ","function":"graphInitialization()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type": "select", "tooltip":"this is a test description","tag": "chartTemplates", "roles": ["Admin"], "name": "DAQ Config", "options": [],"function":"getChartTemplate","textContent": "Chart Types"},
         {"type": "select", "tooltip":"this is a test description","tag": "items", "roles": ["Admin"], "name": "DAQ Config", "options": ["Env Measurements","Chart Templates"],"textContent": "Items"},
         {"type": "select", "tooltip":"this is a test description","tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [2,3,5,10,15,20,25,30,35,40,45,50], "textContent": "Rows/Page"},
        ],
         "Roles":["Admin"],
         "Env Measurements":{
            "doc_title":"","getDataApi":"config/list_details",
            "key":"id",
            "attchment_files_path":"",
            "job":{
               "create":{
                "roles":["Admin"],   
                "data":[
                    {"helper":"none",
                     "fields":[
                        {"seqno":"","field": "id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "ID", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                        {"seqno":"","field":"humidity","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Humidity", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"temperature","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Temperature", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"pressure","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Pressure", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"status","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Status", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"log","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Log", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"remarks","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Remarks", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        ],
                        "edit_option":true,
                        "delete_option":true
                  }
               ],
               "api":"config/new",
               "onSuccess":"Role_created()"
               },
               "list":{
                "roles":["Admin"],   
                "data":[
                    {"helper":"none",
                     "fields":[
                        {"seqno":"","field": "id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "ID", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                        {"seqno":"","field":"humidity","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Humidity", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"temperature","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Temperature", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"pressure","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Pressure", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"status","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Status", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"log","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Log", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"remarks","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Remarks", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        ],
                        "edit_option":true,
                        "delete_option":true
                  }
               ],
               "api":"config/list_details",
               "onSuccess":"Role_listed()"
               },
               "update":{
                "roles":["Admin"],   
                "data":[
                    {"helper":"none",
                     "fields":[
                        {"seqno":"","field": "id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "ID", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                        {"seqno":"","field":"humidity","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Humidity", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"temperature","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Temperature", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"pressure","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Pressure", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"status","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Status", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"log","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Log", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"remarks","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Remarks", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        ],
                        "edit_option":true,
                        "delete_option":true
                  }
               ],
               "api":"config/modifications"
               },
               "cancel":{"api":"config","onSuccess":"Role_canceled()"}
            }
         },
         "Chart Templates":{
            "doc_title":"","getDataApi":"config/list_details",
            "key":"id",
            "attchment_files_path":"",
            "job":{
               "create":{
                "roles":["Admin"],   
                "data":[
                    {"helper":"none",
                     "fields":[
                        {"seqno":"","field": "chart", "edit": true, "show": true, "control": "graphs-control", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "ID", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                     ],
                        "edit_option":true,
                        "delete_option":true
                  }
               ],
               "api":"config/new",
               "onSuccess":"Role_created()"
               },
               "list":{
                "roles":["Admin"],   
                "data":[
                    {"helper":"none",
                     "fields":[
                        {"seqno":"","field": "id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "ID", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                        {"seqno":"","field":"chart_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Chart Name", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"doc_type_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Doc Type ID", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"settings","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Template", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"description","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"status","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Status", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Log", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"seqno":"","field":"remarks","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"tooltip":"this is a test description","default":"","filter_type":"textbox","filter_default_value":"","lang": {"english": "Remarks", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        ],
                        "edit_option":true,
                        "delete_option":true
                  }
               ],
               "api":"config/list_details",
               "onSuccess":"Role_listed()"
               },
               "update":{
                "roles":["Admin"],   
                "data":[
                    {"helper":"none",
                     "fields":[
                        {"seqno":"","field": "chart", "edit": true, "show": true, "control": "graphs-control", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "tooltip":"this is a test description","default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "ID", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},    
                     ],
                        "edit_option":true,
                        "delete_option":true
                  }
               ],
               "api":"config/modifications"
               },
               "cancel":{"api":"config","onSuccess":"Role_canceled()"}
            }
         }
    },
    "Tab Config":{
      "controls":[
         {"type":"button","tooltip":"Add","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tooltip":"Print","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tooltip":"Edit","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tooltip":"Delete","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type":"button","tooltip":"Graph","tag":"graphs","roles":["Admin"],"name":"<i class='fa fa-chart-bar'></i> ","function":"graphInitialization()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type": "select", "tooltip":"this is a test description","tag": "chartTemplates", "roles": ["Admin"], "name": "DAQ Config", "options": [],"function":"getChartTemplate","textContent": "Chart Templates"},
         {"type": "select", "tooltip":"this is a test description","tag": "items", "roles": ["Admin"], "name": "DAQ Config", "options": ["Tab Configuration","Tab Registry"],"textContent": "Items"},
         {"type": "select", "tooltip":"this is a test description","tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [2,3,5,10,15,20,25,30,35,40,45,50], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Tab Configuration": {
         "doc_title": "",
         "getDataApi": "config/list_details",
         "key": "id",
         "attchment_files_path": "",
         "job": {
            "create": {
               "roles": ["Admin"],
               "data": [
               {
                  "helper": "none",
                  "fields": [
                     {
                     "seqno": "",
                     "field": "id",
                     "edit": false,
                     "show": true,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "ID",
                     "default": "",
                     "lang": {
                        "english": "ID",
                        "german": "ID",
                        "arabic": "المعرف",
                        "french": "Nom de l'onglet"
                     }
                     },
                     {
                     "seqno": "",
                     "field": "control_name",
                     "edit": true,
                     "show": true,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "Control Name",
                     "default": "",
                     "lang": {
                        "english": "Control Name",
                        "german": "Registername",
                        "arabic": "اسم التبويب",
                        "french": "Nom de l'onglet"
                     }
                     },
                     {
                     "seqno": "",
                     "field": "function_name",
                     "edit": true,
                     "show": true,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "Control Name",
                     "default": "",
                     "lang": {
                        "english": "Control Name",
                        "german": "Registername",
                        "arabic": "اسم التبويب",
                        "french": "Nom de l'onglet"
                     }
                     }
                  ]
               }
               ],
               "api": "config/new",
               "onSuccess": "Tab_created()"
            },
            "list": {
               "roles": ["Admin"],
               "data": [
               {
                  "helper": "none",
                  "fields": [
                     {
                     "seqno": "",
                     "field": "id",
                     "edit": false,
                     "show": false,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" },
                        { "event": "onselect", "function": "tab_onselect_trigger" }
                     ],
                     "mandatory": false,
                     "tooltip": "Unique Tab ID",
                     "default": "",
                     "filter_type": "textbox",
                     "filter_default_value": "",
                     "lang": {
                        "english": "ID",
                        "german": "ID",
                        "arabic": "المعرف",
                        "french": "Identifiant"
                     }
                     },
                     {
                     "seqno": "",
                     "field": "control_name",
                     "edit": false,
                     "show": true,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" },
                        { "event": "onselect", "function": "tab_onselect_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "Control Name",
                     "default": "",
                     "filter_type": "textbox",
                     "filter_default_value": "",
                     "lang": {
                        "english": "Control Name",
                        "german": "Registername",
                        "arabic": "اسم التبويب",
                        "french": "Nom de l'onglet"
                     }
                     },
                     {
                     "seqno": "",
                     "field": "function_name",
                     "edit": false,
                     "show": true,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" },
                        { "event": "onselect", "function": "tab_onselect_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "Tab Function Name",
                     "default": "",
                     "filter_type": "textbox",
                     "filter_default_value": "",
                     "lang": {
                        "english": "Function Name",
                        "german": "Gemeinsame Vorlage",
                        "arabic": "القالب المشترك للتبويب",
                        "french": "Modèle commun d'onglet"
                     }
                     }
                  ],
                  "edit_option": true,
                  "delete_option": true
               }
               ],
               "api": "config/list_details",
               "onSuccess": "Tab_listed()"
            },
            "update": {
               "roles": ["Admin"],
               "data": [
               {
                  "helper": "none",
                  "fields": [
                     {
                     "seqno": "",
                     "field": "id",
                     "edit": false,
                     "show": false,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" },
                        { "event": "onselect", "function": "tab_onselect_trigger" }
                     ],
                     "mandatory": false,
                     "tooltip": "Unique Tab ID",
                     "default": "",
                     "filter_type": "textbox",
                     "filter_default_value": "",
                     "lang": {
                        "english": "ID",
                        "german": "ID",
                        "arabic": "المعرف",
                        "french": "Identifiant"
                     }
                     },
                     {
                     "seqno": "",
                     "field": "control_name",
                     "edit": true,
                     "show": true,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" },
                        { "event": "onselect", "function": "tab_onselect_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "Control Name",
                     "default": "",
                     "filter_type": "textbox",
                     "filter_default_value": "",
                     "lang": {
                        "english": "Control Name",
                        "german": "Registername",
                        "arabic": "اسم التبويب",
                        "french": "Nom de l'onglet"
                     }
                     },
                     {
                     "seqno": "",
                     "field": "function_name",
                     "edit": true,
                     "show": true,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" },
                        { "event": "onselect", "function": "tab_onselect_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "Tab Function Name",
                     "default": "",
                     "filter_type": "textbox",
                     "filter_default_value": "",
                     "lang": {
                        "english": "Function Name",
                        "german": "Gemeinsame Vorlage",
                        "arabic": "القالب المشترك للتبويب",
                        "french": "Modèle commun d'onglet"
                     }
                     }
                     
                  ],
                  "edit_option": true,
                  "delete_option": true
               }
               ],
               "api": "config/modifications"
            },
            "cancel": { "api": "config", "onSuccess": "Tab_canceled()" }
         }
      },
      "Tab Registry": {
         "doc_title": "",
         "getDataApi": "config/list_details",
         "key": "id",
         "attchment_files_path": "",
         "job": {
            "create": {
               "roles": ["Admin"],
               "data": [
               {
                  "helper": "none",
                  "fields": [
                     {
                     "seqno": "",
                     "field": "tab_name",
                     "edit": true,
                     "show": false,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "Enter the Tab Name",
                     "default": "",
                     "lang": {
                        "english": "Tab Name",
                        "german": "Registername",
                        "arabic": "اسم التبويب",
                        "french": "Nom de l'onglet"
                     }
                     },
                     {
                     "seqno": "",
                     "field": "tab_common_template",
                     "edit": true,
                     "show": true,
                     "control": "tab-config",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "Enter the Tab Common Template",
                     "default": "",
                     "lang": {
                        "english": "Tab Common Template",
                        "german": "Gemeinsame Vorlage",
                        "arabic": "القالب المشترك للتبويب",
                        "french": "Modèle commun d'onglet"
                     }
                     }
                  ]
               }
               ],
               "api": "config/new",
               "onSuccess": "Tab_created()"
            },
            "list": {
               "roles": ["Admin"],
               "data": [
               {
                  "helper": "none",
                  "fields": [
                     {
                     "seqno": "",
                     "field": "id",
                     "edit": false,
                     "show": false,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" },
                        { "event": "onselect", "function": "tab_onselect_trigger" }
                     ],
                     "mandatory": false,
                     "tooltip": "Unique Tab ID",
                     "default": "",
                     "filter_type": "textbox",
                     "filter_default_value": "",
                     "lang": {
                        "english": "ID",
                        "german": "ID",
                        "arabic": "المعرف",
                        "french": "Identifiant"
                     }
                     },
                     {
                     "seqno": "",
                     "field": "tab_name",
                     "edit": false,
                     "show": false,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" },
                        { "event": "onselect", "function": "tab_onselect_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "Tab Name",
                     "default": "",
                     "filter_type": "textbox",
                     "filter_default_value": "",
                     "lang": {
                        "english": "Tab Name",
                        "german": "Registername",
                        "arabic": "اسم التبويب",
                        "french": "Nom de l'onglet"
                     }
                     },
                     {
                     "seqno": "",
                     "field": "tab_common_template",
                     "edit": false,
                     "show": true,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" },
                        { "event": "onselect", "function": "tab_onselect_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "Tab Common Template",
                     "default": "",
                     "filter_type": "textbox",
                     "filter_default_value": "",
                     "lang": {
                        "english": "Tab Common Template",
                        "german": "Gemeinsame Vorlage",
                        "arabic": "القالب المشترك للتبويب",
                        "french": "Modèle commun d'onglet"
                     }
                     }
                  ],
                  "edit_option": true,
                  "delete_option": true
               }
               ],
               "api": "config/list_details",
               "onSuccess": "Tab_listed()"
            },
            "update": {
               "roles": ["Admin"],
               "data": [
               {
                  "helper": "none",
                  "fields": [
                     {
                     "seqno": "",
                     "field": "id",
                     "edit": false,
                     "show": false,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" },
                        { "event": "onselect", "function": "tab_onselect_trigger" }
                     ],
                     "mandatory": false,
                     "tooltip": "Unique Tab ID",
                     "default": "",
                     "filter_type": "textbox",
                     "filter_default_value": "",
                     "lang": {
                        "english": "ID",
                        "german": "ID",
                        "arabic": "المعرف",
                        "french": "Identifiant"
                     }
                     },
                     {
                     "seqno": "",
                     "field": "tab_name",
                     "edit": true,
                     "show": false,
                     "control": "text",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "Tab Name",
                     "default": "",
                     "filter_type": "textbox",
                     "filter_default_value": "",
                     "lang": {
                        "english": "Tab Name",
                        "german": "Registername",
                        "arabic": "اسم التبويب",
                        "french": "Nom de l'onglet"
                     }
                     },
                     {
                     "seqno": "",
                     "field": "tab_common_template",
                     "edit": true,
                     "show": true,
                     "control": "tab-config",
                     "trigger": [
                        { "event": "onchange", "function": "tab_onchange_trigger" }
                     ],
                     "mandatory": true,
                     "tooltip": "Tab Common Template",
                     "default": "",
                     "filter_type": "textbox",
                     "filter_default_value": "",
                     "lang": {
                        "english": "Tab Common Template",
                        "german": "Gemeinsame Vorlage",
                        "arabic": "القالب المشترك للتبويب",
                        "french": "Modèle commun d'onglet"
                     }
                     }
                  ],
                  "edit_option": true,
                  "delete_option": true
               }
               ],
               "api": "config/modifications"
            },
            "cancel": { "api": "config", "onSuccess": "Tab_canceled()" }
         }
      }

   }
}


var global_settings={"language":"english", }

var MainConfig={
    "Entity Config":{
        "controls":[
         {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": ["Role Registry","Affiliation Registry","Resource Category","Resource Registry","Event Category","Message Template","Application Registry","Entity log" ],"trigger":"none","helper":"none","textContent": "Items"},
         {"type": "select", "tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [2,3,5,10,15,20,25,30,35,40,45,50], "textContent": "Rows/Page"},
        ],
        "Roles":["Admin"],
        "Role Registry":{
            "doc_title":"",
            "getDataApi":"config/list_details",
            "key":"role_id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[
                            {"seqno":"3","field":"role_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"seqno":"1","field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"seqno":"2","field":"role_name","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                            {"field":"role_id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"role_name","name":"Role Name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                                {"seqno":"1","field":"role_id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                                {"seqno":"3","field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                                {"seqno":"2","field":"role_name","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                        {"field":"entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["suspended","approved"]},
                        {"field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""}
    
                        ],
                        "edit_option":true,
                        "delete_option":false
                    }
                ],
                "onSuccess":"Role_approved()"
                
                },
                "cancel":{"api":"config","onSuccess":"Role_canceled()"},
                "view":{
                  "doc_view_template_id":"1",
                  "doc_view_template_name":"invoice1",
                  "onSuccess":"",
               }
            }
        },
        "Affiliation Registry":{
             "doc_title":"","getDataApi":"affiliation/list_details",
            "key":"affiliation_id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[
                            {"field":"affiliation_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Affiliation Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"resource_name","name":"Resource Name","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Resource Name","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"program","name":"Program","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"entity","name":"Entity","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"department","name":"Department","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Department","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"service","name":"Service","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Service","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"role","name":"Role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                        "fields":[
                            {"field":"affiliation_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Affiliation Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"resource_name","name":"Resource Name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Resource Name","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"program","name":"Program","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"entity","name":"Entity","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"department","name":"Department","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Department","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"service","name":"Service","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Service","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"role","name":"Role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                           "fields":[
                            {"field":"affiliation_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Affiliation Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"resource_name","name":"resource_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Resource Name","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"program","name":"Program","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"entity","name":"Entity","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"department","name":"Department","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Department","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"service","name":"Service","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Service","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"role","name":"Role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
                           ],
                            "edit_option":true,
                            "delete_option":true
                        }
                    ],
                    "checklist":{
                        "checkpoints":[]
                    },
                    "api":"affiliation/modifications"
                    

                },
                "approver":{
                "roles":["Approver"],
                "data":[
                    {  "helper":"none",
                        "fields":[
                            {"field":"affiliation_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Affiliation Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"resource_name","name":"Resource Name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Resource Name","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"program","name":"Program","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"entity","name":"Entity","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"department","name":"Department","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Department","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"service","name":"Service","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Service","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"role","name":"Role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
            "key":"event_type_id",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[
                            {"field":"event_type_id","name":"Event Type Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Event Type Id","german":"Ereignistyp-ID","arabic":"معرف نوع الحدث","french":"ID du type d'événement"}},
                            {"field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"event_type_name","name":"Event Type Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Event Type Name","german":"Ereignistypname","arabic":"اسم نوع الحدث","french":"Nom du type d'événement"}}
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
                            {"field":"event_type_id","name":"Event Type Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Event Type Id","german":"Ereignistyp-ID","arabic":"معرف نوع الحدث","french":"ID du type d'événement"}},
                            {"field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"event_type_name","name":"Event Type Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_helper":"getEventType","filter_default_value":"","lang":{"english":"Event Type Name","german":"Ereignistypname","arabic":"اسم نوع الحدث","french":"Nom du type d'événement"}}
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
                            {"field":"event_type_id","name":"Event Type Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Event Type Id","german":"Ereignistyp-ID","arabic":"معرف نوع الحدث","french":"ID du type d'événement"}},
                            {"field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"event_type_name","name":"Event Type Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Event Type Name","german":"Ereignistypname","arabic":"اسم نوع الحدث","french":"Nom du type d'événement"}}
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
                            {"field":"entity_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                            {"field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                            {"field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                            {"field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["suspended","approved"]},
                            {"field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                            {"field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""}
        
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
            "key":"resource_type_id",        
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[
                            {"field":"resource_type_id","name":"Resource Type Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Resource Type Id","german":"Ereignistyp-ID","arabic":"معرف نوع الحدث","french":"ID du type d'événement"}},
                            {"field":"entity_id","name":"Entity Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"resource_type_name","name":"Resource Type Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Resource Type Name","german":"Ereignistypname","arabic":"اسم نوع الحدث","french":"Nom du type d'événement"}}
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
                            {"field":"resource_type_id","name":"Resource Type Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Resource Type Id","german":"Ereignistyp-ID","arabic":"معرف نوع الحدث","french":"ID du type d'événement"}},
                            {"field":"entity_id","name":"Entity Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"resource_type_name","name":"Resource Type Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Resource Type Name","german":"Ereignistypname","arabic":"اسم نوع الحدث","french":"Nom du type d'événement"}}
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
                            {"field":"resource_type_id","name":"Resource Type Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Resource Type Id","german":"Ereignistyp-ID","arabic":"معرف نوع الحدث","french":"ID du type d'événement"}},
                            {"field":"entity_id","name":"Entity Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"resource_type_name","name":"Resource Type Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Resource Type Name","german":"Ereignistypname","arabic":"اسم نوع الحدث","french":"Nom du type d'événement"}}
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
                            {"field":"entity_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                            {"field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                            {"field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                            {"field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["suspended","approved"]},
                            {"field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                            {"field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""}
        
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
             "doc_title":"","getDataApi":"resource/list_details",
            "key":"resource_id",
            "attchment_files_path":"",
            "controls": [
               {"type": "button", "tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
               {"type": "button", "tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "calendar", "roles": ["Admin", "User"], "name": "<i class='fa fa-calendar'></i> ", "function": "fullCalendar()", "class": "btn btn-primary btn-xs my-xs-btn"}
            ],
            "job": {
               "create":{
                     "roles":["Admin"],
                     "data":[
                        {"helper":"getcurrentuserdetails",
                        "fields":[
                              {"seqno":4,"field":"entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"4"},
                              {"seqno":7,"field":"entityname","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""}
                           ]
                        },
                        {"helper":"getresorceCategories",
                        "fields":[
                           {"seqno":5,"field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["cat1","cat2"]}
                           ]
                        },
                        {"helper":"get_affiliation",
                           "fields":[
                              {"field":"affiliation_id","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":"get_affiliation"}
                              ]
                           },
                        {  "helper":"none",
                           "fields":[    
                              {"field":"person_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""},
                              {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""},
                              {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""},
                              {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""},
                              {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""},
                              {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""},
                              {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""},
                              {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""}, 
                              {"field":"entry_status","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""},
                              {"field":"archive","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""},
                              {"field":"photo","edit":true,"show":true,"control":"file","type":"image","formats":"jpg,bmp,pdf,png","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"photo1","edit":true,"show":true,"control":"attachment-control","type":"image","formats":"jpg,bmp,pdf,png","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"Audio","edit":true,"show":true,"control":"attachment-control","type":"audio","formats":"jpg,bmp,pdf,png","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"video","edit":true,"show":true,"control":"attachment-control","type":"video","formats":"jpg,bmp,pdf,png","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"certificate","edit":true,"show":true,"control":"attachment-control","type":"document","formats":"jpg,bmp,pdf,png","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"schedule","edit":true,"show":true,"control":"schedule-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                              
                              //{"field":"Passport Photo","edit":true,"show":true,"control":"AttachmentControl","type":"image","formats":"jpg,bmp,pdf,png","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              //{"field":"Voice Consent","edit":true,"show":true,"control":"AttachmentControl","type":"audio","formats":"mp3,wav","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, [Complete the types]
                              //{"field":"Video Consent","edit":true,"show":true,"control":"AttachmentControl","type":"video","formats":"mp4,mpeg,flv","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              //{"field":"Bank Statement","edit":true,"show":true,"control":"AttachmentControl","type":"file","formats":"jpg,bmp,pdf,xlxs,doc,docx","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              //{"field":"Degree Certificate","edit":true,"show":true,"control":"QRControl","type":"file","formats":"jpg,bmp,pdf,xlxs,doc,docx","mode":"link/encoding","encrypt":"true/false","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
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
                              {"field": "person_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Person ID", "german": "Personalausweis", "arabic": "معرف الشخص", "french": "ID de personne"}},
                              {"field": "resource_name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Resource Name", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}},
                              {"field": "affiliation_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Affiliation ID", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}},
                              {"field": "entity_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Entity ID", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}},
                              {"field": "resource_category", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"dropdown","filter_helper":"getResourceCateory","filter_default_value":["Doctor","Teacher","Admin"],"lang": {"english": "Category", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}},
                              {"field": "details", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Details", "german": "Einzelheiten", "arabic": "تفاصيل", "french": "Détails"}},
                              {"field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                              {"field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                              {"field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                              {"field": "alert_preference", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                              {"field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Status-Abfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                              {"field": "entry_status", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Entry Status", "german": "Eintragsstatus", "arabic": "حالة الإدخال", "french": "Statut d'entrée"}},
                              {"field": "role", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"dropdown","filter_helper":"getRole","lang": {"english": "Role", "german": "Rolle", "arabic": "الدور", "french": "Rôle"}},
                              {"field": "archive", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Archive", "german": "Archiv", "arabic": "أرشيف", "french": "Archive"}},
                              {"field": "photo", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Photo", "german": "", "arabic": "", "french": ""}},
                              {"field": "schedule", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Schedule", "german": "", "arabic": "", "french": ""}}
                           ],
                           "edit_option":true,
                           "delete_option":true
                        },
                        {  "helper":"getentityname",
                           "fields":[
                              {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
                              {"field":"person_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":" entity_id","edit":false,"show":false,"control":"number","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false, "default":""},
                              {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                              {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"schedule","edit":true,"show":true,"control":"schedule-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {"helper":"getentityname",
                           "fields":[
                                 {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
                              {"field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {"helper":"getresorceCategories",
                        "fields":[
                           {"field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {  "helper":"none",
                           "fields":[    
                              {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                              {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        }
                     ]
                     },
                     "list":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getentityname",
                        "fields":[
                              {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {  "helper":"none",
                        
                           "fields":[    
                              {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                              {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                              {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        }
                     ]
                     },
                     "update":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getentityname",
                        "fields":[
                              {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {  "helper":"none",
                        
                           "fields":[    
                              {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                              {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                              {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
            "key":"message_id",
            "controls": [
               {"type": "button", "tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
               {"type": "button", "tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"}
            ],
            "job": {
               "create":{
                  "roles":["Admin"],
                  "data":[
                     {  "helper":"none",
                        "fields": [
                           {"field": "message_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert ID", "german": "Alarm-ID", "arabic": "معرف التنبيه", "french": "ID d'alerte"}},
                           {"field": "entity_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                           {"field": "category", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Target Category", "german": "Zielkategorie", "arabic": "فئة الهدف", "french": "Catégorie cible"}},
                           {"field": "message_body", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Message Body", "german": "Nachrichtenkörper", "arabic": "نص الرسالة", "french": "Corps du message"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                     }
                  ],
                  "api":"message/new",
                  "key":"message_id"
               },
               "list":{
                     "roles":["Admin"],
                     "data":[
                        {  "helper":"none",
                           "fields": [
                              {"field": "message_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Alert ID", "german": "Alarm-ID", "arabic": "معرف التنبيه", "french": "ID d'alerte"}},
                              {"field": "entity_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                              {"field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Target Category", "german": "Zielkategorie", "arabic": "فئة الهدف", "french": "Catégorie cible"}},
                              {"field": "message_body", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Message Body", "german": "Nachrichtenkörper", "arabic": "نص الرسالة", "french": "Corps du message"}}
                           ],
                           "edit_option":true,
                           "delete_option":true
                        }
                     ],
                     "api":"message/list_details",
                     "key":"message_id"
                  },
               "update":{
                  "roles":["Admin"],
                  "data":[
                     {  "helper":"none",
                        "fields": [
                           {"field": "message_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert ID", "german": "Alarm-ID", "arabic": "معرف التنبيه", "french": "ID d'alerte"}},
                           {"field": "entity_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                           {"field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Target Category", "german": "Zielkategorie", "arabic": "فئة الهدف", "french": "Catégorie cible"}},
                           {"field": "message_body", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Message Body", "german": "Nachrichtenkörper", "arabic": "نص الرسالة", "french": "Corps du message"}}
                        ],
                        "edit_option":true,
                        "delete_option":true
                     }
                  ],
                  "api":"message/modifications",
                  "key":"message_id"
               },
               "cancel":{
                  "api":"message",
                  "key":"message_id"
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
                              {"field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {"helper":"getresorceCategories",
                        "fields":[
                           {"field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {  "helper":"none",
                           "fields":[    
                              {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                              {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        }
                     ]
                     },
                     "list":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getentityname",
                        "fields":[
                              {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {  "helper":"none",
                        
                           "fields":[    
                              {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                              {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                              {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        }
                     ]
                     },
                     "update":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getentityname",
                        "fields":[
                              {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {  "helper":"none",
                        
                           "fields":[    
                              {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                              {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                              {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
            "key":"app_registry_id",
            "attchment_files_path":"",
            "controls": [
               {"type": "button", "tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
               {"type": "button", "tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
               {"type": "button", "tag": "calendar", "roles": ["Admin", "User"], "name": "<i class='fa fa-calendar'></i> ", "function": "fullCalendar()", "class": "btn btn-primary btn-xs my-xs-btn"}
            ],
            "job": {
               "create":{
                     "roles":["Admin"],
                     "data":[
                        {  "helper":"none",
                           "fields":[
                              {"field": "app_registry_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "App Registry ID", "german": "Personalausweis", "arabic": "معرف الشخص", "french": "ID de personne"}},
                              {"field": "app_name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "App Name", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}},
                              {"field": "app_lisence", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "App Lisence", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}},
                              {"field": "app_apis", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"","filter_helper":"getResourceCateory","filter_default_value":["Doctor","Teacher","Admin"],"lang": {"english": "App APIs", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}}
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
                              {"field": "app_registry_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "App Registry ID", "german": "Personalausweis", "arabic": "معرف الشخص", "french": "ID de personne"}},
                              {"field": "app_name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "App Name", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}},
                              {"field": "app_lisence", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "App Lisence", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}},
                              {"field": "app_apis", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_helper":"getResourceCateory","filter_default_value":["Doctor","Teacher","Admin"],"lang": {"english": "App APIs", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}}
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
                              {"field": "app_registry_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "App Registry ID", "german": "Personalausweis", "arabic": "معرف الشخص", "french": "ID de personne"}},
                              {"field": "app_name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "App Name", "german": "Ressourcenname", "arabic": "اسم المورد", "french": "Nom de la ressource"}},
                              {"field": "app_lisence", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "App Lisence", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}},
                              {"field": "app_apis", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"","filter_helper":"getResourceCateory","filter_default_value":["Doctor","Teacher","Admin"],"lang": {"english": "App APIs", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID d'entité"}}
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
                              {"field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {"helper":"getresorceCategories",
                        "fields":[
                           {"field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {  "helper":"none",
                           "fields":[    
                              {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                              {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        }
                     ]
                     },
                     "list":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getentityname",
                        "fields":[
                              {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {  "helper":"none",
                        
                           "fields":[    
                              {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                              {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                              {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        }
                     ]
                     },
                     "update":{
                     "roles":["admin"],
                     "data":[
                        {"helper":"getentityname",
                        "fields":[
                              {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                           ]
                        },
                        {  "helper":"none",
                        
                           "fields":[    
                              {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                              {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                              {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                              {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
        "Entity log":{} 

    },
    "Network Config":{
      "controls":[
         {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": ["Entity Category","Entity Registry","Network Log"], "function": "","textContent": "Items"},
         {"type": "select", "tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [2,3,5,10,15,20,25,30,35,40,45,50], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Entity Category":{
        "db_name":"event_scheduler2025",
        "tab_name":"Entity Category",
        "table_name":"entity_categories",
         "doc_title":"","getDataApi":"config/list_details",
        "key": "entity_id",
        "controls":[
           {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
           {"type":"button","tag":"backward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"left","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"right","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"forward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"refresh","roles":["Admin","Approver"],"name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],   
              "data":[
                 {  "helper":"none",
                    "fields":[   
                       {"field":"entity_type_id","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"entity_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"status","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"draft"},
                       {"field":"log","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":" "}
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
                        {"field":"entity_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Entity Category ID","german":"Entitätskategorie-ID","arabic":"معرف فئة الكيان","french":"ID de catégorie d'entité"}},
                        {"field":"entity_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Entity Category Name","german":"Entitätskategoriename","arabic":"اسم فئة الكيان","french":"Nom de catégorie d'entité"}},
                        {"field":"status","name":"Type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                        {"field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"","filter_default_value":"","lang":{"english":"Log Status","german":"Protokollstatus","arabic":"حالة السجل","french":"Statut du journal"}}
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
                      {"field":"entity_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Category ID","german":"Entitätskategorie-ID","arabic":"معرف فئة الكيان","french":"ID de catégorie d'entité"}},
                      {"field":"entity_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Category Name","german":"Entitätskategoriename","arabic":"اسم فئة الكيان","french":"Nom de catégorie d'entité"}},
                      {"field":"status","name":"Type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                      {"field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"textbox","filter_default_value":"","lang":{"english":"Log Status","german":"Protokollstatus","arabic":"حالة السجل","french":"Statut du journal"}}
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
                      {"field":"entity_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Category ID","german":"Entitätskategorie-ID","arabic":"معرف فئة الكيان","french":"ID de catégorie d'entité"}},
                      {"field":"entity_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Category Name","german":"Entitätskategoriename","arabic":"اسم فئة الكيان","french":"Nom de catégorie d'entité"}},
                      {"field":"status","name":"Type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                      {"field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"textbox","filter_default_value":"","lang":{"english":"Log Status","german":"Protokollstatus","arabic":"حالة السجل","french":"Statut du journal"}}
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
           {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
           {"type":"button","tag":"backward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"left","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"right","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"forward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"refresh","roles":["Admin","Approver"],"name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],   
              "data":[
                 {  "helper":"none",
                    "fields":[    
                       {"field":"entity_id","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"entity_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"entry_status","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"draft"},
                       {"field":"ftp_path","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"username","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"password","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"affiliation_id","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                     ]
                 },
                 {"helper":"getEntityTypes",
                    "fields":[
                       {"field":"entity_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":"entityTypes"}
  
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
                       {"field":"entity_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Id", "german": "Ausweis", "arabic": "هوية", "french": "Identifiant"}},
                       {"field":"entity_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Name", "german": "Name", "arabic": "اسم", "french": "Nom"}},
                       {"field":"entity_type","name":"Type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Type", "german": "Typ", "arabic": "نوع", "french": "Type"}},
                       {"field":"entry_status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english": "Status", "german": "Status", "arabic": "حالة", "french": "Statut"}},
                       {"field":"remark","name":"Remarks","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english": "Remarks", "german": "Bemerkungen", "arabic": "تعليقات", "french": "Remarques"}},
                       {"field":"change_log","name":"Log","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Log", "german": "Protokoll", "arabic": "سجل", "french": "Journal"}},
                       {"field":"ftp_path","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "FTP Path", "german": "Name", "arabic": "اسم", "french": "Nom"}},
                       {"field":"username","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Username", "german": "Name", "arabic": "اسم", "french": "Nom"}},
                       {"field":"password","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Password", "german": "Name", "arabic": "اسم", "french": "Nom"}},
                       {"field":"affiliation_id","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english": "Affiliation Id", "german": "Name", "arabic": "اسم", "french": "Nom"}}
                       
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
                       {"field":"entity_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"entity_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"entity_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"]},
                       {"field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""},
                       {"field":"change_log","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""},
                       {"field":"ftp_path","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"username","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"password","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 },
                 {"helper":"getEntityTypes",
                    "fields":[
                       {"field":"entity_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":"entityTypes"}
  
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
                          {"field":"entity_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["suspended","approved"]},
                          {"field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""},
                          {"field":"ftp_path","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"username","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"password","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"affiliation_id","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
  
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
         {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": ["Doc_status_type","system log","Com Settings","API Queue"], "function": "","textContent": "Items"},
         {"type": "select", "tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [2,3,5,10,15,20,25,30,35,40,45,50], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Doc_status_type":{
         "doc_title":"","getDataApi":"config/list_details",
        "key": "doc_status_type_id",
        "controls":[
           {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
           {"type":"button","tag":"backward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"left","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"right","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"forward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"refresh","roles":["Admin","Approver"],"name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],   
              "data":[
                 {  "helper":"none",
                    "fields":[   
                       {"field":"doc_status_type_id","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"doc_status_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"log","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"draft"}
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
                     {"field":"doc_status_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"doc_status_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Document Status Type","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Status Log","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
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
                     {"field":"doc_status_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"doc_status_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"textbox","filter_default_value":"","lang":{"english":"Status Log","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
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
                     {"field":"doc_status_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"doc_status_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"textbox","filter_default_value":"","lang":{"english":"Status Log","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
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
           {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
           {"type":"button","tag":"backward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"left","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"right","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"forward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"refresh","roles":["Admin","Approver"],"name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],   
              "data":[
                 {  "helper":"none",
                    "fields":[   
                       {"field":"doc_status_type_id","edit":true,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"doc_status_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"log","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"draft"}
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
                     {"field":"id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"domain","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Domain","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"body","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Body","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"field":"endpoint","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Endpoint","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"method","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Method","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Status ","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}

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
                     {"field":"doc_status_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"doc_status_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"textbox","filter_default_value":"","lang":{"english":"Status Log","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
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
                     {"field":"doc_status_type_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"doc_status_type","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Document Status Type","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"log","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"filter_type":"textbox","filter_default_value":"","lang":{"english":"Status Log","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
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
         {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tag":"edit","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tag":"delete","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type":"button","tag":"maps","roles":["Admin"],"name":"<i class='bi bi-map-fill'><i> ","function":"collectSelectedData()","class":"btn btn-secondary btn-sm"},
         {"type": "select", "tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": [ "Event Schedule","Alert Schedule","Appointment Schedule","Event Log","Subscriber Registry","Subscriber Log"], "function": "","textContent": "Items"},
         {"type": "select", "tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [2,3,5,10,15,20,25,30,35,40,45,50], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Event Schedule":{
        "db_name":"event_scheduler2025",
        "table_name":"resource_profile",
         "doc_title":"","getDataApi":"event/list_details",
        "key":"event_id",
        "controls": [
           {"type": "button", "tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
           {"type": "button", "tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"}
        ],
        "job": {
        "create":{
              "roles":["Admin"],
              "data":[
               
                {  "helper":"none",
                   "fields":[
                      {"field": "event_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                      {"field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                      {"field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                      {"field": "category", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                      {"field": "host_entity_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Host Entity ID", "german": "Host-Entitäts-ID", "arabic": "معرف الكيان المضيف", "french": "ID d'entité hôte"}},
                      {"field": "subscriber_limit", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber Limit", "german": "Teilnehmerlimit", "arabic": "حد المشتركين", "french": "Limite d'abonnés"}},
                      {"field": "terms", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Terms", "german": "Bedingungen", "arabic": "الشروط", "french": "Conditions"}},
                      {"field": "event_ids", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Related Event IDs", "german": "Verwandte Ereignis-IDs", "arabic": "معرفات الأحداث المرتبطة", "french": "ID d'événements associés"}},
                      {"field": "from_datime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Start DateTime", "german": "Startdatum und -zeit", "arabic": "تاريخ ووقت البدء", "french": "Date et heure de début"}},
                      {"field": "to_datime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "End DateTime", "german": "Enddatum und -zeit", "arabic": "تاريخ ووقت الانتهاء", "french": "Date et heure de fin"}},
                      {"field": "venue", "edit": true, "show": true, "control": "venue-location-control", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Venue", "german": "Veranstaltungsort", "arabic": "مكان الحدث", "french": "Lieu"}}
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
                        {"field": "event_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                        {"field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                        {"field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                        {"field": "category", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"dropdown","filter_helper":"getEventType","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                        {"field": "host_entity_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Host Entity ID", "german": "Host-Entitäts-ID", "arabic": "معرف الكيان المضيف", "french": "ID d'entité hôte"}},
                        {"field": "subscriber_limit", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber Limit", "german": "Teilnehmerlimit", "arabic": "حد المشتركين", "french": "Limite d'abonnés"}},
                        {"field": "terms", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Terms", "german": "Bedingungen", "arabic": "الشروط", "french": "Conditions"}},
                        {"field": "event_ids", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Related Event IDs", "german": "Verwandte Ereignis-IDs", "arabic": "معرفات الأحداث المرتبطة", "french": "ID d'événements associés"}},
                        {"field": "from_datime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"datetime","filter_default_value":"","lang": {"english": "Start DateTime", "german": "Startdatum und -zeit", "arabic": "تاريخ ووقت البدء", "french": "Date et heure de début"}},
                        {"field": "to_datime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"datetime","filter_default_value":"","lang": {"english": "End DateTime", "german": "Enddatum und -zeit", "arabic": "تاريخ ووقت الانتهاء", "french": "Date et heure de fin"}},
                        {"field": "venue", "edit": true, "show": true, "control": "venue-location-control", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"address","filter_default_value":"","lang": {"english": "Venue", "german": "Veranstaltungsort", "arabic": "مكان الحدث", "french": "Lieu"}}
                      ]
                    ,
                    "edit_option":true,
                    "delete_option":true
                 },
                 {  "helper":"getentityname",
                    "fields":[
                       {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
                    {"field": "event_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                    {"field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                    {"field": "description", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}},
                    {"field": "category", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                    {"field": "host_entity_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Host Entity ID", "german": "Host-Entitäts-ID", "arabic": "معرف الكيان المضيف", "french": "ID d'entité hôte"}},
                    {"field": "subscriber_limit", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber Limit", "german": "Teilnehmerlimit", "arabic": "حد المشتركين", "french": "Limite d'abonnés"}},
                    {"field": "terms", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Terms", "german": "Bedingungen", "arabic": "الشروط", "french": "Conditions"}},
                    {"field": "event_ids", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Related Event IDs", "german": "Verwandte Ereignis-IDs", "arabic": "معرفات الأحداث المرتبطة", "french": "ID d'événements associés"}},
                    {"field": "from_datime", "edit": false, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Start DateTime", "german": "Startdatum und -zeit", "arabic": "تاريخ ووقت البدء", "french": "Date et heure de début"}},
                    {"field": "to_datime", "edit": false, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "End DateTime", "german": "Enddatum und -zeit", "arabic": "تاريخ ووقت الانتهاء", "french": "Date et heure de fin"}},
                    {"field": "venue", "edit": true, "show": true, "control": "venue-location-control", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Venue", "german": "Veranstaltungsort", "arabic": "مكان الحدث", "french": "Lieu"}}
                  ]
                ,
                "edit_option":true,
                "delete_option":true
             },
             {  "helper":"getentityname",
                "fields":[
                   {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
                       {"field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 },
                 {"helper":"getresorceCategories",
                 "fields":[
                    {"field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 },
                 {  "helper":"none",
                    "fields":[    
                       {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                       {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 }
              ]
              },
              "list":{
              "roles":["admin"],
              "data":[
                 {"helper":"getentityname",
                 "fields":[
                       {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 },
                 {  "helper":"none",
                 
                    "fields":[    
                       {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                       {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                       {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 }
              ]
              },
              "update":{
              "roles":["admin"],
              "data":[
                 {"helper":"getentityname",
                 "fields":[
                       {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 },
                 {  "helper":"none",
                 
                    "fields":[    
                       {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                       {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                       {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
           {"type": "button", "tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
           {"type": "button", "tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"}
        ],
        "job": {
        "create":{
              "roles":["Admin"],
              "data":[
                 {  "helper":"none",
                    "fields":[
                        {"field": "alert_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert ID", "german": "Alarm-ID", "arabic": "معرف التنبيه", "french": "ID d'alerte"}},
                        {"field": "event_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                        {"field": "target_category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Target Category", "german": "Zielkategorie", "arabic": "فئة الهدف", "french": "Catégorie cible"}},
                        {"field": "message_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Message ID", "german": "Nachrichten-ID", "arabic": "معرف الرسالة", "french": "ID du message"}},
                        {"field": "alert_datetime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert DateTime", "german": "Alarmdatum und -zeit", "arabic": "تاريخ ووقت التنبيه", "french": "Date et heure d'alerte"}}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 },
                 {  "helper":"getentityname",
                    "fields":[
                       {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
                        {"field": "alert_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Alert ID", "german": "Alarm-ID", "arabic": "معرف التنبيه", "french": "ID d'alerte"}},
                        {"field": "event_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                        {"field": "target_category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Target Category", "german": "Zielkategorie", "arabic": "فئة الهدف", "french": "Catégorie cible"}},
                        {"field": "message_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Message ID", "german": "Nachrichten-ID", "arabic": "معرف الرسالة", "french": "ID du message"}},
                        {"field": "alert_datetime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert DateTime", "german": "Alarmdatum und -zeit", "arabic": "تاريخ ووقت التنبيه", "french": "Date et heure d'alerte"}}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 },
                 {  "helper":"getentityname",
                    "fields":[
                       {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
                        {"field": "alert_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert ID", "german": "Alarm-ID", "arabic": "معرف التنبيه", "french": "ID d'alerte"}},
                        {"field": "event_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                        {"field": "target_category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Target Category", "german": "Zielkategorie", "arabic": "فئة الهدف", "french": "Catégorie cible"}},
                        {"field": "message_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Message ID", "german": "Nachrichten-ID", "arabic": "معرف الرسالة", "french": "ID du message"}},
                        {"field": "alert_datetime", "edit": true, "show": true, "control": "datetime-local", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert DateTime", "german": "Alarmdatum und -zeit", "arabic": "تاريخ ووقت التنبيه", "french": "Date et heure d'alerte"}}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 },
                 {  "helper":"getentityname",
                    "fields":[
                       {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
                       {"field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 },
                 {"helper":"getresorceCategories",
                 "fields":[
                    {"field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 },
                 {  "helper":"none",
                    "fields":[    
                       {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                       {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 }
              ]
              },
              "list":{
              "roles":["admin"],
              "data":[
                 {"helper":"getentityname",
                 "fields":[
                       {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 },
                 {  "helper":"none",
                 
                    "fields":[    
                       {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                       {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                       {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 }
              ]
              },
              "update":{
              "roles":["admin"],
              "data":[
                 {"helper":"getentityname",
                 "fields":[
                       {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                    ]
                 },
                 {  "helper":"none",
                 
                    "fields":[    
                       {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                       {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                       {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                       {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
           {"type": "button", "tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
           {"type": "button", "tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],
              "data":[
                    {  "helper":"getEventList",
                       "fields":[
                          {"field": "events", "edit": true, "show": true, "control": "dropdown", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "","onchange":"handleEventSelection","filter_type":"textbox","filter_default_value":"","lang": {"english": "Appointment ID", "german": "Termin-ID", "arabic": "معرف الموعد", "french": "ID de rendez-vous"}},
                       ],
                       "edit_option":true,
                       "delete_option":true
                    },
                    {  "helper":"ResourceType",
                       "fields":[
                          {"field": "events", "edit": true, "show": true, "control": "dropdown", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "","onchange":"handleEventSelection","filter_type":"textbox","filter_default_value":"","lang": {"english": "Appointment ID", "german": "Termin-ID", "arabic": "معرف الموعد", "french": "ID de rendez-vous"}},
                       ],
                       "edit_option":true,
                       "delete_option":true
                    },
                    {  "helper":"none",
                       "fields":[
                          {"field": "resource", "edit": true, "show": true, "control": "dropdown", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Appointment ID", "german": "Termin-ID", "arabic": "معرف الموعد", "french": "ID de rendez-vous"}},
                       ],
                       "edit_option":true,
                       "delete_option":true
                    },
                 {  "helper":"none",
                    "fields":[
                       {"field": "appointment_id", "edit": true, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Appointment ID", "german": "Termin-ID", "arabic": "معرف الموعد", "french": "ID de rendez-vous"}},
                       {"field": "exclusive", "edit": true, "show": true, "control": "dropdown", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "","values":["YES","NO"], "filter_type":"dropdown","filter_default_value":["0","1"],"lang": {"english": "Exclusive", "german": "Exklusiv", "arabic": "حصري", "french": "Exclusif"}},
                       {"field": "event_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                       {"field": "participant_type", "edit": true, "show": true, "control": "dropdown", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "","values":["Student","patient","user"], "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant Type", "german": "Teilnehmertyp", "arabic": "نوع المشارك", "french": "Type de participant"}},
                       {"field": "participant_id", "edit": true, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant ID", "german": "Teilnehmer-ID", "arabic": "معرف المشارك", "french": "ID du participant"}},
                       {"field": "status", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                       {"field": "participant_entity_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant Entity ID", "german": "Teilnehmer-Entitäts-ID", "arabic": "معرف كيان المشارك", "french": "ID d'entité du participant"}}
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
                          {"field": "appointment_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Appointment ID", "german": "Termin-ID", "arabic": "معرف الموعد", "french": "ID de rendez-vous"}},
                          {"field": "exclusive", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"dropdown","filter_default_value":["0","1"],"lang": {"english": "Exclusive", "german": "Exklusiv", "arabic": "حصري", "french": "Exclusif"}},
                          {"field": "event_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                          {"field": "participant_type", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant Type", "german": "Teilnehmertyp", "arabic": "نوع المشارك", "french": "Type de participant"}},
                          {"field": "participant_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Participant ID", "german": "Teilnehmer-ID", "arabic": "معرف المشارك", "french": "ID du participant"}},
                          {"field": "status", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                          {"field": "participant_entity_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant Entity ID", "german": "Teilnehmer-Entitäts-ID", "arabic": "معرف كيان المشارك", "french": "ID d'entité du participant"}}
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
                       {"field": "appointment_id", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Appointment ID", "german": "Termin-ID", "arabic": "معرف الموعد", "french": "ID de rendez-vous"}},
                       {"field": "exclusive", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Exclusive", "german": "Exklusiv", "arabic": "حصري", "french": "Exclusif"}},
                       {"field": "event_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Event ID", "german": "Ereignis-ID", "arabic": "معرف الحدث", "french": "ID d'événement"}},
                       {"field": "participant_type", "edit": false, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant Type", "german": "Teilnehmertyp", "arabic": "نوع المشارك", "french": "Type de participant"}},
                       {"field": "participant_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant ID", "german": "Teilnehmer-ID", "arabic": "معرف المشارك", "french": "ID du participant"}},
                       {"field": "status", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status", "german": "Status", "arabic": "الحالة", "french": "Statut"}},
                       {"field": "participant_entity_id", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Participant Entity ID", "german": "Teilnehmer-Entitäts-ID", "arabic": "معرف كيان المشارك", "french": "ID d'entité du participant"}}
                    ],
                    "edit_option":true,
                    "delete_option":true
                 }
              ],
              "api":"appointment/modifications",
              "checklist":[
                  {  "fields":["status", "exclusive"],
                     "checkpoints":["Is the new sot available?","Are the same participants available for the new slot ","Have participants been notified about the new slot?"]},
                  {  "fields":["participant_id"], "checkpoints":["Have participants been notified about the slot?"]

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
                          {"field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                       ]
                    },
                    {"helper":"getresorceCategories",
                    "fields":[
                       {"field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                       ]
                    },
                    {  "helper":"none",
                       "fields":[    
                          {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                          {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                       ]
                    }
                 ]
                 },
                 "list":{
                 "roles":["admin"],
                 "data":[
                    {"helper":"getentityname",
                    "fields":[
                          {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                       ]
                    },
                    {  "helper":"none",
                    
                       "fields":[    
                          {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                          {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                          {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                       ]
                    }
                 ]
                 },
                 "update":{
                 "roles":["admin"],
                 "data":[
                    {"helper":"getentityname",
                    "fields":[
                          {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                       ]
                    },
                    {  "helper":"none",
                    
                       "fields":[    
                          {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                          {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                          {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                          {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
           {"type": "button", "tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
           {"type": "button", "tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
          "create":{
             "roles":["Admin"],
             "data":[
                {  "helper":"none",
                   "fields": [
                         {"field": "subscriber_id", "edit": true, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber ID", "german": "Abonnenten-ID", "arabic": "معرف المشترك", "french": "ID d'abonné"}},
                         {"field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                         {"field": "category", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                         {"field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                         {"field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                         {"field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                         {"field": "alert_preference", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                         {"field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Statusabfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                         {"field": "log", "edit": true, "show":false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}}
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
                         {"field": "subscriber_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber ID", "german": "Abonnenten-ID", "arabic": "معرف المشترك", "french": "ID d'abonné"}},
                         {"field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                         {"field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                         {"field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                         {"field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                         {"field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                         {"field": "alert_preference", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                         {"field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Statusabfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                         {"field": "log", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}}
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
                         {"field": "subscriber_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber ID", "german": "Abonnenten-ID", "arabic": "معرف المشترك", "french": "ID d'abonné"}},
                         {"field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                         {"field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                         {"field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                         {"field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                         {"field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                         {"field": "alert_preference", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                         {"field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Statusabfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                         {"field": "log", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}}
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
                         {"field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                      ]
                   },
                   {"helper":"getresorceCategories",
                   "fields":[
                      {"field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                      ]
                   },
                   {  "helper":"none",
                      "fields":[    
                         {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                         {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                      ]
                   }
                ]
                },
                "list":{
                "roles":["admin"],
                "data":[
                   {"helper":"getentityname",
                   "fields":[
                         {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                      ]
                   },
                   {  "helper":"none",
                   
                      "fields":[    
                         {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                         {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                         {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                      ]
                   }
                ]
                },
                "update":{
                "roles":["admin"],
                "data":[
                   {"helper":"getentityname",
                   "fields":[
                         {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                      ]
                   },
                   {  "helper":"none",
                   
                      "fields":[    
                         {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                         {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                         {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
         {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": ["Program Registry"], "function": "","textContent": "Items"},
         {"type": "select", "tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [2,3,5,10,15,20,25,30,35,40,45,50], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Program Registry":{
         "doc_title":"","getDataApi":"program_registry/list_details",
        "key": "program_registry_id",
        "controls":[
           {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
           {"type":"button","tag":"backward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"left","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"right","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"forward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"refresh","roles":["Admin","Approver"],"name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],   
              "data":[
                 {  "helper":"none",
                    "fields":[
                     {"field":"program_registry_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"program_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Program Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"program_owner_entity","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"filtertype":"textbox","filter_default_value":"","lang":{"english":"Program Owner Entity","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
                     
                  ],
                 },
                 {"helper":"get_program_services",
                  "fields":[
                     {"field":"program_services","name":"program_services","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program Services","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
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
                     {"field":"program_registry_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"program_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Program Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"program_owner_entity","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Program Owner Entity","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"field":"program_services","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Program Services","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
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
                     {"field":"program_registry_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"program_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Program Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"program_owner_entity","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Program Owner Entity","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"field":"program_services","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Program Services","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
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
                     {"field":"program_registry_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Program Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"program_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Program Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"program_owner_entity","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Program Owner Entity","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"field":"program_services","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Program Services","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
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
   
    },
    "Service Config":{
        "controls":[
         {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": ["Service Registry"], "function": "","textContent": "Items"},
         {"type": "select", "tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [2,3,5,10,15,20,25,30,35,40,45,50], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Service Registry":{
         "doc_title":"","getDataApi":"service_registry/list_details",
        "key": "gov_srevice_id",
        "controls":[
           {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
           {"type":"button","tag":"backward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-backward'></i> ","function":"first_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"left","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-left'></i> ","function":"previous_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"right","roles":["Admin","Approver"],"name":"<i class='fa fa-chevron-right'></i> ","function":"next_page()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"forward","roles":["Admin","Approver"],"name":"<i class='fa fa-step-forward'></i> ","function":"","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
           {"type":"button","tag":"refresh","roles":["Admin","Approver"],"name":"<i class='fa fa-refresh'></i> ","function":"refreshTable()","class":"btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
           "create":{
              "roles":["Admin"],   
              "data":[
                 {  "helper":"none",
                     "fields":[
                        {"field":"gov_service_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Service Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                        {"field":"gov_service_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Service Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                        {"field":"description","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Description","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                        {"field":"terms&conditions","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Terms&Conditions","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                        {"field":"policy","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"policy","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                        {"field":"role","name":"Status","edit":true,"show":true,"control":"venue-location-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"role","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
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
                     {"field":"gov_service_id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Service Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"gov_service_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Service Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"description","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Description","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"field":"terms&conditions","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Terms&Conditions","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"field":"policy","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"policy","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"field":"role","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"role","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
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
                     {"field":"gov_service_id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Service Registry ID","german":"Dokumentenstatus-Typ-ID","arabic":"معرف نوع حالة المستند","french":"ID du type de statut du document"}},
                     {"field":"gov_service_name","name":"Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"dropdown","filter_helper":"getStatus","filter_default_value":"","lang":{"english":"Service Name","german":"Dokumentenstatus-Typ","arabic":"نوع حالة المستند","french":"Type de statut du document"}},
                     {"field":"description","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Description","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"field":"terms&conditions","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"Terms&Conditions","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"field":"policy","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"policy","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}},
                     {"field":"role","name":"Status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["draft","submitted","canceled","suspended","approved"],"":"textbox","filter_default_value":"","lang":{"english":"role","german":"Statusprotokoll","arabic":"سجل الحالة","french":"Journal des statuts"}}
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
      },
   
    },
    "Subscriber Config":{
        "controls":[
         {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": ["Subscriber Registry","Subscriber Log"], "function": "","textContent": "Items"},
         {"type": "select", "tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [2,3,5,10,15,20,25,30,35,40,45,50], "textContent": "Rows/Page"},
      ],
      "Roles":["Admin"],
      "Subscriber Registry":{
        "db_name":"event_scheduler2025",
        "table_name":"message_details",
         "doc_title":"","getDataApi":"subscriber/list_details",
        "key":"subscriber_id",
        "controls": [
           {"type": "button", "tag": "create", "roles": ["Admin"], "name": "<i class='fa fa-plus'></i> ", "function": "Registration_modal()", "class": "btn btn-success btn-xs my-xs-btn"},
           {"type": "button", "tag": "backward", "roles": ["Admin"], "name": "<i class='fa fa-step-backward'></i> ", "function": "first_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "left", "roles": ["Admin"], "name": "<i class='fa fa-chevron-left'></i> ", "function": "previous_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "right", "roles": ["Admin"], "name": "<i class='fa fa-chevron-right'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "forward", "roles": ["Admin"], "name": "<i class='fa fa-step-forward'></i> ", "function": "next_page()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "print", "roles": ["Admin"], "name": "<i class='fa fa-print'></i> ", "function": "printTable()", "class": "btn btn-primary btn-xs my-xs-btn"},
           {"type": "button", "tag": "refresh", "roles": ["Admin"], "name": "<i class='fa fa-refresh'></i> ", "function": "refreshTable()", "class": "btn btn-primary btn-xs my-xs-btn"}
        ],
        "job":{
          "create":{
             "roles":["Admin"],
             "data":[
                {  "helper":"none",
                   "fields": [
                         {"field": "subscriber_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber ID", "german": "Abonnenten-ID", "arabic": "معرف المشترك", "french": "ID d'abonné"}},
                         {"field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                         {"field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                         {"field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                         {"field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                         {"field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                         {"field": "alert_preference", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                         {"field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Statusabfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                         {"field": "log", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}}
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
                         {"field": "subscriber_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber ID", "german": "Abonnenten-ID", "arabic": "معرف المشترك", "french": "ID d'abonné"}},
                         {"field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                         {"field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                         {"field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                         {"field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                         {"field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                         {"field": "alert_preference", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                         {"field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Statusabfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                         {"field": "log", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"","filter_default_value":"","lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}}
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
                         {"field": "subscriber_id", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Subscriber ID", "german": "Abonnenten-ID", "arabic": "معرف المشترك", "french": "ID d'abonné"}},
                         {"field": "name", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Name", "german": "Name", "arabic": "الاسم", "french": "Nom"}},
                         {"field": "category", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Category", "german": "Kategorie", "arabic": "الفئة", "french": "Catégorie"}},
                         {"field": "phone_number", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Phone Number", "german": "Telefonnummer", "arabic": "رقم الهاتف", "french": "Numéro de téléphone"}},
                         {"field": "email", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Email", "german": "E-Mail", "arabic": "البريد الإلكتروني", "french": "E-mail"}},
                         {"field": "alert_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert URL", "german": "Alarm-URL", "arabic": "رابط التنبيه", "french": "URL d'alerte"}},
                         {"field": "alert_preference", "edit": false, "show": false, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": false, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Alert Preference", "german": "Alarmpräferenz", "arabic": "تفضيل التنبيه", "french": "Préférence d'alerte"}},
                         {"field": "status_poll_url", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Status Poll URL", "german": "Statusabfrage-URL", "arabic": "رابط استعلام الحالة", "french": "URL de sondage de statut"}},
                         {"field": "log", "edit": true, "show": true, "control": "text", "trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory": true, "default": "", "filter_type":"textbox","filter_default_value":"","lang": {"english": "Log", "german": "Protokoll", "arabic": "السجل", "french": "Journal"}}
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
                         {"field":"entityid","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                      ]
                   },
                   {"helper":"getresorceCategories",
                   "fields":[
                      {"field":"resource_category","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                      ]
                   },
                   {  "helper":"none",
                      "fields":[    
                         {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                         {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                      ]
                   }
                ]
                },
                "list":{
                "roles":["admin"],
                "data":[
                   {"helper":"getentityname",
                   "fields":[
                         {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                      ]
                   },
                   {  "helper":"none",
                   
                      "fields":[    
                         {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                         {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                         {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                      ]
                   }
                ]
                },
                "update":{
                "roles":["admin"],
                "data":[
                   {"helper":"getentityname",
                   "fields":[
                         {"field":"entityname","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                      ]
                   },
                   {  "helper":"none",
                   
                      "fields":[    
                         {"field":"person_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"resource_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":" entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true, "default":""},
                         {"field":"details","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"phone_number","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"email","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"alert_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"alert_preference","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"status_poll_url","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}, 
                         {"field":"entry_status","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"role","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"archive","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                         {"field":"work_days","edit":true,"show":true,"control":"datetime-local","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
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
         {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": ["Notifications"],"textContent": "Items"},
         {"type": "select", "tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [2,3,5,10,15,20,25,30,35,40,45,50], "textContent": "Rows/Page"},
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
                            {"field":"notification_id","name":"Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"resource_id","name":"Entity Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"role","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"message","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                            {"field":"role_id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"entity_id","name":"Entity Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"role_name","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                                {"field":"role_id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                                {"field":"entity_id","name":"Entity Id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                                {"field":"role_name","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                        {"field":"entity_id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["suspended","approved"]},
                        {"field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""}
    
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
         {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"Registration_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tag":"edit","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tag":"delete","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": ["Document Data Templates","Document UI Templates","Document View Templates","HTML Template","Trigger Functions","Helper Functions"],"textContent": "Items"},
         {"type": "select", "tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [2,3,5,10,15,20,25,30,35,40,45,50], "textContent": "Rows/Page"},
        ],
        "Roles":["Admin"],
        "Document Data Templates":{
            "doc_title":"Document Data Template",
             "doc_title":"","getDataApi":"config/list_details",
            "key":"role_id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                  {"helper":"getDocTemplates",
                     "fields":[
                        {"field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document type","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}}
                        ]
                   },
                    {  "helper":"none",
                        "fields":[
                            {"field":"doc_affiliation_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Affiliation ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"doc_description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"doc_template","edit":true,"show":true,"control":"doc-template-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","lang":{"english":"Doc Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"ui_template","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                            {"field":"doc_templates_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document type","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"affiliation_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"doc_description","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"doc_template","edit":false,"show":true,"control":"file","type":"file","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Doc Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"ui_template","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
                           
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
                                {"field":"role_id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                                {"field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                                {"field":"role_name","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                        {"field":"entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["suspended","approved"]},
                        {"field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""}
    
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
             "doc_title":"","getDataApi":"config/list_details",
            "key":"doc_ui_template_id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                      {"helper":"getDocTemplates",
                        "fields":[
                           {"field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"",}
                           ]
                     },
                    {  "helper":"none",
                        "fields":[
                            {"field":"doc_ui_template_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"doc_ui_template_id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"ui_template","edit":true,"show":true,"control":"field-attribute-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                            {"field":"doc_ui_template_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"doc_ui_template_id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"doc_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Type","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"ui_template","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                            {"field":"doc_ui_template_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"doc_ui_template_id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"doc_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Type","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"ui_template","edit":true,"show":true,"control":"field-attribute-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                            {"field":"doc_ui_template_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"doc_ui_template_id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"doc_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Type","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"ui_template","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                           {"field":"id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"field":"template_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                           {"field":"doc_view_html","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document View HTML","german":"HTML-Ansicht","arabic":"عرض المستند HTML","french":"Vue HTML du document"}},
                           {"field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document Type","german":"Dokumenttyp","arabic":"نوع المستند","french":"Type de document"}}
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
                           {"field":"id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"field":"template_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                           {"field":"doc_view_html","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document View HTML","german":"HTML-Ansicht","arabic":"عرض المستند HTML","french":"Vue HTML du document"}},
                           {"field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document Type","german":"Dokumenttyp","arabic":"نوع المستند","french":"Type de document"}}
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
                           {"field":"id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"field":"template_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                           {"field":"doc_view_html","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document View HTML","german":"HTML-Ansicht","arabic":"عرض المستند HTML","french":"Vue HTML du document"}},
                           {"field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document Type","german":"Dokumenttyp","arabic":"نوع المستند","french":"Type de document"}}
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
                           {"field":"id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"ID","german":"Kennung","arabic":"معرف","french":"ID"}},
                           {"field":"template_name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template Name","german":"Vorlagenname","arabic":"اسم القالب","french":"Nom du modèle"}},
                           {"field":"doc_view_html","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document View HTML","german":"HTML-Ansicht","arabic":"عرض المستند HTML","french":"Vue HTML du document"}},
                           {"field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Document Type","german":"Dokumenttyp","arabic":"نوع المستند","french":"Type de document"}}
                        ],
                        "edit_option":true,
                        "delete_option":true}
                     ],
                     "api":"template_config/list_details",
                     "onSuccess":"Role_approved()"
                
                },
                "cancel":{"api":"config","onSuccess":"Role_canceled()"}
            }
        },
        "Trigger Functions":{
             "doc_title":"","getDataApi":"config/list_details",
            "key":"id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                  {  "helper":"getHelperFunction",
                        "fields":[
                           {"field":"helper_function","name":"Helper Function","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                        ],
                        "edit_option":true,
                        "delete_option":true
                    },
                    {  "helper":"none",
                        "fields":[
                           {"field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"field":"trigger_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"field":"ui_template_id","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"field":"trigger_condition","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Condition","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"field":"control_id","name":"Control ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Control ID","german":"Steuerungs-ID","arabic":"معرف التحكم","french":"ID de contrôle"}},
                           {"field":"trigger_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Trigger Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","german":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}}

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
                           {"field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"field":"trigger_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"field":"ui_template_id","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"field":"trigger_condition","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Condition","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"field":"control_id","name":"Control ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Control ID","german":"Steuerungs-ID","arabic":"معرف التحكم","french":"ID de contrôle"}},
                           {"field":"trigger_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Trigger Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"field":"helper_function","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                           {"field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","german":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}}
    
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
                              {"field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                              {"field":"trigger_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                              {"field":"ui_template_id","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                              {"field":"trigger_condition","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Condition","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                              {"field":"control_id","name":"Control ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Control ID","german":"Steuerungs-ID","arabic":"معرف التحكم","french":"ID de contrôle"}},
                              {"field":"trigger_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Trigger Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                              {"field":"helper_function","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                              {"field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                              {"field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","german":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                              {"field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                              {"field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}}

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
                           {"field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"field":"trigger_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"field":"ui_template_id","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"field":"trigger_condition","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Trigger Condition","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"field":"control_id","name":"Control ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Control ID","german":"Steuerungs-ID","arabic":"معرف التحكم","french":"ID de contrôle"}},
                           {"field":"trigger_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Trigger Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"field":"helper_function","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                           {"field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","german":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}}
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
        "Helper Functions":{
             "doc_title":"","getDataApi":"config/list_details",
            "key":"id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                    {  "helper":"none",
                        "fields":[
                           {"field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"field":"helper_functions_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Helper Functions Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"field":"type","name":"Helper Function","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","options":["source","deposit","process"],"filter_type":"","filter_default_value":"","lang":{"english":"Type","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                           {"field":"ui_template_id","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"field":"control_id","name":"Control ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Control ID","german":"Steuerungs-ID","arabic":"معرف التحكم","french":"ID de contrôle"}},
                           {"field":"helper_functions_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","g111erman":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}},
                           {"field":"log","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}}
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
                           {"field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"field":"helper_functions_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Helper Functions Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"field":"type","name":"Helper Function","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","options":["source","deposit","process"],"filter_type":"","filter_default_value":"","lang":{"english":"Type","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                           {"field":"ui_template_id","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"field":"control_id","name":"Control ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Control ID","german":"Steuerungs-ID","arabic":"معرف التحكم","french":"ID de contrôle"}},
                           {"field":"helper_functions_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","g111erman":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}},
                           {"field":"log","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}}
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
                           {"field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"field":"helper_functions_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Helper Functions Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"field":"type","name":"Helper Function","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","options":["source","deposit","process"],"filter_type":"","filter_default_value":"","lang":{"english":"Type","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                           {"field":"ui_template_id","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"field":"control_id","name":"Control ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Control ID","german":"Steuerungs-ID","arabic":"معرف التحكم","french":"ID de contrôle"}},
                           {"field":"helper_functions_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","g111erman":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}},
                           {"field":"log","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}}
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
                           {"field":"id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Id","german":"Kennung","arabic":"المعرف","french":"Identifiant"}},
                           {"field":"helper_functions_name","name":"Trigger Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Helper Functions Name","german":"Auslösername","arabic":"اسم الزناد","french":"Nom du déclencheur"}},
                           {"field":"type","name":"Helper Function","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","options":["source","deposit","process"],"filter_type":"","filter_default_value":"","lang":{"english":"Type","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}},
                           {"field":"ui_template_id","name":"UI Template ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"UI Template ID","german":"Vorlagen-ID","arabic":"معرف القالب","french":"ID du modèle"}},
                           {"field":"control_id","name":"Control ID","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Control ID","german":"Steuerungs-ID","arabic":"معرف التحكم","french":"ID de contrôle"}},
                           {"field":"helper_functions_description","name":"Trigger Description","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Description","german":"Auslöserbeschreibung","arabic":"وصف الزناد","french":"Description du déclencheur"}},
                           {"field":"status","name":"Status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"active","filter_type":"dropdown","filter_default_value":"active","lang":{"english":"Status","german":"Status","arabic":"الحالة","french":"Statut"}},
                           {"field":"remarks","name":"Remarks","edit":true,"show":true,"control":"textarea","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Remarks","g111erman":"Bemerkungen","arabic":"ملاحظات","french":"Remarques"}},
                           {"field":"version","name":"Version","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"1","filter_type":"","filter_default_value":"","lang":{"english":"Version","german":"Version","arabic":"الإصدار","french":"Version"}},
                           {"field":"created_at","name":"Created At","edit":false,"show":true,"control":"datetime","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"datetime","filter_default_value":"","lang":{"english":"Created At","german":"Erstellt am","arabic":"تاريخ الإنشاء","french":"Créé le"}},
                           {"field":"log","name":"Helper Function","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Helper Function","german":"Hilfsfunktion","arabic":"دالة المساعد","french":"Fonction d'aide"}}
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
    "App Config":{
        "controls":[
         {"type":"button","tag":"create","roles":["Admin"],"name":"<i class='fa fa-plus'></i> ","function":"editor_config_modal()","class":"btn btn-success btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='fa fa-print'></i> ","function":"print_document()","class":"btn btn-primary btn-xs my-xs-btn"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-pencil-fill'><i> ","function":"edit_data()","class":"btn btn-warning btn-sm"},
         {"type":"button","tag":"print","roles":["Admin"],"name":"<i class='bi bi-trash-fill'></i> ","function":"delete_data()","class":"btn btn-danger btn-sm"},
         {"type": "select", "tag": "items", "roles": ["Admin"], "name": "Entity Config", "options": ["Final Templates"],"textContent": "Items"},
         {"type": "select", "tag": "entriesPerPage", "roles": ["Admin","Approver","User"], "name": "EntriesPerPage", "options": [2,3,5,10,15,20,25,30,35,40,45,50], "textContent": "Rows/Page"},
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
                   {"helper":"getTabs",
                     "fields":[
                        {"field":"Select tab","edit":true,"show":true,"control":"dropdown","onchange":"tab_onchange_trigger","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        //{"field":"Select tab","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                        ]
                   },
                    {  "helper":"none",
                        "fields":[
                            {"field":"doc_final_templates_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Affiliation ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"doc_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Type","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"doc_description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"doc_template","edit":true,"show":true,"control":"doc-template-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Doc Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"ui_template","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                            {"field":"doc_final_templates_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","filter_default_value":"","lang":{"english":"Template ID","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"affiliation_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"template","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Final Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"status","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Status","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"log","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Log","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"remarks","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Remarks","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            
                           
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
                                {"field":"role_id","name":"Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                                {"field":"entity_id","name":"Entity Id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Entity Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                                {"field":"role_name","name":"Role Name","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"Role Name","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                        {"field":"entity_id","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"entity_name","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"entity_type","edit":false,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"entry_status","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","values":["suspended","approved"]},
                        {"field":"remark","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""},
                        {"field":"change_log","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":false,"default":""}
    
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
        "Document UI template":{
            "doc_title":"","getDataApi":"config/list_details",
            "key":"doc_ui_template_id",
            "attchment_files_path":"",
            "job":{
                "create":{
                "roles":["Admin"],   
                "data":[
                      {"helper":"getDocTemplates",
                     "fields":[
                        {"field":"doc_type","edit":true,"show":true,"control":"dropdown","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":""}
                        ]
                   },
                    {  "helper":"none",
                        "fields":[
                            {"field":"doc_ui_template_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"doc_ui_template_id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"ui_template","edit":true,"show":true,"control":"field-attribute-control","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                            {"field":"doc_ui_template_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"doc_ui_template_id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"doc_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Type","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"ui_template","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                            {"field":"doc_ui_template_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"doc_ui_template_id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"doc_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Type","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"ui_template","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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
                            {"field":"doc_ui_template_id","name":"Id","edit":false,"show":false,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"textbox","filter_default_value":"","lang":{"english":"doc_ui_template_id","german":"Rollen-ID","arabic":"معرف الدور","french":"ID du rôle"}},
                            {"field":"doc_type","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Type","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"affiliation_id","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Affiliation Id","german":"Entitäts-ID","arabic":"معرف الكيان","french":"ID de l'entité"}},
                            {"field":"description","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"Description","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}},
                            {"field":"ui_template","edit":true,"show":true,"control":"text","trigger":[{"event":"onchange","function":"tab_onchange_trigger"}, {"event":"onselect","function":"tab_onselect_trigger"}],"mandatory":true,"default":"","filter_type":"","lang":{"english":"UI Template","german":"Rollenname","arabic":"اسم الدور","french":"Nom du rôle"}}
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

    }  
}
    
 /*   

agriculture ministry

event
entity
planning
delivery
excution
service 
service delivery dept
program
   audit resource
   guidline doc
   compliance doc

*/
    
   


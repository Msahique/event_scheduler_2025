
import math
a=10        
b=20
c=30
d= [10,20,50]

def add_custom(a, b, c):
    return a + b + c

def add_arr(arr):
    sum = 0
    for i in arr:
        print("Adding:", i)
        sum += i
        print(sum)
    
    return sum

def subtract(a, b):
    return a - b

data = "add"

if data=="add":
    #sum=add(a,b,c); print("Sum:", sum)
    sum=sum([a,b]); print("Sum:", sum)
elif data=="subtract":
    sum=subtract(a,b) ; print("Difference:", sum)
elif data=="add_arr":
    sum=add_arr(d) ; print("Sum:", sum)
else:
    print("Invalid operation")



"job": {
    "create": {
        "roles": ["Admin"],
        "data": [
            {
                "helper": "none",
                "fields": [
                    {"seqno": "", "field": "description", "name": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "this is a test description", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "id", "name": "Id", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Role Id", "german": "Rollen-ID", "arabic": "معرف الدور", "french": "ID du rôle"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "entity_id", "name": "Entity Id", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Entity Id", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID de l'entité"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "role_name", "name": "Role Name", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Role Name", "german": "Rollenname", "arabic": "اسم الدور", "french": "Nom du rôle"}, "values": "", "tooltip_source": "", "tooltip_content": ""}
                ],
                "edit_option": true,
                "delete_option": true
            }
        ],
        "api": "config/new",
        "onSuccess": "Role_created()"
    },
    "list": {
        "roles": ["Admin"],
        "data": [
            {
                "helper": "none",
                "fields": [
                    {"seqno": "", "field": "description", "name": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "this is a test description", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "id", "name": "Id", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "", "filter_default_value": "", "lang": {"english": "Role Id", "german": "Rollen-ID", "arabic": "معرف الدور", "french": "ID du rôle"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "entity_id", "name": "Entity Id", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "", "filter_default_value": "", "lang": {"english": "Entity Id", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID de l'entité"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "role_name", "name": "Role Name", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "", "filter_default_value": "", "lang": {"english": "Role Name", "german": "Rollenname", "arabic": "اسم الدور", "french": "Nom du rôle"}, "values": "", "tooltip_source": "", "tooltip_content": ""}
                ],
                "edit_option": true,
                "delete_option": true
            }
        ],
        "api": "config/list_details",
        "onSuccess": "Role_listed()"
    },
    "update": {
        "roles": ["Admin"],
        "data": [
            {
                "helper": "none",
                "fields": [
                    {"seqno": "", "field": "description", "name": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "this is a test description", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "id", "name": "Id", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Role Id", "german": "Rollen-ID", "arabic": "معرف الدور", "french": "ID du rôle"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "entity_id", "name": "Entity Id", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Entity Id", "german": "Entitäts-ID", "arabic": "معرف الكيان", "french": "ID de l'entité"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "role_name", "name": "Role Name", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Role Name", "german": "Rollenname", "arabic": "اسم الدور", "french": "Nom du rôle"}, "values": "", "tooltip_source": "", "tooltip_content": ""}
                ],
                "edit_option": true,
                "delete_option": true
            }
        ],
        "checklist": {
            "checkpoints": []
        },
        "api": "config/modifications"
    },
    "approver": {
        "roles": ["Approver"],
        "data": [
            {
                "helper": "none",
                "fields": [
                    {"seqno": "", "field": "description", "name": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "this is a test description", "default": "", "filter_type": "textbox", "filter_default_value": "", "lang": {"english": "Description", "german": "Beschreibung", "arabic": "الوصف", "french": "Description"}, "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "entity_id", "name": "", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "", "filter_default_value": "", "lang": "", "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "entity_name", "name": "", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "", "filter_default_value": "", "lang": "", "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "entity_type", "name": "", "edit": false, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "", "filter_default_value": "", "lang": "", "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "entry_status", "name": "", "edit": true, "show": true, "control": "dropdown", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "", "filter_default_value": "", "lang": "", "values": ["suspended", "approved"], "tooltip_source": "table", "tooltip_content": ""},
                    {"seqno": "", "field": "remark", "name": "", "edit": true, "show": true, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": true, "tooltip": "this is a test description", "default": "", "filter_type": "", "filter_default_value": "", "lang": "", "values": "", "tooltip_source": "", "tooltip_content": ""},
                    {"seqno": "", "field": "change_log", "name": "", "edit": false, "show": false, "control": "text", "trigger": [{"event": "onchange", "function": "tab_onchange_trigger"}, {"event": "onselect", "function": "tab_onselect_trigger"}], "mandatory": false, "tooltip": "this is a test description", "default": "", "filter_type": "", "filter_default_value": "", "lang": "", "values": "", "tooltip_source": "", "tooltip_content": ""}
                ],
                "edit_option": true,
                "delete_option": false
            }
        ],
        "onSuccess": "Role_approved()"
    },
    "cancel": {
        "api": "config",
        "onSuccess": "Role_canceled()"
    },
    "view": {
        "doc_view_template_id": "1",
        "doc_view_template_name": "invoice1",
        "onSuccess": ""
    }
}
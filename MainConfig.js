var MainConfig = {
    "Resource Config": {
        "controls": [
            {
                "type": "button",
                "tag": "create",
                "roles": [
                    "Admin"
                ],
                "name": "<i class='fa fa-plus'></i>",
                "function": "Registration_modal()",
                "class": "btn btn-success btn-xs my-xs-btn"
            },
            {
                "type": "button",
                "tag": "print",
                "roles": [
                    "Admin"
                ],
                "name": "<i class='fa fa-print'></i>",
                "function": "",
                "class": "btn btn-primary btn-xs my-xs-btn"
            },
            {
                "type": "select",
                "tag": "items",
                "roles": [
                    "Admin"
                ],
                "name": "Resource Config",
                "options": [
                    "farmer_registry"
                ],
                "textContent": "Items"
            },
            {
                "type": "select",
                "tag": "entriesPerPage",
                "roles": [
                    "Admin",
                    "Approver",
                    "User"
                ],
                "name": "EntriesPerPage",
                "options": [
                    2,
                    3,
                    5,
                    10,
                    15,
                    20,
                    25,
                    30,
                    35,
                    40,
                    45,
                    50
                ],
                "textContent": "Rows/Page"
            }
        ],
        "Roles": [
            "Admin"
        ],
        "farmer_registry": {
            "attchment_files_path": "",
            "getDataApi": "config/list_details",
            "job": {
                "cancel": {
                    "getDataApi": "config",
                    "onSuccess": "Role_canceled()"
                },
                "create": {
                    "data": [
                        {
                            "delete_option": true,
                            "edit_option": true,
                            "fields": [
                                {
                                    "control": "date",
                                    "default": "",
                                    "delete_option": true,
                                    "edit": true,
                                    "edit_option": true,
                                    "field": "date",
                                    "filter_default_value": "",
                                    "filter_type": "",
                                    "lang": {
                                        "arabic": "",
                                        "english": "",
                                        "french": "",
                                        "german": ""
                                    },
                                    "mandatory": true,
                                    "name": "Date",
                                    "show": true
                                },
                                {
                                    "control": "text",
                                    "default": "",
                                    "delete_option": true,
                                    "edit": true,
                                    "edit_option": true,
                                    "field": "first_name",
                                    "filter_default_value": "",
                                    "filter_type": "",
                                    "lang": {
                                        "arabic": "",
                                        "english": "",
                                        "french": "",
                                        "german": ""
                                    },
                                    "mandatory": true,
                                    "name": "First Name",
                                    "show": true
                                },
                                {
                                    "control": "text",
                                    "default": "",
                                    "delete_option": true,
                                    "edit": true,
                                    "edit_option": true,
                                    "field": "last_name",
                                    "filter_default_value": "",
                                    "filter_type": "",
                                    "lang": {
                                        "arabic": "",
                                        "english": "",
                                        "french": "",
                                        "german": ""
                                    },
                                    "mandatory": true,
                                    "name": "Last name",
                                    "show": true
                                }
                            ],
                            "helper": "none"
                        }
                    ],
                    "getDataApi": "config/new",
                    "onSuccess": "Role_created()",
                    "roles": [
                        "Admin"
                    ]
                },
                "list": {
                    "data": [
                        {
                            "delete_option": true,
                            "edit_option": true,
                            "fields": [
                                {
                                    "control": "date",
                                    "default": "",
                                    "delete_option": true,
                                    "edit": true,
                                    "edit_option": true,
                                    "field": "date",
                                    "filter_default_value": "",
                                    "filter_type": "",
                                    "lang": {
                                        "arabic": "",
                                        "english": "",
                                        "french": "",
                                        "german": ""
                                    },
                                    "mandatory": true,
                                    "name": "Date",
                                    "show": true
                                },
                                {
                                    "control": "text",
                                    "default": "",
                                    "delete_option": true,
                                    "edit": true,
                                    "edit_option": true,
                                    "field": "first_name",
                                    "filter_default_value": "",
                                    "filter_type": "",
                                    "lang": {
                                        "arabic": "",
                                        "english": "",
                                        "french": "",
                                        "german": ""
                                    },
                                    "mandatory": true,
                                    "name": "First Name",
                                    "show": true
                                },
                                {
                                    "control": "text",
                                    "default": "",
                                    "delete_option": true,
                                    "edit": true,
                                    "edit_option": true,
                                    "field": "last_name",
                                    "filter_default_value": "",
                                    "filter_type": "",
                                    "lang": {
                                        "arabic": "",
                                        "english": "",
                                        "french": "",
                                        "german": ""
                                    },
                                    "mandatory": true,
                                    "name": "Last name",
                                    "show": true
                                }
                            ],
                            "helper": "none"
                        }
                    ],
                    "getDataApi": "config/list_details",
                    "onSuccess": "Role_listed()",
                    "roles": [
                        "Admin"
                    ]
                },
                "update": {
                    "data": [
                        {
                            "delete_option": true,
                            "edit_option": true,
                            "fields": [
                                {
                                    "control": "date",
                                    "default": "",
                                    "delete_option": true,
                                    "edit": true,
                                    "edit_option": true,
                                    "field": "date",
                                    "filter_default_value": "",
                                    "filter_type": "",
                                    "lang": {
                                        "arabic": "",
                                        "english": "",
                                        "french": "",
                                        "german": ""
                                    },
                                    "mandatory": true,
                                    "name": "Date",
                                    "show": true
                                },
                                {
                                    "control": "text",
                                    "default": "",
                                    "delete_option": true,
                                    "edit": true,
                                    "edit_option": true,
                                    "field": "first_name",
                                    "filter_default_value": "",
                                    "filter_type": "",
                                    "lang": {
                                        "arabic": "",
                                        "english": "",
                                        "french": "",
                                        "german": ""
                                    },
                                    "mandatory": true,
                                    "name": "First Name",
                                    "show": true
                                },
                                {
                                    "control": "text",
                                    "default": "",
                                    "delete_option": true,
                                    "edit": true,
                                    "edit_option": true,
                                    "field": "last_name",
                                    "filter_default_value": "",
                                    "filter_type": "",
                                    "lang": {
                                        "arabic": "",
                                        "english": "",
                                        "french": "",
                                        "german": ""
                                    },
                                    "mandatory": true,
                                    "name": "Last name",
                                    "show": true
                                }
                            ],
                            "helper": "none"
                        }
                    ],
                    "getDataApi": "config/modifications",
                    "roles": [
                        "Admin"
                    ]
                }
            },
            "key": "id"
        }
    }
};
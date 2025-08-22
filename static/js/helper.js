
async function getEntityTypes(data) {
    console.log("helper called. DATA:", data);
    var end_point = domain +"options";
    var body={
        "requestor_id":"", 
        "request_token": "", 
        "tab":"Network Config",
        "event": "getentitytypes",
        "type": "Entity Category",
        "qry": {
            "select_fields": ["entity_type"], 
            "where_data": {}
            }
    }
    if (data=="dropdown") {body.qry.select_fields.push("description")}
    console.log("Fetching:", end_point, body);
    var options =  API_helper_call(end_point, body);
    return options
}

async function get_affiliation(data) {
    var end_point = domain +"options";
    var body={
        "requestor_id":"", 
        "request_token": "", 
        "tab":"Entity Config",
        "event": "get_affiliation",
        "type": "Affiliation Registry",
        "qry": {
            "select_fields": ["*"], 
            "where_data": {}
            }
    }
    console.log("Fetching:", end_point, body);
    /*body.array.forEach(element => {
        console.log(element);
    });*/
    var options =  API_helper_call(end_point, body);
    console.log(options)
    return options
}


async function get_program_services(data) {
    var end_point = domain +"options";
    var body={
        "requestor_id":"", 
        "request_token": "", 
        "tab":"Service Config",
        "event": "get_program_services",
        "type": "Service Registry",
        "qry": {
            "select_fields": ["gov_service_name"], 
            "where_data": {}
            }
    }
    console.log("Fetching:", end_point, body);
    /*body.array.forEach(element => {
        console.log(element);
    });*/
    var options =  API_helper_call(end_point, body);
    console.log(options)
    return options
}

async function getDocTemplates(data) {
    var end_point = domain +"options";
    var body={
        "requestor_id":"", 
        "request_token": "", 
        "tab":"Document Config",
        "event": "getDocTemplates",
        "type":"Document Registry",
        "qry": {
            "select_fields": ["doc_type"], 
            "where_data": {}
            }
    }
    console.log("Fetching:", end_point, body);
    /*body.array.forEach(element => {
        console.log(element);
    });*/
    if (data=="dropdown") {body.qry.select_fields.push("description")}
    console.log("Fetching:", end_point, body);
    var options =  API_helper_call(end_point, body);
    console.log(options)
    return options
}

async function getDocTemplates1(data) {
    var end_point = domain +"options";
    var body={
        "requestor_id":"", 
        "request_token": "", 
        "tab":"Document Config",
        "event": "getDocTemplates1",
        "type":"Document Data Templates",
        "qry": {
            "select_fields": ["doc_type","doc_template"], 
            "where_data": {}
            }
    }
    console.log("Fetching:", end_point, body);
    /*body.array.forEach(element => {
        console.log(element);
    });*/
    if (data=="dropdown") {body.qry.select_fields.push("description")}
    console.log("Fetching:", end_point, body);
    var options =  API_helper_call(end_point, body);
    console.log(options)
    return options
}
  
async function getTabs(data) {
    var end_point = domain +"options";
    var body={
        "requestor_id":"", 
        "request_token": "", 
        "tab":"Network Config",
        "event": "getentitytypes",
        "type": "Entity Category",
        "qry": {
            "select_fields": ["entity_type"], 
            "where_data": {}
            }
    }
    console.log("Fetching:", end_point, body);
    //var options =  API_helper_call(end_point, body);
    var options= ["entity", "event", "resource", "document", "user", "role", "program_service", "affiliation"];
    console.log(options)
    return options
}

async function getResourceCateory(data) {
     console.log("helper called. DATA:", data);
    var end_point = domain +"options";
    var body={
        "requestor_id":"",
        "request_token":"",
        "type":"Resource Category",
        "tab":"Entity Config",
        "qry":{
            "select_fields":["resource_type_name"],
            "where_data":{}
        }
    }
    console.log("Fetching:", end_point, body);
    if (data=="dropdown") {body.qry.select_fields.push("description")}
    var options =  API_helper_call(end_point, body);
    return options
}

async function getHtmlTemplates(data) {
    console.log("helper called. DATA:", data);
    var end_point = domain +"options";
    var body={
        "requestor_id":"", 
        "request_token": "", 
        "tab":"Document Config",
        "event": "getHtmlTemplates",
        "type": "Document View Templates",
        "qry": {
            "select_fields": ["html"], 
            "where_data": {}
            }
    }
    if (data=="dropdown") {body.qry.select_fields.push("description")}
    console.log("Fetching:", end_point, body);
    var options =  API_helper_call(end_point, body);
    return options
}

async function getRole(){
    console.log("helper called")
    var end_point = domain +"options";
    var body={
        "requestor_id":"",
        "request_token":"",
        "type":"Role Registry",
        "tab":"Entity Config",
        "qry":{
            "select_fields":["role_name"],
            "where_data":{}
        }
    }
    console.log("Fetching:", end_point, body);
    var options =  API_helper_call(end_point, body);
    return options

}

async function getHelperFunction(){
    console.log("helper called")
    var end_point = domain +"options";
    var body={
        "requestor_id":"",
        "request_token":"",
        "type":"Helper Functions",
        "tab":"Document Config",
        "qry":{
            "select_fields":["helper_functions_name"],
            "where_data":{}
        }
    }
    console.log("Fetching:", end_point, body);
    var options =  API_helper_call(end_point, body);
    return options

}

async function getEventType(){
    console.log("helper called")
    var end_point = domain +"options";
    var body={
        "requestor_id":"",
        "request_token":"",
        "type":"Event Category",
        "tab":"Entity Config",
        "qry":{
            "select_fields":["event_type_name"],
            "where_data":{}
        }
    }
    console.log("Fetching:", end_point, body);
    var options =  API_helper_call(end_point, body);
    return options 
}

async function getStatus(){
    console.log("helper called")
    var end_point = domain +"options";
    var body={
        "requestor_id":"",
        "request_token":"",
        "type":"Doc_status_type",
        "tab":"System Config",
        "qry":{
            "select_fields":["doc_status_type"],
            "where_data":{}
        }
    }
    console.log("Fetching:", end_point, body);
    var options =  API_helper_call(end_point, body);
    return options 
}

async function getEventList(){
    console.log("helper called")
    var end_point = domain +"options";
    var body={
        "requestor_id":"",
        "request_token":"",
        "type":"Event Schedule",
        "tab":"Event Config",
        "qry":{
            "select_fields":["name"],
            "where_data":{}
        }
    }
    console.log("Fetching:", end_point, body);
    var options =  API_helper_call(end_point, body);
    return options 
}

async function API_helper_call(end_point, body){
    try {
        let response = await fetch(end_point, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            let data = await response.json();
            console.log("Received Data:", data);
            console.log(data);

            let myArray =data
            if (body.event === "getDocTemplates1") {  myArray = data}
            /*else{
                 // Flat array of all values
                myArray = data.map(element => Object.values(element)).flat();
                console.log("Flat array of all values:", myArray);
            
                // Check if any object has 'affiliation_id'
                const hasAffiliation = data.some(element => 'affiliation_id' in element);
            
                /*if (hasAffiliation) {
                    // Create formatted array for affiliation data
                    let affiliationArray = data
                        .filter(element => 'affiliation_id' in element)
                        .map(element => {
                            let program = element.program || '';
                            let entity = element.entity || '';
                            let department = element.department || '';
                            let service = element.service || '';
                            let role = element.role || '';;
            
                            return `${program}-${entity}-${department}-${service}-${role}`;
                        });
            
                    console.log("Affiliation formatted array:", affiliationArray);
                    return affiliationArray;
                } else {
                    return myArray;
                }
                
            }*/
            return myArray;
        } else {
            console.error("Failed to fetch entity types.");
            return [];
        }
        
    } catch (error) {
        console.error("Error fetching entity types:", error);
        return [];
    }
}

async function fetchHelperData(helper, control) {
    console.log("Calling helper:", helper, "with control:", control);
    if (typeof window[helper] === "function") {
        return await window[helper](control);  // Spread control
    } else {
        console.error(`Helper function '${helper}' not found!`);
        return [];
    }
}


function tab_onchange_trigger(  ) {
    setTimeout(() => {
        const selectElement = document.getElementById(id);
        if (selectElement) {
            selectElement.addEventListener('change', function () {
                const value = this.value;
                alert(`Selected value: ${value}`);
            });
        } else {
            console.warn(`Element with id '${id}' not found`);
        }
    }, 0); // Delay until DOM update completes
}

function autoSplitDescriptionAndFirstField(data) {
  if (!data.length) return { descriptions: "[]", otherFieldValues: "[]" };

  // Identify the first field key that is not 'description'
  const sample = data[0];
  const otherKey = Object.keys(sample).find(key => key !== 'description');

  const descriptions = data.map(item => item.description || "");
  const otherFieldValues = data.map(item => item[otherKey] || "");

  return {
    descriptions,
    otherFieldValues
  };
}


/*******************************
 Example Helper Stubs
*******************************/
async function get_file_list(){ return [{filename:"doc1.pdf"},{filename:"report.xlsx"}]; }
async function get_image_list(){ return [{filename:"img1.png"},{filename:"img2.jpg"}]; }
async function get_video_list(){ return [{filename:"vid1.mp4"}]; }
async function get_audio_list(){ return [{filename:"audio1.mp3"}]; }
async function get_qr_list(){ return [{filename:"qr_data1"},{filename:"qr_data2"}]; }



/*
async function fetchEntityName1(entity_id){ 
    var end_point = domain +"entity/list_details";
    var body={
        "requestor_id":"",
        "request_token":"",
        "qry":{
            "select_fields":["entity_name"],
            "where_data":{"entity_id":entity_id}
        }
    }
    console.log("Fetching:", end_point, body);

    try {
        let response = await fetch(end_point, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            let data = await response.json();
            console.log("Received Data:", data);
            return data[0].entity_name;
        } else {
            console.error("Failed to fetch entity name.");
            return "";
        }
    } catch (error) {
        console.error("Error fetching entity name:", error);
        return "";
    }
}

async function getEventList1(data) {
    var end_point = domain +"event/list_details";
    var body={
        "requestor_id":"",
        "request_token":"",
        "qry":{
            "select_fields":["*"],
            "where_data":{}
        }
    }
    console.log("Fetching:", end_point, body);

    try {
        let response = await fetch(end_point, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            let data = await response.json();
            console.log("Received Data:", data);
            const myArray =[];
            console.log(data);
            data.forEach(element => {
                var entityname=fetchEntityName(element.host_entity_id)
                myArray.push(element.name+" ["+entityname+"]")
            });        
            console.log(myArray)    
            return myArray;
        } else {
            console.error("Failed to fetch entity types.");
            return [];
        }
    } catch (error) {
        console.error("Error fetching entity types:", error);
        return [];
    }
}

async function fetchEntityName(entity_id) { 
    var end_point = domain + "entity/list_details";
    var body = {
        "requestor_id": "",
        "request_token": "",
        "qry": {
            "select_fields": ["entity_name"],
            "where_data": { "entity_id": entity_id }
        }
    };
    console.log("Fetching:", end_point, body);

    try {
        let response = await fetch(end_point, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            let data = await response.json();
            console.log("Received Data:", data);
            return data[0]?.entity_name || "Unknown";
        } else {
            console.error("Failed to fetch entity name.");
            return "Unknown";
        }
    } catch (error) {
        console.error("Error fetching entity name:", error);
        return "Unknown";
    }
}

async function getEventList() {
    var end_point = domain + "event/list_details";
    var body = {
        "requestor_id": "",
        "request_token": "",
        "qry": {
            "select_fields": ["*"],
            "where_data": {}
        }
    };
    console.log("Fetching:", end_point, body);

    try {
        let response = await fetch(end_point, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            let data = await response.json();
            console.log("Received Data:", data);

            // Use map() and await fetchEntityName() inside Promise.all()
            const eventList = await Promise.all(data.map(async (element) => {
                let entityName = await fetchEntityName(element.host_entity_id);
                return `${element.name} | ${entityName} | ${element.host_entity_id}`;
            }));

            console.log(eventList);
            return eventList;
        } else {
            console.error("Failed to fetch event list.");
            return [];
        }
    } catch (error) {
        console.error("Error fetching event list:", error);
        return [];
    }
}

async function fetchResources(entity_id) {
    let end_point = domain + "resource/list_details";
    let body = {
        "requestor_id": "",
        "request_token": "",
        "qry": {
            "select_fields": ["resource_id", "resource_name"],
            "where_data": { "entity_id": entity_id }
        }
    };

    try {
        let response = await fetch(end_point, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(body)
        });

        if (response.ok) {
            let data = await response.json();

            let resourceSelect = document.getElementById("resource");
            resourceSelect.innerHTML = '<option value="">-- Select Resource --</option>';

            for (let resource of data) {
                let option = document.createElement("option");
                option.value = resource.resource_id;
                option.textContent = resource.resource_name;
                resourceSelect.appendChild(option);
            }
        } else {
            console.error("Failed to fetch resources.");
        }
    } catch (error) {
        console.error("Error fetching resources:", error);
    }
}

function handleEventSelection() {
    console.log("Event selected");

    let eventSelect = document.getElementById("events");
    if (!eventSelect) {
        console.error("Dropdown with id 'events' not found!");
        return;
    }

    let selectedOption = eventSelect.options[eventSelect.selectedIndex];

    console.log(selectedOption.value, selectedOption.dataset.entityId);

    if (selectedOption.value) {
        let parts = selectedOption.value.split(" | ");
        let entity_id = parts[parts.length - 1].trim(); console.log(entity_id); 
        fetchResources(entity_id);
    } else {
        document.getElementById("resource").innerHTML = '<option value="">-- Select Resource --</option>';
    }
}


 */



/*
TO DO 
    fields required to be inserted in change_log column for every table and api endpoint in backend
    change_log ={ actor, action, datetime, ipaddress, fields}
    {"logs":[{"actor":"","action":"CREATE","datetime":"2025-02-06T12:00:00Z","ipaddress":"192.168.1.1","fields":{"field1":"","field2":""}}]}


    include remarks column for all tables :  LongTEXT 
    [capture text with limited characters (100 letters) and append to remarks.] 

    On approval clear all remarks. 


*/

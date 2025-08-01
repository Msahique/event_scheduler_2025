document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const affParam = urlParams.get('affiliation');

    let affiliations = [];
    if (affParam) {
        try {
            affiliations = JSON.parse(decodeURIComponent(affParam));
        } catch (err) {
            console.error("Error parsing affiliation data:", err);
        }
    }
    
    console.log("Affiliations:", affiliations);
    const submenu = document.getElementById('affiliationMenu');
    if (submenu && Array.isArray(affiliations)) {
        affiliations.forEach(aff => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.className = 'dropdown-item';
            a.href = '#';
            a.textContent = `${aff.program} - ${aff.entity} - ${aff.department} - ${aff.service} - ${aff.role}`;
            li.appendChild(a);
            submenu.appendChild(li);
        });
    }
});


/*document.addEventListener('DOMContentLoaded', () => {
    //const affiliations = [1, 2, 3, 4];
    const affiliations = window.affiliation || [];
    console.log("Affiliations:", affiliations);
    const submenu = document.getElementById('affiliationMenu');
    console.log(affiliations);
    affiliations.forEach(aff => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.className = 'dropdown-item';
      a.href = '#';
      a.textContent = ` ${aff.program+" - "+aff.entity+" - "+aff.department+" - "+aff.service+" - "+aff.role}`;
      li.appendChild(a);
      submenu.appendChild(li);
      console.log(li.outerHTML);
    });
  });
  */

 /* document.addEventListener('DOMContentLoaded', () => {
    const affiliations = window.affiliations || [];
    console.log("Affiliations:", affiliations);
  });*/
  

  var page_load_conf={
    rows_PP:null,
    sort_col:null,
    page_count:0,
    tab:"",
    role:"",
    event:"",
    user_name:"",
    sessionId:""
};
// Pagination Variables
let currentPage = 1;
let rowsPerPage = 5; // Change this value to adjust the number of rows per page

var  caldata={},    selectedItemFromDropdown=null,  role="Admin";
var tab_status={};
var file_rowdata=[];
page_load_conf.user_name="Sahique"; page_load_conf.sessionId="458523shgjs";
page_load_conf.role="Admin";    page_load_conf.qry={};
var domain="http://127.0.0.1:5000/"
console.log(page_load_conf);
document.addEventListener("DOMContentLoaded", function () {
    if (tabStatus==1){load_tabs();}
    else{load_preview_tabs();}
    
});
//load_tabs()

function load_tabs() {
    var ul = document.getElementById("tab_list");
    var tab_pg_content = document.getElementById("tab_page_content");
    var send_data = JSON.stringify(page_load_conf);
    var end_point = domain + "get_user_tabs";

    const getData = async (url = end_point, api_method = "POST", api_body = send_data) => {
        console.log(api_body);
        var response = await fetch(url, {
            method: api_method,
            body: api_body,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            return await response.json();
        }
        return null;
    };

    getData().then(data => {
        if (!data || !data.tab_list) return;
        
        console.log((data.tab_list))
        tab_list = data.tab_list;
        console.log(tab_list[0]);

        for (var i = 0; i < tab_list.length; i++) {
            var li = document.createElement("li");
            li.className = "nav-item";

            var a = document.createElement("a");
            a.setAttribute('data-bs-toggle', 'tab');  // Corrected for Bootstrap 5
            a.href = `#${tab_list[i].Name}`;
            a.innerHTML = tab_list[i].Name;
            a.className = 'nav-link';

            a.addEventListener('click', function () {
                const tabName = this.innerHTML.trim(); 
                page_load_conf.tab = tabName;  
                tab_status[tabName] = 0;         
                get_data_list();
            });

            tab_href_div = document.createElement('div');
            tab_href_div.id = tab_list[i].Name;
            tab_href_div.className = "tab-pane fade";
            tab_href_div.innerHTML = "This is tab page " + tab_list[i].Name;

            tab_pg_content.append(tab_href_div);
            li.appendChild(a);
            ul.appendChild(li);

            tab_status[tab_list[i].Name] = 0;
        }

        // Activate Bootstrap tab functionality
        var tabTriggerList = [].slice.call(document.querySelectorAll('#tab_list a'));
        tabTriggerList.forEach(function (tab) {
            new bootstrap.Tab(tab);
        });

        console.log(tab_status);
    });
}

function load_preview_tabs() {
    var ul = document.getElementById("tab_list");
    var tab_pg_content = document.getElementById("tab_page_content");
    
    const tab_data = JSON.parse(sessionStorage.getItem("tab_config") || "{}");

    // Check if 'Admin' exists and access its tab_list
    var tab_list = tab_data["Admin"]?.tab_list || [];

    for (var i = 0; i < tab_list.length; i++) {
        var li = document.createElement("li");
        li.className = "nav-item";

        var a = document.createElement("a");
        a.setAttribute('data-bs-toggle', 'tab');  // Corrected for Bootstrap 5
        a.href = `#${tab_list[i].Name}`;
        a.innerHTML = tab_list[i].Name;
        a.className = 'nav-link';

        a.addEventListener('click', function () {
            const tabName = this.innerHTML.trim(); 
            page_load_conf.tab = tabName;  
            tab_status[tabName] = 0;         
            get_data_list();
        });

        tab_href_div = document.createElement('div');
        tab_href_div.id = tab_list[i].Name;
        tab_href_div.className = "tab-pane fade";
        tab_href_div.innerHTML = "This is tab page " + tab_list[i].Name;

        tab_pg_content.append(tab_href_div);
        li.appendChild(a);
        ul.appendChild(li);

        tab_status[tab_list[i].Name] = 0;
    }

    // Activate Bootstrap tab functionality
    var tabTriggerList = [].slice.call(document.querySelectorAll('#tab_list a'));
    tabTriggerList.forEach(function (tab) {
        new bootstrap.Tab(tab);
    });

    console.log(tab_status);
    
}

function API_call(domain,endpoint,body,method){
    var end_point = domain+endpoint;
    console.log(end_point, method)
    const getData = async(url=end_point,api_method=method,api_body=body) => {     
        console.log(api_body);
        var response;
        if (method !== "GET"){
            response = await fetch(url,{
                method: api_method,
                body: JSON.stringify(api_body), // string or object
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        }
        else{
            console.log("inside get")
            response = await fetch(url,{
                method: api_method,
                headers : { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
        }
        if (response.ok) {
            const raps = await response.json(); 
            if (raps){myresult = raps;}
            else{myresult = "No data found";}

        }
        return (myresult);
    }
    getData().then(data => {
        console.log(data, page_load_conf.tab,body.type)
        if (body.type){present_Data(data,body.type)}
        else{present_Data(data,null)}
    });
    tab_status[page_load_conf.tab]=1;
    console.log(tab_status);
    
}

/*displayObjectList*/

function createTable(responseData) {
    caldata=responseData;
    var status="";
    console.log(selectedItemFromDropdown)
    console.log(responseData);
    document.getElementById("tab_page_content").style.display = "block";
    const container = document.getElementById("tab_page_header");   
    if (!container) {
        console.error(`Element with id 'tab_page_content' not found.`);
        return;
    }
     // Create a div for buttons
     console.log(selectedItemFromDropdown)
     var divControls = document.createElement('div');
     if(selectedItemFromDropdown === null){
        try {
            container.innerHTML = ""; 
            console.log("///////////////////////")
            divControls.className = 'mb-3 d-flex gap-2';
            responseData.controls.forEach(control => {
                if (control.roles && control.roles.includes(role)) {
                    let input = null;

                    if (control.type === "select") {
                        let selectContainer = document.createElement('div');
                        selectContainer.className = 'custom-dropdown';
                        
                        input = document.createElement('select');
                        input.className = 'form-control dropdown-select';
                        input.name = control.tag || control.name;
                        input.title = control.tooltip || "";
                        input.setAttribute('id', control.tag); // Unique ID for each dropdown

                        // Add a default "Select Config" option
                        let defaultOption = document.createElement('option');
                        defaultOption.value = control.tag;
                        defaultOption.textContent = control.textContent;
                        defaultOption.disabled = true;
                        defaultOption.selected = true;
                        input.appendChild(defaultOption);

                        // Get options from JSON config or use a fallback array
                        let data = control.options || ["Config A", "Config B", "Config C"];
                        console.log(`Dropdown '${control.name}' Options:`, data);

                        if (Array.isArray(data) && data.length > 0) {
                            data.forEach(value => {
                                let option = document.createElement('option');
                                option.value = value;
                                option.textContent = value;
                                input.appendChild(option);
                            });
                        } else {
                            console.warn(`No options available for '${control.name}'.`);
                        }

                        // Add an onchange event listener
                        input.addEventListener("change", function () {
                            console.log(`Selected Config: ${this.value}`, control.tag);
                            
                            if(control.tag === "entriesPerPage"){rowsPerPage=this.value;  displayPage(1);}
                            else if(control.tag ==="items"){selectedItemFromDropdown=this.value;    get_data_list(this.value,{}); }
                           
                        });
                        
                        //let selectContainer = document.createElement('div');
                        selectContainer.appendChild(input);

                        divControls.appendChild(selectContainer);
                    } 
                    else { // For buttons
                        input = document.createElement('button');
                        input.setAttribute('onclick', control.function);
                        input.className = control.class;
                        input.innerHTML = control.name;
                        input.title = control.tooltip || "";
                        divControls.appendChild(input);
                    }
                }
            });
            container.appendChild(divControls);
        }
        catch (err) {
            status=status + err.message;
            console.log(err.message);
        }
     }
    ////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////

    // Create Search Bar
    const contentContainer = document.getElementById("tab_page_content");
    //console.log("clearing content container");
    if (selectedItemFromDropdown != null  || selectedItemFromDropdown == null){ contentContainer.innerHTML = ""; }
    let searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search...");
    searchInput.className = "form-control mb-3";
    searchInput.addEventListener("input", function () {
        filterTable(this.value);
    });
    

    // Table Wrapper
    let tableWrapper = document.createElement('div');
    tableWrapper.id = 'tableWrapper';
    tableWrapper.className = 'table-responsive';

    let table = document.createElement('table');
    table.className = 'table table-bordered table-striped table-hover';
    table.setAttribute("id", "dataTable");

    // Create Table Header
    let thead = document.createElement('thead');
    thead.className = 'table-dark sticky-top';

    let headerRow = document.createElement('tr');
   
    let received_Data = responseData.fields.data[0];
     // Add Select-All Column
    if (received_Data.edit_option) {
        let editTh = document.createElement('th');
        editTh.className = "text-center";
        editTh.setAttribute('scope', 'col');

        // Create select-all checkbox
        let selectAllCheckbox = document.createElement('input');
        selectAllCheckbox.type = 'checkbox';
        selectAllCheckbox.id = 'selectAllCheckbox';

        // Label (optional text beside checkbox)
        let label = document.createElement('label');
        label.textContent = "Select";
        label.setAttribute('for', 'selectAllCheckbox');
        label.style.marginLeft = "5px";

        // Append checkbox + label
        editTh.appendChild(selectAllCheckbox);
        editTh.appendChild(label);

        // Add functionality to select/deselect all checkboxes
        selectAllCheckbox.addEventListener('change', function () {
            const checkboxes = document.querySelectorAll("input[name='editRowSelect[]']");
            checkboxes.forEach(cb => {
                cb.checked = selectAllCheckbox.checked;
            });
        });

        headerRow.appendChild(editTh);
    }
    //let visibleFields = received_Data.fields.filter(field => field.show);
    let visibleFields = received_Data.fields
    .filter(field => field.show)
    .sort((a, b) => {
        const aSeq = parseInt(a.seqno || "9999", 10);
        const bSeq = parseInt(b.seqno || "9999", 10);
        return aSeq - bSeq;
    });

    const filterContainer = document.getElementById("tab_page_filter");
    // Ensure filterValues is initialized before use
    if (typeof filterValues === "undefined") {
        var filterValues = {}; // Initialize globally if not already defined
    }
    // Check if filter form already exists, if not, create it
    let filterForm = document.getElementById("filterForm");
    if (!filterForm) {
        filterForm = document.createElement("div");
        filterForm.id = "filterForm";
        //filterForm.className = "filter-form d-flex gap-2 align-items-center mb-3"; // Flex styling
        filterForm.className = "filter-form d-flex flex-wrap gap-2 align-items-center mb-3";

        filterContainer.appendChild(filterForm);
    }

    //////////////////////////////////  FILTER START   ////////////////////////////////////////////////////

        // Clear existing filter inputs before adding new ones
        filterForm.innerHTML = "";
        var hasField = false;
        document.getElementById("filter_btn").style.display = "block";
        document.getElementById("show_btn").style.display = "block";
        
        //console.log("page_load_conf:", page_load_conf);
        //console.log("page_load_conf.tab:", page_load_conf?.tab);
        //console.log("selectedItemFromDropdown:",selectedItemFromDropdown);
        //console.log("page_load_conf.tab.selectedItemFromDropdown:", page_load_conf?.tab?.selectedItemFromDropdown);
            
        // Ensure selectedItemFromDropdown exists before retrieving data
        if (selectedItemFromDropdown) {
            let key = String(selectedItemFromDropdown); // Convert to string if necessary
            let savedFilters = sessionStorage.getItem(key);
            
            filterValues = savedFilters ? JSON.parse(savedFilters) : {}; // Parse if exists, else default to {}
        } else {
            console.warn("selectedItemFromDropdown is undefined.");
        }
    
        // Create input fields for each visible column
        console.log(visibleFields);
        visibleFields.forEach(element => {
            try {
                console.log(element.filter_type, element);
                
                let fieldWrapper = document.createElement("div");
                fieldWrapper.className = "mb-3"; // Ensures proper spacing and alignment
                
                if (element.filter_type === "datetime") {
                    var datTimeFilterObj = filterValues[element.key || element.field] || [{ "start": "", "end": "" }];
        
                    let label1 = document.createElement("label");
                    label1.innerHTML = element.field + " FROM:";
                    label1.className = "form-label";
        
                    let input1 = document.createElement("input");
                    input1.type = "datetime-local";
                    input1.placeholder = "FROM";
                    input1.className = "form-control";
                    input1.name = element.field;
                    input1.value = datTimeFilterObj[0].start;
        
                    input1.addEventListener("input", function () {
                        datTimeFilterObj[0].start = this.value;
                        filterValues[element.key || element.field] = [...datTimeFilterObj];
                    });
        
                    let label2 = document.createElement("label");
                    label2.innerHTML = element.field + " TO:";
                    label2.className = "form-label";
        
                    let input2 = document.createElement("input");
                    input2.type = "datetime-local";
                    input2.placeholder = "TO";
                    input2.className = "form-control";
                    input2.name = element.field;
                    input2.value = datTimeFilterObj[0].end;
        
                    input2.addEventListener("input", function () {
                        datTimeFilterObj[0].end = this.value;
                        filterValues[element.key || element.field] = [...datTimeFilterObj];
                    });
        
                    fieldWrapper.appendChild(label1);
                    fieldWrapper.appendChild(input1);
                    fieldWrapper.appendChild(label2);
                    fieldWrapper.appendChild(input2);   fieldWrapper.appendChild(document.createElement('br'));
                } 
                else if (element.filter_type === "dropdown") {
                    let label = document.createElement("label");
                    label.innerHTML = element.field;
                    label.className = "form-label";
        
                    let select = document.createElement("select");
                    select.className = "form-select";
                    select.name = element.field;
        
                    let defaultOption = document.createElement("option");
                    defaultOption.value = "";
                    defaultOption.textContent = "Select " + element.field;
                    select.appendChild(defaultOption);
        
                    function populateOptions(options) {
                        options.forEach(value => {
                            let option = document.createElement("option");
                            option.value = value;
                            option.textContent = value;
                            if (filterValues[element.key || element.field] === value) {
                                option.selected = true;
                            }
                            select.appendChild(option);
                        });
                    }
        
                    if (element.filter_helper) {
                        fetchHelperData(element.filter_helper,element.filter_type).then(helperOptions => {
                            if (Array.isArray(helperOptions)) {
                                populateOptions(helperOptions);
                            }
                        }).catch(error => console.error("Error fetching helper data:", error));
                    } else if (Array.isArray(element.filter_default_value)) {
                        populateOptions(element.filter_default_value);
                    }
        
                    select.addEventListener("change", function () {
                        filterValues[element.key || element.field] = this.value;
                    });
        
                    //fieldWrapper.appendChild(label);
                    fieldWrapper.appendChild(select);   fieldWrapper.appendChild(document.createElement('br'));
                } 
                else if (element.filter_type === "textbox" || element.filter_type === "lable") {
                    let label = document.createElement("label");
                    label.innerHTML = element.label || element.field;
                    label.className = "form-label";
        
                    let input = document.createElement("input");
                    input.setAttribute("type", "text");
                    input.setAttribute("placeholder", element.label || element.field);
                    input.className = "form-control";
                    input.value = filterValues[element.key || element.field] || element.filter_default_value || "";
        
                    if (element.filter_type === "lable") {
                        input.setAttribute("readonly", true);
                    }
                    input.addEventListener("input", function () {
                        filterValues[element.key || element.field] = this.value;
                    });
        
                    //fieldWrapper.appendChild(label);
                    fieldWrapper.appendChild(input);    fieldWrapper.appendChild(document.createElement('br'));
                }
                
                filterForm.appendChild(fieldWrapper);
                hasField = true;
            } catch (err) {
                console.log(err);
            }
        });
        
        // Add the Filter button
        if (hasField) {
            let filterButtonWrapper = document.createElement("div");
            filterButtonWrapper.className = "mb-3 text-center";
            
            let filterButton = document.createElement("button");
            filterButton.textContent = "OK";
            filterButton.className = "btn btn-primary";
        
            filterButton.addEventListener("click", function () {
                let filterQuery = { where: { ...filterValues } };
                console.log("Filter Query:", filterQuery);
                console.log(selectedItemFromDropdown, filterValues);
        
                // Store filterValues in sessionStorage for persistence
                //sessionStorage.setItem("savedFilters", JSON.stringify(filterValues));
                //sessionStorage.setItem(page_load_conf.tab.selectedItemFromDropdown, JSON.stringify(filterValues));
                // Ensure page_load_conf and selectedItemFromDropdown exist
                    // Ensure page_load_conf and selectedItemFromDropdown exist before storing
                if (selectedItemFromDropdown) {
                    let key = String(selectedItemFromDropdown);
                    console.log("Saving to sessionStorage - Key:", key, "Values:", filterValues);
                    sessionStorage.setItem(key, JSON.stringify(filterValues));
                } else {
                    console.warn("selectedItemFromDropdown is undefined.");
                }
    
                get_data_list(selectedItemFromDropdown, filterValues);
            });
            filterButtonWrapper.appendChild(document.createElement('br'));
            filterButtonWrapper.appendChild(filterButton);
            filterForm.appendChild(filterButtonWrapper);
        }
    

    //////////////////////////////////  FILTER END   ////////////////////////////////////////////////////


    // Add Edit Column if applicable
   /* if (received_Data.edit_option) {
        let editTh = document.createElement('th');
        editTh.className = "text-center";
        editTh.textContent = "Select";
        editTh.setAttribute('scope', 'col');
        headerRow.appendChild(editTh);
    }*/

   //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Store previous checkbox states for different dropdown selections
    let previousSelectionsMap = {};
    let lastSelectedItem = null;

    visibleFields.forEach(element => {
        let th = document.createElement('th');
        th.className = "text-center sortable";
        th.setAttribute('scope', 'col');
        th.setAttribute("data-field", element.field);
        
        // Create a container div for text and arrow
        let thContent = document.createElement('div');
        thContent.style.display = "flex";
        thContent.style.alignItems = "center";
        thContent.style.justifyContent = "center";
        thContent.style.cursor = "pointer";
        
        // Column Name
        let columnText = document.createElement('span');
        columnText.textContent = element.lang[global_settings.language] || element.field.replace(/_/g, ' ').toUpperCase();
        columnText.style.marginRight = "5px";
        
        // Arrow Icon
        let sortIcon = document.createElement('span');
        sortIcon.className = "bi bi-arrow-up-down"; // Bootstrap sort icon
        
        let sortDirection = 1; // 1 = Ascending, -1 = Descending
        
        // Sort on click with arrow toggle
        thContent.addEventListener("click", function () {
            sortTable(element.field, sortDirection);
            sortDirection *= -1; // Toggle direction
            sortIcon.innerHTML = sortDirection === 1 ? "&#9650;" : "&#9660;"; // ▲ ▼
        });

        // Append elements
        thContent.appendChild(columnText);
        thContent.appendChild(sortIcon);
        th.appendChild(thContent);
        headerRow.appendChild(th);
    });

    // Manage column visibility panel
    let columnPanel = document.getElementById("show_columns_panel");

    // If the selected item changes, clear previous checkboxes
    if (selectedItemFromDropdown !== lastSelectedItem) {
        columnPanel.innerHTML = "";
        previousSelectionsMap[selectedItemFromDropdown] = {}; // Reset selection tracking
    }

    // Fetch previous selections for this dropdown item
    let previousSelections = previousSelectionsMap[selectedItemFromDropdown] || {};

    visibleFields.forEach(element => {
        let columnItem = document.createElement("div");
        columnItem.className = "column-item";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("data-field", element.field);

        // Restore previous selection if it exists, else default to checked
        checkbox.checked = previousSelections.hasOwnProperty(element.field) ? previousSelections[element.field] : true;

        let label = document.createElement("label");
        label.textContent = element.lang[global_settings.language] || element.field.replace(/_/g, ' ').toUpperCase();
        label.style.marginLeft = "5px";

        columnItem.appendChild(checkbox);
        columnItem.appendChild(label);
        columnPanel.appendChild(columnItem);
    });

    // Ensure only one "Update" button exists
    if (!document.getElementById("update_columns_btn")) {
        let updateButton = document.createElement("button");
        updateButton.id = "update_columns_btn";
        updateButton.textContent = "OK";
        updateButton.className = "btn btn-primary mt-2";
        updateButton.onclick = function () {
            let selectedColumns = [];
            let checkboxes = document.querySelectorAll("#show_columns_panel input[type='checkbox']");

            // Update selection tracking for the current dropdown item
            previousSelectionsMap[selectedItemFromDropdown] = {};

            checkboxes.forEach(cb => {
                let field = cb.getAttribute("data-field");
                previousSelectionsMap[selectedItemFromDropdown][field] = cb.checked;
                if (cb.checked) {
                    selectedColumns.push(field);
                }
            });

            // Show/hide table columns based on selection
            document.querySelectorAll("th, td").forEach(cell => {
                let field = cell.getAttribute("data-field");
                if (field) {
                    cell.style.display = selectedColumns.includes(field) ? "" : "none";
                }
            });
        };

        columnPanel.appendChild(updateButton);
    }

    lastSelectedItem = selectedItemFromDropdown; // Update last selected item
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create Table Body
    let tbody = document.createElement('tbody');
    tbody.setAttribute("id", "entityTableBody");
    console.log(responseData.data)
    responseData.data.forEach(rowData => {
        let tr = document.createElement('tr');
        let rowDataString = JSON.stringify(rowData);

        //  Radio Button Column
        if (received_Data.edit_option) {
            let editTd = document.createElement('td');
            editTd.className = "text-center";
        
           /* let radioInput = document.createElement('input');
            radioInput.type = 'radio'; // Changed to checkbox for multiple selection
            radioInput.name = 'editRowSelect'; // Group all radio buttons
            radioInput.value = rowDataString;  // Store data as value
            editTd.appendChild(radioInput);*/
        
           /* radioInput.addEventListener('change', function () {
                let rowData = JSON.parse(this.value);
                editRow(rowData); // Call the same function when selected
            });*/
        
            

            let checkboxInput = document.createElement('input');
            checkboxInput.type = 'checkbox';
            checkboxInput.name = 'editRowSelect[]';  // ✅ Match with selector
            checkboxInput.value = rowDataString;
            editTd.appendChild(checkboxInput);
            tr.appendChild(editTd);
        }
        
        visibleFields.forEach(field => {
            let td = document.createElement('td');
            td.className = "text-center";
            td.setAttribute("data-field", field.field);
        
            if (["remark", "schedule", "venue", "photo","doc_template","ui_template"].includes(field.field.toLowerCase())) {
                let viewBtn = document.createElement("button");
                viewBtn.className = "btn btn-info btn-sm";
                viewBtn.innerHTML = "View";
        
                // Convert event handler to async function
                viewBtn.onclick = async function () {
                    console.log(1);
        
                    if (selectedItemFromDropdown === "Resource Registry" && field.field.toLowerCase() === "schedule") {
                        console.log(2);
                        let schedule = rowData[field.field] ? JSON.parse(rowData[field.field]) : null;
                        let details = rowData.details;
                        console.log("Schedule Data:", schedule, details);
        
                        if (schedule) {
                            let calendarEl = document.getElementById("calendar");
                            calendarEl.innerHTML = ""; // Clear previous calendar
        
                            let startDate = new Date(schedule.startDate);
                            let endDate = new Date(schedule.endDate);
        
                            if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
                                alert("Invalid event date format!");
                                return;
                            }
        
                            let events = [];
                            let currentDate = new Date(startDate);
        
                            while (currentDate <= endDate) {
                                let dayName = currentDate.toLocaleString("en-US", { weekday: "long" }).toLowerCase();
        
                                if (schedule.workDays[dayName]) {
                                    schedule.workDays[dayName].forEach(timeRange => {
                                        let [startTime, endTime] = timeRange;
                                        let eventDate = new Date(currentDate);
        
                                        let eventStart = new Date(eventDate);
                                        let eventEnd = new Date(eventDate);
        
                                        let [startHour, startMinute] = startTime.split(":").map(Number);
                                        let [endHour, endMinute] = endTime.split(":").map(Number);
        
                                        eventStart.setHours(startHour, startMinute, 0);
                                        eventEnd.setHours(endHour, endMinute, 0);
        
                                        events.push({
                                            title: details || "Scheduled Event",
                                            start: eventStart.toISOString(),
                                            end: eventEnd.toISOString(),
                                            description: `Scheduled Time: ${startTime} - ${endTime}`,
                                            backgroundColor: "#007bff",
                                            textColor: "#ffffff",
                                            borderColor: "#0056b3"
                                        });
                                    });
                                }
                                currentDate.setDate(currentDate.getDate() + 1);
                            }
        
                            console.log("Generated Events:", events);
        
                            let calendar = new FullCalendar.Calendar(calendarEl, {
                                initialView: "dayGridMonth",
                                headerToolbar: {
                                    left: "prev,next today",
                                    center: "title",
                                    right: "dayGridMonth,timeGridWeek,timeGridDay",
                                },
                                events: events,
                                eventDidMount: function (info) {
                                    info.el.setAttribute("title", info.event.extendedProps.description);
                                    info.el.style.padding = "5px";
                                    info.el.style.borderRadius = "5px";
                                },
                                eventClick: function (info) {
                                    alert(`Event: ${info.event.title}\nDetails: ${info.event.extendedProps.description}`);
                                }
                            });
        
                            calendar.render();
        
                            let modalInstance = new bootstrap.Modal(document.getElementById("myCalendar"));
                            modalInstance.show();
                        } else {
                            alert("No work days available.");
                        }
                    } 
                    else if (field.field.toLowerCase() === "remark") {
                        console.log(3);
                        let remarkContent = document.getElementById("remark_content");
        
                        if (page_load_conf.tab === "Resource") {
                            let content = rowData[field.field] ? JSON.stringify(JSON.parse(rowData[field.field]), null, 2) : "No data available";
                            remarkContent.innerText = content;
                        } 
                        else if (page_load_conf.tab === "Entity") {
                            let remarks = rowData[field.field]
                                ? rowData[field.field].split("|").map(item => `<li>${item.trim()}</li>`).join("")
                                : "<li>No remarks available</li>";
                            remarkContent.innerHTML = `<ul>${remarks}</ul>`;
                        }
        
                        let modalInstance = new bootstrap.Modal(document.getElementById("remark_modal"));
                        modalInstance.show();
                    } 
                    else if (field.field.toLowerCase() === "venue") {
                        console.log(4);
                        let remarkContent = document.getElementById("remark_content");
        
                        if (rowData[field.field]) {
                            let jsonData = JSON.parse(rowData[field.field]);
                            let formattedContent = Object.entries(jsonData)
                                .map(([key, value]) => `${key}: ${value}`)
                                .join("\n");
        
                            remarkContent.innerHTML = `<pre style="white-space: pre-wrap; word-wrap: break-word;">${formattedContent}</pre>`;
                        } else {
                            remarkContent.innerText = "No data available";
                        }
        
                        let modalInstance = new bootstrap.Modal(document.getElementById("remark_modal"));
                        modalInstance.show();
                    } 
                    else if (field.field.toLowerCase() === "photo") {
                        file_rowdata =rowData;   console.log(rowData);
                        console.log("Opening photo preview for:", rowData[field.field]);
        
                        if (rowData[field.field]) {
                            try {
                                await viewFile(rowData[field.field]);
                            } catch (error) {
                                console.error("Error loading photo:", error);
                            }
                        } else {
                            console.warn("No photo available for preview.");
                            alert("No photo available.");
                        }
                    }
                    else if (field.field.toLowerCase() === "doc_template") {
                        console.log(6);
                        let remarkContent = document.getElementById("remark_content");
                        let content = rowData[field.field] ? JSON.stringify(JSON.parse(rowData[field.field]), null, 2) : "No data available";
                        remarkContent.innerText = content;
        
                        let modalInstance = new bootstrap.Modal(document.getElementById("remark_modal"));
                        modalInstance.show();
                    }
                    else if (field.field.toLowerCase() === "ui_template") {
                        console.log(6);
                        let remarkContent = document.getElementById("remark_content");
                        let content = rowData[field.field] ? JSON.stringify(JSON.parse(rowData[field.field]), null, 2) : "No data available";
                        remarkContent.innerText = content;
        
                        let modalInstance = new bootstrap.Modal(document.getElementById("remark_modal"));
                        modalInstance.show();
                    }
        
                    console.log(5);
                };
        
                td.appendChild(viewBtn);
            } else {
                td.textContent = rowData[field.field] || "-";
            }
        
            tr.appendChild(td);
        });
        
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    tableWrapper.appendChild(table);

    // Append everything to container
    if (page_load_conf.tab !== "EntityConfig" || "NetworkConfig" ||"SystemConfig"){
        container.appendChild(divControls);
    }
    contentContainer.appendChild(searchInput);
    contentContainer.appendChild(tableWrapper);
    trigger( page_load_conf.tab, "list", status)
    // Initialize Pagination
    createPaginationControls();
    displayPage(1);
}

function previewCreateTable(responseData) {
    console.log("Preview mode - showing table structure only");
    console.log(selectedItemFromDropdown);
    console.log(responseData);
    
    document.getElementById("tab_page_content").style.display = "block";
    const container = document.getElementById("tab_page_header");   
    if (!container) {
        console.error(`Element with id 'tab_page_header' not found.`);
        return;
    }

    // Create a div for controls (dropdowns and buttons)
    var divControls = document.createElement('div');
    if (selectedItemFromDropdown === null) {
        try {
            container.innerHTML = ""; 
            divControls.className = 'mb-3 d-flex gap-2';
            
            responseData.controls.forEach(control => {
                if (control.roles && control.roles.includes(role)) {
                    let input = null;

                    if (control.type === "select") {
                        let selectContainer = document.createElement('div');
                        selectContainer.className = 'custom-dropdown';
                        
                        input = document.createElement('select');
                        input.className = 'form-control dropdown-select';
                        input.name = control.tag || control.name;
                        input.setAttribute('id', control.tag);

                        // Add a default option
                        let defaultOption = document.createElement('option');
                        defaultOption.value = control.tag;
                        defaultOption.textContent = control.textContent;
                        defaultOption.disabled = true;
                        defaultOption.selected = true;
                        input.appendChild(defaultOption);

                        // Get options from JSON config
                        let data = control.options || ["Config A", "Config B", "Config C"];
                        console.log(`Preview Dropdown '${control.name}' Options:`, data);

                        if (Array.isArray(data) && data.length > 0) {
                            data.forEach(value => {
                                let option = document.createElement('option');
                                option.value = value;
                                option.textContent = value;
                                input.appendChild(option);
                            });
                        }

                        // Add event listener (disabled in preview mode)
                        input.addEventListener("change", function () {
                            console.log(`Preview Mode - Selected: ${this.value}`);
                            // Note: In preview mode, actual data loading is disabled
                        });
                        
                        selectContainer.appendChild(input);
                        divControls.appendChild(selectContainer);
                    } 
                    else { // For buttons
                        input = document.createElement('button');
                        input.setAttribute('onclick', control.function);
                        input.className = control.class;
                        input.innerHTML = control.name;
                        divControls.appendChild(input);
                    }
                }
            });
            container.appendChild(divControls);
        }
        catch (err) {
            console.log("Preview error:", err.message);
        }
    }

    // Create content container
    const contentContainer = document.getElementById("tab_page_content");
    contentContainer.innerHTML = ""; 

    // Create Search Bar (preview only)
    let searchInput = document.createElement("input");
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("placeholder", "Search... (Preview Mode)");
    searchInput.className = "form-control mb-3";
    searchInput.disabled = true; // Disabled in preview mode

    // Table Wrapper
    let tableWrapper = document.createElement('div');
    tableWrapper.id = 'tableWrapper';
    tableWrapper.className = 'table-responsive';

    let table = document.createElement('table');
    table.className = 'table table-bordered table-striped table-hover';
    table.setAttribute("id", "dataTable");

    // Create Table Header
    let thead = document.createElement('thead');
    thead.className = 'table-dark sticky-top';
    let headerRow = document.createElement('tr');

    let received_Data = responseData.fields.data[0];
    let visibleFields = received_Data.fields.filter(field => field.show);
    
    // Create filter container (preview only)
    const filterContainer = document.getElementById("tab_page_filter");
    let filterForm = document.createElement("div");
    filterForm.id = "filterForm";
    filterForm.className = "filter-form d-flex flex-wrap gap-2 align-items-center mb-3";

    // Show filter structure without functionality
    document.getElementById("filter_btn").style.display = "block";
    document.getElementById("show_btn").style.display = "block";

    // Create preview filter inputs
    visibleFields.forEach(element => {
        try {
            let fieldWrapper = document.createElement("div");
            fieldWrapper.className = "mb-3";
            
            if (element.filter_type === "datetime") {
                let label1 = document.createElement("label");
                label1.innerHTML = element.field + " FROM:";
                label1.className = "form-label";

                let input1 = document.createElement("input");
                input1.type = "datetime-local";
                input1.placeholder = "FROM (Preview)";
                input1.className = "form-control";
                input1.disabled = true;

                let label2 = document.createElement("label");
                label2.innerHTML = element.field + " TO:";
                label2.className = "form-label";

                let input2 = document.createElement("input");
                input2.type = "datetime-local";
                input2.placeholder = "TO (Preview)";
                input2.className = "form-control";
                input2.disabled = true;

                fieldWrapper.appendChild(label1);
                fieldWrapper.appendChild(input1);
                fieldWrapper.appendChild(label2);
                fieldWrapper.appendChild(input2);
                fieldWrapper.appendChild(document.createElement('br'));
            } 
            else if (element.filter_type === "dropdown") {
                let select = document.createElement("select");
                select.className = "form-select";
                select.disabled = true;

                let defaultOption = document.createElement("option");
                defaultOption.value = "";
                defaultOption.textContent = "Select " + element.field + " (Preview)";
                select.appendChild(defaultOption);

                fieldWrapper.appendChild(select);
                fieldWrapper.appendChild(document.createElement('br'));
            } 
            else if (element.filter_type === "textbox" || element.filter_type === "lable") {
                let input = document.createElement("input");
                input.setAttribute("type", "text");
                input.setAttribute("placeholder", (element.label || element.field) + " (Preview)");
                input.className = "form-control";
                input.disabled = true;

                fieldWrapper.appendChild(input);
                fieldWrapper.appendChild(document.createElement('br'));
            }
            
            filterForm.appendChild(fieldWrapper);
        } catch (err) {
            console.log("Preview filter error:", err);
        }
    });

    // Add preview filter button
    let filterButtonWrapper = document.createElement("div");
    filterButtonWrapper.className = "mb-3 text-center";
    
    let filterButton = document.createElement("button");
    filterButton.textContent = "OK (Preview)";
    filterButton.className = "btn btn-primary";
    filterButton.disabled = true;

    filterButtonWrapper.appendChild(document.createElement('br'));
    filterButtonWrapper.appendChild(filterButton);
    filterForm.appendChild(filterButtonWrapper);

    filterContainer.appendChild(filterForm);

    // Add Edit Column if applicable
    if (received_Data.edit_option) {
        let editTh = document.createElement('th');
        editTh.className = "text-center";
        editTh.textContent = "Select";
        editTh.setAttribute('scope', 'col');
        headerRow.appendChild(editTh);
    }

    // Create table headers
    visibleFields.forEach(element => {
        let th = document.createElement('th');
        th.className = "text-center sortable";
        th.setAttribute('scope', 'col');
        th.setAttribute("data-field", element.field);
        
        let thContent = document.createElement('div');
        thContent.style.display = "flex";
        thContent.style.alignItems = "center";
        thContent.style.justifyContent = "center";
        thContent.style.cursor = "default"; // No sorting in preview
        
        let columnText = document.createElement('span');
        columnText.textContent = element.lang[global_settings.language] || element.field.replace(/_/g, ' ').toUpperCase();
        columnText.style.marginRight = "5px";
        
        let sortIcon = document.createElement('span');
        sortIcon.innerHTML = "&#9650;&#9660;"; // Show both arrows for preview
        sortIcon.style.opacity = "0.5"; // Faded to indicate disabled
        
        thContent.appendChild(columnText);
        thContent.appendChild(sortIcon);
        th.appendChild(thContent);
        headerRow.appendChild(th);
    });

    // Create column visibility panel
    let columnPanel = document.getElementById("show_columns_panel");
    columnPanel.innerHTML = "";

    visibleFields.forEach(element => {
        let columnItem = document.createElement("div");
        columnItem.className = "column-item";

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("data-field", element.field);
        checkbox.checked = true;
        checkbox.disabled = true; // Disabled in preview

        let label = document.createElement("label");
        label.textContent = element.lang[global_settings.language] || element.field.replace(/_/g, ' ').toUpperCase();
        label.style.marginLeft = "5px";
        label.style.opacity = "0.7"; // Faded for preview

        columnItem.appendChild(checkbox);
        columnItem.appendChild(label);
        columnPanel.appendChild(columnItem);
    });

    // Add disabled update button
    let updateButton = document.createElement("button");
    updateButton.textContent = "OK (Preview)";
    updateButton.className = "btn btn-primary mt-2";
    updateButton.disabled = true;
    columnPanel.appendChild(updateButton);

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Create Table Body with preview message
    let tbody = document.createElement('tbody');
    tbody.setAttribute("id", "entityTableBody");
    
    // Add a preview row to show structure
    let previewRow = document.createElement('tr');
    previewRow.style.backgroundColor = "#f8f9fa";
    previewRow.style.fontStyle = "italic";
    previewRow.style.color = "#6c757d";

    // Add radio button column if applicable
    if (received_Data.edit_option) {
        let previewTd = document.createElement('td');
        previewTd.className = "text-center";
        previewTd.innerHTML = "○"; // Empty radio symbol
        previewRow.appendChild(previewTd);
    }

    // Add preview data cells
    visibleFields.forEach(field => {
        let td = document.createElement('td');
        td.className = "text-center";
        td.setAttribute("data-field", field.field);
        
        if (["remark", "schedule", "venue", "photo"].includes(field.field.toLowerCase())) {
            td.innerHTML = "<em>View Button</em>";
        } else {
            td.textContent = `[${field.field}]`;
        }
        
        previewRow.appendChild(td);
    });

    tbody.appendChild(previewRow);

    // Add additional preview message row
    let messageRow = document.createElement('tr');
    let messageCell = document.createElement('td');
    messageCell.colSpan = visibleFields.length + (received_Data.edit_option ? 1 : 0);
    messageCell.className = "text-center";
    messageCell.style.padding = "20px";
    messageCell.style.backgroundColor = "#e9ecef";
    messageCell.innerHTML = "<strong>PREVIEW MODE</strong><br>Table structure and headers are shown above.<br>Data will be populated when actual data is loaded.";
    messageRow.appendChild(messageCell);
    tbody.appendChild(messageRow);

    table.appendChild(tbody);
    tableWrapper.appendChild(table);

    // Append everything to container
    if (page_load_conf.tab !== "EntityConfig" && page_load_conf.tab !== "NetworkConfig" && page_load_conf.tab !== "SystemConfig") {
        container.appendChild(divControls);
    }
    contentContainer.appendChild(searchInput);
    contentContainer.appendChild(tableWrapper);

    console.log("Preview table structure created successfully");
}

function edit_data() {
    const selectedCheckboxes = document.querySelectorAll('input[name="editRowSelect[]"]:checked');
    if (selectedCheckboxes.length === 1) {
        const rowData = JSON.parse(selectedCheckboxes[0].value);
        console.log('Selected Row Data:', rowData);
        editRow(rowData); // Call your edit function
    } else if (selectedCheckboxes.length === 0) {
        alert('Please select one row to edit.');
    } else {
        alert('Please select only one row to edit.');
    }
}

function collectSelectedData() {
    const selectedCheckboxes = document.querySelectorAll('input[name="editRowSelect[]"]:checked');

    if (selectedCheckboxes.length === 0) {
        alert('No rows selected.');
        return;
    }

    const selectedData = Array.from(selectedCheckboxes).map(cb => {
        const row = JSON.parse(cb.value);
        console.log("Raw Row Data:", row);

        let venueData = {};
        try {
            venueData = JSON.parse(row.venue || '{}');
        } catch (e) {
            console.warn('Invalid venue JSON:', row.venue);
        }

        // Normalize lat/lng
        const lat = parseFloat(row.lat || venueData.lat || venueData.latitude || NaN);
        const lng = parseFloat(row.lng || venueData.lng || venueData.longitude || venueData.long || NaN);

        return {
            _originalRow: row,
            lat,
            lng,
            building: row.building || venueData.building || '',
            street: row.street || venueData.street || '',
            area: row.area || venueData.area || '',
            city: row.city || venueData.city || '',
            state: row.state || venueData.state || '',
            country: row.country || venueData.country || '',
            url: row.url || venueData.url || venueData.url_address ||'',
            host_id: row.host_id || row.host_entity_id || venueData.host_entity_id || '',
            subscriber_limit: row.subscriber_limit || venueData.subscriber_limit || '',
            terms: row.terms || venueData.terms || '',
            event_id: row.event_id || '',
            event_ids: row.event_ids || '',
            name: row.name || '',
            description: row.description || '',
            category: row.category || '',
            from: row.from || row.from_datime || '',
            to: row.to || row.to_datime || '',
        };
    });

    console.log('Mapped Venue Data:', selectedData);

    const venueControl = document.querySelector('venue-location-control');
    if (venueControl) {
        venueControl.showMultiVenueModalSeparate(selectedData);
    } else {
        alert('VenueLocationControl not found. Please ensure the component is loaded.');
    }
}

function graphInitialization() {
    console.log("Inside graphInitialization function");
    const selectedCheckboxes = document.querySelectorAll('input[name="editRowSelect[]"]:checked');

    if (selectedCheckboxes.length === 0) {
        alert('No rows selected.');
        return;
    }

    const selectedData = Array.from(selectedCheckboxes).map(cb => JSON.parse(cb.value));

    const graphsControl = document.querySelector("graphs-control");
    if (graphsControl) {
        graphsControl.initializeAndOpenModal(selectedData); // Call the method to handle data and open modal
    } else {
        alert("GraphsControl not found. Please ensure the component is loaded.");
    }
}

/*function collectSelectedData() {
    const selectedCheckboxes = document.querySelectorAll('input[name="editRowSelect[]"]:checked');

    if (selectedCheckboxes.length === 0) {
        alert('No rows selected.');
        return;
    }

    const selectedData = Array.from(selectedCheckboxes).map(cb => JSON.parse(cb.value));
    console.log('Selected Rows Data:', selectedData);

    // You can also show it in a modal, alert, or download as JSON if needed.
}*/


/*
function print_document(){
    console.log(" Inside print_document function");
    let selectedRadio = document.querySelector('input[name="editRowSelect"]:checked');
    console.log("Selected Radio Button:", selectedRadio);
    if (selectedRadio) {
        let rowData = JSON.parse(selectedRadio.value);
        console.log('Selected Row Data for printing:', rowData);
        // You can call any function or populate a form:
        //editRow(rowData);
        printing_document(
            "🔒 Confidential Resource Report",
            "🕒 Generated on: " + new Date().toLocaleString(),
            rowData
        );
    } else {
        alert('Please select a row first.');
    }
}*/

function print_document() {
    console.log("Inside print_document function");

    // Select all checked checkboxes
    const selectedCheckboxes = document.querySelectorAll('input[name="editRowSelect[]"]:checked');
    console.log("Selected Checkboxes:", selectedCheckboxes);

    if (selectedCheckboxes.length === 1) {
        const rowData = JSON.parse(selectedCheckboxes[0].value);
        console.log('Selected Row Data for printing:', rowData);

        printing_document(
            "🔒 Confidential Resource Report",
            "🕒 Generated on: " + new Date().toLocaleString(),
            rowData
        );
    } else if (selectedCheckboxes.length === 0) {
        alert('Please select one row to print.');
    } else {
        alert('Please select only one row to print.');
    }
}


function delete_data() {
    const selectedCheckboxes = document.querySelectorAll('input[name="editRowSelect[]"]:checked');

    if (selectedCheckboxes.length === 1) {
        const rowData = JSON.parse(selectedCheckboxes[0].value);
        console.log('Selected Row Data for deletion:', rowData);
        deleteRow(rowData); // Your custom delete function
    } else if (selectedCheckboxes.length === 0) {
        alert('Please select one row to delete.');
    } else {
        alert('Please select only one row to delete.');
    }
}


function displayPage(page) {
    let tableBody = document.getElementById("entityTableBody");
    let rows = tableBody.getElementsByTagName("tr");
    let totalPages = Math.ceil(rows.length / rowsPerPage);

    // Ensure valid page number
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    currentPage = page;

    // Hide all rows
    for (let i = 0; i < rows.length; i++) {
        rows[i].style.display = "none";
    }

    // Show only the rows for the current page
    let start = (currentPage - 1) * rowsPerPage;
    let end = start + rowsPerPage;
    for (let i = start; i < end && i < rows.length; i++) {
        rows[i].style.display = "";
    }

    updatePaginationControls(totalPages);
}

// Create Pagination Controls
function createPaginationControls() {
    let paginationContainer = document.createElement("div");
    paginationContainer.id = "paginationControls";
    paginationContainer.innerHTML="";
    paginationContainer.className = "d-flex justify-content-center mt-3"; // Bootstrap styling

    // Previous Button
    let prevButton = document.createElement("button");
    prevButton.textContent = "Previous";
    prevButton.className = "btn btn-secondary mx-1";
    prevButton.onclick = function () {
        displayPage(currentPage - 1);
    };
    paginationContainer.appendChild(prevButton);

    // Page Numbers Container
    let pageNumbersContainer = document.createElement("span");
    pageNumbersContainer.id = "pageNumbers";
    pageNumbersContainer.className = "mx-2";
    paginationContainer.appendChild(pageNumbersContainer);

    // Next Button
    let nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.className = "btn btn-secondary mx-1";
    nextButton.onclick = function () {
        displayPage(currentPage + 1);
    };
    paginationContainer.appendChild(nextButton);

    // Append to content container
    document.getElementById("tab_page_content").appendChild(paginationContainer);
}

// Update Pagination Controls (Page Numbers)
function updatePaginationControls(totalPages) {
    let pageNumbersContainer = document.getElementById("pageNumbers");
    pageNumbersContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        let pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.className = `btn btn-outline-primary mx-1 ${i === currentPage ? 'active' : ''}`;
        pageButton.onclick = function () {
            displayPage(i);
        };
        pageNumbersContainer.appendChild(pageButton);
    }
}

function displayFilter(visibleFields){
    visibleFields.forEach(element => {
        if (element.filter_type=="texbox"){
            let input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("placeholder", `${element.label || element.field}`);
            input.className = "form-control";
            input.style.width = "auto"; // Allow input fields to shrink
            
            // Store value on change
            input.addEventListener("input", function () {
                filterValues[element.key || element.field] = this.value;
            });
        }
        else if (element.filter_type=="lable"){
            let input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("value", element.filter_default_value);
            input.setAttribute("readonly", true);
            input.className = "form-control";
            input.style.width = "auto"; // Allow input fields to shrink
            
            // Store value on change
            input.addEventListener("input", function () {
                filterValues[element.key || element.field] = this.value;
            });
        }
        filterForm.appendChild(input);
    });
}
// Function to Filter Table Rows
function filterTable(query) {
    let rows = document.querySelectorAll("#entityTableBody tr");
    query = query.toLowerCase();
    rows.forEach(row => {
        let visible = false;
        row.querySelectorAll("td").forEach(cell => {
            if (cell.textContent.toLowerCase().includes(query)) {
                visible = true;
            }
        });
        row.style.display = visible ? "" : "none";
    });
}

// Function to Sort Table
function sortTable(field) {
    let table = document.getElementById("entityTableBody");
    let rows = Array.from(table.querySelectorAll("tr"));
    let ascending = table.getAttribute("data-sort-order") !== "asc";

    rows.sort((rowA, rowB) => {
        let cellA = rowA.querySelector(`td[data-field="${field}"]`).textContent.trim();
        let cellB = rowB.querySelector(`td[data-field="${field}"]`).textContent.trim();

        if (!isNaN(cellA) && !isNaN(cellB)) {
            return ascending ? cellA - cellB : cellB - cellA;
        } else {
            return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
        }
    });

    table.innerHTML = "";
    rows.forEach(row => table.appendChild(row));

    table.setAttribute("data-sort-order", ascending ? "asc" : "desc");
}

function deleteRow(rowData) {
    // Confirm deletion with the user
    var value;
    let apiEndpoint = "";
    let requestData = { requestor_id:"", request_token:"", type:"",qry:{"where_data":{}},"tab":page_load_conf.tab,};
    console.log(selectedItemFromDropdown)
    try{
        if(selectedItemFromDropdown!=null) {
            requestData.qry.where_data[MainConfig[page_load_conf.tab][selectedItemFromDropdown].key] = rowData[MainConfig[page_load_conf.tab][selectedItemFromDropdown].key]
            requestData.type=selectedItemFromDropdown;
            apiEndpoint=domain + MainConfig[page_load_conf.tab][selectedItemFromDropdown].job.cancel.api
        }
    }catch(err){console.log("Error in data extraction",err)}
    
   
    if (!confirm(`Are you sure you want to delete this data ?`)) {
        return;
    }

    // Define API endpoint based on the active tab
    apiEndpoint = MainConfig[page_load_conf.tab][selectedItemFromDropdown].job.cancel.api;
    console.log(requestData, apiEndpoint);

    // Make the API call
    fetch(apiEndpoint, {
        method: "DELETE", // Assuming DELETE uses POST for sending data
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert("Entry deleted successfully!");
            console.log(page_load_conf.tab)
            get_data_list(selectedItemFromDropdown,{"affiliation_id":""});
            //if (page_load_conf.tab === "Entity") { tab_status[page_load_conf.tab]=0; get_entity_list();}
        } else {
            alert("Error: " + (data.message || "Failed to delete entity."));
        }
    })
    .catch(error => {
        console.error("Delete request failed:", error);
        alert("An error occurred while deleting the entity.");
    });
}

/*function editRow(rowData, action) {
    console.log(selectedItemFromDropdown);
    console.log("Edit Clicked:", rowData);
    page_load_conf.role = localStorage.getItem("u_role");
    
    // Define a mapping for tab names to API details
    var apiConfigKey="";
    let modal_body = {};
    var key_val =MainConfig[page_load_conf.tab][selectedItemFromDropdown].key
    var api = MainConfig[page_load_conf.tab][selectedItemFromDropdown].getDataApi
    modal_body = {
        "requestor_id": "",
        "request_token": "",
        "type": selectedItemFromDropdown,
        "tab":page_load_conf.tab,
        "affiliations": JSON.parse(sessionStorage.getItem("userAffiliations")),
        "qry": {
            "select_fields": ["*"],
            "where_data": { [key_val]: rowData[key_val] }
        }
    };
    console.log(modal_body);
    const end_point = `http://127.0.0.1:5000/${api}`;
    const send_data = JSON.stringify(modal_body);

    console.log("Sending API Request:", send_data);

    // Fetch data from the server
    fetch(end_point, {
        method: "POST",
        body: send_data,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log("Received Data:", data);
        if (action === 'create') {
            return data;  // Just return the fetched data
        } else {
            editModalCreation(data, selectedItemFromDropdown);  // Proceed as normal
        }
    })
    .catch(error => console.error("Error fetching data:", error));
}*/

async function editRow(rowData, action) {
    console.log("Selected Item:", selectedItemFromDropdown);
    console.log("Edit Clicked:", rowData);
    
    page_load_conf.role = localStorage.getItem("u_role");

    // Extract API and key config
    const key_val = MainConfig[page_load_conf.tab][selectedItemFromDropdown].key;
    const api = MainConfig[page_load_conf.tab][selectedItemFromDropdown].getDataApi;

    // Construct request body
    const modal_body = {
        requestor_id: "",
        request_token: "",
        type: selectedItemFromDropdown,
        tab: page_load_conf.tab,
        affiliations: JSON.parse(sessionStorage.getItem("userAffiliations")),
        qry: {
            select_fields: ["*"],
            where_data: { [key_val]: rowData[key_val] }
        }
    };

    const end_point = `http://127.0.0.1:5000/${api}`;
    const send_data = JSON.stringify(modal_body);

    console.log("Sending API Request:", send_data);

    try {
        const response = await fetch(end_point, {
            method: "POST",
            body: send_data,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });

        const data = await response.json();
        console.log("Received Data:", data);

        if (action === 'create') {
            return data;  // Just return the fetched data
        } else {
            editModalCreation(data, selectedItemFromDropdown);  // Proceed as normal
        }
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

/*function editModalCreation(response,selectedItemFromDropdown) {
    var rowData = response[0];
    console.log(rowData,selectedItemFromDropdown);
    let form = document.getElementById('editForm');
    if (!form) {
        console.error("Form element not found!");
        return;
    }

    form.innerHTML = ""; // Clear previous inputs

    let data = {};
    var config_path;
    if (selectedItemFromDropdown==null){config_path=MainConfig[page_load_conf.tab]; }
    else{config_path=MainConfig[page_load_conf.tab][selectedItemFromDropdown]; rowData = response[0][0]; }
    console.log("rowData:", rowData);
    console.log(config_path.job);
    if(role == "Admin"){data=config_path.job.update.data[0];}
    else if(role == "Admin"){data=config_path.job.approver.data[0];}
    else{console.log("Role not defined")}

  
    let fields = data.fields || [];
    if (!fields.length) {
        console.error("No fields found in configuration!");
        return;
    }

    fields.forEach(field => {
        if (!field.show) return;

        let formGroup = document.createElement('div');
        formGroup.className = 'form-group mb-3';

        let label = document.createElement('label');
        label.textContent = field.field.replace(/_/g, ' ').toUpperCase();
        label.className = 'form-label';

        let input;
      
        console.log(label, field.field, field.control);
    
            if (field.field === "work_days") {
                console.log(1);
                input = document.createElement('input');
                input.className = 'form-control';
                input.name = field.field;
                input.id = 'work_days';
                input.readOnly = true;
                input.value = rowData[field.field] || "{}";
                formGroup.appendChild(input);
            
                let eventButton = document.createElement('button');
                eventButton.type = 'button';
                eventButton.textContent = "Open";
                eventButton.className = 'btn btn-primary mt-2';
                
                eventButton.onclick = function () {
                    console.log("Raw work_days value:", input.value);
                    
                    try {
                        let workDaysData = JSON.parse(input.value || "{}");
                        console.log("Parsed Work Days Data:", workDaysData);
                        
                        // Populate modal fields
                        document.getElementById('eventName').value = workDaysData.title || "";
                        document.getElementById('eventDescription').value = workDaysData.description || "";
                        document.getElementById('eventStartDate').value = workDaysData.start_date || ""; 
                        document.getElementById('eventEndDate').value = workDaysData.end_date || "";
            
                        // Clear previous entries
                        let scheduleContainer = document.getElementById('scheduleContainer');
                        scheduleContainer.innerHTML = "";

                        // Populate existing schedule
                        let daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

                        daysOfWeek.forEach(day => {
                            console.log(day, workDaysData[day]); // Debugging log
                        
                            if (workDaysData[day]) {  
                                let timingsArray = workDaysData[day]; // Already an array
                        
                                if (Array.isArray(timingsArray)) {
                                    timingsArray.forEach((timeSlot, index) => {
                                        if (Array.isArray(timeSlot) && timeSlot.length === 2) {
                                            addScheduleRow_edit(day, timeSlot[0], timeSlot[1], index); // Pass day name & start/end times
                                        }
                                    });
                                }
                            }
                        });
                        // Show modal
                        let addEventModal = new bootstrap.Modal(document.getElementById('addEventModal'));
                        addEventModal.show();
            
                    } catch (error) {
                        console.error("Error parsing workDays JSON:", error);
                    }
                };
            
                formGroup.appendChild(eventButton);
            } else if (field.control === "schedule-control") {
                console.log(2);
                input = document.createElement("schedule-control");
                input.id = field.field;
            
                // Ensure rowData[field.field] contains a valid schedule JSON string
                if (rowData[field.field]) {
                    try {
                        const scheduleData = JSON.parse(rowData[field.field]);
                        input.value = scheduleData; // Assign parsed data to the custom element
                    } catch (error) {
                        console.error("Invalid schedule data:", error);
                    }
                }
            
                // Append input to the DOM if necessary (if inside a form or specific container)
                document.body.appendChild(input); // Change this according to your structure
            
                // Select and use the schedule-control element after appending it
                let scheduleControl = document.getElementById(field.field);
            
            
            } else if (field.control === "venue-control") {
                
                console.log(3);
                input = document.createElement("venue-control");
                input.id = field.field;
            
                // Ensure rowData[field.field] contains a valid schedule JSON string
                if (rowData[field.field]) {
                    try {
                        const scheduleData = JSON.parse(rowData[field.field]);
                        input.value = scheduleData; // Assign parsed data to the custom element
                    } catch (error) {
                        console.error("Invalid venue data:", error);
                    }
                }
            
                // Append input to the DOM if necessary (if inside a form or specific container)
                document.body.appendChild(input); // Change this according to your structure
            
                // Select and use the schedule-control element after appending it
                let venueControl = document.getElementById(field.field);
            
            
            } else if (field.control === "venue-location-control") {
                console.log(3);
                console.log("Raw venue data:", rowData[field.field]); // Debug
                
                input = document.createElement("venue-location-control");
                input.id = field.field;

                document.body.appendChild(input);

                if (rowData[field.field]) {
                    setTimeout(() => {
                        try {
                            let venueData = rowData[field.field];
                            console.log("Venue data type:", typeof venueData); // Debug
                            
                            if (typeof venueData === "string") {
                                venueData = JSON.parse(venueData);
                            }
                            
                            console.log("Parsed venue data:", venueData); // Debug
                            console.log("Setting value on element:", input); // Debug
                            
                            input.value = venueData;
                            
                            // Check if shadowRoot exists
                            console.log("ShadowRoot exists:", !!input.shadowRoot); // Debug
                            
                        } catch (error) {
                            console.error("Invalid venue data:", error);
                        }
                    }, 100);
                }

                let venueControl = document.getElementById(field.field);

            } else if (field.control === "checkbox") {
                console.log(4);
                input = document.createElement('input');
                input.type = 'checkbox';
                input.className = 'form-check-input';
                input.name = field.field;
                input.checked = rowData[field.field] == "true" || rowData[field.field] == 1;
            } else if (field.control === "dropdown" && field.values) {
                console.log(5);
                input = document.createElement('select');
                input.className = 'form-control';
                input.name = field.field;

                field.values.forEach(value => {
                    let option = document.createElement('option');
                    option.value = value;
                    option.textContent = value;
                    if (rowData[field.field] === value) {
                        option.selected = true;
                    }
                    input.appendChild(option);
                });
            } else if (field.control === "datetime-local") {
                console.log(6);
                input = document.createElement('input');
                input.type = 'datetime-local';
                input.className = 'form-control';
                input.name = field.field;
            
                // Convert stored date into proper format for datetime-local input
                if (rowData[field.field]) {
                    let dateObj = new Date(rowData[field.field]);
                    if (!isNaN(dateObj)) {
                        input.value = dateObj.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:MM
                    }
                }
            }if (field.control === "field-attribute-control") {
            input = document.createElement("field-attribute-control");
            input.id = field.field;
            input.className = 'form-control';

            try {
                const parsedValue = typeof rowData[field.field] === "string"
                    ? JSON.parse(rowData[field.field])
                    : rowData[field.field];
                input.value = parsedValue;
            } catch (error) {
                console.error("Error parsing field-attribute-control data:", error);
            }
        }

            else {
                console.log(7);
                console.log(label, field.field, field.control, rowData[field.field]);
                
                input = document.createElement('input');
                input.className = 'form-control';
                input.name = field.field;
                input.value = rowData[field.field] || "";
            }
            console.log(8)

            if (!field.edit) input.setAttribute('disabled', 'true');

            formGroup.appendChild(label);
            formGroup.appendChild(input);
            form.appendChild(formGroup); 
    });
    
    document.getElementById("venueForm").onsubmit = function (e) {
        e.preventDefault();
    
        let isValid = true;
        let errorMessage = "";
    
        // Get form values
        let building = document.getElementById('building').value.trim();
        let street = document.getElementById('street').value.trim();
        let area = document.getElementById('area').value.trim();
        let city = document.getElementById('city').value.trim();
        let state = document.getElementById('state').value.trim();
        let country = document.getElementById('country').value.trim();
        let url = document.getElementById('url_address').value.trim();
        let lat = document.getElementById('latitude').value.trim();
        let long = document.getElementById('longitude').value.trim();
    
        // Validation checks
        if (!building || !street || !area || !city || !state || !country) {
            isValid = false;
            errorMessage += "All text fields are required.\n";
        }
    
        // Validate latitude & longitude (must be numbers)
        if (lat && isNaN(lat)) {
            isValid = false;
            errorMessage += "Latitude must be a valid number.\n";
        }
    
        if (long && isNaN(long)) {
            isValid = false;
            errorMessage += "Longitude must be a valid number.\n";
        }
    
        // Validate URL (if provided)
        if (url && !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(url)) {
            isValid = false;
            errorMessage += "Please enter a valid URL.\n";
        }
    
        if (!isValid) {
            alert(errorMessage); // Show validation errors
            return;
        }
    
        // Construct JSON in the required format
        let venueData = {
            building: building,
            street: street,
            area: area,
            city: city,
            state: state,
            country: country,
            url: url,
            lat: lat,
            long: long
        };
    
        console.log("Updated Venue JSON:", venueData);
    
        // Store JSON as a string in the hidden input field
        document.getElementById('venue').value = JSON.stringify(venueData);
    
        // Hide the modal after submission
        bootstrap.Modal.getInstance(document.getElementById('venueModal')).hide();
    };
    

    let editModalElement = document.getElementById('myModal');
    document.getElementById("modal_title").innerHTML = page_load_conf.tab + " Details";

    if (!editModalElement) {
        console.error("Modal not found in the DOM!");
        return;
    }

    editModalElement.removeAttribute("aria-hidden");

    let editModal = new bootstrap.Modal(editModalElement, { backdrop: 'static' });
    editModal.show();

    document.getElementById('saveChanges').onclick = function () {
        let updatedData = {
            "where_data": {},
            "update": {}
        };
        
        console.log(fields);
        fields.forEach(field => {
            if (!field.show) return;
            
            let input = form.elements[field.field];
            let currentValue = rowData[field.field]; // Original value from rowData
            let newValue;
            
            console.log(input, currentValue);
            
            if (field.field === "schedule") {
                let scheduleElement = document.querySelector("schedule-control");
                newValue = scheduleElement ? scheduleElement.value : "";
            } else if (field.field === "venue") { // Add this condition for venue-location
                let venueLocationElement = document.querySelector("venue-location-control");
                newValue = venueLocationElement ? venueLocationElement.value : "";
            } else if (input && field.control === "checkbox") {
                newValue = input.checked ? 1 : 0;
            } else if (input) {
                newValue = input.value;
            } else {
                // Handle case where input is undefined (custom controls)
                console.warn(`Input element not found for field: ${field.field}`);
                newValue = currentValue; // Keep original value if input not found
            }
            
            // ✅ Only add changed fields to updatedData
            // For JSON fields, we need to compare the parsed objects or strings
            let hasChanged = false;
            
            if (field.field === "venue" || field.field === "schedule") {
                // For JSON fields, compare as strings or parse and compare objects
                try {
                    // If currentValue is already a string, compare directly
                    if (typeof currentValue === 'string') {
                        hasChanged = currentValue !== newValue;
                    } else {
                        // If currentValue is an object, stringify it for comparison
                        hasChanged = JSON.stringify(currentValue) !== newValue;
                    }
                } catch (e) {
                    // Fallback to direct comparison
                    hasChanged = currentValue !== newValue;
                }
            } else {
                hasChanged = currentValue !== newValue;
            }
            
            if (hasChanged) {
                updatedData.update[field.field] = newValue;
            }
        });
        
        // ✅ Ensure at least one field is being updated
        if (Object.keys(updatedData.update).length === 0) {
            console.log("No changes detected. No update required.");
            editModal.hide();
            return;
        }
        
        // ✅ Set the `where_data` for the update query
        updatedData.where_data[MainConfig[page_load_conf.tab][selectedItemFromDropdown].key] = 
            rowData[MainConfig[page_load_conf.tab][selectedItemFromDropdown].key];
        
        console.log("Updated Data:", updatedData);
        
        updateEntry(
            rowData[MainConfig[page_load_conf.tab][selectedItemFromDropdown].key],
            updatedData
        );
        
        editModal.hide();
    };
    
}*/
async function handleCreateActionFromSelection() {
    const checkedRow = getCheckedRowData(); // implement this logic
    if (checkedRow) {
        const data = await editRow(checkedRow, 'create');
        console.log("Data from DB:", data);
        // use the data to prefill your modal or form
    }
}
/* work for me but not tejas (maps)
function editModalCreation(response, selectedItemFromDropdown) {
  const rowData = selectedItemFromDropdown == null ? response[0] : response[0][0];
  const form = document.getElementById("editForm");
  if (!form) return console.error("Form element not found!");
  form.innerHTML = "";

  let config_path = selectedItemFromDropdown == null
    ? MainConfig[page_load_conf.tab]
    : MainConfig[page_load_conf.tab][selectedItemFromDropdown];

  let data;
  if (role === "Admin") data = config_path.job.update;
  else if (role === "Approver") data = config_path.job.approver;
  else return console.error("Role not defined");

  const modal = document.getElementById("editModalBody");
  if (modal) modal.innerHTML = "";

  data.data.forEach((section, sectionIndex) => {
    let fields = section.fields || [];

    // Sort fields based on seqno
    fields = fields.sort((a, b) => {
      const aSeq = parseInt(a.seqno || "9999", 10);
      const bSeq = parseInt(b.seqno || "9999", 10);
      return aSeq - bSeq;
    });

    console.log(`\n[Section ${sectionIndex + 1}] Helper: ${section.helper}`);

    fields.forEach(field => {
      if (!field.show) return;

      const fieldId = `edit_${field.field}`;
      const currentValue = rowData[field.field] || field.default || "";

      const formGroup = document.createElement("div");
      formGroup.className = "form-group mb-3";

      const label = document.createElement("label");
      label.htmlFor = fieldId;
      label.textContent = field.field.replace(/_/g, " ").toUpperCase();
      label.className = "form-label";

      let input;
      switch (field.control) {
        case "text":
        case "number":
        case "datetime-local":
          input = document.createElement("input");
          input.type = field.control;
          input.value = field.control === "datetime-local" && currentValue
            ? new Date(currentValue).toISOString().slice(0, 16)
            : currentValue;
          break;
        case "checkbox":
          input = document.createElement("input");
          input.type = "checkbox";
          input.checked = currentValue == "true" || currentValue == 1;
          break;
        case "dropdown":
          input = document.createElement("select");
          input.className = "form-control";
          (field.values || []).forEach(val => {
            const option = document.createElement("option");
            option.value = val;
            option.textContent = val;
            if (val === currentValue) option.selected = true;
            input.appendChild(option);
          });
          break;
        case "schedule-control":
        case "venue-control":
        case "venue-location-control":
        case "field-attribute-control":
          input = document.createElement(field.control);
          try {
            input.value = typeof currentValue === "string"
              ? JSON.parse(currentValue)
              : currentValue;
          } catch (err) {
            console.warn("Invalid JSON for field:", field.field, err);
          }
          break;
        default:
          input = document.createElement("input");
          input.value = currentValue;
      }

      input.id = fieldId;
      input.name = field.field;
      input.className ||= "form-control";
      if (!field.edit) input.disabled = true;

      // Attach event triggers if defined
      if (field.trigger && Array.isArray(field.trigger)) {
        field.trigger.forEach(trig => {
          input.addEventListener(trig.event, function (e) {
            if (typeof window[trig.function] === "function") {
              window[trig.function](e);
            } else {
              console.warn(`Trigger function ${trig.function} not defined.`);
            }
          });
        });
      }

      formGroup.appendChild(label);
      formGroup.appendChild(input);
      form.appendChild(formGroup);
    });
  });

  // Setup modal
  const editModalElement = document.getElementById("myModal");
  if (!editModalElement) return console.error("Modal not found in the DOM!");
  editModalElement.removeAttribute("aria-hidden");
  const editModal = new bootstrap.Modal(editModalElement, { backdrop: "static" });
  document.getElementById("modal_title").innerHTML = `${page_load_conf.tab} Details`;
  editModal.show();

  document.getElementById("saveChanges").onclick = function () {
    const updatedData = { where_data: {}, update: {} };

    data.data.forEach(section => {
      section.fields.forEach(field => {
        if (!field.show) return;

        const input = form.elements[field.field];
        const oldValue = rowData[field.field];
        let newValue;

        if (field.control === "checkbox") {
          newValue = input.checked ? 1 : 0;
        } else if (["schedule-control", "venue-location-control", "venue-control", "field-attribute-control"].includes(field.control)) {
          const element = document.querySelector(field.control);
          newValue = element ? element.value : oldValue;
        } else {
          newValue = input ? input.value : oldValue;
        }

        const changed = (typeof oldValue === "object" || typeof newValue === "object")
          ? JSON.stringify(oldValue) !== JSON.stringify(newValue)
          : oldValue !== newValue;

        if (changed) {
          updatedData.update[field.field] = newValue;
        }
      });
    });

    if (Object.keys(updatedData.update).length === 0) {
      console.log("No changes detected. No update required.");
      editModal.hide();
      return;
    }

    updatedData.where_data[config_path.key] = rowData[config_path.key];
    console.log("Updated Data:", updatedData);
    updateEntry(rowData[config_path.key], updatedData);
    editModal.hide();
  };
}*/

function editModalCreation(response,selectedItemFromDropdown) {
    var rowData = response[0];
    console.log(rowData,selectedItemFromDropdown);
    let form = document.getElementById('editForm');
    if (!form) {
        console.error("Form element not found!");
        return;
    }

    form.innerHTML = ""; // Clear previous inputs

    let data = {};
    var config_path;
    if (selectedItemFromDropdown==null){config_path=MainConfig[page_load_conf.tab]; }
    else{config_path=MainConfig[page_load_conf.tab][selectedItemFromDropdown]; rowData = response[0][0]; }
    console.log("rowData:", rowData);
    console.log(config_path.job);
    if(role == "Admin"){data=config_path.job.update.data[0];}
    else if(role == "Admin"){data=config_path.job.approver.data[0];}
    else{console.log("Role not defined")}

  
    let fields = data.fields || [];
    if (!fields.length) {
        console.error("No fields found in configuration!");
        return;
    }

    fields.forEach(field => {
        if (!field.show) return;

        let formGroup = document.createElement('div');
        formGroup.className = 'form-group mb-3';

        let label = document.createElement('label');
        label.textContent = field.field.replace(/_/g, ' ').toUpperCase();
        label.className = 'form-label';

        let input;
      
        console.log(label, field.field, field.control);
    
            if (field.field === "work_days") {
                console.log(1);
                input = document.createElement('input');
                input.className = 'form-control';
                input.name = field.field;
                input.id = 'work_days';
                input.readOnly = true;
                input.value = rowData[field.field] || "{}";
                formGroup.appendChild(input);
            
                let eventButton = document.createElement('button');
                eventButton.type = 'button';
                eventButton.textContent = "Open";
                eventButton.className = 'btn btn-primary mt-2';
                
                eventButton.onclick = function () {
                    console.log("Raw work_days value:", input.value);
                    
                    try {
                        let workDaysData = JSON.parse(input.value || "{}");
                        console.log("Parsed Work Days Data:", workDaysData);
                        
                        // Populate modal fields
                        document.getElementById('eventName').value = workDaysData.title || "";
                        document.getElementById('eventDescription').value = workDaysData.description || "";
                        document.getElementById('eventStartDate').value = workDaysData.start_date || ""; 
                        document.getElementById('eventEndDate').value = workDaysData.end_date || "";
            
                        // Clear previous entries
                        let scheduleContainer = document.getElementById('scheduleContainer');
                        scheduleContainer.innerHTML = "";

                        // Populate existing schedule
                        let daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

                        daysOfWeek.forEach(day => {
                            console.log(day, workDaysData[day]); // Debugging log
                        
                            if (workDaysData[day]) {  
                                let timingsArray = workDaysData[day]; // Already an array
                        
                                if (Array.isArray(timingsArray)) {
                                    timingsArray.forEach((timeSlot, index) => {
                                        if (Array.isArray(timeSlot) && timeSlot.length === 2) {
                                            addScheduleRow_edit(day, timeSlot[0], timeSlot[1], index); // Pass day name & start/end times
                                        }
                                    });
                                }
                            }
                        });
                        // Show modal
                        let addEventModal = new bootstrap.Modal(document.getElementById('addEventModal'));
                        addEventModal.show();
            
                    } catch (error) {
                        console.error("Error parsing workDays JSON:", error);
                    }
                };
            
                formGroup.appendChild(eventButton);
            } else if (field.control === "schedule-control") {
                console.log(2);
                input = document.createElement("schedule-control");
                input.id = field.field;
            
                // Ensure rowData[field.field] contains a valid schedule JSON string
                if (rowData[field.field]) {
                    try {
                        const scheduleData = JSON.parse(rowData[field.field]);
                        input.value = scheduleData; // Assign parsed data to the custom element
                    } catch (error) {
                        console.error("Invalid schedule data:", error);
                    }
                }
            
                // Append input to the DOM if necessary (if inside a form or specific container)
                document.body.appendChild(input); // Change this according to your structure
            
                // Select and use the schedule-control element after appending it
                let scheduleControl = document.getElementById(field.field);
            
            
            } else if (field.control === "venue-control") {
                
                console.log(3);
                input = document.createElement("venue-control");
                input.id = field.field;
            
                // Ensure rowData[field.field] contains a valid schedule JSON string
                if (rowData[field.field]) {
                    try {
                        const scheduleData = JSON.parse(rowData[field.field]);
                        input.value = scheduleData; // Assign parsed data to the custom element
                    } catch (error) {
                        console.error("Invalid venue data:", error);
                    }
                }
            
                // Append input to the DOM if necessary (if inside a form or specific container)
                document.body.appendChild(input); // Change this according to your structure
            
                // Select and use the schedule-control element after appending it
                let venueControl = document.getElementById(field.field);
            
            
            } else if (field.control === "venue-location-control") {
                console.log(3);
                console.log("Raw venue data:", rowData[field.field]); // Debug
                
                input = document.createElement("venue-location-control");
                input.id = field.field;

                document.body.appendChild(input);

                if (rowData[field.field]) {
                    setTimeout(() => {
                        try {
                            let venueData = rowData[field.field];
                            console.log("Venue data type:", typeof venueData); // Debug
                            
                            if (typeof venueData === "string") {
                                venueData = JSON.parse(venueData);
                            }
                            
                            console.log("Parsed venue data:", venueData); // Debug
                            console.log("Setting value on element:", input); // Debug
                            
                            input.value = venueData;
                            
                            // Check if shadowRoot exists
                            console.log("ShadowRoot exists:", !!input.shadowRoot); // Debug
                            
                        } catch (error) {
                            console.error("Invalid venue data:", error);
                        }
                    }, 100);
                }

                let venueControl = document.getElementById(field.field);

            } else if (field.control === "checkbox") {
                console.log(4);
                input = document.createElement('input');
                input.type = 'checkbox';
                input.className = 'form-check-input';
                input.name = field.field;
                input.checked = rowData[field.field] == "true" || rowData[field.field] == 1;
            } else if (field.control === "dropdown" && field.values) {
                console.log(5);
                input = document.createElement('select');
                input.className = 'form-control';
                input.name = field.field;

                field.values.forEach(value => {
                    let option = document.createElement('option');
                    option.value = value;
                    option.textContent = value;
                    if (rowData[field.field] === value) {
                        option.selected = true;
                    }
                    input.appendChild(option);
                });
            } else if (field.control === "datetime-local") {
                console.log(6);
                input = document.createElement('input');
                input.type = 'datetime-local';
                input.className = 'form-control';
                input.name = field.field;
            
                // Convert stored date into proper format for datetime-local input
                if (rowData[field.field]) {
                    let dateObj = new Date(rowData[field.field]);
                    if (!isNaN(dateObj)) {
                        input.value = dateObj.toISOString().slice(0, 16); // Format: YYYY-MM-DDTHH:MM
                    }
                }
            } else if (field.control === "field-attribute-control") {
                console.log("Initializing FieldAttributeControl for:", field.field);
                input = document.createElement("field-attribute-control");
                input.id = field.field;

                document.body.appendChild(input); // Ensure it's in the DOM

                // Wait for the custom element to be fully initialized
                if (rowData[field.field]) {
                    setTimeout(() => {
                        try {
                            let attrData = rowData[field.field];
                            if (typeof attrData === "string") {
                                attrData = JSON.parse(attrData);
                            }
                            input.value = attrData;
                            console.log("Parsed field-attribute-control data:", attrData); // Debug
                            const config = attrData;
                            const control = document.querySelector('field-attribute-control');
                            control.populateFromTemplate(config);
                        } catch (e) {
                            console.error("Failed to parse field-attribute-control data", e);
                        }
                    }, 100);
                }

                let attrControl = document.getElementById(field.field);
 
            } else {
                console.log(7);
                console.log(label, field.field, field.control, rowData[field.field]);
                
                input = document.createElement('input');
                input.className = 'form-control';
                input.name = field.field;
                input.value = rowData[field.field] || "";
            }
            console.log(8)

            if (!field.edit) input.setAttribute('disabled', 'true');

            formGroup.appendChild(label);
            formGroup.appendChild(input);
            form.appendChild(formGroup);

      
       
       
    });
    
    document.getElementById("venueForm").onsubmit = function (e) {
        e.preventDefault();
    
        let isValid = true;
        let errorMessage = "";
    
        // Get form values
        let building = document.getElementById('building').value.trim();
        let street = document.getElementById('street').value.trim();
        let area = document.getElementById('area').value.trim();
        let city = document.getElementById('city').value.trim();
        let state = document.getElementById('state').value.trim();
        let country = document.getElementById('country').value.trim();
        let url = document.getElementById('url_address').value.trim();
        let lat = document.getElementById('latitude').value.trim();
        let long = document.getElementById('longitude').value.trim();
    
        // Validation checks
        if (!building || !street || !area || !city || !state || !country) {
            isValid = false;
            errorMessage += "All text fields are required.\n";
        }
    
        // Validate latitude & longitude (must be numbers)
        if (lat && isNaN(lat)) {
            isValid = false;
            errorMessage += "Latitude must be a valid number.\n";
        }
    
        if (long && isNaN(long)) {
            isValid = false;
            errorMessage += "Longitude must be a valid number.\n";
        }
    
        // Validate URL (if provided)
        if (url && !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(url)) {
            isValid = false;
            errorMessage += "Please enter a valid URL.\n";
        }
    
        if (!isValid) {
            alert(errorMessage); // Show validation errors
            return;
        }
    
        // Construct JSON in the required format
        let venueData = {
            building: building,
            street: street,
            area: area,
            city: city,
            state: state,
            country: country,
            url: url,
            lat: lat,
            long: long
        };
    
        console.log("Updated Venue JSON:", venueData);
    
        // Store JSON as a string in the hidden input field
        document.getElementById('venue').value = JSON.stringify(venueData);
    
        // Hide the modal after submission
        bootstrap.Modal.getInstance(document.getElementById('venueModal')).hide();
    };
    

    let editModalElement = document.getElementById('myModal');
    document.getElementById("modal_title").innerHTML = page_load_conf.tab + " Details";

    if (!editModalElement) {
        console.error("Modal not found in the DOM!");
        return;
    }

    editModalElement.removeAttribute("aria-hidden");

    let editModal = new bootstrap.Modal(editModalElement, { backdrop: 'static' });
    editModal.show();

    document.getElementById('saveChanges').onclick = function () {
        let updatedData = {
            "where_data": {},
            "update": {}
        };
        
        console.log(fields);
        fields.forEach(field => {
            if (!field.show) return;
            
            let input = form.elements[field.field];
            let currentValue = rowData[field.field]; // Original value from rowData
            let newValue;
            
            console.log(input, currentValue);
            
            if (field.field === "schedule") {
                let scheduleElement = document.querySelector("schedule-control");
                newValue = scheduleElement ? scheduleElement.value : "";
            } else if (field.field === "venue") { // Add this condition for venue-location
                let venueLocationElement = document.querySelector("venue-location-control");
                newValue = venueLocationElement ? venueLocationElement.value : "";
            } else if (input && field.control === "checkbox") {
                newValue = input.checked ? 1 : 0;
            } else if (input) {
                newValue = input.value;
            } else if (field.field === "ui_template") {
                let fieldAttrControl = document.querySelector("field-attribute-control");
                newValue = fieldAttrControl ? fieldAttrControl.value : ""; 
            }
            else {
                // Handle case where input is undefined (custom controls)
                console.warn(`Input element not found for field: ${field.field}`);
                newValue = currentValue; // Keep original value if input not found
            }
            
            // ✅ Only add changed fields to updatedData
            // For JSON fields, we need to compare the parsed objects or strings
            let hasChanged = false;
            
            if (field.field === "venue" || field.field === "schedule") {
                // For JSON fields, compare as strings or parse and compare objects
                try {
                    // If currentValue is already a string, compare directly
                    if (typeof currentValue === 'string') {
                        hasChanged = currentValue !== newValue;
                    } else {
                        // If currentValue is an object, stringify it for comparison
                        hasChanged = JSON.stringify(currentValue) !== newValue;
                    }
                } catch (e) {
                    // Fallback to direct comparison
                    hasChanged = currentValue !== newValue;
                }
            } else {
                hasChanged = currentValue !== newValue;
            }
            
            if (hasChanged) {
                updatedData.update[field.field] = newValue;
            }
        });
        
        // ✅ Ensure at least one field is being updated
        if (Object.keys(updatedData.update).length === 0) {
            console.log("No changes detected. No update required.");
            editModal.hide();
            return;
        }
        
        // ✅ Set the `where_data` for the update query
        updatedData.where_data[MainConfig[page_load_conf.tab][selectedItemFromDropdown].key] = 
            rowData[MainConfig[page_load_conf.tab][selectedItemFromDropdown].key];
        
        console.log("Updated Data:", updatedData);
        
        updateEntry(
            rowData[MainConfig[page_load_conf.tab][selectedItemFromDropdown].key],
            updatedData
        );
        
        editModal.hide();
    };
    
}


// ✅ Function to properly format DateTime for "datetime-local"
function formatDateTime(dateString) {
    if (!dateString) return "";

    let date = new Date(dateString);
    if (isNaN(date.getTime())) return ""; // Handle invalid dates

    return date.toISOString().slice(0, 16); // Formats to "YYYY-MM-DDTHH:MM"
}

async function Registration_modal() {
    console.log("Create New  Modal Opened");
    const selectedCheckboxes = document.querySelectorAll('input[name="editRowSelect[]"]:checked');
    console.log("Selected Checkboxes:", selectedCheckboxes);
    let fetchedData 
    console.log(selectedCheckboxes.length)
    if (selectedCheckboxes.length >= 2){
        alert('Please select only one row or none to create the document.'); return;
    } else if(selectedCheckboxes.length === 1) {
        const rowData = JSON.parse(selectedCheckboxes[0].value);
        console.log('Selected Row Data:', rowData, ">>", )
        fetchedData =await  editRow(rowData, "create")
        console.log(">>>>>>>>>>>>>>",fetchedData)

    } else{(console.log("creating new form"))}

    let form = document.getElementById('createForm');
    if (!form) {
        console.error("Form element not found!");
        return;
    }
    form.innerHTML = ""; // Clear previous inputs
    let data = {};
    console.log(selectedItemFromDropdown)
    try{
       
        if(selectedItemFromDropdown!=null) {data=MainConfig[page_load_conf.tab][selectedItemFromDropdown].job.create.data}
        else{data=MainConfig[page_load_conf.tab].job.create.data}
    }catch(err){console.log("Error in data extraction",err)}

    console.log(data);

    if (!Array.isArray(data) || data.length === 0) {
        console.error("Invalid configuration data!");
        return;
    }

    let allFields = [];

    console.log("👉 Raw Config Data:", data);

    for (const entry of data) {
        console.log(`📁 Processing Entry with helper: ${entry.helper || "none"}`);

        for (const field of entry.fields) {
            console.log("🔍 Original Field:", field);

            if (field.control === "dropdown") {
                if (Array.isArray(field.values) && field.values.length > 0) {
                    field.dropdownValues = field.values;
                    console.log("✅ Using static dropdown values:", field.values);
                } else if (entry.helper !== "none") {
                    const rawData = await fetchHelperData(entry.helper,field.control);
                    console.log("📥 Fetched helper data:", rawData);
                   const { descriptions, otherFieldValues } = autoSplitDescriptionAndFirstField(rawData);

                    console.log("Descriptions:", descriptions);
                    console.log("Other Field Values:", otherFieldValues);

                    field.dropdownValues = Array.isArray(otherFieldValues) && otherFieldValues.length > 0
                        ? otherFieldValues
                        : (field.default ? [field.default] : []);
                    field.dropdownTooltips = descriptions;  // Save tooltips for rendering phase
                    

                    // ✅ Create <select> element and append options with tooltips
                   /* const select = document.createElement('select');
                    select.className = 'form-select';
                    select.name = field.field || 'dropdown';
                    select.id = field.field || 'dropdown';

                    field.dropdownValues.forEach((value, index) => {
                        const option = document.createElement('option');
                        option.value = value;
                        option.textContent = value;
                        option.title = field.dropdownTooltips?.[index] || "";  // Tooltip
                        select.appendChild(option);
                    });*/

                    console.log("✅ Using helper or default dropdown values:", field.dropdownValues);
                } else {
                    field.dropdownValues = field.default ? [field.default] : [];
                    console.log("⚠️ No values/helper found. Using default:", field.dropdownValues);
                }
            }

            allFields.push(field);
        }
    }

    console.log("🧮 All Fields Before Sort:", allFields);

    // Sort by seqno (numerically); fallback to Infinity to keep unsequenced items at end
    const fields = allFields.sort((a, b) => {
        const aSeq = a.seqno !== undefined ? parseInt(a.seqno) : Infinity;
        const bSeq = b.seqno !== undefined ? parseInt(b.seqno) : Infinity;
        return aSeq - bSeq;
    });

    console.log("✅ Final Fields After Sorting by seqno:", fields);


    console.log(fields);

    if (!fields.length) {
        console.error("No fields found in configuration!");
        return;
    }

    fields.forEach(field => {
        console.log(field);
        if (!field.show) return;

        let formGroup = document.createElement('div');
        formGroup.className = 'form-group mb-3';

        let label = document.createElement('label');
        label.textContent = field.field.replace(/_/g, ' ').toUpperCase();
        label.className = 'form-label';

        let input;
        const fieldId = field.field;
        const currentValue = fetchedData?.[0]?.[0]?.[fieldId] ?? field.default ?? "";

        // Control types
        if (field.control === "dropdown") {
            input = document.createElement('select');
            
            input.className = 'form-control';
            input.name = fieldId;
            
            input.id = fieldId;

            if (field.trigger !== "none" && typeof window[field.trigger] === "function") {
                window[field.trigger](field.field);
            }

            if (field.mandatory) input.required = true;

            if (Array.isArray(field.dropdownValues)) {
                field.dropdownValues.forEach((value, index) => {
                    let option = document.createElement('option');
                    option.value = value;
                    option.textContent = value;

                    // Use tooltip if available
                    if (Array.isArray(field.dropdownTooltips) && field.dropdownTooltips[index]) {
                        option.title = field.dropdownTooltips[index];
                        console.log(`Tooltip for ${value}: ${field.dropdownTooltips[index]}`);
                    }
                    

                    if (value === currentValue) option.selected = true;

                    input.appendChild(option);
                });
            }

            if (field.onchange && typeof window[field.onchange] === "function") {
                input.addEventListener("change", (e) => window[field.onchange](e));
            }

        } else if (["schedule-control", "venue-control","field-mapping-control", "doc-template-control", "attachment-control", "field-attribute-control", "maps-control", "venue-location-control","template-mapping-control"].includes(field.control)) {
            input = document.createElement(field.control);
            input.id = fieldId;
            if (currentValue) {
                try {
                    input.value = typeof currentValue === "string" ? JSON.parse(currentValue) : currentValue;
                } catch (e) {
                    console.warn(`Failed to parse value for ${fieldId}`, e);
                }
            }
            if (field.control === "attachment-control" && input.handleSelection) {
                input.handleSelection(field.type);
            }

        } else if (field.control === "checkbox") {
            input = document.createElement('input');
            input.type = 'checkbox';
            input.className = 'form-check-input';
            input.name = fieldId;
            input.id = fieldId;
            input.checked = currentValue == "true" || currentValue == 1;

        } else if (field.control === "button") {
            input = document.createElement('button');
            input.type = 'button';
            input.id = field.btn_id || fieldId;
            input.textContent = field.name || "Button";
            if (field.class) input.className = field.class;

        } else if (field.control === "file") {
            input = document.createElement('input');
            input.type = 'file';
            input.className = 'form-control';
            input.name = fieldId;
            input.id = fieldId;
            if (field.accept) input.accept = field.accept;
            if (field.multiple) input.multiple = true;

        } else {
            // Default input (text, number, datetime, etc.)
            input = document.createElement('input');
            input.className = 'form-control';
            input.name = fieldId;
            input.id = fieldId;
            input.value = field.control === "datetime-local" && currentValue
                ? new Date(currentValue).toISOString().slice(0, 16)
                : currentValue;
            input.type = field.control || 'text';
            if (field.mandatory) input.required = true;
        }

        if (field.onchange && typeof window[field.onchange] === "function") {
            input.onchange = window[field.onchange];
        }

        if (!field.edit) input.setAttribute('disabled', 'true');
        input.title=field.tooltip || "";
        formGroup.appendChild(label);
        formGroup.appendChild(input);
        form.appendChild(formGroup);
    });


    let editModalElement = document.getElementById('registrationModal');
    if (!editModalElement) {
        console.error("Modal not found in the DOM!");
        return;
    }

    editModalElement.removeAttribute("aria-hidden");
    let editModal = new bootstrap.Modal(editModalElement, { backdrop: 'static' });
    editModal.show();

    document.getElementById('register').onclick = async function () {  // Mark function as async
        let newData = {};
        let isValid = true;
        let firstInvalidField = null;
    
        for (const field of fields) {
            if (!field.show) continue;
            let input = form.elements[field.field];
    
            if (!input && field.control !== 'schedule-control' && field.control !== 'venue-control' && field.control !== 'file' && field.control !== 'attachment-control' && field.control !== 'doc-template-control' && field.control !== 'field-attribute-control' && field.control !== 'maps-control' && field.control !== 'venue-location-control') {
                console.warn(`Field ${field.field} is missing in the form.`);
                continue;
            }
    
            if (field.mandatory && input && input.value.trim() === "") {
                isValid = false;
                input.classList.add('is-invalid');
                if (!firstInvalidField) firstInvalidField = input;
            } else if (input) {
                input.classList.remove('is-invalid');
            }
    
            if (field.control === 'checkbox') {
                newData[field.field] = input.checked ? 1 : 0;
            } else if (field.control === 'schedule-control') {
                let scheduleElement = document.querySelector("schedule-control");
                if (scheduleElement) {
                    newData[field.field] = scheduleElement.value;
                    delete newData.entity_id;
                } else {
                    console.warn(`Schedule control element not found.`);
                }
            } else if (field.control === 'venue-control') {
                let venueElement = document.querySelector("venue-control");
                if (venueElement) {
                    newData[field.field] = venueElement.value;
                } else {
                    console.warn(`Venue control element not found.`);
                }
            } else if (field.control === 'field-mapping-control') {
                let fieldMappingElement = document.querySelector("field-mapping-control");
                if (fieldMappingElement) {
                    newData[field.field] = fieldMappingElement.value;
                } else {
                    console.warn(`field-mapping-control control element not found.`);
                }    
            }  else if (field.control === 'attachment-control') {
                let attachmentElement = document.querySelector("attachment-control");
                if (attachmentElement) {
                    newData[field.field] = attachmentElement.value;
                } else {
                    console.warn(`Venue control element not found.`);
                } 
            } else if (field.control === 'doc-template-control') {
                let doc_template_Element = document.querySelector("doc-template-control");
                if (doc_template_Element) {
                    try {
                        let parsedValue = JSON.parse(doc_template_Element.value);
                        console.log("Parsed doc-template value:", parsedValue);
                        newData[field.field] = parsedValue;
                    } catch (e) {
                        console.error("Failed to parse doc-template-control value:", e);
                    }
                } else {
                    console.warn(`doc_template control element not found.`);
                }

            } else if (field.control === "field-attribute-control") {
                let fieldElement = document.querySelector("field-attribute-control");
                if (fieldElement) {
                    newData[field.field] = fieldElement.value;
                }
            } else if (field.control === "maps-control") {
                let mapElement = document.querySelector("maps-control");
                if (mapElement) {
                    // Use .value or custom getter if defined
                    newData[field.field] = mapElement.value || mapElement.getValue?.() || null;
                }
            } else if (field.control === "venue-location-control") {
                let venueElement = document.querySelector("venue-location-control");
                if (venueElement) {
                    newData[field.field] = venueElement.value || venueElement.getValue?.() || null;
                }
            } else if (field.control === "file") {
                //await uploadFile(field, newData); // Await file upload
                newData.file = await storeFileForUpload(field);

            } else if (input) {
                newData[field.field] = input.value;
            }
        }
    
        if (!isValid) {
            alert("Please fill in all required fields before saving.");
            firstInvalidField?.focus();
            return;
        }
    
        console.log("New Data:", newData);
        createEntry(newData);
        editModal.hide();
    };

    document.getElementById('save').onclick = async function () {  // Async function for Save button
        let newData = {};
        // do not include field's values in the where clause if it has '*' or 'all'. 
        for (const field of fields) {
            if (!field.show) continue;
            let input = form.elements[field.field];
    
           /* if (!input && field.control !== 'schedule-control' && field.control !== 'venue-control' && field.control !== 'file') {
                console.warn(`Field ${field.field} is missing in the form.`);
                continue;
            }*/
    
            if (field.control === 'checkbox') {
                newData[field.field] = input.checked ? 1 : 0;
            } else if (field.control === 'schedule-control') {
                let scheduleElement = document.querySelector("schedule-control");
                newData[field.field] = scheduleElement ? scheduleElement.value : "";
            } else if (field.control === 'venue-control') {
                let venueElement = document.querySelector("venue-control");
                newData[field.field] = venueElement ? venueElement.value : "";
            }else if (field.control === 'doc-template-control') {
                let docTemplateElement = document.querySelector("doc-template-control");
                newData[field.field] = docTemplateElement ? docTemplateElement.value : "";
            }else if (field.control === 'field-mapping-control') {
                let fieldMappingElement = document.querySelector("field-mapping-control");
                newData[field.field] = fieldMappingElement ? fieldMappingElement.value : "";
            }
             else if (field.control === "file") {
                newData.file = await storeFileForUpload(field);  // Store file for later upload
            } else if (input) {
                newData[field.field] = input.value;
            }
        }
    
        // ✅ Always set status to "draft"
        newData.status = "draft";
    
        console.log("New Data (Saved as Draft):", newData);
        createEntry(newData);
        editModal.hide();
    };    
    
    async function uploadFile(field, newData) {
        console.log("Starting file upload process...");
        
        let fileElement = document.querySelector(`input[type="file"]#${field.field}`);
        
        if (fileElement && fileElement.files.length > 0) {
            let file = fileElement.files[0];
            console.log("File selected:", file.name, "Size:", file.size, "Type:", file.type);
    
            let formData = new FormData();
            formData.append("file", file); // Ensure "file" matches Flask's request.files['file']
    
            console.log("FormData contents:");
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }
    
            try {
                console.log("Sending file upload request to server...");
                
                let response = await fetch("http://127.0.0.1:5000/upload", {
                    method: "POST",
                    body: formData
                });
    
                console.log("Response received from server. Status:", response.status);
    
                let result = await response.json();
                console.log("Server response JSON:", result);
    
                if (response.ok) {
                    console.log("File uploaded successfully:", result);
                    newData[field.field] = file.name || "Uploaded Successfully"; // Adjust based on API response
                } else {
                    console.error("File upload failed. Server responded with:", result.message);
                }
            } catch (error) {
                console.error("Error during file upload:", error);
            }
        } else {
            console.warn("No file selected for upload.");
        }
    }

    async function storeFileForUpload(field) {
        console.log("Starting file upload process...");
        
        let fileElement = document.querySelector(`input[type="file"]#${field.field}`);
        
        if (fileElement && fileElement.files.length > 0) {
            let file = fileElement.files[0];
            console.log("File selected:", file.name, "Size:", file.size, "Type:", file.type);
    
            let formData = new FormData();
            formData.append("file", file); // Ensure "file" matches Flask's request.files['file']
    
            console.log("FormData contents:");
            for (let pair of formData.entries()) {
                console.log(pair[0], pair[1]);
            }

            let fileUploadDetails = {url:"http://127.0.0.1:5000/upload", method: "POST",body: formData, fieldName:field.field};
            return fileUploadDetails;
    }
    
    }
  
    /** Function to validate and store schedule temporarily **/
    document.getElementById("venueForm").onsubmit = function (e) {
        e.preventDefault();
    
        let isValid = true;
        let errorMessage = "";
    
        // Get form values
        let building = document.getElementById('building').value.trim();
        let street = document.getElementById('street').value.trim();
        let area = document.getElementById('area').value.trim();
        let city = document.getElementById('city').value.trim();
        let state = document.getElementById('state').value.trim();
        let country = document.getElementById('country').value.trim();
        let url = document.getElementById('url_address').value.trim();
        let lat = document.getElementById('latitude').value.trim();
        let long = document.getElementById('longitude').value.trim();
    
        // Validation checks
        if (!building || !street || !area || !city || !state || !country) {
            isValid = false;
            errorMessage += "All text fields are required.\n";
        }
    
        // Validate latitude & longitude (must be numbers)
        if (lat && isNaN(lat)) {
            isValid = false;
            errorMessage += "Latitude must be a valid number.\n";
        }
    
        if (long && isNaN(long)) {
            isValid = false;
            errorMessage += "Longitude must be a valid number.\n";
        }
    
        // Validate URL (if provided)
        if (url && !/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(url)) {
            isValid = false;
            errorMessage += "Please enter a valid URL.\n";
        }
    
        if (!isValid) {
            alert(errorMessage); // Show validation errors
            return;
        }
    
        // Construct JSON in the required format
        let venueData = {
            building: building,
            street: street,
            area: area,
            city: city,
            state: state,
            country: country,
            url: url,
            lat: lat,
            long: long
        };
    
        console.log("Updated Venue JSON:", venueData);
    
        // Store JSON as a string in the hidden input field
        document.getElementById('venue').value = JSON.stringify(venueData);
    
        // Hide the modal after submission
        bootstrap.Modal.getInstance(document.getElementById('venueModal')).hide();
    };
    
    
}

document.getElementById("eventForm_new").addEventListener("submit", function (event) {
    debugger;
    event.preventDefault(); // Prevent actual form submission

    console.log("✅ Inside event form");

    let eventName = document.getElementById("eventName").value.trim();
    let eventDescription = document.getElementById("eventDescription").value.trim();
    let eventStartDate = document.getElementById("eventStartDate").value;
    let eventEndDate = document.getElementById("eventEndDate").value || null; // Null if empty

    console.log("Event Name:", eventName);
    console.log("Description:", eventDescription);
    console.log("Start Date:", eventStartDate);
    console.log("End Date:", eventEndDate);

    if (!eventName || !eventStartDate) {
        alert("⚠️ Event Name and Start Date are required!");
        return;
    }

    let scheduleRows = document.querySelectorAll(".schedule-row");

    // Mapping numeric day values to corresponding weekdays
    const dayMapping = {
        "0": "sun",
        "1": "mon",
        "2": "tues",
        "3": "wed",
        "4": "thur",
        "5": "fri",
        "6": "sat"
    };

    let eventData = {
        title: eventName,
        description: eventDescription,
        start_date: eventStartDate,
        end_date: eventEndDate
    };

    scheduleRows.forEach((row) => {
        let day = row.querySelector(".day-select").value;
        let startTime = row.querySelector(".start-time").value;
        let endTime = row.querySelector(".end-time").value;

        if (!startTime || !endTime) {
            alert("⚠️ Start and End time are required!");
            return;
        }

        let dayName = dayMapping[day];

        if (!eventData[dayName]) {
            eventData[dayName] = [];
        }

        eventData[dayName].push([startTime, endTime]);
    });

    console.log("📌 Final Event Data:", JSON.stringify(eventData, null, 2));

    let workDaysInput = document.getElementById("work_days");
    if (workDaysInput) {
        workDaysInput.value = JSON.stringify(eventData);
        console.log("✅ Work days saved:", workDaysInput.value);
    } else {
        console.error("❌ work_days input field not found!");
    }

    // Close the modal after saving
    let addEventModal = bootstrap.Modal.getInstance(document.getElementById("addEventModal"));
    addEventModal.hide();

    alert("✅ Schedule saved successfully!");
});

async function affiliationFilterCheck(db, table, selectFields, filterOptions, getDataFunc) {
  const keys = Object.keys(filterOptions);
  const valueArrays = keys.map(k => filterOptions[k]);

  function cartesianProduct(arrays) {
    return arrays.reduce((acc, vals) =>
      acc.flatMap(d => vals.map(v => [...d, v])), [[]]
    );
  }

  const combinations = cartesianProduct(valueArrays);

  const results = [];

  for (const combo of combinations) {
    const whereData = {};
    combo.forEach((val, i) => {
      if (val !== "*") whereData[keys[i]] = val;
    });

    const rows = await getDataFunc(db, table, selectFields, whereData, true);
    results.push({ ...whereData, result: rows.length > 0 ? "YES" : "NO" });
  }

  return results;
}



    // Periodically check for pending requests
    setInterval(async () => {
        if (navigator.onLine) {
            console.log("[Network] Checking pending requests...");
            await processOfflineRequests();
        }
    }, 15000);  


/*

    ALTER TABLE `affiliation` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `event_scheduler2025.alert_schedule` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `event_scheduler2025.alert_templates` ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `application_registry` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `appointment` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `department_types` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `doc_final_templates` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `doc_status_types` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `doc_templates` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `doc_types` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `doc_ui_template` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `entity` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `entity_types` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `event_log` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `event_new` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `event_type` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `events` ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `final_templates` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `gov_service_regsitry` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `message_details` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `network_log` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `notifications` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `options` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `program_registry` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `qrlinks` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `resource_allocation` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `resource_profile` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `resource_registry` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `resource_type` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `roles` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `roles_permissions_old` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `subscriber` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `system_log` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `system_settings` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `token_details` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `user_registration` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;
    ALTER TABLE `venue` ADD COLUMN created_at DATETIME DEFAULT CURRENT_TIMESTAMP, ADD COLUMN version INT DEFAULT 1;

*/
    let config = {};
    let documents = [];
    let templates = [];
    let currentSuperkey = "";
    let currentDocument = "";
    let addedItems = [];
    var user_tab = { Admin: { tab_list: [] } };
    
    // API Configuration
    const API_CONFIG = {
        baseUrl: 'http://127.0.0.1:5000/api',
        endpoints: {
            documents: '/documents',
            templates: '/ui-templates',
            submit: '/submit-config',
            createTable: '/create-table'
        }
    };

    // User Configuration (replace with actual values)
    const USER_CONFIG = {
        user_id: 3,
        program: 'farmer support program',
        service: 'entity_administration',
        department: null,
        role: null,
        entity: null,
        useAdvancedFiltering: false
    };

    // Initialize the application
    document.addEventListener('DOMContentLoaded', function() {
        initializeSuperkeySelect();
        //loadDocuments();
    });

    async function editor_config_modal() {
        // Show the modal
        const configModal = new bootstrap.Modal(document.getElementById('configModal'));
        configModal.show();
    }
    // // Open configuration modal
    // function openConfigModal() {
    //     const modal = new bootstrap.Modal(document.getElementById('configModal'));
    //     modal.show();
    // }

    // Open app preview modal
    function openAppPreview() {
        const modal = new bootstrap.Modal(document.getElementById('appPreviewModal'));
        modal.show();
    }
    
    // Step 1: Initialize superkey selection
    function initializeSuperkeySelect() {
        const superkeySelect = document.getElementById('superkeySelect');
        
        superkeySelect.addEventListener('change', function() {
            const value = this.value;
            const newTabContainer = document.getElementById('newTabContainer');
            
            if (value === '__new__') {
                newTabContainer.style.display = 'block';
                document.getElementById('step2').style.display = 'none';
                document.getElementById('step3').style.display = 'none';
                document.getElementById('step4').style.display = 'none';
            } else if (value) {
                newTabContainer.style.display = 'none';
                currentSuperkey = value;
                // Check if tab already exists before adding
                const existingTab = user_tab["Admin"]["tab_list"].find(tab => tab.Name === currentSuperkey);
                if (!existingTab) {
                    user_tab["Admin"]["tab_list"].push({ Name: currentSuperkey });
                }
                loadDocuments()
                showStep2();
            } else {
                newTabContainer.style.display = 'none';
                hideSteps();
            }

        });
    }

    function confirmNewTab() {
        const newTabName = document.getElementById('newTabName').value.trim();
        if (!newTabName) {
            alert('Please enter a tab name');
            return;
        }
        // Check if tab name already exists
        const existingTab = user_tab["Admin"]["tab_list"].find(tab => tab.Name === newTabName);
        if (existingTab) {
            alert('Tab name already exists. Please choose a different name.');
            return;
        }
        currentSuperkey = newTabName;
        user_tab["Admin"]["tab_list"].push({ Name: currentSuperkey });
        document.getElementById('newTabContainer').style.display = 'none';
        
        // Add to superkey select for future use
        const superkeySelect = document.getElementById('superkeySelect');
        const option = document.createElement('option');
        option.value = newTabName;
        option.textContent = newTabName;
        superkeySelect.insertBefore(option, superkeySelect.lastElementChild);
        superkeySelect.value = newTabName;
        
        showStep2();
    }

    // Step 2: Load and display documents
    async function loadDocuments() {
        try {
            const url = new URL(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.documents}`);
            console.log(url);
            // Add query parameters
            if (USER_CONFIG.user_id)url.searchParams.append('user_id', USER_CONFIG.user_id);
            if (USER_CONFIG.program)url.searchParams.append('program', USER_CONFIG.program);
            if (USER_CONFIG.service)url.searchParams.append('service', USER_CONFIG.service);
            
            if (USER_CONFIG.department) url.searchParams.append('department', USER_CONFIG.department);
            if (USER_CONFIG.role) url.searchParams.append('role', USER_CONFIG.role);
            if (USER_CONFIG.entity) url.searchParams.append('entity', USER_CONFIG.entity);
            if (USER_CONFIG.useAdvancedFiltering) url.searchParams.append('advanced', 'true');
            
            const response = await fetch(url.toString());
            const data = await response.json();
            
            if (data.success) {
                documents = data.documents; console.log(documents);
                if(documents.length > 0) {   populateDocumentSelect(documents); }
            } else {
                console.error('Failed to load documents:', data.error);
                showError('Failed to load documents: ' + data.error);
            }
        } catch (error) {
            console.error('Error loading documents:', error);
            showError('Error loading documents: ' + error.message);
        }
    }

    function populateDocumentSelect(document_fetched) {
        const documentSelect = document.getElementById('documentSelect');
        documentSelect.innerHTML = '<option value="">Select a document...</option>';
        console.log("document: ",document_fetched);
        document_fetched.forEach(doc => {
            const option = document.createElement('option');
            option.value = doc.doc_type;
            option.textContent = doc.doc_type;
            option.dataset.docInfo = JSON.stringify(doc);
            documentSelect.appendChild(option);
        });
        
        documentSelect.addEventListener('change', function() {
            if (this.value) {
                currentDocument = this.value;
                const docInfo = JSON.parse(this.selectedOptions[0].dataset.docInfo);
                displayDocumentInfo(docInfo);
                loadTemplates(this.value);
                showStep3();
            } else {
                document.getElementById('documentInfo').innerHTML = '';
                document.getElementById('step3').style.display = 'none';
                document.getElementById('step4').style.display = 'none';
            }
        });
    }

    function displayDocumentInfo(docInfo) {
        const infoDiv = document.getElementById('documentInfo');
        infoDiv.innerHTML = `
            <strong>Description:</strong> ${docInfo.doc_description || 'N/A'}<br>
            <strong>Program:</strong> ${docInfo.program || 'N/A'}<br>
            <strong>Service:</strong> ${docInfo.service || 'N/A'}
        `;
    }

    // Step 3: Load UI templates for selected document
    async function loadTemplates(docType) {
        try {
            const url = `${API_CONFIG.baseUrl}${API_CONFIG.endpoints.templates}/${encodeURIComponent(docType)}?user_id=${USER_CONFIG.user_id}`;
            const response = await fetch(url);
            const data = await response.json();
            
            if (data.success) {
                templates = data.templates;
                populateTemplateSelect();
            } else {
                console.error('Failed to load templates:', data.error);
                showError('Failed to load templates: ' + data.error);
            }
        } catch (error) {
            console.error('Error loading templates:', error);
            showError('Error loading templates: ' + error.message);
        }
    }

    function populateTemplateSelect() {
        const templateSelect = document.getElementById('templateSelect');
        templateSelect.innerHTML = '<option value="">Select a template...</option>';
        
        templates.forEach((template, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = `Template ${index + 1} (ID: ${template.doc_ui_template_id})`;
            option.dataset.template = JSON.stringify(template);
            templateSelect.appendChild(option);
        });
        
        templateSelect.addEventListener('change', function() {
            const previewBtn = document.getElementById('previewBtn');
            const addBtn = document.getElementById('addBtn');
            
            if (this.value !== '') {
                previewBtn.disabled = false;
                showStep4();
            } else {
                previewBtn.disabled = true;
                document.getElementById('step4').style.display = 'none';
            }
        });
    }

    function createTableForOperation(operationName, operationData, tabId) {
            if (!operationData.data || !operationData.data.length) {
                return '';
            }

            const operationId = `${tabId}_${operationName}`;
            
            let html = `
                <div class="mb-3">
                    <div class="card">
                        <div class="card-header">
                            <h6 class="mb-0">
                                <button class="btn btn-link text-decoration-none p-0 w-100 text-start collapsed" type="button" 
                                        data-bs-toggle="collapse" data-bs-target="#${operationId}" 
                                        aria-expanded="false" aria-controls="${operationId}">
                                    <i class="fas fa-${getOperationIcon(operationName)} me-2"></i>${operationName.toUpperCase()} Operation
                                    <i class="fas fa-chevron-down float-end mt-1"></i>
                                </button>
                            </h6>
                        </div>
                        <div id="${operationId}" class="collapse">
                            <div class="card-body">
                                <div class="api-info">
                                    <div class="row">
                                        ${operationData.getDataApi ? `<div class="col-md-4"><strong>API:</strong> <code>${operationData.getDataApi}</code></div>` : ''}
                                        ${operationData.onSuccess ? `<div class="col-md-4"><strong>Success:</strong> <code>${operationData.onSuccess}</code></div>` : ''}
                                        ${operationData.roles ? `<div class="col-md-4"><strong>Roles:</strong> ${operationData.roles.join(', ')}</div>` : ''}
                                    </div>
                                </div>
                                
                                <div class="table-container mt-3">
                                    <table class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>Field Name</th>
                                                <th>Field Key</th>
                                                <th>Control Type</th>
                                                <th>Show</th>
                                                <th>Edit</th>
                                                <th>Mandatory</th>
                                                <th>Delete Option</th>
                                                <th>Edit Option</th>
                                                <th>Default Value</th>
                                                <th>Filter Type</th>
                                                <th>Languages</th>
                                            </tr>
                                        </thead>
                                        <tbody>
            `;

            operationData.data.forEach(dataItem => {
                if (dataItem.fields) {
                    dataItem.fields.forEach(field => {
                        const languages = Object.keys(field.lang || {}).join(', ') || 'None';
                        
                        html += `
                            <tr>
                                <td><span class="field-name">${field.name}</span></td>
                                <td><span class="field-code">${field.field}</span></td>
                                <td><span class="control-badge">${field.control}</span></td>
                                <td class="text-center">${field.show ? '<i class="fas fa-check check-icon"></i>' : '<i class="fas fa-times cross-icon"></i>'}</td>
                                <td class="text-center">${field.edit ? '<i class="fas fa-check check-icon"></i>' : '<i class="fas fa-times cross-icon"></i>'}</td>
                                <td class="text-center">${field.mandatory ? '<i class="fas fa-check check-icon"></i>' : '<i class="fas fa-times cross-icon"></i>'}</td>
                                <td class="text-center">${field.delete_option ? '<i class="fas fa-check check-icon"></i>' : '<i class="fas fa-times cross-icon"></i>'}</td>
                                <td class="text-center">${field.edit_option ? '<i class="fas fa-check check-icon"></i>' : '<i class="fas fa-times cross-icon"></i>'}</td>
                                <td>${field.default || '<em>None</em>'}</td>
                                <td>${field.filter_type || '<em>None</em>'}</td>
                                <td><span class="lang-list">${languages}</span></td>
                            </tr>
                        `;
                    });
                }
            });

            html += `
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            return html;
        }

        function getOperationIcon(operation) {
            const icons = {
                'create': 'plus',
                'list': 'list',
                'update': 'edit',
                'cancel': 'times'
            };
            return icons[operation] || 'cog';
        }

        function renderTemplate(template) {
            let html = `<div class="accordion" id="templateAccordion">`;
            
            // Iterate through all top-level keys (tabs) in the template
            Object.keys(template).forEach((tabKey, tabIndex) => {
                if (tabKey === 'key') return; // Skip the key field
                
                const tabData = template[tabKey];
                const tabId = `tab_${tabIndex}`;
                
                html += `
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="heading_${tabId}">
                            <button class="accordion-button collapsed" type="button" 
                                    data-bs-toggle="collapse" data-bs-target="#collapse_${tabId}" 
                                    aria-expanded="false" aria-controls="collapse_${tabId}">
                                <i class="fas fa-seedling me-2"></i>${tabKey.replace(/_/g, ' ').toUpperCase()} Configuration
                            </button>
                        </h2>
                        <div id="collapse_${tabId}" class="accordion-collapse collapse" 
                             aria-labelledby="heading_${tabId}" data-bs-parent="#templateAccordion">
                            <div class="accordion-body">
                                <div class="alert alert-info mb-4">
                                    <div class="row">
                                        <div class="col-md-4"><strong>Key Field:</strong> <code>${template.key}</code></div>
                                        ${tabData.getDatagetDataApi ? `<div class="col-md-8"><strong>Main API:</strong> <code>${tabData.getDatagetDataApi}</code></div>` : ''}
                                    </div>
                                </div>
                `;

                // Render operations for this tab
                if (tabData.job) {
                    if (tabData.job.create) {
                        html += createTableForOperation('create', tabData.job.create, tabId);
                    }
                    
                    if (tabData.job.list) {
                        html += createTableForOperation('list', tabData.job.list, tabId);
                    }
                    
                    if (tabData.job.update) {
                        html += createTableForOperation('update', tabData.job.update, tabId);
                    }
                    
                    if (tabData.job.cancel) {
                        html += createTableForOperation('cancel', tabData.job.cancel, tabId);
                    }
                }

                html += `
                            </div>
                        </div>
                    </div>
                `;
            });

            html += `</div>`;
            return html;
        }

        function previewTemplate() {
            const templateSelect = document.getElementById('templateSelect');
            const selectedIndex = templateSelect.value;
            
            if (selectedIndex !== '') {
                const template = templates[0].ui_template;
                const modal = new bootstrap.Modal(document.getElementById('templatePreviewModal'));
                
                document.getElementById('templatePreviewContent').innerHTML = renderTemplate(template);
                
                modal.show();
            }
        }

        function renderUIPreview(data) {
            let html = '';
            
            // Iterate through each document/form
            for (const [documentName, documentData] of Object.entries(data)) {
                html += `<div class="form-section">`;
                html += `<div class="section-header" onclick="toggleSection(this)">
                    <span>${documentName.replace(/_/g, ' ')}</span>
                    <i class="fas fa-chevron-down collapse-icon"></i>
                </div>`;
                html += `<div class="section-content show">`;
                
                // Check if it has job operations
                if (documentData.job) {
                    html += renderSimpleFields(documentData.job);
                } else if (documentData.fields) {
                    // Direct fields
                    html += renderSimpleFieldList(documentData.fields);
                }
                
                html += `</div></div>`;
            }
            
            return html;
        }

        function renderSimpleFields(jobData) {
            let html = '';
            let allFields = [];
            
            // Collect all unique fields from all operations
            const operations = Object.keys(jobData);
            operations.forEach(operation => {
                if (jobData[operation].data && jobData[operation].data[0] && jobData[operation].data[0].fields) {
                    jobData[operation].data[0].fields.forEach(field => {
                        // Check if field already exists in allFields
                        const existingField = allFields.find(f => f.field === field.field);
                        if (!existingField && field.show) {
                            allFields.push(field);
                        }
                    });
                }
            });
            
            return renderSimpleFieldList(allFields);
        }

        function renderSimpleFieldList(fields) {
            let html = '';
            
            fields.forEach((field, index) => {
                if (field.show) {
                    const controlType = getControlDisplayName(field.control);
                    
                    html += `<div class="mb-3">
                        <label class="form-label fw-semibold">${field.name}</label>
                        ${renderFieldControl(field)}
                    </div>`;
                }
            });
            
            return html;
        }

        function getControlDisplayName(control) {
            const controlMap = {
                'text': 'Text Box',
                'password': 'Password Field',
                'email': 'Email Field',
                'number': 'Number Input',
                'date': 'Date Picker',
                'datetime': 'DateTime Picker',
                'datetime-local': 'DateTime Picker',
                'time': 'Time Picker',
                'dropdown': 'Dropdown',
                'select': 'Dropdown',
                'textarea': 'Text Area',
                'checkbox': 'Checkbox',
                'radio': 'Radio Button',
                'file': 'File Upload',
                'url': 'URL Field',
                'tel': 'Phone Number',
                'color': 'Color Picker',
                'range': 'Range Slider'
            };
            
            return controlMap[control] || 'Text Box';
        }

        function renderFields(fields) {
            let html = '';
            
            fields.forEach(field => {
                if (field.show) {
                    html += `<div class="field-group">`;
                    html += `<label class="field-label">
                        ${field.name}
                        ${field.mandatory ? '<span class="text-danger">*</span>' : ''}
                    </label>`;
                    html += renderFieldControl(field);
                    html += `</div>`;
                }
            });
            
            return html;
        }

        function renderFieldControl(field) {
            const commonAttributes = `class="form-control field-control" placeholder="${field.name}"`;
            
            switch (field.control) {
                case 'text':
                    return `<input type="text" ${commonAttributes} value="${field.default || ''}">`;
                
                case 'password':
                    return `<input type="password" ${commonAttributes}>`;
                
                case 'email':
                    return `<input type="email" ${commonAttributes} value="${field.default || ''}">`;
                
                case 'number':
                    return `<input type="number" ${commonAttributes} value="${field.default || ''}">`;
                
                case 'date':
                    return `<input type="date" ${commonAttributes} value="${field.default || ''}">`;
                
                case 'datetime':
                case 'datetime-local':
                    return `<input type="datetime-local" ${commonAttributes} value="${field.default || ''}">`;
                
                case 'time':
                    return `<input type="time" ${commonAttributes} value="${field.default || ''}">`;
                
                case 'dropdown':
                case 'select':
                    let options = '';
                    if (field.options && Array.isArray(field.options)) {
                        options = field.options.map(option => 
                            `<option value="${option}" ${option === field.default ? 'selected' : ''}>${option}</option>`
                        ).join('');
                    } else {
                        options = `<option value="">Select ${field.name}</option>
                                  <option value="option1">Option 1</option>
                                  <option value="option2">Option 2</option>
                                  <option value="option3">Option 3</option>`;
                    }
                    return `<select class="form-select field-control">
                        <option value="">Select ${field.name}</option>
                        ${options}
                    </select>`;
                
                case 'textarea':
                    return `<textarea ${commonAttributes} rows="3">${field.default || ''}</textarea>`;
                
                case 'checkbox':
                    return `<div class="form-check">
                        <input class="form-check-input" type="checkbox" ${field.default ? 'checked' : ''}>
                        <label class="form-check-label">${field.name}</label>
                    </div>`;
                
                case 'radio':
                    if (field.options && Array.isArray(field.options)) {
                        return field.options.map(option => 
                            `<div class="form-check">
                                <input class="form-check-input" type="radio" name="${field.field}" value="${option}" ${option === field.default ? 'checked' : ''}>
                                <label class="form-check-label">${option}</label>
                            </div>`
                        ).join('');
                    } else {
                        return `<div class="form-check">
                            <input class="form-check-input" type="radio" name="${field.field}" value="yes">
                            <label class="form-check-label">Yes</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="${field.field}" value="no">
                            <label class="form-check-label">No</label>
                        </div>`;
                    }
                
                case 'file':
                    return `<input type="file" class="form-control field-control">`;
                
                default:
                    return `<input type="text" ${commonAttributes} value="${field.default || ''}">`;
            }
        }

        function toggleSection(header) {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.collapse-icon');
            
            if (content.classList.contains('show')) {
                content.classList.remove('show');
                header.classList.add('collapsed');
            } else {
                content.classList.add('show');
                header.classList.remove('collapsed');
            }
        }


        function previewUI() {
            const templateSelect = document.getElementById('templateSelect');
            const selectedIndex = templateSelect.value;
            
            if (selectedIndex !== '') {
                const template = templates[selectedIndex].ui_template; // Use selectedIndex instead of hardcoded 0
                const modal = new bootstrap.Modal(document.getElementById('uiPreviewModal'));
                
                document.getElementById('uiPreviewContent').innerHTML = renderUIPreview(template);
                
                modal.show();
            } else {
                alert('Please select a template first');
            }
        }

    // Add to configuration
    function addToConfig() {
        const templateSelect = document.getElementById('templateSelect');
        const selectedIndex = templateSelect.value;
        
        if (selectedIndex === '' || !currentSuperkey || !currentDocument) {
            alert('Please complete all selections');
            return;
        }
        
        const template = templates[selectedIndex];
        
        // Check if this combination already exists
        const existingItem = addedItems.find(item => 
            item.superkey === currentSuperkey && 
            item.document === currentDocument && 
            item.templateId === template.doc_ui_template_id
        );
        
        if (existingItem) {
            alert('This combination already exists in the configuration');
            return;
        }
        
        // Initialize superkey in config if not exists
        if (!config[currentSuperkey]) {
            config[currentSuperkey] = {
                controls: [
                    {
                        type: "button",
                        tag: "create",
                        roles: ["Admin"],
                        name: "<i class='fa fa-plus'></i>",
                        function: "Registration_modal()",
                        class: "btn btn-success btn-xs my-xs-btn"
                    },
                    {
                        type: "button",
                        tag: "print",
                        roles: ["Admin"],
                        name: "<i class='fa fa-print'></i>",
                        function: "",
                        class: "btn btn-primary btn-xs my-xs-btn"
                    },
                    {
                        type: "select",
                        tag: "items",
                        roles: ["Admin"],
                        name: currentSuperkey,
                        options: [],
                        textContent: "Items"
                    },
                    {
                        type: "select",
                        tag: "entriesPerPage",
                        roles: ["Admin", "Approver", "User"],
                        name: "EntriesPerPage",
                        options: [2, 3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
                        textContent: "Rows/Page"
                    }
                ],
                Roles: ["Admin"]
            };
        }
        
        // Add document to items options if not already present
        const itemsControl = config[currentSuperkey].controls.find(c => c.tag === "items");
        if (itemsControl && !itemsControl.options.includes(currentDocument)) {
            itemsControl.options.push(currentDocument);
        }
        
        // Add the UI template data to the configuration
        if (template.ui_template && typeof template.ui_template === 'object') {
            // If ui_template has multiple keys, add all of them
            Object.keys(template.ui_template).forEach(key => {
                config[currentSuperkey][key] = template.ui_template[key];
            });
        }
        
        // Track added items
        addedItems.push({
            superkey: currentSuperkey,
            document: currentDocument,
            templateId: template.doc_ui_template_id,
            docTemplate: template.doc_template
        });
        
        // Update displays
        updateAddedItemsDisplay();
        // updateConfigPreview();
        enableSubmitButton();
        
        // Show success message
        showSuccess(`Added ${currentSuperkey} → ${currentDocument} to configuration`);
        
        // Reset selections for next addition
        resetSelections();
    }

    function updateAddedItemsDisplay() {
        const container = document.getElementById('addedItemsContainer');
        const list = document.getElementById('addedItemsList');
        
        if (addedItems.length > 0) {
            container.style.display = 'block';
            list.innerHTML = '';
            
            addedItems.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.className = 'added-item';
                itemDiv.innerHTML = `
                    <strong>${item.superkey}</strong> → <strong>${item.document}</strong> 
                    <small>(Template ID: ${item.templateId})</small>
                    <button class="btn btn-sm btn-danger float-end" onclick="removeAddedItem(${index})">
                        <i class="fas fa-trash"></i>Delete
                    </button>
                `;
                list.appendChild(itemDiv);
            });
        } else {
            container.style.display = 'none';
        }
    }

    function removeAddedItem(index) {
        const item = addedItems[index];
        
        // Remove from config
        if (config[item.superkey] && config[item.superkey][item.document]) {
            delete config[item.superkey][item.document];
            
            // Remove from items options
            const itemsControl = config[item.superkey].controls.find(c => c.tag === "items");
            if (itemsControl) {
                const optionIndex = itemsControl.options.indexOf(item.document);
                if (optionIndex > -1) {
                    itemsControl.options.splice(optionIndex, 1);
                }
            }
            
            // Remove superkey if no documents left
            const hasDocuments = Object.keys(config[item.superkey]).some(key => 
                key !== 'controls' && key !== 'Roles'
            );
            if (!hasDocuments) {
                delete config[item.superkey];
            }
        }
        
        // Remove from user_tab structure
        if (user_tab.Admin && user_tab.Admin.tab_list) {
            console.log('Before deletion - user_tab.Admin.tab_list:', user_tab.Admin.tab_list);
            console.log('Looking for superkey to delete:', item.superkey);
            
            const tabIndex = user_tab.Admin.tab_list.findIndex(tab => {
                // Handle different possible formats
                if (typeof tab === 'string') {
                    return tab === item.superkey;
                } else if (typeof tab === 'object' && tab !== null) {
                    return tab.Name === item.superkey || tab.name === item.superkey || tab.superkey === item.superkey || tab.key === item.superkey;
                }
                return false;
            });
            
            console.log('Found tab at index:', tabIndex);
            
            if (tabIndex > -1) {
                user_tab.Admin.tab_list.splice(tabIndex, 1);
                console.log('After deletion - user_tab.Admin.tab_list:', user_tab.Admin.tab_list);
            } else {
                console.log('Tab not found in user_tab.Admin.tab_list');
            }
        }
        
        // Remove from added items
        addedItems.splice(index, 1);
        
        // Update displays
        updateAddedItemsDisplay();
        // updateConfigPreview();
        
        if (addedItems.length === 0) {
            disableSubmitButton();
        }
    }

    // function updateConfigPreview() {
    //     const preview = document.getElementById('configPreview');
    //     if (Object.keys(config).length > 0) {
    //         preview.textContent = JSON.stringify(config, null, 2);
    //     } else {
    //         preview.innerHTML = '<span class="text-muted">Configuration will appear here as you add items...</span>';
    //     }
    // }

    // Submit configuration

    async function submitPreview() {
        if (Object.keys(config).length === 0) {
            alert('No configuration to submit');
            return;
        }
        
        try {
            // Submit configuration
            const configResponse = await fetch(`http://127.0.0.1:5000/preview`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    config: config,
                    user_id: USER_CONFIG.user_id,
                    tab_config: user_tab
                })
            });
            
            // Create tables for each document
            /*for (const item of addedItems) {
                if (item.docTemplate) {
                    try {
                        await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.createTable}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                doc_type: item.document,
                                doc_template: item.docTemplate,
                                user_id: USER_CONFIG.user_id
                            })
                        });
                    } catch (error) {
                        console.error(`Error creating table for ${item.document}:`, error);
                    }
                }
            }*/

            const result = await configResponse.json();
            console.log('Configuration submission result:', result);
            
            if (result.success) {
                showSuccess('Configuration submitted successfully!');
                // Optionally reset or keep the configuration
            } else {
                showError('Failed to submit configuration: ' + result.error);
            }
            
        } catch (error) {
            console.error('Error submitting configuration:', error);
            showError('Error submitting configuration: ' + error.message);
        }
    }

    async function submitPreviewAndRedirect() {
        console.log(Object.keys(config).length)
    if (Object.keys(config).length === 0) {
        alert('No configuration to submit');
        return;
    }

    try {
        // Store config in sessionStorage or localStorage (to access in preview.html if needed)
        sessionStorage.setItem("config_data", JSON.stringify(config));
        sessionStorage.setItem("tab_config", JSON.stringify(user_tab));
        sessionStorage.setItem("user_id", USER_CONFIG.user_id);

        // Then redirect to preview.html (GET)
        window.open('/preview', '_blank');

    } catch (error) {
        console.error('Error during preview redirection:', error);
        alert('Error: ' + error.message);
    }
}

    function saveButton(status='draft')
    {
        submitConfig(status);
    }

    async function submitConfig(status) {
        if (Object.keys(config).length === 0) {
            alert('No configuration to submit');
            return;
        }
        
        try {
            // Submit configuration
            const configResponse = await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.submit}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    config: config,
                    user_id: USER_CONFIG.user_id,
                    tab_config: user_tab,
                    status:status
                })
            });
            
            // Create tables for each document
            for (const item of addedItems) {
                if (item.docTemplate) {
                    try {
                        await fetch(`${API_CONFIG.baseUrl}${API_CONFIG.endpoints.createTable}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                doc_type: item.document,
                                doc_template: item.docTemplate,
                                user_id: USER_CONFIG.user_id
                            })
                        });
                    } catch (error) {
                        console.error(`Error creating table for ${item.document}:`, error);
                    }
                }
            }
            const result = await configResponse.json();
            console.log('Configuration submission result:', result);
            
            if (result.success) {
                showSuccess('Configuration submitted successfully!');
                // Optionally reset or keep the configuration
            } else {
                showError('Failed to submit configuration: ' + result.error);
            }
            
        } catch (error) {
            console.error('Error submitting configuration:', error);
            showError('Error submitting configuration: ' + error.message);
        }
    }


    // Reset configuration
    function resetConfig() {
        if (confirm('Are you sure you want to reset the entire configuration?')) {
            config = {};
            addedItems = [];
            resetSelections();
            updateAddedItemsDisplay();
            // updateConfigPreview();
            disableSubmitButton();
            showSuccess('Configuration reset successfully');
        }
    }

    // Utility functions
    function resetSelections() {
        document.getElementById('superkeySelect').value = '';
        document.getElementById('documentSelect').value = '';
        document.getElementById('templateSelect').value = '';
        document.getElementById('newTabName').value = '';
        hideSteps();
    }

    function showStep2() {
        document.getElementById('step2').style.display = 'block';
    }

    function showStep3() {
        document.getElementById('step3').style.display = 'block';
    }

    function showStep4() {
        document.getElementById('step4').style.display = 'block';
    }

    function hideSteps() {
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'none';
        document.getElementById('step4').style.display = 'none';
    }

    function enableSubmitButton() {
        document.getElementById('submitBtn').disabled = false;
    }

    function disableSubmitButton() {
        document.getElementById('submitBtn').disabled = true;
    }

    function showSuccess(message) {
        // You can replace this with a proper toast notification
        alert('✅ ' + message);
    }

    function showError(message) {
        // You can replace this with a proper toast notification
        alert('❌ ' + message);
    }
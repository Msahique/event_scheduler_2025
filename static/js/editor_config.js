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

    // Preview template functionality
    function previewTemplate() {
        const templateSelect = document.getElementById('templateSelect');
        const selectedIndex = templateSelect.value;
        
        if (selectedIndex !== '') {
            const template = templates[selectedIndex];
            const modal = new bootstrap.Modal(document.getElementById('templatePreviewModal'));
            
            document.getElementById('templatePreviewContent').textContent = 
                JSON.stringify(template.ui_template, null, 2);
            
            modal.show();
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
            //reloadIframe();
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


    async function submitConfig() {
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
            //reloadIframe();
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

    function reloadIframe() {
        const iframe = document.getElementById("appPreview");
        iframe.src = iframe.src.split("?")[0] + "?t=" + new Date().getTime(); // avoid caching
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
let token = "";
let role = "";

// LOGIN FUNCTION
function login_old() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username,  password)
    fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if (data.token) {
            token = data.token;
            role = data.role;
            document.getElementById("userRole").innerText = "Role: " + role;

            if (role === "admin") {
                document.getElementById("createBtn").style.display = "block";
            }
            document.getElementById("listBtn").style.display = "block";
        } else {
            alert("Login failed!");
        }
    });
}

function login(event) {
    event.preventDefault(); // ⬅️ Stop normal form submission
    const username = document.getElementById("emailOrPhone").value;
    const password = document.getElementById("userpassword").value;
    console.log(username, password);

    fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
       
        console.log(data);
        if(data.message== "Login successful") {
            //window.location.href = "http://127.0.0.1:5000/app";
            console.log(data.affiliations);
            sessionStorage.setItem("userAffiliations", JSON.stringify(data.affiliations));

            const encodedAff = encodeURIComponent(JSON.stringify(data.affiliations));
            alert(JSON.stringify(data));
            window.location.href = `http://127.0.0.1:5000/app?affiliation=${encodedAff}`;
        }
        
        else if (data.error == "Invalid credentials") {
            alert("Invalid credentials. Please try again.");
        } else if (data.error == "User not found") {
            alert("User not found. Please check your username or password.");
        } else if (data.error == "Token expired") {
            alert("Token expired. Please log in again.");
        } else if (data.error == "Token is missing or invalid") {
            alert("Token is missing or invalid. Please log in again.");
        } else {
            alert("An unknown error occurred.");
        }
    });
}

// CREATE ENTITY (Admin Only)
function createEntity22() {
    if (!token) {
        alert("Token is missing or invalid.");
        return;
    }

    console.log("Token: ", token);

    fetch("http://127.0.0.1:5000/new_test", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify({
            "entity_name": "New Task",
            "entity_type": "Meeting",
            "Subject": "Some subject here"
          }
          )
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            alert(data.message);
        } else {
            alert(data.error || "An unknown error occurred.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error creating entity.");
    });
}


async function createEntity() {
   
    console.log("fetching", token)
    try {
        let response = await fetch("http://127.0.0.1:5000/new_test", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({
                "entity_name": "New Task",
                "entity_type": "Meeting",
                "subject": "Some subject here"
              }
            )
        });

        if (response.ok) {
            let data = await response.json();
            console.log("Received Data:", data);
        } else {
            console.error("Failed to fetch entity types.");
            return [];
        }
    } catch (error) {
        console.error("Error fetching entity types:", error);
        return [];
    }
}

// LIST ENTITIES (Admin & Approver)
function listEntities() {
    fetch("http://127.0.0.1:5000/entity/list", {
        method: "GET",
        headers: { "Authorization": "Bearer " + token }
    })
    .then(response => response.json())
    .then(data => {
        let list = document.getElementById("entityList");
        list.innerHTML = "";
        data.forEach(entity => {
            list.innerHTML += `<li>${entity.entity_name} (${entity.entry_status})</li>`;
        });
    });
}

/*
departments
{[{"dept_name":"","dept_type":"", "branch_id":"","branch address":""},{"dept_name":"","dept_type":"", "branch_id":"","branch address":""}]}

services

{"gov_service_ids":["1"]}
new tab : Program Config

Program registry

Program name, owner entity, services(json),
 
services(json)
{"services":[{"service_id": "", "provider_entities": [1,3,6], "service_status":"active"} ]}

new tab : Application Config

Application registry

Id, app_name, app_lisence, app_APIs (JSON: endpoints), 

document template:
var document_template=
{
    "fields":[
        {"name":"id","datatype":"INT","unique":"","not_null":""},
        {"name":"name","datatype":"VARCHAR(45)","unique":"","not_null":""},
        {"name":"age","datatype":"INT","unique":"","not_null":""}
    ]
}
*/
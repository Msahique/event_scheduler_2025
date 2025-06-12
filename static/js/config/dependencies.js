/**
 * 
 * @param {*} doc_type  - Resource Register
 * @param {*} operation - Update
 * @param {*} status    - Success
 */
function handle_dependencies(doc_type, operation, status){
    console.log("Dependencies: ", doc_type, operation, status);
}

function handleEventDeleteOrPostpone(eventId) {
    if (confirm("Do you want to postpone this event instead of deleting it?")) {
        const newDatetime = prompt("Enter new datetime (YYYY-MM-DD HH:MM):");
        if (!newDatetime) return;

        fetch(`/check_resource_availability/${eventId}?new_time=${encodeURIComponent(newDatetime)}`)
            .then(res => res.json())
            .then(data => {
                if (data.available) {
                    // Confirm postponing
                    if (confirm("Resource is available. Do you want to postpone the event?")) {
                        fetch(`/postpone_event/${eventId}`, {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ new_time: newDatetime })
                        })
                        .then(res => res.json())
                        .then(result => alert(result.message));
                    }
                } else {
                    alert("Resource is not available at that time.");
                }
            });
    } else {
        if (confirm("Are you sure you want to delete the event?")) {
            fetch(`/delete_event/${eventId}`, { method: "DELETE" })
                .then(res => res.json())
                .then(result => alert(result.message));
        }
    }
}



/* GET */

async function get(access, url) {   //  FETCH - GET

    const response = await fetch(url);

    let user = await response.json();   // SAVE THE DATA IN VARIABLE
    console.log(url);

    tableOf(user, 0);       //  CREATE A TABLE USING FETCHED DATA
    access === "access" ? accessActive = 1 : accessActive = 0;
}

/* PUT */

async function put(url) {    //  FETCH - PUT REQUEST
    if (/^(male)$|^(female)$/.test(document.getElementById("gender").value) && /^(active)$|^(inactive)$/.test(document.getElementById("status").value)) {
        if (confirm("Do you want to write the changes?")) {
            fetch(url, {
                method: "PUT",
                body: JSON.stringify({
                    name: document.getElementById("full-name").value,
                    email: document.getElementById("email").value,
                    gender: document.getElementById("gender").value.toLowerCase(),
                    status: document.getElementById("status").value
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    "Authorization": "Bearer"
                }
            })

                .then(response => response.json())
                .then(json => console.log(json));      // DISPLAY OBJECT WITH NEW VALUES
            alert("Success")        // DISPLAY SUCCESS
            document.getElementById("update-user").innerHTML = '<input type="button" value="Updated Succesfully" class="btn btn-success float-end px-5 mx-4 mb-4" disabled >'
        }
    }
    else if (/^(male)$|^(female)$/.test(document.getElementById("gender").value)) {
        alert("Check status field")
    }
    else if (/^(active)$|^(inactive)$/.test(document.getElementById("status").value)) {
        alert("Check gender field")
    }
}

/* DELETE */

async function toDelete(url) {
    if (confirm("Are you sure?")) {
        console.log(url)
        fetch(url, {            //  FETCH - DELETE REQUEST
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Bearer"
            }
        })
        alert("Delete Success")       // DISPLAY SUCCESS
        get("access", api_url)                  // REFRESH VALUES

    }
}

/* POST */

async function post(url) {          //  FETCH - POST
    if (/^(male)$|^(female)$/.test(document.getElementById("gender").value) && /^(active)$|^(inactive)$/.test(document.getElementById("status").value)) {
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                name: document.getElementById("full-name").value,
                email: document.getElementById("email").value,
                gender: document.getElementById("gender").value.toLowerCase(),
                status: document.getElementById("status").value
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Bearer"
            }
        }).then(response => response.json(), message => alert(message)
        ).then(json => console.log(json));           //  DISPLAY ADDED VALUE AS OBJECT

        alert("Success")                                //  POPUP MESSAGE - SUCCESS
        document.getElementById("add-user").innerHTML = '<input type="button" value="Added" class="btn btn-primary float-end px-5 mx-4 mb-4 disabled">'
    }
    else if (/^(male)$|^(female)$/.test(document.getElementById("gender").value)) {
        alert("Check status field")
    }
    else {
        alert("Check gender field")
    }
}
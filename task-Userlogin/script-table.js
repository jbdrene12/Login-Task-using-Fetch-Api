function tableOf(array, val) {          // FUNCTION TAKES AN ARRAY(array) AND VALUE(val) TO CREATE A TABLE 
    //  'array' CAN EITHER BE AN ARRAY OF OTHER ARRAYS OR ARRAY OF OBJECTS
    //  DEPENDING ON THAT 'val' TAKES '1' OR '0' AS ARGUMENTS RESPECTIVELY
    //  'arrayOfUsers' ARRAY SAVES ALL DATA WE FETCHED IN ARRAY FORMAT WHICH CAN BE USED LATER
    let tab = "";
    if (val === 0) {
        arrayOfUsers.splice(0, arrayOfUsers.length) // CLEAR THE ARRAY BEFORE SAVING NEW DATA

        for (let data of array) {   //  CREATING TABLE USING ARRAY OF OBJECTS
            tab += `<tr>
                <td>${data.id}</td>
                <td>${data.name}</td>
                <td>${data.email}</td>
                <td>${data.gender}</td>
                <td>${data.status}</td>
                <td>
                    <a href="./user-list-crud/view-user.html" class="text-decoration-none" onclick='viewFunc(${array.indexOf(data)})'><i class="fa-solid fa-eye" style="color: #0000ff;"></i></a> 
                    <a href="./user-list-crud/update-user.html" class="text-decoration-none" onclick='viewFunc(${array.indexOf(data)})'><i class="fa-solid fa-pencil" style="color: #00f;"></i></a> 
                    <a href="./user-list-crud/delete-user.html" class="text-decoration-none" onclick='viewFunc(${array.indexOf(data)})'><i class="fa-solid fa-trash" style="color: #f00;"></i></a>
                </td>		
            </tr>`;
            temp.push(data.id, data.name, data.email, data.gender, data.status);
            arrayOfUsers.push(temp);    
            //console.log(arrayOfUsers)
            temp = [];
        }
    }
    else {
        for (let data in array) {   //  CREATING TABLE USING ARRAY OF ARRAYS
            tab += `<tr>
                <td>${array[data][0]}</td>
                <td>${array[data][1]}</td>
                <td>${array[data][2]}</td>
                <td>${array[data][3]}</td>
                <td>${array[data][4]}</td>
                <td>
                    <a href="./user-list-crud/view-user.html" class="text-decoration-none" onclick='viewFunc(${data})'><i class="fa-solid fa-eye" style="color: #00f;"></i></a> 
                    <a href="./user-list-crud/update-user.html" class="text-decoration-none" onclick='viewFunc(${data})'><i class="fa-solid fa-pencil" style="color: #00f;"></i></a> 
                    <a href="./user-list-crud/delete-user.html" class="text-decoration-none" onclick='viewFunc(${data})'><i class="fa-solid fa-trash" style="color: #f00;"></i></a>
                </td>		
            </tr>`;

        }
    }

    document.getElementById("userList").innerHTML = tab;  //  <tbody id="userList"> ... GOES HERE ... </tbody>
}


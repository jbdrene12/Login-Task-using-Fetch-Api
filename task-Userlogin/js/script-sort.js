    //  SORT AN ARRAY OF DATA (ASCENDING)

function sortColumn(array, column) {    
    //  'array' - ARRAY OF DATA, 'column' - COLUMN TO SORT ('id' or 'name')
    let nameArray = []; //  COLLECTION OF ALL NAMES
    let idArray = [];   //  COLLECTION OF ALL IDS
    let emailArray = [];//  COLLECTION OF ALL EMAIL-IDS
    let idSort = [];    //  SORTED ID ARRAY
    let nameSort = [];  //  SORTED NAME ARRAY
    let emailSort = []; //  SORTED EMAIL 
    
    for (i in array) {
        idArray.push(array[i][0]);
        nameArray.push(array[i][1]);
        emailArray.push(array[i][2]);
    }

    idArray.sort((x, y) => x - y);
    nameArray.sort();
    emailArray.sort();
    if (column == "id") {
        for (i in idArray) {
            idSort.push(...(array.filter((innerArray) => innerArray[0] == idArray[i])))
        }
        return idSort
    }
    else if (column == "name") {
        for (i in nameArray) {
         
            nameSort.push(...(array.filter((innerArray) => innerArray[1].toLowerCase() == nameArray[i].toLowerCase())));
          
        }
        console.log(nameSort)
        return nameSort
    }
    /* BELOW CODE WON'T WORK */
    else {
        for (i in emailArray) {
            emailSort.push(array.filter((innerArray) => innerArray))
        }
        return emailSort
    }
}
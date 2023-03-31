function sortColumn(array, column) {
    let nameArray = [];
    let idArray = [];
    let emailArray = [];
    let tempSortedArray = [];
    let idSort = [];
    let nameSort = [];
    let emailSort = [];
    for (i in array) {
        idArray.push(array[i][0]);
        nameArray.push(array[i][1]);
        emailArray.push(array[i][2]);
    }
    idArray.sort((x, y) => x - y);
    nameArray.sort();
    emailArray.sort();
    tempSortedArray.push(idArray, nameArray, emailArray);
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
    else {
        for (i in emailArray) {
            emailSort.push(array.filter((innerArray) => innerArray[2] == i))
        }
        return emailSort
    }
}
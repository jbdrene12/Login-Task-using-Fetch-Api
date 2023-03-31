
const storedItem = [];           // STORES ITEM FOR VIEW/UPDATE/DELETE

function store(input) {         // INPUT WILL BE AN ARRAY OF DATA
  storedItem.splice(0, storedItem.length); //  CLEAR BEFORE NEW DATA
  storedItem.push(...input);     //  PUSH THE DATA INTO THE STORAGE VAR
  sessionStorage.setItem("storedItem",JSON.stringify(storedItem));  //  USE SESSION STORAGE SET --> SAVE IT AS JSON
  console.log(storedItem);
}

function retrieve() {           //  RETRIEVE THE STORED ITEM IN A NEW PAGE
  return JSON.parse(sessionStorage.getItem("storedItem"));  //  PARSE AND RETURN DATA GOT FROM <-- SESSION STORAGE GET
}

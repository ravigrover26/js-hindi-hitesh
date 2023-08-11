// objects

// singleton

// object literals
let fName = "Test"
let mySym = Symbol("Key1");

const jsUser = {
    "full Name":"Ravi Grover",
    fName: "Ravi",
    lName: "Grover",
    [mySym] : "myKey1",
    age : 100,
    location:'Schofields',
    isLogged: true,
    lastLogin:['Monday','Tuesday'],
    // greet : function(){
    //     console.log('Hello JS User');
    // },
    // greet2 : function(){
    //     console.log('Hello JS',this.fName,this.lName);
    // }
}

jsUser.greet = function(){
    console.log('Hello JSUser');
}
jsUser.greet2 = function(){
    console.log(`Hello JS User,${this.fName}`);
}



console.log(jsUser.greet2());
// jsUser.age = 200
// console.log(jsUser.age);
// Object.freeze(jsUser)
// jsUser.location = 'Riverstone'
// console.log(jsUser);


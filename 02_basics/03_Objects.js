// singleton

// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     },
//   };
  
//   const me = Object.create(person);
  
//   me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
//   me.isHuman = true; // Inherited properties can be overwritten
  
//   me.printIntroduction();
  // Expected output: "My name is Matthew. Am I human? true"

// const car = {
//     make:"Toyota",
//     model:"Kluger",
//     fuel:"Hybrid",
//     description: function (){
//         console.log(`This car is ${this.make} ${this.model} and it runs on ${this.fuel}`);
//     }
// }

// const mySUV = Object.create(car);

// mySUV.make = "Tesla";
// mySUV.model = "ModelX";
// mySUV.fuel = "Electric";

// mySUV.description();

// object literals


// const myCar = {
//     make:"toyota",
//     model : "rav4",
//     fuel:"Petrol",
//     displacement:3000,
//     torque : 200,
// }

// console.log(myCar.make,myCar.model);
// myCar.make = "Honda";
// myCar.model = "CRV";
// console.log(myCar.make,myCar.model);

// Object.freeze(myCar);
// myCar.make = "Tesla";
// myCar.model = "Model3";
// console.log(myCar.make,myCar.model);


// myCar.drive = function(){
//     console.log('Car is driven');
// }

// myCar.charge = function(){
//     console.log(`${this.make} ${this.model} is being Charged`);
// }

// console.log(myCar.drive());

// console.log(myCar.charge());

// objects

// singleton

// object literals
// let fName = "Test"
// let mySym = Symbol("Key1");

// const jsUser = {
//     "full Name":"Ravi Grover",
//     fName: "Ravi",
//     lName: "Grover",
//     [mySym] : "myKey1",
//     age : 100,
//     location:'Schofields',
//     isLogged: true,
//     lastLogin:['Monday','Tuesday'],
//     // greet : function(){
//     //     console.log('Hello JS User');
//     // },
//     // greet2 : function(){
//     //     console.log('Hello JS',this.fName,this.lName);
//     // }
// }

// jsUser.greet = function(){
//     console.log('Hello JSUser');
// }
// jsUser.greet2 = function(){
//     console.log(`Hello JS User,${this.fName}`);
// }



// console.log(jsUser.greet2());
// jsUser.age = 200
// console.log(jsUser.age);
// Object.freeze(jsUser)
// jsUser.location = 'Riverstone'
// console.log(jsUser);


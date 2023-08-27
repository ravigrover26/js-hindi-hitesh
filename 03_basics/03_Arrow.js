// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// const addTwoImplicit = (num1,num2) => (num1 + num2);
// const addTwoImplicitNew = (num1,num2) => ({fName:'Ravi',lName:'Grover'});

// console.log(addTwo(100,50));
// console.log(addTwoImplicit(100,500));
// console.log(addTwoImplicitNew(100,500));


// const chai = () => {
//     let uName = "test"
//     console.log(this.uName,this);
// }
// chai();

// function chai(){
//     let uName = "Hitesh"
//     console.log(this.uName,this);
// }
// chai();

// const chai = function(){
//     let uName = "test"
//     console.log(this.uName,this);
// }
// chai();



// this keyword and arrow functions

// const user = {
//     fName:"Hitesh",
//     lName:"Chodhary",
//     price:999,
//     welcome: function(){
//         console.log(`${this.fName} ${this.lName}, welcome to the website`);
//         console.log(this);
//     }
// }

// user.welcome();
// user.fName = "Ravi"
// user.lName = "Grover"
// user.welcome();
// console.log(this);


// (function dbconnect(){
//     // named IIFE
//     console.log(`CONNECTED TO DB`);
// })();

// ((name) => {
//     // IIFE
//     console.log(`CONNECTED TO DB2 ${name}`);
// })('Hitesh');
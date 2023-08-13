// [
//     {},
//     {},
//     {}
// ]


// appna kaam kisi aur pe daalna API se hota hain

// {
//     "name":"Ravi",
//     "age": 12,
//     "IsLogged":true
// }


// const course = {
//     title:"JS in action",
//     price : 999,
//     teacher : "Hitesh"
// }

// const {title:myTitle,price:myPrice,teacher:myTeacher,myvar} = course;

// console.log(myTitle,myPrice,myTeacher,myvar);




// const obj1 = {1:"one",2:"two"};
// const obj2 = {3:"three",4:"four"};
// const obj4 = {5:"five",6:"six"};
// const obj3 = Object.assign({},obj1,obj2,obj4);
// // const obj3 = {...obj1,...obj2};
// console.log(obj3);

// const users = [
//     {id:123,email:"abc.com"},
//     {id:124,email:"def.com"},
//     {id:125,email:"xyz.com"}
// ]

// console.log(users[0].id);
// users[0].email = "mno.com";
// console.log(users[0].email);



// const tinUser={
//     id:123,
//     email:"test@test.com",
//     isLoggedin:true,
// }

// console.log(Object.keys(tinUser));
// console.log(Object.values(tinUser));
// console.log(Object.entries(tinUser));
// console.log(tinUser.hasOwnProperty('email1'));

// const student = new Object();
// const student = {
//     id: 123,
//     fname:"ravi",
//     lname:"Grover",
//     roll:2000,
//     address:{
//         shippingAddress:{
//             houseno:32,
//             street:"Argowan road",
//             suburb:"Schofields",
//             zip:2762,
//             state:"NSW",
//         },
//         billingAddress:{
//             houseno:26,
//             street:"Test Rd",
//             suburb:"test",
//             zip:2000,
//             state:"NSW",
//         }
//     }
// };

// console.log(student.address.shippingAddress.houseno);
// console.log(student.address.billingAddress.houseno);
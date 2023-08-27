const phones = [
    {
        make:'samsung',
        model:'fold5',
        type:'android'
    },
    {
        make:'apple',
        model:'iphone15',
        type:'iOS'
    },
    {
        make:'google',
        model:'pixel8',
        type:'android'
    }
]
phones.forEach(function(val){
    console.log(val.type);
})

// let cars = ['rav4','model3','model4','kluger']

// cars.forEach(function(val){
//     console.log(val);
// })

// cars.forEach((val) => console.log(val))

// function printMe(val){
//     console.log(val);
// }
// cars.forEach(printMe);

// const car = {
//     make:'toyota',
//     model:'rav4',
//     fuel:'hybrid',
//     displacement : 4000
// }

// for (const key in car) {
//     console.log(key);
// }



// const mymap = new Map();
// mymap.set('IN',91)
// mymap.set('US',1)
// mymap.set('AU',61)
// mymap.set('NZ',64)

// for (const key in mymap) {
//     console.log(key);
// }


// let cars = ['rav4','model3','model4','kluger']

// for (const car of cars) {
//     console.log(car);
// }


// const langs = ['hindi','punjabi','bengali','tamil']

// for (const lang in langs) {
//     console.log(langs[lang]);
// }

// const car = {
//     make:'toyota',
//     model:'rav4',
//     fuel:'hybrid',
//     displacement : 4000
// }

// for (const key in car) {
//     console.log(key,car[key]);
// }
// Dates

let myDate = new Date()

// console.log(myDate.toString());

// console.log(myDate.toDateString());

// console.log(myDate.toISOString());

// console.log(myDate.toJSON());

// console.log(myDate.toLocaleString());

// console.log(myDate.toLocaleDateString());

//console.log(typeof myDate);


// let myCreatedDate = new Date(2024, 1, 16)

// let myCreatedDate = new Date(2024, 1, 16, 4 , 46)

//let myCreatedDate = new Date("2024-02-16")

let myCreatedDate = new Date("02-16-2024")

//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);  // to get output value in milisecond

// console.log(myCreatedDate.getTime());


//convert milisecond to second
// console.log(Date.now()/1000);  // to get value in decimal

console.log(Math.floor(Date.now()/1000));


let newDate = new Date ()

console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getHours());


newDate.toLocaleString('default',{
    weekday : "long"
})

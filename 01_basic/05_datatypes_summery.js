// Primitive (call by value)

//7 types : String, Number, Boolean , null, undefined, Symbol , BigInt



const score = 100
const scoreValue = 100.3

const isLoggedIn =  false
const outsideTemp = null
let userEmail;

const id  = Symbol('123')

const anotherId = Symbol('123')

//console.log(id == anotherId);

const bigNumber = 45458515484858484n


//Non Primitive ( refrence type)

//Array , Object , Function


//**Array **//
const heros = ["Vikas", "Sunil", "Bhaiya"];

//**Object **//
const myObj = {
    name : "Vikas",
    age : 22,
}

//**Function *//

const myFunction = function () {
     
    console.log("Hello World");

}



//************************************************************ */

//Type of memory => 1) stack  2) Heap 

// Stack (primitive),  Heap(non-primitive)


let myYoutubename = "vikasdotcom"

let anothername = myYoutubename
anothername = "pubg"
console.log(anothername);

console.log(myYoutubename);


let userOne = {
    email : "google54@gmail.com",
    upi : "vikas@ybl"
}

let userTwo = userOne

userTwo.email = "user@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
// Premitive (call by value)

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


//Non Premitive ( refrence type)

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


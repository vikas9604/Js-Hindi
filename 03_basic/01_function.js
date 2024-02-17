function sayMyName ()  {
    console.log("V");
    console.log("I");
    console.log("K");
    console.log("A");
    console.log("S");
} 

//sayMyName ()

// function addTwoNumber (number1, number2) {
//     console.log(number1 * number2);
// }

function addTwoNumber (number1, number2) {

//    let result = number1 + number2
//    return result

return number1 + number2
}


const result = addTwoNumber (5 , 6)

//console.log("Result :  ", result);

function loginUserMessage (username = "sam") {
    if(!username) {
         console.log("please enter a username");
         return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vikas"));

//console.log(loginUserMessage("Vikas"));


function calculateCartPrice (val1, val2, ...num1) {
 return num1
}

//console.log(calculateCartPrice (200, 400, 600));

const user = {
    username : "Vikas",
    price : 200
}

function  handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username : "sam",
    price : 400
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
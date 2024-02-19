// // // if

// // const userLoggedIn = true
// // const temp = 41 

// // // if (temp < 50) {
// // //       console.log("temp less than 50");
// // // }

// // // console.log("temp is greater than 50");

// // const score = 200

// // if (score > 100) {
// //     const power = "fly"
// //     console.log(`user power ${}`);
// // }



// const balance = 1000 

// if (balance < 500) {
//   console.log("less than 500");
// }

// else if (balance < 750 ) {
//     console.log("less than 500");

// }


// else if (balance < 750 ) {
//     console.log("less than 750");

// }

// else if (balance < 900 ) {
//     console.log("less than 900");

// }


// else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

if (loggedInfromGoogle || loggedInfromEmail) {
    console.log("user logged in");
}
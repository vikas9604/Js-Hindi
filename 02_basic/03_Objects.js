// singletone
//Objects literals
//Object.cerate   //=> constructed method or singletone

const mySym = Symbol("key1")

const jsUser = {
    name : "Vikas",
    "full name" : "Vikas Mhetre",
    [mySym] : "mykey1",
    age : 18,
    location : "mumbai",
    email : "vk@gmail.com",
    isLoggedIn : false,
    lastLogginDays : ["Monday", "Saturday"]

}

// console.log(jsUser.email);

// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "Vikas@gmail.com"
//Object.freeze(jsUser)               //important
jsUser.email  = "Vikas@8522.com"
//console.log(jsUser);

jsUser.greeting = function () { 
    console.log("Hello JS User");
}

jsUser.greetingTwo = function () { 
    console.log(`Hello JS User, ${this.name}`);
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
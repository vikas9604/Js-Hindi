// Singletone

// const tinderUser = new Object ()
const  tinderUser = {}

tinderUser.id = "1255ffb",
tinderUser.name = "sam",
tinderUser.isLoggedIn = false  

//console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com ",
    fullname : {
        userfullname: {
            firstname : "vikas",
            lastname : "mhetre"
        }
    }
}

// console.log(regularUser.email);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "d"}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1 , ...obj2}
//console.log(obj3);


const users = [
    {
        id:1,
        email : "vk@gmail.com"
    },
    {
        id:1,
        email : "vk@gmail.com"
    },
    {
        id:1,
        email : "vk@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser))

// console.log(Object.values(tinderUser))


// console.log(Object.entries
//     (tinderUser))


const course = {
    coursename : "javascript",
    price : "999",
    instructor : "Vikas"

}

const {instructor} = course         // {} => destructured object

console.log(instructor);
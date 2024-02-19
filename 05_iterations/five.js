// for each loop

const coding = ["js", "ruby", "py", "java", "cpp"]


// coding.forEach( function (val) {
//   console.log(val);
// })

// coding.forEach( (item) => {
//  console.log(item);
// })


// function  printMe (item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item, index, arr) => {
// console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : 'Javascript',
        lanbgugeFileName : 'js'

    },

    {
        languageName : 'Java',
        lanbgugeFileName : 'java'

    },

    {
        languageName : 'python',
        lanbgugeFileName : 'py'

    },
]

myCoding.forEach ((item) => {
    console.log(item.languageName);
})
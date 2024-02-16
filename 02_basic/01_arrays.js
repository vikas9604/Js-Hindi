// arrays

const myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const myHeros = ["shaktiman", "nagin"]

const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[8]);

//Arrays method

// myArr.push(15, 16, 55)
// myArr.pop()

// myArr.unshift(45)
// myArr.shift()

// console.log(myArr.includes(10));
// console.log(myArr.indexOf(8));

// const newArr = myArr.join()

// console.log(myArr);

// console.log(typeof newArr);


// slices , splice 

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3)

console.log("C", myArr);

console.log(myn2);
const name = "Vikas"
const repoCount = 45

//console.log(name + repoCount + " Value");

//console.log(`Hello my name ${name} and  my repo count ${repoCount}`);

const gameName = new String('vikas-m-com')

// console.log(gameName[5]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());


            // console.log(gameName.charAt(2));
            // console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4)
console.log(newString);


const anotherString  =  gameName.slice(-6 , 2)
console.log(anotherString);

const newStringOne = "   vikas    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://vikas.com/vikas%20mhetre"

console.log(url.replace('%20' , '-'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));
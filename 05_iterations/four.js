//for in loop


const myObject = {
    js : 'Javascript',
    cpp : 'c++',
    rb : 'rubby',
    swift : 'swift by apple'

}

for (const key in myObject) {
    //  console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "cpp", "py", "java", "rb"]

for (const key in programming) {
  // console.log(programming[key]);
}


const map = new Map()

map.set ('IN', 'India')
map.set ('USA', 'United state of America')
map.set ('Fr', 'France')

for (const key in map) {
  console.log(key);
}
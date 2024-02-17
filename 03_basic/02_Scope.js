// scope start with let , var and const

//globle scope
//var c = 400

let a = 300

//block scope
if (true) {
    let a = 10
    const b = 20
  // console.log("INNER: ", a);
}


//console.log(a);
//console.log(b);
//console.log(c);

function one() {
    const username = "Vikas"

    function two () {
        const website = "google"
        console.log(username);
    }

    //console.log(website);
   two ()
}

//one()

if (true) {
    const username = "Vikas"
    if (username === "Vikas") {
        const website = "google"
        // console.log(username + " website");
        // console.log(website);
    }
   // console.log(username);
}

// ++++++++++++++++++++ interesting +++++++++++++++//

console.log(addone(5));
function addone (num) {
  return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

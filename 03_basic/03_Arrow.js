const  user = {
    username: "Vikas",
    price : 9999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome  to website`);
      //  console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this);


// function chai() {
    //     let username = "Vikas"
    //     console.log(this.username);
    // }
    
    // chai()
    
    
    // const chai = function () {
        //     let username = "Vikas"
        //     console.log(this.username);
        // }
        
        // const chai = () => {
        //     let username = "Vikas"
        //     console.log(this);
        // }
        
        // chai()


        //*******************Arrow Function********************* */

        // const addTwo = (num1, num2) => {
        //     return num1 + num2
        // }

        // const addTwo = (num1, num2) => num1 + num2

        //const addTwo = (num1, num2) => (num1 + num2)

        const addTwo = (num1, num2) => ({username: "vikas"})

        console.log(addTwo(6, 6));
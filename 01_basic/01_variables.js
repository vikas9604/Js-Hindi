const accountId = 1445615

let accountEmail = "vikas@gmail.com"

var accountPassword = "12345"

accountCity = "Mumbai"

let accountState ;

//accountId = 545454


/*
prefer not to use var 
because of issue in block scope and functional scope
*/
accountEmail = "vk@vk.comm"
accountPassword = "8787"
accountCity = "pune"

console.table([accountId, accountEmail,accountPassword, accountCity, accountState]);
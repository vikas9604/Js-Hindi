const myNums = [1, 2, 3]

// By reduce method

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval

// }, 0)

// By arrow  function

const myTotal = myNums.reduce((acc, currval) => acc +currval, 0)

//console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js coures",
        price : 2999
    },
    {
        itemName: "py coures",
        price : 5999
    },
    {
        itemName: "java coures",
        price : 7999
    },
    {
        itemName: "data coures",
        price : 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price , 0)

console.log(priceToPay);
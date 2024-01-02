function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

// console.log(addTwoNumbers(6,5));

function loginUserMessage(username = "aman"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))


function calculateCart(val1 ,...num1){
    return num1; 
}
console.log(calculateCart(67,200,400));

const user ={
username:"hitesh",
prices:199
}

function handleObject(anyobj){
    console.log(`Username is ${anyobj.username} and prices is ${anyobj.prices}`)
}

// handleObject(user)
handleObject({
    username:"hitesh",
prices:199
}
)

const myNewArray = [200,400,500,32]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log((returnSecondValue(myNewArray)));
console.log(returnSecondValue( [200,400,500,32]));

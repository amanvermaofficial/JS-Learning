const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}


// user.welcomeMessage();
user.username = "sam"
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }//this.username in function is undefined

// chai();
const chai = () => {
    let username = "hitesh";
    console.log(this.username);
}//here laso this is not work
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//{} => return use hoga or () use nhi hoga return


// const addTwo = (num1, num2) =>  num1 + num2 //implicit return

// const addTwo = (num1, num2) => ( num1 + num2 )


const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))
// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

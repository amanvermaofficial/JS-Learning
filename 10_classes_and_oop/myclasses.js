//ES6

// class User{
//constructor kab call hota hai?=>jaise hi class se koi obj initillize hoga,new keyworrd jaise hi kaam mein lenge ,constructor apne aap call hojayega
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","123");

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea","tea@google.com","123")

console.log(tea.changeUsername());
console.log(tea.encryptPassword());

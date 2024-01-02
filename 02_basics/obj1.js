//singleton
//object.create

//object.literals
const mySym = Symbol("key1")

const JsUser={
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]:"mykey1",
    age:18,
    locaion:"Jaipur",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLogindays: ["mon","tue"]
}

// console.log(JsUser);
// console.log(JsUser["full name"]);
// console.log(JsUser["email"]);
// console.log(typeof(JsUser[mySym]));

// JsUser.email = "hitesh@chatgpt";
// console.log(JsUser.email);
// Object.freeze(JsUser);
// JsUser.email = "hitesh@microsoft";
// console.log(JsUser.email);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}
console.log(JsUser.greetingTwo())
console.log(JsUser.greeting());
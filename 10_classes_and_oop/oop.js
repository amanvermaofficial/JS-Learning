








const user = {
    username:"hitesh",
    loginCount:8,
    signedIn: true,

    getUserDetails: function(){
             //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this

}

const userOne =  User("hitesh", 12, true)
// const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne.constructor);
//console.log(userTwo);

// new =>when we use 'new' keyword first of all crete empty object also known as instance
//step 2=>constructor function called cause of new keyword
//step 3=>this keyword inject all arguments which we write
//step 4=>we gets
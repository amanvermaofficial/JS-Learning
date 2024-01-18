// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);



let myHeros = ["thor", "spiderman"]

let heroPower ={
     thor: "hammer",
     spiderman: "sling",
     getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
     }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
console.log(`hitesh say hello`);
}


// heroPower.hitesh()
// myHeros.hitesh()
// heroPower.heyHitesh()
// myHeros.heyHitesh()

//inheritance


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport ={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//modren syntax
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName = "Aman    "

Object.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUserName.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
//getOwnPropertyDescriptor=>it tells obj hidden feautreas
console.log(descripter)
//output;-
/*{
value:3.141592653589793,
writable: false,
enumerable:false,
configurable:false
}*/
//descripter ki jo pi value h vo hardcoded
//writable: false,implementation hai hmare core js ka hmare bwoser or node js ke ander kitni baar isko overwrite krne ki kosis kro ye property itni indetail,indepth hardcoded false kar rakhi h cpp mein 
//or checks bhi ki isko aap true nhi kr skte ho

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const chai = {
    name: "ginger chai",
    price:250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

// chai.name = "green tea"
// console.log(chai.name)

// Object.defineProperty(chai,"name",{
//     // writable:false,
//     enumerable:true
// })
 
// chai.name = "green tea"
// console.log(chai.name)

for (const [key,value] of Object.entries(chai)) {
if(typeof value!=="function"){
    console.log(`${key}:${value}`);
}
}

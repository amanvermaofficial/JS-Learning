const userEmail = []

if(userEmail){
    console.log("Got user email")
}
else{
    console.log("Don't have user email")
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}


// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }


const emptyObj = {}

if(Object.keys(emptyObj).length===0){
console.log("Object is empty")
}

//Nullish Coalescing Operator(??):null undefined

let val;
// val=5??10
//Que= out=5,?? sense hi kyaaa hua jab firs value jaani thi?
//ans=database or apppwrite vgera m directly response nhi milta h ,hmko 2 values milti h ,ho skta hai hmko null response mil jaye,ya undefined aa jay usse pura code structure presan ho skta hai if null hai to null assign krdu phir uske hisab se case adjust adjust krlu,undefined h to theeck varna m koi value assign krlu 

// val=null??10
// val = undefined??20
// val = null??10??20
console.log(val);

//Terniary Operator

//condition ? true : false
const iceTeaPrice=100
iceTeaPrice<=80?console.log("Yes Price is less than 80"):console.log("price is high more than 80");

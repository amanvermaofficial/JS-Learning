//arrayy

const myArr = [0,1,2,3,7,5];
const myHeros=["shaktiman","hello"]

// console.log(myHeros[1]);
//Array methods

// myArr.push(6);
// myArr.pop();
// myArr.unshift(9);
// myArr.shift();
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(7))
const newArr = myArr.join();//conversion arr to str
// console.log(newArr);


//slice,splice 
console.log("A ",myArr);
const  myn1 = myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);
const  myn2 = myArr.splice(1,2);
console.log(myn2);
console.log("C ",myArr);



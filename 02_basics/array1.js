//arrayy
// array-copy operations create shallow copies.  shallow copy of an object is a copy whose properties share the same references
// it means if we make any changes it will be made changes on original 

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
slice, splice (Methods) */
console.log("A ", myArr); // Output: A  [ 0, 1, 2, 3, 4 ]
const myNewArr1 = myArr.slice(1, 3) /* Include value at index 1 and 2 but don't 
include value at index 3. */
console.log(myNewArr1); // Output: [ 1, 2 ]
console.log("B ", myArr); // Output: B  [ 0, 1, 2, 3, 4 ]
// Note: As we can see using slice doesn't affect original array.

const myNewArr2 = myArr.splice(1, 3)
console.log(myNewArr2); // Output: [ 1, 2, 3 ]
console.log("C ", myArr); // Output: C  [ 0, 4 ]
// Note: But in splice we can see it removes the elements and manipulates the original array.



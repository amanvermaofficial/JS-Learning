//immediately invoked function Expression (iife)

(function chai(){
    //named iffe
    console.log(`DB Conected`);
})();


//()()=>first() is function defination and 2nd execution call

//interview=>jo function immediately execute ho jaye or global scope ke pollution  se problem hoti hai kae baar ,global scope ke jo variables or jo bhi declartion hai uske pollution ko htane ke liy humne IfEE ka use kiya
((name)=>{
    //unnamed iffe
console.log(`DB Connected two ${name}`);
})("Aman")

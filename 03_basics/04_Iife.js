//immediately invoked function Expression (iife)

(function chai(){
    //named iffe
    console.log(`DB Conected`);
})();

((name)=>{
    //unnamed iffe
console.log(`DB Connected two ${name}`);
})("Aman")
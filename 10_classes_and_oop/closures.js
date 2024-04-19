<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clousers & Lexical Scope</title>
</head>
<style>
    /* styles.css */
code {
  display: block;
  white-space: pre-wrap; 
  font-family: monospace; 
  background-color: #d7cfcf;
  color: black;
  padding: 10px; 
  border-radius: 5px; 
  font-size: 16px; 
}
body{
    background-color: black;
    color: white;
}
</style>
<body>
    <h3>
        clouser
        <p>A clouser gives you access to an outer function's scope from an inner func.</p>
    </h3>
    <code>
        function init() {
            var name = "Mozilla";
            function displayName() {
              console.log(name);
            }
            displayName();
          }
          init();
          
    </code>
</body>
<script>
/*
  function outer(){
    let username="hitesh";
      //console.log(secret);//chote to bdo se maang skte hai but bde choto se nhi
    function inner(){
        let secret = "my123"
        console.log("inner",username);
    }
    function inner(){
        console.log("inner",username);
        //console.log(secret);//Note:- it gives error because bhi bhai aapas mein chijo ko share nhi krte but vo apne parent se to maang hi skte hai
    }

    
    //outer function ke ander jitne bhi inner function hai un sabhi ko outer func ke variables or jo bhi hamne memory resrve kri h
   inner()
  }
  outer()
  //console.log("inner",username); */


  function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;// closure:-at the time of call:not only going display func its outer function(if exist)  means lexical scopewith its going because of lexical scopping
}

const myFunc = makeFunc();
myFunc();

//lexical scope:- the ability of a function scope to access variables from the parent scope

</script>
</html>

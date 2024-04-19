# Projects

## project1

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

```
## project2

```javascript



let button = document.getElementById('btn')

//This UseCase  will give you empty
//let weight = parseInt(document.getElementById('weight').value)

button.addEventListener('click',function calculateBmi(){
  let weight = parseInt(document.getElementById('weight').value)
  let height = parseInt(document.getElementById('height').value)
  let result = document.getElementById("results")
  if(height==="" || isNaN(height)){
       result.innerHTML = `Please Provide valid height`
  }
  else if(weight==="" || isNaN(weight)){
       result.innerHTML = `Please Provide valid weigth`
  }
  else{

     let bmi = (weight / ((height * height) 
    / 10000)).toFixed(2);
    if(bmi<18.6){
      result.innerHTML = `UnderWeight Your Bmi : ${bmi}`
    }
    if(bmi>18.6 || bmi<24.9){
      result.innerHTML = `Normal Range Your Bmi : ${bmi}`
    }
    if(bmi>24.9){
      result.innerHTML = `Overweight Your Bmi : ${bmi}`
    }
  
  }
})

```

## project 3

```javascript

const clock = document.getElementById('clock');


setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```
## project 4

```javascript
let randomNum = parseInt(Math.floor(Math.random()*100+1))

const userInput =document.querySelector('#guessField')
const submit =document.querySelector('#subt')
const guessSlot =document.querySelector('.guesses')
const remaining =document.querySelector('.lastResult')
const startOver =document.querySelector('.resultParas')
const lowOrHi =document.querySelector('.lowOrHi')


let playGame=true;
let prevGuess=[];
let p = document.createElement('p')
numGuess=1

if(playGame){
submit.addEventListener('click',(e)=>{
  e.preventDefault();
  let guess = parseInt(userInput.value)
  console.log(guess)
  validateGuess(guess)
})
}

function validateGuess(guess){
if(isNaN(guess)){
  alert('Please Enter Valid Number')
}
else if(guess<1){
  alert('please enter number more than 1')
}
else if(guess>100){
  alert('please enter number less than 100')
}
else {
  prevGuess.push(guess)
  if(numGuess===11){
    displayGuess(guess)
    displayMessage(`Game Over Random num is ${randomNum}`);
    endGame();
  }
  else{
    displayGuess(guess)
    checkGuess(guess)
  }
}
}

function checkGuess(guess){
if(guess===randomNum){
  displayMessage("You gussed it right")
  endGame();
}
else if(guess>randomNum){
  displayMessage('Number is tooo high')
}
else if(guess<randomNum){
  displayMessage('Number is tooo low')
}
}

function displayGuess(guess){
userInput.value='';
guessSlot.innerHTML+=`${guess} `
numGuess++; 
remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
lowOrHi.innerHTML=`${message}`
}

function endGame(){
userInput.value=''
userInput.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML=`<h1 id="newGame">Start Again</h1>`
startOver.appendChild(p)
playGame=false
newGame()
}

function newGame(){
const newStartButton = document.getElementById('newGame')
newStartButton.addEventListener('click',(e)=>{
  randomNum=parseInt(Math.floor(Math.random()*100+1));
  prevGuess=[]
  remaining.innerHTML=`${11-numGuess}`
  numGuess=1
  guessSlot.innerHTML=''
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)

  playGame=true
})
}

```

## project 5

```javascript
const insert=document.querySelector('#insert')
window.addEventListener('keydown',(e)=>{
  insert.innerHTML=`<div class="color">
  <table>
  <tr>
  <th>key</th>
  <th>code</th>
  <th>keyCode</th>
  </tr>
  <tr>
  <td>${e.key===' '?'Space':e.key}</td>
  <td>${e.code}</td>
  <td>${e.keyCode}</td>
  </tr>

  </table>
  </div>`
})

```
## project 8
```javascript
const typedTextSpan = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

const words = ['Love', 'Jhakaas', 'mast', 'dhinchak', 'Weird'];

let wordIndex=0;
let letterIndex=0;
let interval;

function type() {
  let currentWord=words[wordIndex];
  let currentLetter = currentWord[letterIndex]

  typedTextSpan.innerHTML+=currentLetter
  letterIndex++;

  if(letterIndex>=currentWord.length){
    clearInterval(interval)

    setTimeout(()=>{
      interval=setInterval(erase,300)
    },200)
  }

}



function erase() {
  let currentWord=words[wordIndex];


  let text = currentWord.substring(0,letterIndex-1)
  typedTextSpan.innerHTML=text
  letterIndex--;

  if(text===''){
    clearInterval(interval)
  if(wordIndex==(words.length-1)){
    wordIndex=0
    setTimeout(()=>{
      interval=setInterval(type,100)
    },200)
  }
  else{
    wordIndex++;
    letterIndex=0;
    setTimeout(()=>{
      interval=setInterval(type,100)
    },200)
  }
  }
}
interval=setInterval(type,300)
setInterval(function(){
 
if(cursor.classList.contains("show")){
  cursor.classList.remove("show")
}
else{
  cursor.classList.add("show")
}
},500)
```

## project 9

```javascript
const cursor = document.querySelector('.cursor');
// an array of 10 colors in hex value
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];
function update(e){
  cursor.style.left = e.clientX+"px"
  cursor.style.top = e.clientY+"px"

  let index = Math.floor(Math.random()*colors.length)
  console.log(index)
  cursor.style.backgroundColor=colors[index]
}
window.addEventListener("mousemove",update)
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array

```

## project 10
```javascript

const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬',
];
//As a user hover the mouse over emoji, get a new emoji. As the user moves away mouse turn it into gray-scale
btn.addEventListener("mouseover",(e)=>{
  let index=Math.floor(Math.random()*emojis.length)
  btn.textContent=emojis[index]
})
```

## project 11
```javascript
const btns = document.querySelectorAll(".btn")
const output = document.getElementById("output-field")
const input = document.getElementById("input-field")

btns.forEach((btn)=>{
  btn.addEventListener("click",(e)=>{

     if(btn.classList.contains("uppercase")){
      output.innerHTML=input.value.toUpperCase()
     }
     else if(btn.classList.contains("lowercase")){
      output.innerHTML=input.value.toLowerCase()
     }
     else if(btn.classList.contains("capitalize")){
      output.innerHTML=toCapt(input.value)
     }
     else if(btn.classList.contains("bold")){
      output.style.fontWeight = "bold"
      output.innerHTML=input.value
     }
     else if(btn.classList.contains("italic")){
      output.style.fontStyle = "italic"
      output.innerHTML=input.value
     }
     else if(btn.classList.contains("underline")){
      output.style.textDecoration = "underline"
      output.innerHTML=input.value
     }

     input.value=""
  })
})

function toCapt(sentence){
  const splitArray = sentence.split(" ");
  const convertedWords = splitArray.map((word)=>{
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
  })
  return mySen = convertedWords.join(" ")
}

```
## project 14

```javascript
const url = 'https://api.thecatapi.com/v1/images/search';
const img= document.querySelector("img")
const container = document.querySelector(".container");
const btn = document.querySelector(".btn")
btn.addEventListener("click",(e)=>{
  fetch(url)
  .then((response)=>{
  // console.log(response);
  return response.json()
  })
  .then((data)=>{ 
    console.log(data[0].url)
    container.innerHTML=`<img class="random-cats cats"  src=${data[0].url}>`
  })
  .catch((error)=>{
    console.log(error)
  })
})


//2nd method

// btn.addEventListener("click",(e)=>{
// async function getCat(){
//   try{
//     const response = await fetch(url);
//     const data=await response.json();
//     container.innerHTML=`<img class="random-cats cats"  src=${data[0].url}>`
//   }
//   catch(error){
//     console.log("E: ",error); 
//   }
// }
// getCat();
// })


```

## project 15

```javascript
const title = document.getElementById('title');
const author = document.getElementById('author');
const year = document.getElementById('year');
const bookList = document.getElementById('book-list');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault()
if(title.value==""||author.value==""||year.value==""){
        alert("Please Fill allField");
}
else{
  const section = document.createElement("section")
  bookList.appendChild(section);
  section.innerHTML=
  `<div>${title.value}</div>
   <div>${author.value}</div>
   <div>${year.value}</div>
  `
}
title.value=""
author.value=""
year.value=""
});







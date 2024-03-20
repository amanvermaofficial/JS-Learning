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






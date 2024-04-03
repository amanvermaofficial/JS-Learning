// a Promise is an object that will produce a single value some time in the future. If the promise is successful, it will produce a resolved value, but if something goes wrong then it will produce a reason why the promise failed. 
//history-jab promises js m available nhi the js mein,jb bi bhut saara kaam async hota tha,Q or BlueBird library use hoti usme fetch catch then saara kaam hota tha
const promiseOne = new Promise((resolve,reject)=>{
    //Do aync task
    //db calls.cryptography,network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000 )
})

//.then conection with resolve
promiseOne.then(function(){
    console.log('Promise consumed')
})


new Promise(function(resolve,reject){
setTimeout(function(){
    console.log("Async task 2");
    resolve();
},1000)
}).then(function(){
    console.log("Async 2 resolved")
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({username: "Chai",email: "chai@example.com"})
    },1000)
})

promiseThree.then((data)=>{
console.log(data)
})

const promiseFour = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = true;
    if(!error){
        resolve({username: "hitesh", password: "123"})
    }
    else{
        reject('ERROR: Something went wrong')
    }
})

},1000)

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
})


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"Javascript",password:"123"});
        }
        else{
            reject('ERROR: JS went wrong')
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}


consumePromiseFive()


async function getAllUsers(){
    try {
        const response = await  fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    } 
    catch (error) {
       console.log("E: ",error); 
    }
}

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
return response.json()
}).then((d)=>{
   console.log(d);
}).catch((error) => console.log(error))

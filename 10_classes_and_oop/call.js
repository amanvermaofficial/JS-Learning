function setUsername(username){
    //complex DB class
    this.username =username
    console.log(this.username);
    }
    
    function createUser(username,email,password){
        setUsername.call(this,username)//refrence hold krne ke liy method hota hai call and call hamra current execution context kisi or function ko pass krdet hai 
    //setusername call to ho rha hai but stack ke se jab vh execution hokar pop hota hai to vo apne variables ko saath lekar pop hota hai lekin jab hum setusername.call(this,username) tab setusername khta hai mein to jaa is execution se but aap mere properties ko rkh lo use krlena
   
        this.email=email;
        this.password=password;
    }
    
    const chai = new createUser("chai","chai@fb.com","123");
    
    console.log(chai);

class User{
  Constructor(username){
    this.username=username
  }

  logMe(){
    console.log(`Username: ${this.username}`);
  }

 static createId(){
    return `123`
  }//static => is method ka access usko nhi dena chahte jo obj is class se create hua 
}

const hitesh = nw User("hitesh");
console.log(hitesh.createId())

class Teacher extends User{
  Constructor(username,email){
    super(user);//super kaam .call method ka kerta hai yh this apne aap paas krdeta h
    this.email=email
    }
  }


const iphone = new Techer("iphone","i@phone.com")
console.log(iphone.createId);

function User(email,password){
    this.email=email;
    this.password=password

    Object.defineProperty(this, '_el',{
        get: function(){
            return this.password.toUpperCase();
        },
        set: function(value){
          this.password=value
        }
    })
    
}
const U = new User("xyz@mail.com","123***")

console.log(U._el)

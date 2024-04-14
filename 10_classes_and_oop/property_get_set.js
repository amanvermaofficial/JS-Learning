function User(email,password){
    this._email=email;
    this._password=password

    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase();
        },
        set: function(value){
          this._password=value
        }
    })

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
          this._email=value
        }
    })
    
}
const U = new User("xyz@mail.com","abc123")

console.log(U.email)

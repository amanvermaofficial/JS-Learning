// const tinderUser = new Object();//singleton obj
const tinderUser = {};//non-singleton obj

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);


const regularUSer = {
email: "some@gmail.com",
fullname: {
    userfullname:{
        firstname:"Hitesh",
        lastname:"choudhary",
    }
}
}

// console.log(regularUSer.fullname.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 =  {5:"a",6:"b"}

// const obj3 ={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
// console.log(obj3)


const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
   
]

// console.log(users[1].email);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('tinderUser'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor);
const {courseInstructor:instructor} = course

// console.log(courseInstructor)

console.log(instructor)

//json=>

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
  
// [
//     {},
//     {},
//     {}
// ]

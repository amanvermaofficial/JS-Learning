//********* Dates ************//

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString())

// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toUTCString())
// console.log(myDate.getTimezoneOffset())


let myCreatedDate = new Date(2023,0,14);
// let myCreatedDate = new Date(2023,0,14,5,3);
// let myCreatedDate = new Date("2023-06-14");
// let myCreatedDate = new Date("03-12-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// let dt=`Today Date is ${newDate.getDate()}`
// console.log(dt);

const dt = newDate.toLocaleString('default',{
    weekday:"long"
})
// console.log(dt);
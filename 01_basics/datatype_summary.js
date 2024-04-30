//kis trh memory mein data ko rakha jaata hai or access kiya jaata hai-primitive or non - primitive

//primitive - it call by value-jab bhi copy krte hai memory ka refrence nhi diya jaata h balki copy di jaati h

//7 types: String ,Number ,Boolean,null,undefined,symbol(kisi bhi value ko unique banane ke liy),bigInt

//Regfrence(Non primitive)

//Array,object,function


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function


//++++++++++++++++++++++++++++

//Stack(primitive) Heap(Non-Primitive)

let myYoutubename ="hiteshchoudhry"

let anothername=myYoutubeChannel//here it is primitive its get a copy of a value(myYoutubeChannel) not refrence
anothername="chaiOrcode"

console.log(myYoutubename);//"hiteshchoudhry"
console.log(anothername);//"chaiOrcode", So now myYoutubeChannel is not change

//(Non-Primitive)

let userOne = {
    email:"user@google.com",
    upi:"use@ybl"
}

let userTwo = userOne;
userTwo.email="hitesh@google.com"

console.log(userOne);//"hitesh@google.com"
console.log(userTwo);//"hitesh@google.com",Memory is change because hame refrence mila h memory ka na ki copyValue 

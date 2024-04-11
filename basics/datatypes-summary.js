// primitive 
//----- 7 type : string, Number, Boolean, Null, Undifine, Bigint, symbol


// const score=100
// console.log(typeof score)

// const scroeValue=100.3
// console.log(typeof scroeValue)

// const isLoggeIn=false
// console.log(typeof isLoggeIn)

// const outsideTemp=null
// console.log(typeof outsideTemp)

// let userEmail;
// console.log(typeof userEmail)

// const id =Symbol('123')
// console.log(typeof id)

// const anotherId=Symbol('123')
// console.log(typeof anotherId)

// console.log(id===anotherId)


// const bigNumber= 12345764325789887656789n
// console.log(typeof bigNumber)





// Reference   (non primitive)
// Aarray, Object, Function

// const animals=["dog", "cat", "cow"] 
// ---Array

// let object={
//     name:"nisha",
//     lastname:"yadav"
// }          
//  ------object



// const myFunction= function(){
//     console.log("hello world")
// }
// ---function




// JavaScript is a dynamically-typed language
// typescript ??????????????????????????????????????????



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// how to work meomeory

// stack memory(primitive)----change in copy
let myName="nisha"

let anotherName= myName
anotherName= "komal"

console.log(myName)
console.log(anotherName)

// Heap (non primitive)------origan value change , get refrence by heap
let useOne={
    email:"nisha@gmail.com",
    upi: "userone@kl"
}

let userTwo=useOne
userTwo.email="kaljal@.com"
console.log(useOne.email)
console.log(userTwo.email)
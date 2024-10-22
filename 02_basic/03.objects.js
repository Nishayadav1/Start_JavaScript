// singleton :- c0nsctoure
//

// object lilterals
 const mySym = Symbol("key1")

const jsUser={
    name:"nisha",
    "full name": "nisha yadav",
    age: 20,
    [mySym] :"mykey1",/// type symbol  
    locaton: "delhi",
    email:"nishha@co.m",
    idLogin: false,
    lastLogined: ["monday","saturday"]
}
console.log(jsUser.name)
console.log(jsUser["name"])
jsUser.email="nishaheefguef@.vom"
console.log(jsUser.email)
Object.freeze(jsUser)/// freeze oject:- we cannot change and update 





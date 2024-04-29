const v=["a","o","i","u","e"]
const c=["b","n","r","k"]

// v.push(c)
// console.log(v)

// new=v1.concat(c)
// console.log(new1)


// const l=[...v,...c]
// console.log(l)


// const l=[...v,...c]
// console.log(l) ///spread method

const another_arry=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array=another_arry.flat(Infinity)
console.log(real_another_array)

let s="nisha"
console.log(Array.isArray(s))
console.log(Array.from(s))
console.log(Array.from({name:"nshayadav"}))

let a=1
let b=2
let c1=3
console.log(Array.of(a,b,c1))




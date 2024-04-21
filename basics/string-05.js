const name="nisha "
const repoCount=40
// console.log(name + repoCount + " value")

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`)

const gameName= new String("   nishkmfjuiwrgjia   ")
// method
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4)); //what is of 4 index

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-9);
console.log(anotherString);


const another1String = gameName.trim(); //remove white space to  starting  and end
console.log(another1String);

const url= "cxbvyr/ebhrg/huhgn//menf4u.//fyu43"
console.log(url.replaceAll('/','_')); // all replace


console.log(url.includes("cy")); //includes or not

console.log(url.split("/"));
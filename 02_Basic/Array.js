const array=[0,1,2,3,4,5,6]
const myarray=new Array(0,1,2,3,4,5)
console.log("Get the element: "+myarray[1]);

console.log("Array Methods");
myarray.push(6)
console.log("push 6: "+myarray);
myarray.pop()
console.log("pop last value: "+myarray);
myarray.unshift(9)
console.log("unshif start add value : "+myarray);
myarray.shift()
console.log("shif start  value remove: "+myarray);
console.log("include check if there or not:\n"+myarray.includes(9));
console.log(myarray);

console.log("indexof 9:"+myarray.indexOf(9));

console.log("Join");


const newarray=myarray.join()
console.log(myarray);
console.log(newarray);
console.log(typeof newarray);

console.log("slice");
console.log("A",myarray);
const myar1=myarray.slice(1,3)
console.log(myar1);
console.log("B",myarray)

console.log("splice");
console.log("A",myarray);
const myar2=myarray.splice(1,3)
console.log(myar2);
console.log("B",myarray)


const name=["shruti","shreyash","shreya","dipti","shagun"]
const surname=["Haldankar","Ghorpade","patel","Rangani","Agrawal"]

// name.push(surname);
// console.log(name[5][1]);

// fullname=name.concat(surname)

// console.log(fullname);

console.log("sprade use for merge the array");

const  fullname=[...name,...surname]
console.log(fullname);

console.log("flat use find depth of the array");

const anotherarray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realarray=anotherarray.flat(Infinity)
console.log(realarray);

console.log("isArray :"+Array.isArray("shruti"));
console.log("From use to convert in array :"+Array.from("shruti"));
console.log("From use to convert in object :"+Array.from({name:"shruti"}));


let score1=100
let score2=200
let score3=300
let score4=400
console.log("of use to convert value in array:");

console.log(Array.of(score1,score2,score3,score4));

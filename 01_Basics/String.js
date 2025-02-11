const name="shruti"
const wordcount=50

console.log(name  +  wordcount  + "value");
//string interpolation
console.log(`Hello my name is ${name} and my name wordcount is${wordcount}`);

const gameName=new String('shruti Haldankar')
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log("Length:"+gameName.length);
console.log("Lower Case:"+gameName.toLowerCase());
console.log("Position of 2:"+gameName.charAt(2));
console.log("index of t:"+gameName.indexOf('t'));

const newstring=gameName.substring(0,4)
console.log("substring"+newstring);

const anotherstring=gameName.slice(0,4)
console.log("Slice  "+anotherstring);

const anotherstring1=gameName.slice(-8,4)
console.log("Slice  "+anotherstring1);





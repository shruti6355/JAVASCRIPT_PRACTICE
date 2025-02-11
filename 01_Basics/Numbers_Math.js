const score=500
console.log(score);

//difrance 
const balance=new Number(500)
console.log(balance);

console.log("to string length count :"+balance.toString().length);
console.log("to fixed"+balance.toFixed(2));
console.log("type of balance"+typeof balance);

const num=1223.845
console.log(num.toPrecision(4));

const anothernum=100000000
console.log(anothernum.toLocaleString('en-IN'));


//math
console.log(Math);
console.log("abs"+Math.abs(-4));
console.log("round"+Math.round(5.5));
console.log("min"+Math.min(2,3,4,5));
console.log("max"+Math.max(2,3,4,5));
console.log("random:"+Math.random());
console.log("random:"+Math.floor(Math.random()*10)+1);

const min=10
const max=20
Math.random()*(max-min+1)
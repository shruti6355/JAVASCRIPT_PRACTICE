//object literals 
//Object.create
const mysym=Symbol("mykey1")
const jsuser={
    name:"shruti",
    "fullname":"Shruti Haldankar",
    [mysym]:"key1",
    age:22,
    location:"Ahemdabad",
    email:"shruti17@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]
}
console.log(jsuser.name);
console.log(jsuser["fullname"]);//string
console.log(jsuser[mysym]);//symbol

// Access the value of string and symbol use the squre brackets athorwise you can access through th dot 

console.log("change value");
jsuser.email="aditya17@gmail.com"
console.log(jsuser.email);

console.log("freeze the object");

//Object.freeze(jsuser)
jsuser.email="aditya18@gmail.com"
console.log(jsuser);

jsuser.greeting=function () {
    console.log("Hello JavaScript User");
    
    
}
console.log(jsuser.greeting());


jsuser.greeting2=function () {
    console.log(`Hello JavaScript User,${this.name}`);
    
    
}
console.log(jsuser.greeting2());


const syllbus={
    sname:"PHP",
    Pice:"1099",
    sinstructor:"shruti"
}

const {sinstructor:instructor}=syllbus
//console.log(sinstructor);
console.log(instructor);



//json

// {
//     "name":"shruti",
//     "coursename":"Javascript",
//     "price":"200"
// }

[
    {},
    {},
    {}
]


















//const tinderuser=new Object()//singletone
const tinderuser={}//non-singletone objrect 

tinderuser.id="123@as"
tinderuser.name="shruti"
tinderuser.isLoggedIn=false
//console.log(tinderuser);

const regularuser={
    email:"shruti17@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shruti",
            lastname:"Haldankar"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname);

const obj1={
    1:"a",
    2:"b",
    3:"c",
    4:"d"
}
const obj2={
    5:"e",
    6:"f",
    7:"g",
    8:"h"
}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);

console.log(tinderuser);
console.log("Keys\n"+Object.keys(tinderuser));
console.log("values\n"+Object.values(tinderuser));
console.log("entries\n"+Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLogged'));

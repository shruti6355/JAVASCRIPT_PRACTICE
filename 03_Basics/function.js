//simple function

/*function myName(){
    console.log("s");
    console.log("h");
    console.log("r");
    console.log("u");
    console.log("t");
    console.log("i");

}

myName()*/


/*function Addtwonumber( num1,num2){//parameters
 console.log(num1+num2);
 
}

//Addtwonumber(3,3)//arguments
// Addtwonumber(3,"3")
// Addtwonumber(3,"a")
// Addtwonumber(3,null)
const result=Addtwonumber(3,3)
console.log("Result:".result);
*/

//store value in result

/*function addnumber(a,b){
    let c=a+b
    return c

}
const d=addnumber(3,7)
console.log("Result:",d);*/

/*function loginmessage(username){
    if(username==undefined){
        console.log("Enter user name");
        return
    }
    return `${username} Justlogged in`

}
//loginmessage("shruti")
console.log("Print with console log: ",loginmessage("shruti"));
console.log("print with space:  ",loginmessage(""));
console.log("print with undefined: ",loginmessage());*/


//shoping cart in e-commerce website 
//rest oprator ... or sprade...
// function calculatecartprice(...num1){

//     return num1
// }
// console.log(calculatecartprice(200,400,500));

/* rest value
function calculatecartprice1(val1,val2,...num1){

    return num1
}
console.log(calculatecartprice1(200,400,500,2000));*/
//object 
const user={
    username:"shruti",
    id:101
}
function handleobject(anyobject){
    console.log(`UserName is ${anyobject.username} and there id is ${anyobject.id}`);
       
}
//pass object in function
console.log("pass object in function");
console.log(handleobject(user));

//another way to pass object in function
handleobject({
    username:"shruti",
    id:101
})


//array pass in the function
const myarray=[200,300,4005,460,466]
function returnsecondvalue(getarray)
{
    return getarray[1] 
}
console.log(returnsecondvalue(myarray));

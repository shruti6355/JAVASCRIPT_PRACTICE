//let var const

// let a=10
// const b=20
// var c=30

// //{}=scope 
// console.log(a);
// console.log(b);
// console.log(c);

//var c=300
/*let a=300
if(true){
    let a=10
    const b=20
   // var c=30
   console.log("block scope:",a);
   
}
console.log("Global scope",a);*/
//console.log(b);
//console.log(c);

//var use for given discount festiva


//clouser:inner function access the out side function 
//nested scope
/*function one()
{
    const username="shruti"
    function two()
    
    {
        const website="youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
    
}
one()*/
//scope 
/*if(true){
    const firstname="shruti"
    if(firstname==="shruti")
    {
        const surname=" Haldankar"
        console.log(firstname+surname);
        
    }
   // console.log(surname);
    
}
//console.log(firstname);*/

//use before declaration 
console.log(addone(5));

function addone(num){
    return num+1

}

//hoisting :you can't use before declaration function
//console.log(addtwo(5));
const addtwo=function(num){
    return num+2
}
addtwo(5)
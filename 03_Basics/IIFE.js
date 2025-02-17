//IMIDIATE INVOKE FUNCTION EXPRETION 

// function hello(){
//     console.log("Hello Shruti");
    
// }
// hello()
//removed global scope polution we use IIFE function 

//named iife
(function hello1(){
    console.log("Hello ");
    
})();//imidiate invoke function

//unnamed iife
((name)=>{
    console.log(`Haldankar${name}`);
    
})(" shruti")


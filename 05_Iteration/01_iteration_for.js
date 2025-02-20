
//for
// for (let i = 0; i <=10; i++)
// {
//     const element = i;
//     if(element==5)
//     {
//         //console.log("5 is number");
        
//     }
//     console.log(element);
    
// }

// for (let i = 0; i <=10; i++) {
//     console.log(`outerloop${i}`);
    
// for (let j = 0; j <=10; j++) {
//     //console.log(`innerloop${j}and innerloop${i}`);
//     console.log(i+'*'+j+'='+i*j);
    
    
    
// }   
// }


// let myArray=["shruti","shreyash","swati","shambhu"]
// for (let index = 0; index < myArray.length; index++) {
//     const element =  myArray[index];
//     console.log(element);
    
    
// }


//brek and continue

for (let index = 1; index < 20; index++) {
    if(index==5){
        console.log("Get five");
        break
        

    }
console.log(`value of i is${index}`);
    
}

for (let index = 1; index < 20; index++) {
    if(index==5){
        continue
        

    }
console.log(`value of i is${index}`);
    
}
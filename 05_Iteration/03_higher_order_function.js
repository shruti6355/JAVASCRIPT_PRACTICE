//High order array loop

// ["","",""]
// [{},{},{}]

// const arr=[1,2,3,4,5,"a","b","c","d","e"]
// for (const value of arr) {
//     console.log(value);
// }



// let welcome="Hello!!!!"
// for (const wel of welcome) {
//     console.log(wel);
    
    
// }

//maps:collection of key value pair not allowed duplicate value

console.log("collection of key value pair not allowed duplicate value");

const map=new Map()
map.set("IN","INDIA")
map.set("USA","United state of America")
map.set("FR","France")

// console.log(map);

console.log("Destucturing array");

for (const [key,value] of map) {
    console.log(key,':-',value);
    
    
}

//object is not iterate like this




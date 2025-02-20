const number=[1,2,3,4,5]

const total=number.reduce((acc,currval)=>{
    console.log(`accumlator:${acc} and current value:${currval} `);
    
    return acc+currval
},0)
console.log(total);


const mytotal=number.reduce((acc,cur)=>{acc+cur,0})
console.log(mytotal);



const shopingcart=[
    {
        itemname:"js_course",
        price:999
    },
    {
        itemname:"Data Science",
        price:1999
    },
    {
        itemname:"Data Engineer",
        price:1299
    },
    {
        itemname:"Data Analyst",
        price:1809
    }
];

const pricetopay=shopingcart.reduce((acc ,item )=>acc+item.price,0)
console.log(pricetopay);

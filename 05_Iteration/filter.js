

// const mynumber=[1,2,3,4,5,6,7,8,9,10]

// const newnumber=mynumber.filter((num)=>num>4)
// console.log(newnumber);

// const newnumber1=mynumber.filter((num)=>{
//     return num>4
// })
// console.log(newnumber1);


const student=[
    {
        id:101,
        name:"shruti",
        cource:"msc",
        year:2003
    },
    {
        id:102,
        name:"shagun",
        cource:"msc",
        year:2005
    },
    {
        id:103,
        name:"vishakha",
        cource:"mba",
        year:2008
    },{
        id:104,
        name:"nidhi",
        cource:"msc",
        year:2013
    },{
        id:105,
        name:"nehal",
        cource:"mba",
        year:2018
    },{
        id:106,
        name:"janki",
        cource:"msc",
        year:2004
    },{
        id:107,
        name:"dipti",
        cource:"mba",
        year:2008
    },{
        id:107,
        name:"kinjal",
        cource:"mba",
        year:2003
    },
];

// let  collagestudent=student.filter((value)=>value.cource==='msc')
// console.log(collagestudent);

  collagestudent=student.filter((value)=>value.year>2007)
console.log(collagestudent);
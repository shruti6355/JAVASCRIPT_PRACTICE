//primitive 7:string symbol,null,undefine, boolen,number,Bigint

//refrance type-nonprimitive:
//Array,Objects,function

//javascript :Dynamic typed language

const run=100
console.log(typeof run);

const runvalue=100.3
console.log(typeof runvalue);


const isLogged=false
console.log(typeof isLogged);

const outSideTemp=null
console.log(typeof outSideTemp);


let useremail;
console.log(typeof useremail);


const id=Symbol('101')
const anotherId=Symbol('101')

console.log(id);
console.log(anotherId);

console.log(id===anotherId);


const BigNumber=1234567898754335654n
console.log(typeof BigNumber);


const Name=["shruti","shreyash","shagun","shreya"]
console.log(typeof Name);

let myobject = {
    name:"shruti",
    age : 22,

}
console.log(typeof myobject);

const myfunction =
function(){
    console.log("hello world");
    
}
console.log(typeof myfunction);


//memory

//Stack(primitivve ):Copy and Heap(non-primitive):refrance

let myHomename="Shajanand"
let anothername=myHomename
anothername="appartment"
console.log(anothername);
console.log(myHomename);


let user={
    email:"shruti17@gmail.coom",
    upi:"user@1234"
}

let user1=user

user1.email="shreyash@gmail.com"

console.log(user.email);
console.log(user1.email);

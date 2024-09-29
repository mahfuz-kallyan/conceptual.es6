// types of scope--->
// 1. global scope
// 2. block scope
// 3. functional scope


// global scope
const x = 5;
console.log(x);

if(true){
    console.log(x);
}

function show(){
    console.log(x);   
}
show()

// 1.Function Declaration
function sayHello(){
    console.log("Hello");
}
sayHello();

// 2.Local variables
function localVariable(){
    let x=10;
    console.log(x);
}
localVariable();
//console.log(x); //error

// 3.Outer variables
let outerVariable="Bikrant";

function sayHelloToOuterVariable(){
    console.log(`Hello ${outerVariable}!!`);
}
sayHelloToOuterVariable();

// 4.Parameters
function withParams(name,age,city="Delhi"){
    console.log(`Hello, I am ${name} and I am ${age} year old, born in ${city}`);
}
withParams("Radha",23,"Mumbai");

// 5.Default Values
withParams("Rima",20);

// 6.Returning a Value
function sum(a,b){
    return a+b;
}
console.log(sum(10,20));

// 7.Function ==Comments

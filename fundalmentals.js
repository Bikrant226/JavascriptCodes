// 1."use strict"  is located at the top and code works in modern way

// 2.Variables

let message="Hello";
let myName="Bikrant",friendName="Karan";

console.log(message+" "+friendName+", I am "+myName);

let $=10,_=20; //valid variables
console.log($*_);

const pi=3.14; //to declare a constant

// 3.Datatype
/*
7 primitive datatypes
    -number
    -bigint
    -string
    -boolean
    -null
    -undefined
    -symbol
1 non-primitive datatype
    -object
*/

let hi="Karan";
console.log(hi);

console.log(1/0); //Infinity

let isActive=true; //Boolean value
let age=null; //Represents nothing,empty,unknown

console.log(typeof(null));
console.log(typeof(0));


// 4.Type Conversions
let hasLeft=true;
console.log(typeof(hasLeft)); //boolean

hasLeft=String(hasLeft);
console.log(typeof(hasLeft)); //strong



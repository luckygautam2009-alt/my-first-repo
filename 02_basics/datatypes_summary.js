// # primitive datatypes call by value//

// 7 types : string,Number,Boolean,null,undefined,symbol,bigInt

const score = 100;
const isloogedin = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const Id= Symbol('123');
console.log(id===Id);




// # refrence datatypes(Non primitive)
// javascript is a dynamically typed language

const bigNumber = 1234567890987654321n
console.log(bigNumber);

// if we use a "n" at the end of a number the no. will be become bigint.

// Array,Objects,Functions

const heros = ["shaktiamn","oggy","cockroaches"]
let myobj = {
    name: "yash",
    age: 18,
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof Id);

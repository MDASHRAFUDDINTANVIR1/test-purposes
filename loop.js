
const prompt = require('prompt-sync')();


// For Loop 
let sum = 0;

let n = prompt("Enter a number to find the SUM : ");
n = Number.parseInt(n);

for (let i = 0; i<=n; i++){
    sum += i;

}

console.log("The SUM of 1 to "+ n + " is "+ sum)


// For In Loop 

let student = {
    Ashraf : 88,
    Tanvir : 87,
    Shazid : 74, 
    Shakib : 92,
    Tamim  : 59
}

for (nam in student){
    console.log('Student name is '+ nam)
}


// For of Loop 

let fruits = ["mango", "apple", "banana"];

for (fruit of fruits){
    console.log(fruit)
}

console.log("-------------")
console.log("-------------")

// for of loop 2 

let name = prompt('Enter Your Name : ');

for (n of name){
    console.log(n)
}

console.log("---------------")
console.log("---------------")

// while loop example 

let num = prompt("Enter a Number : ");
num = Number.parseInt(num);

let i =0 ;

while (i <= num){
    console.log(i);
    i++;
}


// Do while Loop Example 

let b = prompt("Enter a Real Number : ")
b = Number.parseInt(b)

let j = 0;
do{
    console.log(j);
    j++;
}while(j<=b);
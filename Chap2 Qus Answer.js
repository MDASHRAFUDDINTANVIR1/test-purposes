
// Qus 1 
const prompt = require('prompt-sync')();

let age = prompt("Enter Your Age : ");
age = Number.parseInt(age);

if (age<=10){
    console.log("Age is less than or equal 10");
}
else if (age >10 && age <20){
    console.log("Perfect! Age is between 10 to 20");
}
else {
    console.log("Age is greater than 20");
}

console.log("--------------")
console.log("--------------")

// Qus 2 
salary = prompt("Enter your Salary :");
salary = Number.parseInt(salary);

switch(true){
    case salary >= 20000 && salary <= 40000:
        console.log("Congratulations❤️! You are eligible for Silver Membership");
        break;
    case salary > 40000 && salary <= 60000:
        console.log("Congratulations❤️! You are eligible for Gold Membership");
        break;
    case salary >60000:
        console.log("Congratulations❤️! You are eligible for Platinum Membership");
        break;
    default:
        console.log("Sorry! Please Contact Our Information Center");
}


console.log("--------------")
console.log("--------------")

// Qus no 3 

let num = prompt("Enter a Number : ");
num = Number.parseInt(num);

if (num%2 == 0 && num%3 == 0){
    console.log("Your Number " + num + " is divisible by 2 and 3");
}

else {
    console.log("Enter another Number to see the magic")
}

console.log("-------------------")
console.log("-------------------")


// Qus No 4

let num2 = prompt("Enter a Number : ");
num2 = Number.parseInt(num2);

if (num2%2 == 0 || num2%3 == 0){
    console.log("Your Number " + num2 + " is divisible by 2 or 3");
}

else {
    console.log("Enter another Number to see the magic")
}

console.log("-------------------")
console.log("-------------------")

// Qus No 5 

let drive = prompt("Enter Your Age :");
drive = Number.parseInt(drive);

let result = (drive >= 18) ? 'You can Drive' : 'You cannot drive';

console.log(result)
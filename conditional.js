// const readline = require('readline-sync');

// let day = readline.question("Enter a Day ");
// switch (day) {
//   case "Monday":
//     console.log("Start of the week");
//     break;
//   case "Friday":
//     console.log("Almost weekend!");
//     break;
//   default:
//     console.log("Just another day");
// }

const prompt =require("prompt-sync")();

let a = prompt("Hey whats your age  : ");
a = Number.parseInt(a);

if(a<0){
  console.log("This is an invalid age");
}                                                                                         
else if(a>0 && a<=17) {
  console.log("You are not allowed to vote");
}
  
else if(a>18 && a<=50) {
  console.log("You are allowed to vote in Senior Category");
}
else if(a>50 && a<=100){
  console.log("You are allowed to vote in Top Most Senior Category");
}
  
else {
  console.log("This is an invalid age");
}


// Switch Practice 
// Switch Practice 

let day = prompt("Enter a number 1 to 7 : ");
day = Number.parseInt(day);

switch(day) {
  case 1:
    console.log("Today is Saturday")
    break;
  case 2:
    console.log("Today is Sunday")
    break;
  case 3:
    console.log("Today is Monday");
    break;
  case 4:
    console.log("Today is Tuesday");
    break;
  case 5:
    console.log('Today is Wednesday');
    break;
  case 6:
    console.log("Today is Thursday");
    break;
  case 7:
    console.log("Wow! Today is Friday");
    break;
  default:
    console.log("Enter a valid Number within 1 to 7")

}
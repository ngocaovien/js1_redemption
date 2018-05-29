// // // create a program that...
// let firstName = prompt("What's your name?", "Vinny V");
// console.log(firstName);
// let lastName = prompt("what's your last name", "Baal");
// alert("Your last name is " + lastName);
//
// // //homework for day 2 was made ambiguous on purpose due to real life ideas
//
// let birthday = prompt("What's your birthday?", "May 21, 1980");
//
// //give example to help reduce user error
//
// confirm("Is " + birthday + " your birthday?");
// confirm(`Is ${birthday} your birthday?`); //ES6 string interpelation
//
// // //use CONST or LET unless that variable is GLOBAL, then use var.
// // //let and const is more protected. const should never be changed.
//
//
// var myName = "Ryeker";
//
//  alert('Hello, ' + myName + '!'); //ES5
//
//  alert(`Hello, ${myName}!`); //ES6
//
// // ES6 is to do

//logical operators

const name = null;
const age = 32;

console.log(name && age);

// if(!name && age){
//   alert('one exist');
// }
//once js found one variable that is true, it will skip over the second one.

const numAge = 32;
const stringAge = '32';

// if(anotherAge !== stringAge) {
  // alert("they're the same!");
  //}

let objectOne ={
  name: "vien"
};

let objectTwo ={
  name: "vien"
};

// alert(objectOne == objectTwo); //returns false. ALWAYS FALSE!!!

//two ways to save variable. one is pointer and one is reference.
//js save everything by reference, except for object. object are stored in a different place in memory
//two objects will never equal to each other.
//js only does pointer/store in memory with OBJECTS. DATA type objects, not object, like DOM stuff.
//preset yes, but objects, objects that are not preset, will not work.

// if(numAge <= stringAge.length) { //js converts stringAge into an object and then gives you a length and give it back.
//   alert("hi");
// }
//length counts spaces too.

// var myString = "primitive";
// var objString = new String("primitive");
//
// if (myString == objString) {
//   alert("they are loosely equal");
// }
// if (myString !== objString);{
//   alert("they are not strictly equal");
// }
// var loose = (myString == objString);
// var strict = (myString === objString);
//
// console.log(loose);
// console.log(strict);
//
// let limit = 12;
// console.log(limit);
// limit += 7; // same as limit + 7; possible use in the final project.
// console.log(limit);

//NaN example

let myNumber = "cheese";

console.log(myNumber++);

//how do you check if the value is not a number? isNaN() --> function built in to do that.

isNaN("cheese") //this statement is true. cheese is not a number.
isNaN("21") //this will be false, because 21 is a number.

//!isNaN(myNumber)---"i'm checking is myNumber is NOT a number"

let userNumber = parseInt(prompt("give me a number", "10")); //or put it in from the beginning.
let userNumber2 = parseInt(prompt("give me another number", "10"));

// userNumber = parseInt(userNumber);  --redefeine
// userNumber2 = parseInt(userNumber2);

let totalNumber = userNumber + userNumber2; //or alert (numOne + numbTwo)

alert(`The total sum of your number is ${totalNumber}.`);

//Three ways to do CONTROL FLOW: if else statments,

if(userNumber > userNumber2){ //--> if the things is parenthese is true
  alert('The first number is larger'); //do this
} else if (userNumber === userNumber2) { //if that first thing is not true, do the next block of code.
  alert('They are the same!');
} else if (userNumber < userNumber2){
  alert("The second number is larger");
} else { //if none of the above is true, do the next block.
  alert("Something is wrong");
}

//if we wanted to check two conditions use the &&

//SECOND way to control flow is SWITCH statements; like if else but cleaner.

let firstName = prompt("What is your first name?", "Tom");
//DRY coding= DON'T REPEAT YOURSELF

switch(firstName.toLowerCase()) { //switch and add the varible we checking/ add toLowerCase, force it to be lowerCase so we can compare with our code.
  case 'tom': //same as if firstName === Tom, USE A REGULAR COLON; checks for loose equals.
    alert("Hi Tom!"); //do something
    break; //switch needs a BREAK statement to end it.
  case "john":
    alert("your name is very common.");
    break;
  case "bob": //this is how to do && with switch statements, just add the case on the next line.
  case "davy":
  case "king":
    alert("boo");
    break;
  default: //same as ELSE in if else {
    alert("I've never heard that name before.");
    break;
  }

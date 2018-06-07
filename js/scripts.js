//day four takehome
var todoArray =[]; //declaring the array the todo array

//collecting information for the todo array
// let todo1 = prompt("What is the first thing you need to do this weeked?", "sleep");
// let todo2 = prompt("What is the second thing you need to do this weeked?", "Eat");
// let todo3 = prompt("What is the third thing you need to do this weeked?", "Do Js1 homework, kidding, play some PS4");
//
// //pushing the variables collected into the todo array
// todoArray.push([todo1], [todo2], [todo3]);
//
// //creating a for loop to add an additional value to the items in the array.
//
// for (let i = 0; i < 2; i++) {
//   let todoDate = [["Friday"], ["Saturday"], ["Sunday"]];
//   todoArray[i].push(todoDate[i]);
// }
//
// //using while loop to find the task that will take the longest
// let longestTask = prompt("Which task will take the longest", "todo1");
//
// let i = 0
// while ( i <= 2 ) {
//   if (todoArray.indexOf(i, 0) === "sleep") {
//     console.log(todoArray[i]);
//     i++;
//   }
// }

//ryeker stuff on how to do the take home for day 4
/* when we read this take home, think of how we can do each step of each step.
When you go about doing the takehome, break them up and see what is needed. */

//we actually needed a metric for the duration of the task that we needed to do.


let todos = [];

let todo1 = [prompt("what do you want to do first", "Eat")]; //grab the info as an array because it's easier to add to them.
let todo2 = [prompt("what do you want to do second", "Eat")];
let todo3 = [prompt("what do you want to do third", "Eat")];

todos.push(todo1, todo2, todo3);

//how many days, you ask them, start in the weekend, doesn't need to be done in

for(let i = 0; i < todos.length; i++){

  let timeLine = prompt(`How many days will it take to get ${todos[i][0]} done?`, "2"); //the [i][0] is needed to go into the todos arr and then the arr of the first arr

  timeLine = !isNaN(parseInt(timeLine)) ? parseInt(timeLine) : 2;  //prompt will give a string, hence, the first part is to make sure the string turns into a number, if they screw up, we will default to two. ternary.

  todos[i].unshift(timeLine); //unshift will add it to the beginning. (whereas push add it to the end.) he put the number in the front because now he can sort it.
}

todos.sort(); //this will sort based on the timeLine variable we just added. depending on the array, it will sort only the strings if that's all that in it, or in our case, with multiple arrays, the first index of each array.

//below is the how to do the sort with while loop
let longest = todos[0];
let j = 0; //control statement for the while loop. using j as variable be i was already used.
while(j < todos.length) { //limit statement
  if(todos[j][0] > longest[0]) longest = todos[j]
  //valid inline if statement
  // longest = todos[j[0] > longest[0] ? longest = todos[j] : longest =longest; //ternary version
  j++; //incrementor
}

console.log(longest);

longest.push('this');//marker to add to the array for the longest, the one that we don't want to add "done" to.

let z = 0;
do{
  if (todos[z] [todos[z].length - 1] !== "this") { //if the todos arr does not have "this" do the next line.
    todos[z].push("done");
  }
  z++;
} while (z < todos.length);

let doneItems = [];

todos.forEach(todo =>{
  if(todo[todo.length-1] === "done")
  doneItems.push(todo);
  }
);

alert(doneItems)

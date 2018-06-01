// // day3 take home review
//
// // let favColor = prompt('give me your fav color', "..")
// //
// // switch(favColor.toLowerCase()) { //to.LowerCase is to normalize the data
// //   case 'blue':
// //     alert(`${favColor} is my color too!`);
// //     break;
// //   default:
// //     alert("Please pick a correct color.");
// //     break;
// // }
// //END OF DAY 3 REVIew
//
// //Brandi Ternaries: best to use for 2 values; true or false.
//
// let inside = true;
//
// // if (inside) {
// //   console.log("i am inside")
// // } else {
// //   console.log("i am not inside.")
// // }
//
// //condition ? expression1 : expression2
// //condition end condition, if true run expression 1, if false run expression2
//
// // let example2 = inside ? "I am inside" : "I am not inside"
// // console.log(example2); //expect output to be "i am inside"
// //
// // let number = 10;
// //
// // console.log((number > 20) ? "number is greater than 20" : "number is less than 20") //expect output to be number is less than 20.
//
//
// // let num = 15;
// // num > 10 ? console.log("number is greater than 10.") :console.log("number is less than 10.");
//
// // let name = false;
// // let email = false;
//
// // if(name){
// //   console.log("i have name")
// // }
// // else if(email) {
// //   console.log("i have email.")
// // }
// // else{
// //   console.log("i have neither")
// // }
//
// // name ? console.log("i have name") : email ? console.log("i have email."): console.log("i have neither.");
// //
// //
// // let iAmHungry = true;
// // let money = 5;
//
// // if(iAmHungry) {
// //   if(money > 10){
// //     console.log("i am hungry and i have more than 10")
// //   }
// //   else{
// //     if (money > 10){
// //     console.log("i am hungry and i have less than 10")
// //   } else {
// //     if (money > 10){
// //       console.log("i am hungry and i have more than 10")
// //     }
// //   }
//
// // let hungry =  iAmHungry ? (money > 10) ? "i am hungry and i ahve more than 10" : "i am hungry and i have less than 10.";
// //               (money > 10) ? "i am not hungry and i have more than 10" : "i am not hungry and i have less than 10.";
// // console.log(hungry);
//
// ////////
//
// //ARRAYS! are extremely useful for storing data.
//
// []; //most basic form of an ARRAYS
//
// //because arrays are objects, they give you access to different type of properties.
// //first item in an array start at the index of zero.
// // to access the index of an array, use [] and enter the index  you're looking for.
//
// // let arr = ["javascript", 100, {}, [], true];//you can any data type inside of an array.
// //
// // console.log(arr.[6]); //if we try to access an array that doesn't exist, if gives us "undefined"
// //
//
// let myArr = ["Molly's Game", 7, true, 2000];
// console.log(myArr, myArr.length);
//
// let favNum = myArr[1];
// console.log(favNum);
//
// console.log(Array.isArray(myArr)); //will return a boolean :true or false.--> keyword is "IS" in the method.
//
// // PUSH: a way to add data to an array. example below
//
// myArr.push("Pizza"); //method is preceded by a period and follow by a parentheses. Push adds to the end of the array.
// console.log(myArr);
// //use functions to control what can be added to an array.
//
// //what if you want to add to the beginning of the array. USE .unshift
//
// myArr.unshift("Pizza");
// console.log(myArr);
//
// let lastItem = myArr.length - 1;
// console.log(myArr[lastItem]);
//
// let secondLast = myArr.length - 2;
// console.log(myArr[secondLast]);
//
// //we need to know how long the array is, the reference of the array, from the total number of the array
//
// console.log(myArr[myArr.length - 1]); // one line, put it in.
//
// //POP to take it off from the end of the array.
//
// myArr.pop();//no need to add anything into the parentheses, it will automatically take away the last item/last index.
// console.log(myArr);
//
// //how to capture the item that was "pop" below:
//
// const removed = myArr.pop();
// console.log(removed);
//
// //.shift removes the first member of the array. and they let us store the item removed into a variable.
//
// let arr = [1,2,3];
// let arr2 = [4,5,6];
//
// arr.push(arr2.pop());
// console.log(arr);
// //pop and push works to add and remove from one array to another array.
//
// // SPLICE remove elements and adds the element.   Splice has many methods. square brackets in MDN is optional.
//
// // let myArr2 = ["Molly's Game", 7, true, 2000]; //starts with 4
// // console.log(myArr2);
// // myArr2.splice(2); //starts from that index and deletes the rest of the array.
// // console.log(myArr2); //output will be only 2
//
// //delete count let us pick how many to delete.
//
// // myArr2.splice(2,1); //first argument is index (2) and the second is the number of items to delete (1).
// // console.log(myArr2);
//
// // let myArr2 = ["Molly's Game", 7, true, 2000]; //starts with 4
// console.log(myArr2);
//
// myArr2.splice(2, 1, false, "Rocky", true, "happy");// splice, then index to start and remove, how many to remove, and add the new item)
// console.log(myArr2);
//
//
// //splice can also keep the items being removed.
//
// let removedItems = myArr2.splice(2, 2, "It worked");
// console.log(myArr2);
// console.log(removedItems);
//
// let copyArr = myArr2.slice(1, 1);
// console.log(copyArr);
//
// //indexof gives you an index of that array.
//
// console.log(myArr);
// console.log(myArr.indexOf("Molly's Game")); //indexOf will only give you the first encounter, not all of it.
//
// //last index of will do the same as indexoff but give you the last index. but it searches from the end, not the beginning.
//
// console.log(myArr.reverse());
// console.log(myArr.sort());
//
//
// const products =[ ["blanket, 12.99, "warm"], ["rattle" 4.99, "it rattles"], ["diapers" 12.99 "for doo doo"] ];


let favMov1 =["Star Wars", "Luke"];
let favMov2 =["Hero", "Broken Sword"];
let favMov3 =["2046", "Wo Man"];
let favMov4 =["Tampopo", "Gangster"];
let favMov5 =["Journey to the West", "Monkey"];

let favoriteMovies =[];
favoriteMovies.push(favMov1,favMov2, favMov3, favMov4, favMov5);
copyOfFavorites.slice(favoriteMovies); //making a copy of the original array, so i can still have a copy)

let titles= [];
titles.push(favoriteMovies[0][0], favoriteMovies [1][0], favoriteMovies[2][0], favoriteMovies[3][0], favoriteMovies[4][0]);

let favAndLeast = favoriteMovies.splice(2,2); //using splice to get the favorite and least favorite movies. Storing them in favAndLeast variable.
alert(favAndLeast);


// let leastFav = [favMov5, favMov3];
// let mostFav = [ favMov1, favMov2, favMov3];
let favMovLength =favoriteMovies.length; //the favorite movie length is now only 3 as opposed to 5 earlier
alert(`The length of the favoriteMovies array is ${favMovLength}`);

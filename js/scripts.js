//below are my favorite movies in their individual array.
let favMov1 =["Star Wars", "Luke"];
let favMov2 =["Hero", "Broken Sword"];
let favMov3 =["2046", "Wo Man"];
let favMov4 =["Tampopo", "Gangster"];
let favMov5 =["Journey to the West", "Monkey"];
//declaring favoriteMovies to be all of my favorite movies.
let favoriteMovies = [];
favoriteMovies.push(favMov1,favMov2, favMov3, favMov4, favMov5);
console.log(favoriteMovies); //logging my favoriteMovies

//creating a copy of the favoriteMovies array in case there is a need for the original array.
copyOfFavorites = [];
copyOfFavorites.slice(favoriteMovies); //making a copy of the original array, so i can still have a copy)

//blow is the array just for the titles.
let titles= [];
titles.push(favoriteMovies[0][0], favoriteMovies [1][0], favoriteMovies[2][0], favoriteMovies[3][0], favoriteMovies[4][0]);
alert(titles);

//using splice to create an array of just my favorite and least favorite movies.
let favAndLeast = favoriteMovies.splice(2,2); //using splice to get the favorite and least favorite movies. Storing them in favAndLeast variable.
console.log(favAndLeast); // console logging my favorite and least favorite film.

let favMovLength =favoriteMovies.length; //the favorite movie length is now only 3 as opposed to 5 earlier
alert(`The length of the favoriteMovies array is ${favMovLength}`); //alerting the length of the favorite movie.

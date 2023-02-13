/*eslint-env browser*/

//Practice with Arrays

//1: Create a string array that contains your five favorite movies.
// Then, use the console to display the second movie in your array.

window.console.log("\n");
window.console.log("1) Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.");

var my_movies = ["Interstellar", "The Shawshank Redemption", "Forrest Gump", "Seven", "Titanic"];
window.console.log("Answer");
window.console.log("The second movie in array: ", my_movies[1]);
window.console.log("\n");

//2. Declare an array called movies using the function constructor method.
//Add the length of 5 into the constructor.
//Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array.
//Then, use the console to display the first movie in your array.

window.console.log("2) Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.");

var movies = new Array(5);
movies[0]="Interstellar";
movies[1]="The Shawshank Redemption";
movies[2]="Forrest Gump";
movies[3]="Seven";
movies[4]="Titanic";
window.console.log("Answer");
window.console.log("The first movie in array: ", movies[0]);
window.console.log("\n");

//3. Copy your code from step 2. Add a new movie into the 3rd position within your array.
//Then, use the console to display the length of the array.
//You should now have 6 total movies stored in the array.

window.console.log("3) Copy your code from step 2. Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.");

movies.splice(2, 0, "Shutter Island");
window.console.log("Answer");
window.console.log("The length of the array: ", movies.length);

//4. Declare an array called movies using literal notation.
//Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array.
//Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

window.console.log("\n");
window.console.log("4) Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.");

var new_movies = [];
new_movies[0]="Minions";
new_movies[1]="Joker";
new_movies[2]="Jurassic World";
new_movies[3]="The Godfather";
new_movies[4]="The Dark Knight";

window.console.log("Answer");
// delete new_movies[0];
new_movies.splice(0,1);
window.console.log("Contents of the array: ", new_movies);

//5. Declare an array called movies using literal notation.
//Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array.
//Now, use a for/in loop to iterate through the array and display each movie within the console window.

window.console.log("\n");
window.console.log("5) Declare an array called movies using literal notation. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for/in loop to iterate through the array and display each movie within the console window. ");

var movies_ = [];
movies_[0]="Interstellar";
movies_[1]="The Shawshank Redemption";
movies_[2]="Joker";
movies_[3]="Minions";
movies_[4]="The Godfather";
movies_[5]="The Dark Knight";
movies_[6]="Shutter Island";

window.console.log("Answer");

for (var i in movies_) {
  window.console.log(movies_[i]);
}

//6. Copy the code from step 5.
//Now, use a for/of loop to iterate through the array and display each movie within the console window.

window.console.log("\n");
window.console.log("6) Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.");
for(var i of movies_) {
  "use strict";
  window.console.log(i);
}

//7. Copy the code from step 5.
//Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.

window.console.log("\n");
window.console.log("7) Copy the code from step 5. Using the for/of loop to iterate through the array, display each movie within the console window in a sorted view.");
movies_.sort();
window.console.log("Answer");
for(var i of movies_) {
  "use strict";
  window.console.log(i);
}

//8. Copy the code from step 5.
//Under the existing array, create a new array called leastFavMovies.
//Populate the array with the 3 movies that you regret watching.
//Display both arrays within the console window ...

window.console.log("\n");
window.console.log("8) Copy the code from step 5. Under the existing array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):");

var leastFavMovies = ["Inception", "Parasite", "Toy Story "];
window.console.log("Answer");

window.console.log("Movies I like:");

for(var i of movies_) {
  "use strict";
  window.console.log(i);
}

window.console.log("\n");
window.console.log("Movies I regret watching:");

for(var i of leastFavMovies) {
  "use strict";
  window.console.log(i);
}

//9. Copy the code from step 8. Now, use the concat() method to merge the
//two arrays together into a single array called movies.
//Use the console window to display the list in reverse sorted

window.console.log("\n");
window.console.log("9) Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted");

var moviess = movies_.concat(leastFavMovies);

moviess.sort().reverse();

window.console.log("Answer");

for(var i in moviess) {
  "use strict";
  window.console.log(moviess[i]);
}



//10. Copy the code from step 9.
// Use an array function to return just the last item in the array and display it within the console window.

window.console.log("\n");
window.console.log("10) Copy the code from step 9. Use an array function to return just the last item in the array and display it within the console window.");
var last_item = moviess.slice(-1)[0];
window.console.log("Answer");
window.console.log(last_item);



//11. Copy the code from step 10.
//Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.

window.console.log("\n");
window.console.log("11) Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array and display it within the console window.");
window.console.log("Answer");
window.console.log(moviess.shift());



//12. Programmatically retrieve the movies in your array that you do not like and return their indices.
//Then, using those indices, programmatically add movies that you do like.

window.console.log("\n");
window.console.log("12) Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like.");

var leastFavMoviesindices = [];

moviess.forEach((movie, index) => {
  if (leastFavMovies.includes(movie)) {
    leastFavMoviesindices.push(index); }
});

var movies_i_like = ["Harry Porter","3 Idiots","Up"]

leastFavMoviesindices.forEach((index) => {
    moviess[index] = movies_i_like.shift();
});

window.console.log("Answer");

for (var i = 0; i < moviess.length; i++) {
    "use strict";
    window.console.log(moviess[i]);
}
window.console.log("\n");


//13. Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5.
//The array should look something like this:
// movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
// Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.


window.console.log("\n");
window.console.log("13) Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5...");

var _movies_ = [["Die Hard", 1], ["Fargo", 2], ["Harry Potter", 3], ["Pirates of the Caribbean", 4], ["The Lion King", 5]];

var onlymovieNames = _movies_.filter(function(movie) {
  return typeof movie[0] === "string";
});
window.console.log("Answer");
window.console.log(onlymovieNames.map(movie => movie[0]));


//14. Create a string array called employees using literal notation and populate the array with several employee names.
//Then, create an anonymous function called showEmployee. The function should accept a parameter.
//Call this function, passing in the employees array into the function as a parameter.
//Make sure to display the result in the console window. Within the function,
//loop through the passed in array and display the result so that it looks exactly like this in the console window:

//Employees:

//ZAK
//JESSICA
//MARK
//FRED
//SALLY

window.console.log("\n");
window.console.log("14) Create a string array called employees using literal notation and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window...");

var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

var showEmployee = function(employees) {
  window.console.log("Employees: ");
  window.console.log("\n");
  employees.forEach(function(employee) {
    window.console.log(employee);
  });
};
window.console.log("Answer");
showEmployee(employees);



//15. Write a JavaScript function to filter false, null, 0 and blank values from an array.
//Test Data: console.log(filterValues([58, '', 'abcd', true, null, false, 0]));
//Expected Result: [58, "abcd", true]

window.console.log("\n");
window.console.log("15) Write a JavaScript function to filter false, null, 0 and blank values from an array.");

var filterValues = function(values){
    return values.filter(function(v) {
  return v !== false && v !== null && v !== 0  && v !== "";
});
};
window.console.log("Answer");
window.console.log(filterValues([58, '', 'abcd', true, null, false, 0]));




//16. Write a JavaScript function to get a random item from an array.
//So if I create a numeric array with 10 numbers and then pass that array into my function,
//the function should randomly return one of those numbers.

window.console.log("\n");
window.console.log("16. Write a JavaScript function to get a random item from an array. So if I create a numeric array with 10 numbers and then pass that array into my function, the function should randomly return one of those numbers.");

var randomItem = function(a) {
  return a[Math.floor(Math.random() * a.length)];
};

var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
window.console.log("Answer");
window.console.log(randomItem(numbers));



//17. Write a JavaScript function to get the largest number from a numeric array.

window.console.log("\n");
window.console.log("17) Write a JavaScript function to get the largest number from a numeric array.");

var largestNumber = function(a){
    return Math.max(...a);
}

var num_array = [12, 67, 29, 999, 10, 250, 1, 572, 83];
window.console.log("Answer");
window.console.log(largestNumber(num_array));


//Samruddhi Somwanshi
//Red ID: 828286661
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

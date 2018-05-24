var firstName = prompt("What is your first name?" , "Very");
var lastName = prompt("What is your last name?" , "Hungry");
var birthday = new Date(prompt("What is your birthday?", "1/1/1900"))

console.log("Your first name is " + firstName);
alert("Your last name is " + lastName);

var userAnswer = confirm("Is " + birthday +" your birthday?");

if (userAnswer = true) {
  alert("Happy Birthday to you when " + birthday + " comes around!!");
} else {
  alert("Sorry wrong birthday.");
};


//extra codes to put the variable acquired onto the webpage

function loadYourName() {
    document.getElementById("yourName").innerHTML = firstName + " " + lastName;
}

function loadYourBirthday() {
    document.getElementById("yourBirthday").innerHTML = birthday;
}

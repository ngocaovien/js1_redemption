let body = document.getElementsByTagName('body'); //the plural will return an Array, single (element) will return one
console.log(body[0]);// use the index of body to grab th body only. older method

let classes = document.getElementsByClassName('my-header'); //grabs every class with my-header and remove that class from all of them.
console.log(classes[0]);

let id = document.getElementById("my-paragraph"); //ID should never be used for styling, used only fo Javascript.
console.log(id);

//NEWER METHODS

let tag = document.querySelector('body') //querySelector will only return on element. only give back the first one if multiple.
console.log(tag);

let myClass = document.querySelector('.my-header'); //will only give you back the first class of my-header
console.log(myClass);

let myId =document.querySelector('#my-paragraph');
console.log(myId);

// let body = document.getElementsByTagName('body'); //the plural will return an Array, single (element) will return one
// console.log(body[0]);// use the index of body to grab th body only. older method
//
// let classes = document.getElementsByClassName('my-header'); //grabs every class with my-header and remove that class from all of them.
// console.log(classes[0]);
//
// let id = document.getElementById("my-paragraph"); //ID should never be used for styling, used only fo Javascript.
// console.log(id);
//
// //NEWER METHODS are below.
//
// let tag = document.querySelector('body') //querySelector will only return on element. only give back the first one if multiple.
// console.log(tag);
//
// let myClass = document.querySelector('.my-header'); //will only give you back the first class of my-header
// console.log(myClass);
//
// let myId =document.querySelector('#my-paragraph');
// console.log(myId);
//
// let tags = querySelectorAll('body'); //will always return an ARRAY with all of the tag involved. use period of class and # for ID.

function queryDom(methodName, element){
  switch (methodName.tolowercase()) {
    case "getElementsByTagName":
      console.log(document.getElementsByTagName(element));
      break;
    case "getElementById":
        console.log(document.getElementById(element));
        break;
    case "getElementsByClassName":
          console.log(document.getElementsByClassName(element));
          break;
    case "querySelector":
            console.log(document.querySelector(element));
            break;
    case "querySelectorAll":
              console.log(document.querySelectorAll(element));
              break;
    default:
    break;
  }
}

let answer = queryDom(getElementsByTagName, body);


//ryeker version

function queryDom(methodName, element){
  switch(methodName.tolowercase()){
    case 'getelementsbytagname':
      document.getElementsByTagName(element);
      break;
    case 'queryselector':
      document.querySelector(`.${element}`) //need a way to determine if it's a class or ID, add a second method or add anothe argument.
  }
}


myClass.addEventListener(
  'click', //string that is a valid event.
  e => { //and takes a function, that is a call back function.
    alert("hi");
})

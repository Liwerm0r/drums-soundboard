//
// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked!");
//
//   // What to do when click detected.
// });

// bind eventlistener with all buttons
// document.querySelectorAll("button").forEach(button => {
//   button.addEventListener("click", function () {
//     alert("I got clicked");
//   })
// });


// document.querySelectorAll(".drum").forEach( function(button) {
//   button.addEventListener("click", function () {
//     alert("I got clicked");
//   });
// });


// var buttons = document.querySelectorAll("button");
// for (var i = 0; i < buttons.length; i++) {
//   button = buttons[i];
//   button.addEventListener("click", function () {
//     alert("I got clicked!");
//   });
// }

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}

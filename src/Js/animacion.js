window.onscroll = function() {
  myFunction();
};

// Get the header

var header = document.getElementById("myHeader");
var left = document.getElementById("left");
var rigth = document.getElementById("right");

// Get the offset position of the navbar
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header2");
  } else {
    header.classList.remove("header2");
  }
}

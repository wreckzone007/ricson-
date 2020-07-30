window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
     navbar.style.backgroundColor="black"
    navbar.classList.add("sticky")
   
  } else {
    navbar.style.backgroundColor="transparent";
    navbar.classList.remove("sticky");
  }
}
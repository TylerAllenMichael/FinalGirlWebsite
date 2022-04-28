//Query for all elements with class indicator
var hamburger = document.querySelector('.hamburger');
//Adding event listener for activity
hamburger.addEventListener('click', function () {
  this.classList.toggle('isactive');
} );

// The date that the new movie will be released
var releaseDate = new Date("March 31, 2023").getTime();

// Is used to update every second
var x = setInterval(function() {

  // Is used to get the current time and date
  var now = new Date().getTime();

  // Time between now and the release date
  var timeuntil = releaseDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(timeuntil / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeuntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeuntil % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeuntil % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.querySelector("#countdowntimer").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  // If the count down is finished, write some text
  if (timeuntil < 0) {
    clearInterval(x);
    document.querySelector("#countdowntimer").innerHTML = "Movie Time";
  }
}, 1000);

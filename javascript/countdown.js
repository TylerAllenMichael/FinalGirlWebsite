// The date that the new movie will be released
var releaseDate = new Date("March 31, 2023").getTime();

// To update time for every second
var x = setInterval(function() {

  // To pull up the current time and date
  var now = new Date().getTime();

  // This is the time until the movie is being released
  var timeuntil = releaseDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(timeuntil / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeuntil % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeuntil % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeuntil % (1000 * 60)) / 1000);

  // Show the countdown times in Days, Hours, Minutes, and Seconds
  document.querySelector("#countdowntimer").innerHTML = days + "D " + hours + "H "
  + minutes + "M " + seconds + "S ";

  // If the countdown timer is done, provide a description saying movie time
  if (timeuntil < 0) {
    clearInterval(x);
    document.querySelector("#countdowntimer").innerHTML = "Movie Time";
  }
}, 1000);

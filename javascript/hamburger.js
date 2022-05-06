//Query for all elements with class indicator
var hamburger = document.querySelector('.hamburger');
var mobilenav = document.querySelector('.mobile-nav');

// Adding event listener for activity
hamburger.addEventListener('click', function () {
  this.classList.toggle('isactive');

  mobilenav.classList.toggle('hide');
} );

//Query for all elements with class indicator
var hamburger = document.querySelector('.hamburger');
var form = document.querySelector('#contactform');
var thankyoumessage = document.querySelector('#thankyoumessage');

// Adding event listener for activity
form.addEventListener('submit', e => {
  e.preventDefault();
  thankyoumessage.classList.remove('hide');
  form.reset();
} );

// Adding event listener for activity
hamburger.addEventListener('click', function () {
  this.classList.toggle('isactive');
} );

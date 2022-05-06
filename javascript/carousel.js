// Carousel for images
var carousel = new Carousel({
  elem: 'carousel',    // id of the carousel container
  autoplay: true,      // starts the rotation automatically
  infinite: true,      // enables infinite mode
  interval: 2500,      // interval between slide changes
  initial: 0,          // slide to start with
  dots: false,         // hide navigation dots
  arrows: false,       // hide navigation arrows
  buttons: false,      // hide <play>/<stop> buttons,
  btnStopText: 'Pause' // <stop> button text
});

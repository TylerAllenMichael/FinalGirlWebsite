// If button is clicked modal is shownn
document.getElementById('modalbutton').addEventListener('click',
function(e) {
  e.preventDefault();
  document.querySelector('.bg-modal').classList.remove("hide");
});

// If modal "X" is clicked, the modal closes
document.querySelector('.close').addEventListener('click',
function() {
  document.querySelector('.bg-modal').classList.add("hide");
});

// Adding a click listener to all the buttons
var movieButtonElements = document.querySelectorAll(".moviebuttons");
movieButtonElements.forEach(addMovieButtonListener);

function addMovieButtonListener(movieButtonElement){
  movieButtonElement.addEventListener("click", movieButtonClick);
}

// Add a change listner so dropdown changes update the tabbed content
var movieDropdown = document.querySelector('.moviedropdown');
movieDropdown.addEventListener('change', movieDropdownChange);

var rulesnavigator = document.querySelector("#rulesnavigate");

// When the button is clicked show the rules from the movie and hide rest of rules
function movieButtonClick(event) {
    var clickedButton = event.currentTarget;

    // generate the class of the selected step's details element
    var ruleElementCssSelector = "#rtsscream-" + clickedButton.name;

    // Find HTML element within document
    var ruleElement = document.querySelector(ruleElementCssSelector);

    // remove selected step from all buttons
    movieButtonElements.forEach(updateClickedButtonState);

    // remove selected step from all details elements
    var ruleButtonElements = document.querySelectorAll(".rtsscream");
    ruleButtonElements.forEach(updateRulesDetails);

    // display the selected step and update the dropdown to keep them in sync
    ruleElement.classList.remove("hide");
    clickedButton.classList.add("currently-selected-button");
    movieDropdown.value = clickedButton.name;
    rulesnavigator.scrollIntoView();
}

// When the dropdown is changes show the rules from the movie and hide rest of the rules
function movieDropdownChange(event) {
    var dropdown = event.currentTarget;

    // generate the class of the selected step's details element
    var ruleElementCssSelector = "#rtsscream-" + dropdown.value;

    // Find HTML element within document
    var ruleElement = document.querySelector(ruleElementCssSelector);

    // Remove css from any previously selected button
    movieButtonElements.forEach(updateClickedButtonState);

    // Hide any previous rules to survive
    var ruleButtonElements = document.querySelectorAll(".rtsscream");
    ruleButtonElements.forEach(updateRulesDetails);

    // Add selected state css to the button corresponding to the dropdown selection to keep them in sync
    var clickedButton = document.querySelector('button[name="' +  dropdown.value +'"]');
    clickedButton.classList.add("currently-selected-button");

    // Show the selected movie's rules
    ruleElement.classList.remove("hide");
    rulesnavigator.scrollIntoView();
}

// Remove selected state css frm buttons
function updateClickedButtonState(ruleButtonElement) {
    ruleButtonElement.classList.remove("currently-selected-button");
}

// Hide the rules
function updateRulesDetails(ruleDetailElement) {
    ruleDetailElement.classList.add("hide");
}

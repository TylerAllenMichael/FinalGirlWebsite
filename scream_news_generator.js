// Setting the apikey
var apiKey = '8e99f87897ac4964b4c8c6328f0fb075';


function requestNews() {
    // Query for the movie news
    var query = 'SCREAM AND 6 AND MOVIE';

    // Using a proxy to bypass problem with CORS
    var proxyUrl = 'https://www.staff.city.ac.uk/~sbrm225/proxy.php?csurl=';
    // Setting more variables to get a more specific news for film
    var sortBy = 'relevancy';
    var pageSize = '6'
    var originalUrl = 'https://newsapi.org/v2/everything&q=' + query + '&apiKey=' + apiKey + '&searchIn=title,description&language=en' + '&pageSize=' + pageSize + '&sortBy=' + sortBy;
    var apiUrl = proxyUrl + originalUrl;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log('Data :', data);

            // once we have the new stories, update the page
            updateNews(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// update the news
function updateNews(data) {
    // remove current stories
    var newsElement = document.querySelector(".news");
    while (newsElement.firstChild) {
        newsElement.removeChild(newsElement.firstChild);
    }

    // add new stories
    data.articles.forEach(createNewsStory);
}

function createNewsStory(story) {
    // create a div element for each element
    var storyElement = document.createElement("div");
    storyElement.classList.add("story");

    // add link
    var storyLink = document.createElement("a");
    storyLink.classList.add("story-link");
    storyLink.href = story.url;
    storyElement.appendChild(storyLink);

    // add image
    var storyImg = document.createElement("img");
    storyImg.classList.add("story-img");
    storyImg.src = story.urlToImage;
    storyLink.appendChild(storyImg);

    // add the story title
    var storyTitle = document.createElement("p");
    storyTitle.classList.add("story-name");
    storyTitle.textContent = story.title;
    storyLink.appendChild(storyTitle);

    // add the story to the page
    var newsElement = document.querySelector(".news");
    newsElement.appendChild(storyElement);
}

// also update on page load
requestNews();

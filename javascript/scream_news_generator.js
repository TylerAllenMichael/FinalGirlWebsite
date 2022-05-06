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

    // Fetches data from API
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            console.log('Data :', data);

            // After news stories have been updated the page will show updates
            updateNews(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Updating the news articles and stories
function updateNews(data) {
    // Removes any existing stories
    //var newsElement = document.querySelector(".news");
    //while (newsElement.firstChild) {
    //    newsElement.removeChild(newsElement.firstChild);
    //}

    // Adding new stories to page
    data.articles.forEach(createNewsStory);
}

function createNewsStory(story) {
    // Making a div for each element/news article
    var storyElement = document.createElement("div");
    storyElement.classList.add("story");

    // Adding link
    var storyLink = document.createElement("a");
    storyLink.classList.add("story-link");
    storyLink.href = story.url;
    storyElement.appendChild(storyLink);

    // Adding image
    var storyImg = document.createElement("img");
    storyImg.classList.add("story-img");
    storyImg.src = story.urlToImage;
    storyLink.appendChild(storyImg);

    // Adding title of news article
    var storyTitle = document.createElement("p");
    storyTitle.classList.add("story-name");
    storyTitle.textContent = story.title;
    storyLink.appendChild(storyTitle);

    // Creating story within page
    var newsElement = document.querySelector(".news");
    newsElement.appendChild(storyElement);
}

// Update on page load
requestNews();

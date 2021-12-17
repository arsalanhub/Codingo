console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = 'e72b19c7be294bb5b471e3b80d921aca'

// Grab the news container
let DisplayNews = document.getElementById('DisplayNews');

// Create an ajax get request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="col-md-4">
                               <div class="card my-3" style="width: 18rem;">
                                  <img src=${element["urlToImage"]} class="card-img-top" alt="...">
                                  <div class="card-body">
                                    <h5 class="card-title">${element["title"]}</h5>
                                    <p class="card-text">${element["content"]}</p>
                                    <a href="${element['url']}" class="btn btn-primary">Go somewhere</a>
                                 </div>
                              </div>
                            </div>`;
            newsHtml += news;
        });
        DisplayNews.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()
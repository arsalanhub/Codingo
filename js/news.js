console.log("This is my index js file");

// Initialize the news api parameters
let source = "the-times-of-india";
let apiKey = "e72b19c7be294bb5b471e3b80d921aca";

// Grab the news container
let DisplayNews = document.getElementById("DisplayNews");

// Create an ajax get request
const xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`,
  true
);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(element, index)
      let news = `<div class="container my-2">
                    <div class="row">
                      <div class="col-md-6">
                         <img src=${element["urlToImage"]} class="card-img-top" alt="...">
                      </div>   
                      <div class="card col-md-6">
                         <h5 class="card-title">${element["title"]}</h5>
                         <p class="card-text">${element["content"]}</p>
                         <a href="${element['url']} target="_blank" class="btn btn-primary">Read More</a>
                     </div>
                   </div>
                  </div>`;
      newsHtml += news;
    });
    DisplayNews.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();

{
  /* <div class="card-body">
                                 </div> */
}


{/* <div class="card my-3" style="width: 18rem;"></div> */}


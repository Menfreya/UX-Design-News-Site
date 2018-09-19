//declared key variable separately becaused used multiple times
// weird `` due to ${}-syntax

const key = "16edfc863aab4e10ba4bd322441eb433"
const urlLatest = `https://newsapi.org/v2/everything?q=+(ux design)&pageSize=100&apiKey=${key}`
const urlTutorial = `https://newsapi.org/v2/everything?q=+(ux design)+(tutorials OR tips)&apiKey=${key}`
const urlResearch = `https://newsapi.org/v2/everything?q=+(ux design)+research&apiKey=${key}`




// declare variable and assign function that creates html inside empty div
// only works to create div if I use grave accent after innerHTML, string needs "" as usual
const latestNews = (newsdata) => {

    newsdata.articles.filter(article => article.urlToImage && article.urlToImage.includes("http"))
    .slice(0,3)
    .forEach((article) => {

        document.querySelector(".latestNews").innerHTML +=
        `<a href="${article.url}"><div class ="news" onmouseover="hooverNews(this)"
          onmouseout="hooverNews(this)"><h4>${article.title}</h4><img src="${article.urlToImage}"/><p>${article.description}</p></div></a>`
      })
   }




// ny variabel där andra fetch ska skicka in data
const tutorialNews = (newsdata) => {

       newsdata.articles.filter(article => article.urlToImage && article.urlToImage.includes("http"))
       .slice(0,3)
       .forEach((article) => {

           document.querySelector(".tutorialNews").innerHTML +=
           `<a href="${article.url}"><div class ="news" onmouseover="hooverNews(this)"
          onmouseout="hooverNews(this)"><h4>${article.title}</h4><img src="${article.urlToImage}"/><p>${article.description}</p></div></a>`
         })
      }



// ny variabel där tredje fetch ska skicka in data
      const researchNews = (newsdata) => {

             newsdata.articles.filter(article => article.urlToImage && article.urlToImage.includes("http"))
             .slice(0,3)
             .forEach((article) => {

                 document.querySelector(".researchNews").innerHTML +=
                 `<a href="${article.url}"><div class ="news" onmouseover="hooverNews(this)"
          onmouseout="hooverNews(this)"><h4>${article.title}</h4><img src="${article.urlToImage}"/><p>${article.description}</p></div></a>`
               })
            }




//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(urlLatest)
  .then(response => response.json())
  .then(latestNews)

fetch(urlTutorial)
  .then(response => response.json())
  .then(tutorialNews)

fetch(urlResearch)
  .then(response => response.json())
  .then(researchNews)





//hoover shadow
const hooverNews = (hooveredElement) => {
      hooveredElement.classList.toggle('hooveredNews')
  }






  // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

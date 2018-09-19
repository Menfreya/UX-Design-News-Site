//declared key variable separately becaused used multiple times
// weird `` due to ${}-syntax

const key = "16edfc863aab4e10ba4bd322441eb433"
const urlTutorial = `https://newsapi.org/v2/everything?q=+(ux design)+(tutorials OR tips)&apiKey=${key}`




// declare variable and assign function that creates html inside empty div
// only works to create div if I use grave accent after innerHTML, string needs "" as usual
const tutorialNews = (newsdata) => {

    newsdata.articles.filter(article => article.urlToImage && article.urlToImage.includes("http"))
    .forEach((article) => {

        document.querySelector(".tutorialNews").innerHTML +=
        `<div class ="news" onmouseover="hooverNews(this)"
       onmouseout="hooverNews(this)"><h4>${article.title}</h4><img src="${article.urlToImage}"/><p>${article.description}</p></div>`
      })
   }


 //hoover shadow
 const hooverNews = (hooveredElement) => {
        hooveredElement.classList.toggle('hooveredNews')
     }





 /* Show total results
const totalResults = () => {
        document.querySelector(".totalResults").innerHTML =
        `<p>${article.totalResults}</p>`
}


*/





//Fetch is a built in function in Javascript, it gets the data from the API and tranforms it into Javascript objects – JSON data.
fetch(urlTutorial)
  .then(response => response.json())
  .then(tutorialNews)





  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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

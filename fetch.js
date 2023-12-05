// create api-key.js file with const API_KEY="your_api_key" in this same directory to use

const MY_API = "7Xlf363eswR0tyqs6Pweik77HWztxaox";
const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${MY_API}`;

const date = "2021-04-01";
const list = "hardcover-fiction";
const booksUrl = `https://api.nytimes.com/svc/books/v3/lists/${date}/${list}.json?api-key=${MY_API}`;




const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const url = `${BASE_URL}?q=tech&api-key=${API_KEY}`;

fetch(url)
  .then(function(data) {
    return data.json();
  })
  .then(function(responseJson) {
    console.log(responseJson);

    let article = responseJson.response.docs[0];
    console.log(article);

    const mainHeadline = article.headline.main;
    document.getElementById('article-title').innerText = mainHeadline;

    if (article.multimedia.length > 0) {
      const imgUrl = `https://www.nytimes.com/${article.multimedia[0].url}`;
      document.getElementById('article-img').src = imgUrl;
    }
  });

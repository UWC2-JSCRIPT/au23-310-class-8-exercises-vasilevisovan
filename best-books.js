const MY_API = "7Xlf363eswR0tyqs6Pweik77HWztxaox";
document.getElementById('best-books-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const yearInput = document.getElementById('year').value;
  const monthInput = document.getElementById('month').value;
  const dateInput = document.getElementById('date').value;
  const list = "hardcover-fiction";
  const booksUrl = `https://api.nytimes.com/svc/books/v3/lists/${yearInput}-${monthInput}-${dateInput}/${list}.json?api-key=${MY_API}`;

  axios.get(booksUrl)
    .then(response => {
      const books = response.data.results.books.slice(0, 5);
      displayBooks(books);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
});

function displayBooks(books) {
  const booksContainer = document.getElementById('books-container');
  booksContainer.innerHTML = '';

  books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'mb-4';

    const title = document.createElement('h3');
    title.textContent = book.title;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const description = document.createElement('p');
    description.textContent = book.description;

    const bookImage = document.createElement('img');
    bookImage.src = book.book_image;
    bookImage.alt = book.title;

    bookDiv.appendChild(title);
    bookDiv.appendChild(author);
    bookDiv.appendChild(description);
    bookDiv.appendChild(bookImage);

    booksContainer.appendChild(bookDiv);
  });
}
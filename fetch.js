
const MY_API = "7Xlf363eswR0tyqs6Pweik77HWztxaox";
function getBestSellers() {
  const dateInput = document.getElementById('date').value;
  const list = "hardcover-fiction";

  if (dateInput) {
    const booksUrl = `https://api.nytimes.com/svc/books/v3/lists/${dateInput}/${list}.json?api-key=${MY_API}`;

    fetch(booksUrl)
      .then(response => response.json())
      .then(data => displayBooks(data.results.books.slice(0, 5)))
      .catch(error => console.error('Error fetching data:', error));
  } else {
    alert('Please enter a valid date.');
  }
}

function displayBooks(books) {
  const resultContainer = document.getElementById('result');
  resultContainer.innerHTML = ''; // Clear previous results

  books.forEach(book => {
    const bookInfo =`
      <div class="book-container">
        <div class="book-info">
          <h2>${book.title}</h2>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Description:</strong> ${book.description || 'Not available'}</p>
        </div>
        <div class="book-image">
          <img src="${book.book_image}" alt="${book.title} Cover" style="max-width: 200px; max-height: 300px;">
        </div>
      </div>
      <hr>`;
    
    resultContainer.innerHTML += bookInfo;
  });
}

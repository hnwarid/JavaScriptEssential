// initialize book array 
let books = [];

// function to add book
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

// function to show books 
function showBooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
        <p><strong>Book Name: </strong>${book.name}</p>
        <p><strong>Author Name: </strong>${book.authorName}</p>
        <p><strong>Book Description: </strong>${book.bookDescription}</p>
        <p><strong>No. of pages: </strong>${book.pagesNumber} pages</p>
        <button onClick="deleteBook(${index})">Delete</button>`
        // practice task add delete button on the line above
    );
    document.getElementById('books').innerHTML = booksDiv.join('')
}

// function to clear inputs  
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

// function to add delete button after a book is added 
function deleteBook(bookIndex) {
    books.splice(bookIndex, 1);
    showBooks();
}
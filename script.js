const myLibrary = [
  {
    title: 'Lord of Rings',
    author: 'J.R.R. Tolkien',
    pages: 355,
    isRead: 'read'
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    pages: 455,
    isRead: 'read'
  },
  {
    title: 'Goodnight Moon',
    author: 'Somebody Else',
    pages: 25,
    isRead: 'read'
  },
  {
    title: 'The Art of War',
    author: 'Sun Tzu',
    pages: 955,
    isRead: 'read'
  }
];



function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// take user input and store book object in array
function addBookToLibrary() {

}


// displays myLibrary[]
function displayLibrary() {
  const tbody = document.querySelector('tbody');

  for (i = 0; i < myLibrary.length; i++) {
    const bookRow = document.createElement('tr');

    // grab each obj in array:
    let book = myLibrary[i];
    
    const tdTitle = document.createElement('td');
    tdTitle.textContent = book.title;
    bookRow.appendChild(tdTitle);

    const tdAuthor = document.createElement('td');
    tdAuthor.textContent = book.author;
    bookRow.appendChild(tdAuthor);

    const tdPages = document.createElement('td');
    tdPages.textContent = `${book.pages} pages`;
    bookRow.appendChild(tdPages);
    
    const tdStatus = document.createElement('td');
    tdStatus.classList.add('td-status');
    createIsReadButton(book, tdStatus);
    bookRow.appendChild(tdStatus);

    const tdDelete = document.createElement('td');
    tdDelete.classList.add('td-delete');
    createDeleteButton(book, tdDelete);
    bookRow.appendChild(tdDelete);

    tbody.appendChild(bookRow);
  }
}
displayLibrary();

// create is Read button
function createIsReadButton(book, tdStatus){
  const isReadButton = document.createElement('button');
  isReadButton.classList.add('isRead');
  if (book.isRead){
    isReadButton.textContent = 'read';
  }
  else {
    isReadButton.textContent = 'not read';
  }
  tdStatus.appendChild(isReadButton);
}

function createDeleteButton(book, tdDelete){
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = 'delete';

  tdDelete.appendChild(deleteButton);
}
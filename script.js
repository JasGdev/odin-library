const myLibrary = [];
const display = document.querySelector(".display");


addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("Clean Code", "Robert C. Martin", 464, true);
addBookToLibrary("The Pragmatic Programmer", "Andrew Hunt & David Thomas", 352, false);
console.log(myLibrary)

displayBooks()

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    this.info = function () {
        return this.read ? `${title} by ${author}, ${pages} pages, already read` :
            `${title} by ${author}, ${pages} pages, not read yet`;
    }
}

function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// loops through the array and displays each book on the page
function displayBooks(){
    for (book of myLibrary){
        const bookDisplay = document.createElement('div')
        bookDisplay.classList.add('book')

        const bookDisplayTitle = document.createElement('h3')
        bookDisplayTitle.classList.add('book-title')
        bookDisplayTitle.textContent = `${book.title}`;
        bookDisplay.appendChild(bookDisplayTitle)

        const bookDisplayAuthor = document.createElement('p')
        bookDisplayAuthor.classList.add('book-author')
        bookDisplayAuthor.textContent = `by ${book.author}`;
        bookDisplay.appendChild(bookDisplayAuthor)
        display.appendChild(bookDisplay)
    }
}

function newBookButton(){
    
}



var myLibrary = [];
const display = document.querySelector(".display");


class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    info() {
        return this.read ? `${this.title} by ${this.author}, ${this.pages} pages, already read` :
            `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
    }
    toggleRead() {
        this.read = !this.read;
    }
}

// function Book(title, author, pages, read) {
//     if (!new.target) {
//         throw Error("You must use the 'new' operator to call the constructor");
//     }
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.id = crypto.randomUUID();
//     this.info = function () {
//         return this.read ? `${title} by ${author}, ${pages} pages, already read` :
//             `${title} by ${author}, ${pages} pages, not read yet`;
//     }
// }

// Book.prototype.toggleRead = function () {
//     console.log('read')
//     this.read = !this.read;
// }

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 310, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("Clean Code", "Robert C. Martin", 464, true);
addBookToLibrary("The Pragmatic Programmer", "Andrew Hunt & David Thomas", 352, false);
displayBooks()





function addBookToLibrary(title, author, pages, read) {
    // take params, create a book then store it in the array
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

// loops through the array and displays each book on the page
function displayBooks(){
    display.innerHTML = ''
    for (const book of myLibrary){
        const bookDisplay = document.createElement('div')
        bookDisplay.classList.add('book')

        const bookDisplayTitle = document.createElement('h3')
        bookDisplayTitle.classList.add('book-title')
        bookDisplayTitle.textContent = `${book.title}`;
        bookDisplay.appendChild(bookDisplayTitle)

        const bookDisplayPages = document.createElement('p')
        bookDisplayPages.classList.add('book-pages')
        bookDisplayPages.textContent = `${book.pages}p read`;
        bookDisplay.appendChild(bookDisplayPages)

        const bookDisplayRead = document.createElement('p')
        bookDisplayRead.classList.add('book-read')
        bookDisplayRead.textContent = `read: ${book.read}`;
        bookDisplay.appendChild(bookDisplayRead)
        

        const bookDisplayAuthor = document.createElement('p')
        bookDisplayAuthor.classList.add('book-author')
        bookDisplayAuthor.textContent = `by ${book.author}`;
        bookDisplay.appendChild(bookDisplayAuthor)


        display.appendChild(bookDisplay)

        //  Remove book button and Change read status button display
        const btnDisplay = document.createElement('div');
        btnDisplay.classList.add('btnDisplay')

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('bookButton');  
        removeBtn.textContent = "X";
        removeBtn.setAttribute('id', book.id);


        const changeStatusBtn = document.createElement('button');
        changeStatusBtn.classList.add('bookButton');
        changeStatusBtn.textContent = 'Read/Unread';
        changeStatusBtn.setAttribute('id', book.id);

        
        
        // remove button logic
        removeBtn.addEventListener('click', () => {
            removeBookByID(removeBtn.id)
            displayBooks();
        });       

        // change status logic
        
        changeStatusBtn.addEventListener('click', () => {
            let bookToChange = myLibrary.find(obj => obj.id === changeStatusBtn.id);
            bookToChange.toggleRead();
            displayBooks();
        });




        btnDisplay.appendChild(removeBtn)
        btnDisplay.appendChild(changeStatusBtn)
        bookDisplay.appendChild(btnDisplay)
    }
}


// Dialog Popup
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog #dialog-close");

showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
});

// Add Book Form
const form = document.querySelector("#newBookForm");
const submitButton = document.querySelector("dialog .submit")

form.addEventListener("submit", function(e){
    e.preventDefault();
    const title = form.title.value;
    const author = form.author.value;
    const pages = form.pages.value;
    const read = form.read.checked;
    addBookToLibrary(title, author, pages, read)
    displayBooks();
    form.reset();
    dialog.close();
})

function removeBookByID(id){
    myLibrary = myLibrary.filter(book => book.id !== id);
}







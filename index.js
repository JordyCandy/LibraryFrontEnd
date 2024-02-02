let myLibrary = [];
let left = document.getElementsByClassName("outside")[0];

document.getElementById("addBook").addEventListener("click", () => {
    let title = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let readOrNot = document.getElementById("read").value;

    var newBook = addBookToLibrary(title, author, readOrNot);
    myLibrary.push(newBook);

    displayBook(left, newBook);

});

function Book(title, author, readOrNot) {
    this.title = title;
    this.author = author;
    this.readOrNot = readOrNot;
}

function addBookToLibrary(title, author, readOrNot) {
    return new Book(title, author, readOrNot);
}

function displayBook(container, book) {

    let bookDiv = document.createElement("div");
    bookDiv.classList.add("bookDIV");

    let titleHeader = document.createElement("h1");
    titleHeader.textContent = "Title: " + book.title;

    let authorHeader = document.createElement("h3");
    authorHeader.textContent = "Author: " + book.author;

    let readStatusParagraph = document.createElement("p");
    readStatusParagraph.textContent = "Read: " + book.readOrNot;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    bookDiv.appendChild(titleHeader);
    bookDiv.appendChild(authorHeader);
    bookDiv.appendChild(readStatusParagraph);
    bookDiv.appendChild(deleteBtn);

    container.appendChild(bookDiv);

    function adjustDivHeight() {
        let green = document.getElementsByClassName("green")[0];
        var contentHeight = bookDiv.clientHeight;
        let outsideHeight = left.clientHeight;
        container.style.height = contentHeight + "px";
        green.style.height = (outsideHeight) + "vh";
    }
    
    adjustDivHeight();
    window.addEventListener('resize', adjustDivHeight);

    deleteBtn.addEventListener("click", () =>{
        container.removeChild(bookDiv);
    });
}

function deleter(){
    
}
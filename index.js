let myLibrary = [];
let left = document.getElementsByClassName("left")[0];

document.getElementById("addBook").addEventListener("click", () => {
    let title = document.getElementById("name").value;
    let author = document.getElementById("author").value;
    let readOrNot = document.getElementById("read").value;

    var newBook = addBookToLibrary(title, author, readOrNot);
    myLibrary.push(newBook);

    // Display the newly added book without clearing existing content
    displayBook(left, newBook);

    console.log(newBook);
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
    // Create a div element
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("bookDIV");

    // Create h1, h3, and p elements
    let titleHeader = document.createElement("h1");
    titleHeader.textContent = "Title: " + book.title;

    let authorHeader = document.createElement("h3");
    authorHeader.textContent = "Author: " + book.author;

    let readStatusParagraph = document.createElement("p");
    readStatusParagraph.textContent = "Read: " + book.readOrNot;

    // Append h1, h3, and p to the div
    bookDiv.appendChild(titleHeader);
    bookDiv.appendChild(authorHeader);
    bookDiv.appendChild(readStatusParagraph);

    // Append the div to the specified container
    container.appendChild(bookDiv);
}
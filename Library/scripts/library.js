const grid = document.querySelector(".main_grid");
const btnElem = document.querySelector(".main__btn");
const submit = document.querySelector(".modal__btn");
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal__overlay");
let myLibrary = [];
const form = document.querySelector(".modal__form");
const title = document.querySelector(".modal__input--title");
const autor = document.querySelector(".modal__input--autor");
const pages = document.querySelector(".modal__input--pages");
const read = document.querySelector(".modal__read--input");

btnElem.addEventListener("click", function (e) {
    modal.style.visibility = "visible";
    modalOverlay.style.visibility = "visible";
});

document.addEventListener("click", function (e) {
    let miss = e.composedPath().includes(btnElem);
    let missAgain = e.composedPath().includes(modal);
    if (!miss && !missAgain) {
        modal.style.visibility = "hidden";
        modalOverlay.style.visibility = "hidden";
    }
});

function book(title, autor, pages, read) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.read = read;
}

function addBook() {
    if (title.value === "" || autor.value === "" || pages.value === "") {
        return;
    }
    if (title.value !== "" || autor.value !== "" || pages.value !== "") {
        let newBook = new book(title.value, autor.value, pages.value, read.checked);
        myLibrary.push(newBook);
        console.log(myLibrary);
        updateList();
        clear();
        modal.style.visibility = "hidden";
        modalOverlay.style.visibility = "hidden";
    }
}

submit.addEventListener("click", function (e) {
    addBook();
    clear();
    form.reset();
});

function clear() {
    title.value = "";
    autor.value = "";
    pages.checked = false;
}

function updateList() {
    grid.innerHTML = "";
    myLibrary.forEach((book) => {
        const bookTitle = document.createElement("h1");
        const bookAuthor = document.createElement("p");
        const bookPages = document.createElement("p");

        const bookIsRead = document.createElement("label");
        bookIsRead.setAttribute("for", "is-read");

        const bookCheck = document.createElement("input");
        bookCheck.setAttribute("type", "checkbox");
        bookCheck.setAttribute("id", "is-read");

        const bookDiv = document.createElement("div");
        const delButton = document.createElement("button");

        bookTitle.innerHTML = "Title: " + book.title;
        bookAuthor.innerHTML = "Author: " + book.autor;
        bookPages.innerHTML = "Pages: " + book.pages;
        bookIsRead.innerHTML = "Read?";
        delButton.innerHTML = "Delete";

        bookDiv.classList.add("book__card");
        delButton.classList.add("btn__delete");

        bookDiv.appendChild(bookTitle);
        bookDiv.appendChild(bookAuthor);
        bookDiv.appendChild(bookPages);
        bookDiv.appendChild(bookIsRead);
        bookDiv.appendChild(bookCheck);
        bookDiv.appendChild(delButton);
        grid.appendChild(bookDiv);

        delButton.addEventListener("click", () => {
            deleteBook(book.title);
            bookDiv.remove();
        });
    });
}

function deleteBook(title) {
    myLibrary = myLibrary.filter((book) => {
        return book.title !== title;
    });
    console.log(myLibrary);
}
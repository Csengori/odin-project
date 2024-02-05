const addBookBtn = document.getElementById('add-book-btn')
const addBook = document.querySelector('.add-book')
const submitBtn = document.getElementById('submit-btn')
const form = document.querySelector("form");
let checkmarks = document.querySelectorAll(".checkmark");
const bookTable = document.querySelector(".book-table");
let deleteBtn = document.querySelectorAll("#delete-btn")

let bookLibrary = [];


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addSuccess() {
    title.value = ''
    author.value = ''
    pages.value = ''
    read.checked = false

    let notification = document.getElementById("notification");
    notification.style.display = "block";

    // Hide the notification after 3 seconds
    setTimeout(function () {
        notification.style.display = "none";
    }, 3000);
}


function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;

    let newBook = new Book(title, author, pages, read);
    bookLibrary.push(newBook)
    addSuccess()
    updateBookList()
}

function updateBookList() {
    bookTable.innerHTML = "";

    for (let i = 0; i < bookLibrary.length; i++) {
        let bookEl = document.createElement("tr");
        let readStatus = bookLibrary[i].read ? "Read" : "Unread";
        bookEl.innerHTML = `
              <td>${bookLibrary[i].title}</td>
              <td>${bookLibrary[i].author}</td>
              <td>${bookLibrary[i].pages}</td>
              <td class="checkmark">${readStatus}</td>
              <td><button class="delete-btn">Delete</button></td>`;
        bookTable.appendChild(bookEl);

        bookEl.querySelector(".checkmark").addEventListener("click", function () {
            bookLibrary[i].read = !bookLibrary[i].read;
            updateBookList(); // Update the book list to reflect the new read status
        });

        bookEl.querySelector(".delete-btn").addEventListener("click", function () {
            bookLibrary.splice(i, 1); // Remove the book from the array
            updateBookList(); // Update the book list to reflect the deleted book
        });
    }
}




addBookBtn.addEventListener('click', () => addBook.classList.toggle('hide'))

submitBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
        addBookToLibrary();
    } else {
        alert("Please fill out all required fields");
    }
});
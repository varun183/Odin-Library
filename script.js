let bookForm = document.querySelector("#form-id");

bookForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    let bookTitle = document.querySelector("#title").value;
    let authorName = document.querySelector("#author").value;
    let totalPages = document.querySelector("#pages").value;
    let read = document.querySelector("#read-form").checked;


    addBookToLibrary(bookTitle,authorName,totalPages,read);
   

    
});




function Book(title,author,pages,read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function (){
        return this.title + " by " + this.author +", " +this.pages+" pages, " + (this.read ? " Already read":"Not read yet" );
    };

}

const myLibrary = [
   
];




function addBookToLibrary(bookTitle, authorName, totalPages, read){

    const newBook = new Book(bookTitle, authorName, totalPages, read);
    myLibrary.push(newBook);
    displayBook(newBook);

}


function displayBook(newBook){
    // Create a new card element
    const card = document.createElement('div');
    card.classList.add('card');

    // Create elements for title, author, pages, and read status
    const titleElement = document.createElement('strong');
    titleElement.classList.add('bookTitle');
    titleElement.textContent = newBook.title;

    const authorElement = document.createElement('p');
    authorElement.classList.add('authorName');
    authorElement.textContent = "Author Name: " + newBook.author;

    const pagesElement = document.createElement('p');
    pagesElement.classList.add('bookPages');
    pagesElement.textContent = "Pages: " + newBook.pages;

    const readStatusElement = document.createElement('p');
    readStatusElement.classList.add('readStatus');
    readStatusElement.textContent = "Read Status: " + (newBook.read ? "Already read" : "Not read yet");

    // Append title, author, pages, and read status elements to the card
    card.appendChild(titleElement);
    card.appendChild(authorElement);
    card.appendChild(pagesElement);
    card.appendChild(readStatusElement);

    // Append the card to the displayContainer
    const displayContainer = document.querySelector('.displayContainer');
    displayContainer.appendChild(card);
}








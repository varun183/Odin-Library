const addBookDiv = document.querySelector('.addBook')
const addBookBtn = document.createElement('button');
addBookBtn.textContent = 'Add Book';
addBookBtn.setAttribute('style','color:white; background:black; ');
addBookBtn.classList.add('addButton');
addBookDiv.appendChild(addBookBtn);

const BookInfo =  document.querySelector( '.displayBooks .card .bookInfo');




function Book(title,author,pages,read){

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function (){
        return this.title + " by " + this.author +", " +this.pages+" pages, " + (this.read ? "Not read yet" : " Already read");
    };

}

const myLibrary = [
   
];



function addBookToLibrary(){
    let bookTitle = prompt("Enter Book Title:");
    let authorName = prompt("Enter Author's name:");
    let totalPages = prompt("Enter number of Pages:");
    let readOrNot = prompt("Have you read the book?true or false");
    let read = (readOrNot.toLowerCase() ==='true');

    const newBook = new Book(bookTitle, authorName, totalPages, read);
    myLibrary.push(newBook);


}
addBookBtn.addEventListener('click', function() {
    addBookToLibrary();
    let bookTitles = ""; // Initialize an empty string to store book titles
    myLibrary.forEach(book => {
        // Accumulate each book title into the bookTitles string
        bookTitles += book.title + "\n";
    });
    // Set the accumulated book titles to the BookInfo element
    BookInfo.textContent = bookTitles;
});





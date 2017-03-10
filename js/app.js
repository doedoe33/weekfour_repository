
function Book(book) {
    this.title = book.title;
    this.author = book.author;
    this.numberOfPages = book.numberOfPages;
    this.publishDate = book.publishDate;

    return this;
}


var firstbook = new Book({ title: "Cujo", author: "Stephen King", numberOfPages: 309, publishDate: "September 8, 1981", testkey: "testscript" });
var secondbook = new Book({ title: "On Writing", author: "Stephen Can", numberOfPages: 291, publishDate: "December 15, 1991", testkey: "testscript" });
var thirdbook = new Book({ title: "The Dark Half", author: "Stephen King", numberOfPages: 431, publishDate: "October 20, 1989", testkey: "testscript" });
var fourthbook = new Book({ title: "Pet Cemetary", author: "Stephen King", numberOfPages: 374, publishDate: "November 14, 1983", testkey: "testscript" });


var Library = function (newBook) { };

//instance
var gKingLibrary = new Library();

Library.prototype.mybookArray = new Array();

Library.prototype.addBook = function (book) {
    for (var index = 0; index < this.mybookArray.length; index++) {
        if (this.mybookArray[index].title == book.title) {
            return false;
        }
    }
    this.mybookArray.push(book)
    return true;
};



Library.prototype.removeBookByTitle = function (title) {
    for (var index = 0; index < this.mybookArray.length; index++) {
        if (this.mybookArray[index].title == title) {
            this.mybookArray.splice(index, 1);
            return true;
        }
    }
    return false;
};

Library.prototype.removeBookByAuthor = function (author) {
    var isRemove = false;
    for (var index = 0; index < this.mybookArray.length; index++) {
        console.log(this.mybookArray[index]);
        if (this.mybookArray[index].author == author) {
            this.mybookArray.splice(index, 1);
            isRemove = true;
            index--;
        }
    }
    return isRemove;
};

Library.prototype.getRandomBook = function () {
    return this.mybookArray[Math.floor(Math.random() * this.mybookArray.length)];
};

Library.prototype.getBookByTitle = function (title) {
    var titleArray = new Array(); // this contains nothing empty Array FOR LOOP with IF STATEMENT
    for (var index = 0; index < this.mybookArray.length; index++) {
        if (this.mybookArray[index].title.indexOf(title) >= 0){//if this book array title
        titleArray.push(this.mybookArray[index]);}
    }
    return titleArray;
};

Library.prototype.getBooksByAuthor = function (author) {
    var authorArray = new Array();
    for (var index = 0; index < this.mybookArray.length; index++) {
        if (this.mybookArray[index].author.indexOf(author) >= 0){
        authorArray.push(this.mybookArray[index]);}
    }
    return authorArray;
};

Library.prototype.addBooks = function (addbooksArray) {
    var num = 0;
    for (var index = 0; index < addbooksArray.length; index++) {
        if (this.addBook(addbooksArray[index])) {
            num++;
        }
    }
    return num;
};


Library.prototype.getAuthors = function () {
    var aAuthors = new Array();
    for (var index = 0; index < this.mybookArray.length; index++) {
        if (aAuthors.indexOf(this.mybookArray[index].author) < 0) {
            aAuthors.push(this.mybookArray[index].author);
        }
    }
    return aAuthors;
};

Library.prototype.getRandomAuthorName = function () {
    return this.mybookArray[Math.floor(Math.random() * this.mybookArray.length)].author;
};




gKingLibrary.addBook(firstbook);
gKingLibrary.addBook(secondbook);
gKingLibrary.addBook(thirdbook);
gKingLibrary.addBook(fourthbook);
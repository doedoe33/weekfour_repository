

var  Lib = function (newBook){
};


Lib.prototype.mybookArray = new Array ();


Lib.prototype.addBook = function(book) {
    this.mybookArray.push(book);
    return this.mybookArray;
};


Lib.prototype.removeBookByTitle=function(title){//accepts string

};

Lib.prototype.removeBookByAuthor= function(authorName) {//accepts string

};

Lib.prototype.getRandomBook= function(){

}:

Lib.prototype.getBookByTitle = function(title) {//accepts string

};


Lib.prototype.getBooksByAuthor= function (authorName) {//accepts string

};
$(function(){
  var firstbook = new Book({title: "Cujo", author: "Stephen King", numberOfPages: 309, publishDate: "September 8, 1981", testkey: "testscript"});
  var secondbook = new Book({title: "On Writing", author: "Stephen King", numberOfPages: 291, publishDate: "December 15, 1991",testkey: "testscript"});
  var thirdbook= new Book({title: "The Dark Half", author: "Stephen King", numberOfPages: 431, publishDate: "October 20, 1989",testkey: "testscript"});
  var fourthbook= new Book({title: "Pet Cemetary", author: "Stephen King", numberOfPages: 374, publishDate: "November 14, 1983",testkey: "testscript"});


  this.gKingLib= new lib();
  console.log(this.gKingLib.addBook(firstbook));
};
function Book(oDataJSON){
// assign variable that is undefined = making it a form constructor
	this.title = oDataJSON.title;
	this.author = oDataJSON.author;
  this.numberOfPages = oDataJSON.numberOfPages;
  this.publishDate = oDataJSON.publishDate;
  this.testkey = oDataJSON.testkey;

  return this;
};

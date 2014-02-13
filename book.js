function Book(title,author,hardback,pages,currentPage){
  this.title = title;
  this.author = author;
  this.hardback = hardback;
  this.pages = pages;
  this.currentPage = currentPage;
}
Book.prototype.toString = function () {
  return console.log(this.pages + " page long book named \"" + this.title +
      " \"written by: " + this.author + ", currently on page " + this.currentPage +
      ". Hardback? " + this.hardback + ".")
}
var BookList = (function() {
  var books = []

  return { //if this isn't here I get weird errors
    addToList:function(book) {
      books.push(book)
    },
    getCurrentPage:function(book) {
      return book.currentPage;
    },
    incrementPage:function(book) {
      book.currentPage += 1;
      return book.currentPage;
    },
    decrementPage:function(book) {
      book.currentPage -+ 1;
      return book.currentPage;
    }
  };
})();
myBook = new Book("Ginga Eiyuu Densetsu","Yoshiki Tanaka", true, 500, 51);
BookList.addToList(myBook);

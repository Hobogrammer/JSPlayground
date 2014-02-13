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

  return {
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
      book.currentPage -= 1;
      return book.currentPage;
    }
  };
})();

myBook = new Book("Ginga Eiyuu Densetsu","Yoshiki Tanaka", true, 500, 51);
mySecondBook = new Book("Sekai no Moushou", "Hiroyuki Morioka", false, 269, 0);
BookList.addToList(myBook);
console.log(BookList.getCurrentPage(myBook));
BookList.addToList(mySecondBook);
console.log(BookList.incrementPage(myBook));
myBook.toString();
console.log(BookList.decrementPage(myBook));
myBook.toString();
mySecondBook.toString();

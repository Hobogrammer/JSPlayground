var BookModule = (function()
{ //JAVA HABITS
  var pages = 0;
  var title = "";
  var author =  "";
  var hardback = "";
  var currentPage = 0;

  // BookModule.prototype.toString = function()
  // {
  //   return this.page + " page long book named " + this.title +
  //    " written by: " + this.author + ", currently on page " + this.currentPage +
  //    ". Hardback? " + this.hardback + ".";
  // };

  return{
    setBookValues:function(pages, title, author, hardback, currentPage)
    {
      book.title = title;
      book.author = author;
      book.hardback = hardback;
      book.pages = pages;
      book.currentPage = currentPage;
    },
    getCurrentPage:function()
    {
      return book.currentPage;
    },
    incrementPage:function(book)
    {
      book.currentPage += 1;
      return book.currentPage;
    },
    decrementPage:function(book)
    {
      book.currentPage -+ 1;
      return book.currentPage;
    }
  };
})

BookModule.setBookValues();

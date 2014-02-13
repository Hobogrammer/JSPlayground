JSPlayground
============

This project creates a model of a book in Javascript using the modular
design pattern. A book instance can be created by using the following command `new Book("title","author",hardback, pages,currentPages)`, where `hardback` is a boolean value and `pages` and `currentPage` are integer values.

After creating a book object you can view the information about that book by using the `toString()` method on the book object.

To add a book to a "booklist" use the syntax: `BookList.addToList(bookObject);`

There are 3 more methods to interact with the book object.

getCurrentPage
---
`.getCurrentPage()` returns the `currentPage` of the book which is set when you instantiate the object.

incrementPage
--
`.incrementPage()` "turns" the page of the book object.

decrementPage
--
`.decrementPage()` flips the page of the book object backward.

"use strict";
var enums_1 = require("./enums");
var classes_1 = require("./classes");
var myLibrary = new classes_1.Library(1, "Simón Bolívar");
var allBooks = myLibrary.getAllBooks();
myLibrary.logFirstAvilable(allBooks);
var poetryBooks = myLibrary.getBookTitleByCategory(enums_1.Category.Poetry);
myLibrary.logBookTitles(poetryBooks);
// Arrow Function
var fictionBooks = myLibrary.getBookTitleByCategory(enums_1.Category.Fiction);
fictionBooks.forEach(function (val, idx, arr) { return console.log(++idx + ".- " + val); });
var myBook = myLibrary.getBookById(1);
console.log(myBook);
// Function Types
var idGenerator;
idGenerator = myLibrary.createCustomerId;
var myId = idGenerator("jsinner", 10);
console.log(myId);
idGenerator = function (chars, nums) { return nums + chars.toUpperCase(); };
myId = idGenerator("jsinner", 10);
console.log(myId);
// Overloding Functions
var hermansBooks = myLibrary.getTitles("Herman Melville");
hermansBooks.forEach(function (val, idx, arr) { return console.log(++idx + ".- " + val); });
var availableBooks = myLibrary.getTitles(true);
hermansBooks.forEach(function (val, idx, arr) { return console.log(++idx + ".- " + val); });
// let favoriteAuthor: AuthorInterface = {};
// let favoriteLibrarian: LibrarianInterface = {};
//# sourceMappingURL=app.js.map
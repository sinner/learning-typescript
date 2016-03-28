"use strict";
var enums_1 = require("./enums");
var Book = (function () {
    function Book(id, title, author, available, category) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.available = available;
        this.category = category;
    }
    return Book;
}());
exports.Book = Book;
var Library = (function () {
    function Library(id, name) {
        this.id = id;
        this.name = name;
    }
    // public getAllBooks(): Book[]
    Library.prototype.getAllBooks = function () {
        var books = [
            { id: 1, title: "Ulysses", author: "James Joyce", available: false, category: enums_1.Category.Fiction },
            { id: 2, title: "A Farewell To Arms", author: "Enest Hemingway", available: false, category: enums_1.Category.Fiction },
            { id: 3, title: "I Know Why The Caged Bird Sings", author: "Maya Angelou", available: true, category: enums_1.Category.Poetry },
            { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: enums_1.Category.Fiction }
        ];
        return books;
    };
    Library.prototype.getBookTitleByCategory = function (categoryFilter) {
        if (categoryFilter === void 0) { categoryFilter = enums_1.Category.Fiction; }
        console.log("Getting books in category: " + enums_1.Category[categoryFilter]);
        var allBooks = this.getAllBooks();
        var filteredTitles = [];
        for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
            var currentBook = allBooks_1[_i];
            if (currentBook.category === categoryFilter) {
                filteredTitles.push(currentBook.title);
            }
        }
        return filteredTitles;
    };
    Library.prototype.getBookById = function (id) {
        var allBooks = this.getAllBooks();
        return allBooks.filter(function (book) { return book.id === id; })[0];
    };
    Library.prototype.createCustomerId = function (name, id) {
        return name.toUpperCase() + id;
    };
    Library.prototype.createCustomer = function (name, age, city) {
        console.log("Creating customer " + name);
        if (age) {
            console.log("Age: " + age);
        }
        if (city) {
            console.log("City: " + city);
        }
    };
    Library.prototype.checkOutBooks = function (customer) {
        var booksId = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            booksId[_i - 1] = arguments[_i];
        }
        console.log("Checking out books for " + customer);
        var booksCheckedOut = [];
        for (var _a = 0, booksId_1 = booksId; _a < booksId_1.length; _a++) {
            var id = booksId_1[_a];
            var book = this.getBookById(id);
            if (book.available) {
                booksCheckedOut.push(book.title);
            }
        }
        return booksCheckedOut;
    };
    Library.prototype.printBook = function (book) {
        console.log(book.title + " by " + book.author);
    };
    Library.prototype.logFirstAvilable = function (books) {
        if (books === void 0) { books = this.getAllBooks(); }
        var numberOfBooks = books.length;
        var firstAvalaible = "";
        for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
            var currentBook = books_1[_i];
            if (currentBook.available) {
                firstAvalaible = currentBook.title;
                break;
            }
        }
        console.log("Total Books: " + numberOfBooks);
        console.log("First Avalaible: " + firstAvalaible);
    };
    Library.prototype.getTitles = function (bookProperty) {
        var allBooks = this.getAllBooks();
        var foundTitles = [];
        if (typeof bookProperty === "string") {
            // Filter books by author name
            console.log("Filter books by author name: " + bookProperty);
            for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
                var book = allBooks_2[_i];
                if (book.author === bookProperty) {
                    foundTitles.push(book.title);
                }
            }
        }
        else if (typeof bookProperty === "boolean") {
            // Filter books on specified availability
            console.log("Filter books on specified availability: " + bookProperty);
            for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
                var book = allBooks_3[_a];
                if (book.available === bookProperty) {
                    foundTitles.push(book.title);
                }
            }
        }
        return foundTitles;
    };
    Library.prototype.logBookTitles = function (titles) {
        for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
            var title = titles_1[_i];
            console.log(title);
        }
    };
    return Library;
}());
exports.Library = Library;
var UniversityLibrarian = (function () {
    function UniversityLibrarian() {
    }
    UniversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting to customer " + custName + " from UniversityLibrarian");
    };
    return UniversityLibrarian;
}());
exports.UniversityLibrarian = UniversityLibrarian;
//# sourceMappingURL=classes.js.map
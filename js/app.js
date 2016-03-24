var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
;
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
var Library = (function () {
    function Library(id, name) {
        this.id = id;
        this.name = name;
    }
    Library.prototype.getAllBooks = function () {
        var books = [
            { id: 1, title: "Ulysses", author: "James Joyce", available: false, category: Category.Fiction },
            { id: 2, title: "A Farewell To Arms", author: "Enest Hemingway", available: false, category: Category.Fiction },
            { id: 3, title: "I Know Why The Caged Bird Sings", author: "Maya Angelou", available: true, category: Category.Poetry },
            { id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: Category.Fiction }
        ];
        return books;
    };
    Library.prototype.getBookTitleByCategory = function (categoryFilter) {
        console.log("Getting books in category: " + Category[categoryFilter]);
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
    Library.prototype.logFirstAvilable = function (books) {
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
    Library.prototype.logBookTitles = function (titles) {
        for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
            var title = titles_1[_i];
            console.log(title);
        }
    };
    return Library;
}());
var myLibrary = new Library(1, "Simón Bolívar");
var allBooks = myLibrary.getAllBooks();
myLibrary.logFirstAvilable(allBooks);
var poetryBooks = myLibrary.getBookTitleByCategory(Category.Poetry);
myLibrary.logBookTitles(poetryBooks);
//# sourceMappingURL=app.js.map
enum Category {Biography, Poetry, Fiction, History, Children};

class Book {

    constructor(public id: number, public title: string, public author: string, public available: boolean, public category: number) { }

}

class Library {

    constructor(public id: number, public name: string) { }

    public getAllBooks(): Array<Book> {
        let books: Array<Book> = [
            {id: 1, title: "Ulysses", author: "James Joyce", available: false, category: Category.Fiction},
            {id: 2, title: "A Farewell To Arms", author: "Enest Hemingway", available: false, category: Category.Fiction},
            {id: 3, title: "I Know Why The Caged Bird Sings", author: "Maya Angelou", available: true, category: Category.Poetry},
            {id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: Category.Fiction}
        ];
        return books;
    }

    public logFirstAvilable(books: Array<Book>): void {

        let numberOfBooks: number = books.length;
        let firstAvalaible: string = "";

        for (let currentBook of books) {

            if (currentBook.available) {
                firstAvalaible = currentBook.title;
                break;
            }
        }

        console.log("Total Books: " + numberOfBooks);
        console.log("First Avalaible: " + firstAvalaible);
    }

}

let myLibrary: Library = new Library(1, "Simón Bolívar");
const allBooks: Array<Book> = myLibrary.getAllBooks();
myLibrary.logFirstAvilable(allBooks);
import {Category} from "./enums";
import {BookInterface, AuthorInterface, LibrarianInterface} from "./interfaces";

class Book implements BookInterface {

    constructor(public id: number, public title: string, public author: string, public available: boolean, public category: number) { }

}

class Library {

    constructor(public id: number, public name: string) { }

    // public getAllBooks(): Book[]
    public getAllBooks(): Array<Book> {
        let books: Array<Book> = [
            {id: 1, title: "Ulysses", author: "James Joyce", available: false, category: Category.Fiction},
            {id: 2, title: "A Farewell To Arms", author: "Enest Hemingway", available: false, category: Category.Fiction},
            {id: 3, title: "I Know Why The Caged Bird Sings", author: "Maya Angelou", available: true, category: Category.Poetry},
            {id: 4, title: "Moby Dick", author: "Herman Melville", available: true, category: Category.Fiction}
        ];
        return books;
    }

    public getBookTitleByCategory(categoryFilter: Category = Category.Fiction): Array<string> {

        console.log("Getting books in category: " + Category[categoryFilter]);

        const allBooks = this.getAllBooks();
        const filteredTitles: string[] = [];

        for (let currentBook of allBooks) {
            if (currentBook.category === categoryFilter) {
                filteredTitles.push(currentBook.title);
            }
        }

        return filteredTitles;
    }

    public getBookById(id: number): Book {
        const allBooks = this.getAllBooks();
        return allBooks.filter(book => book.id === id)[0];
    }

    public createCustomerId(name: string, id: number): string {
        return name.toUpperCase() + id;
    }

    public createCustomer(name: string, age?: number, city?: string): void {
        console.log("Creating customer " + name);
        if (age) {
            console.log("Age: " + age);
        }
        if (city) {
            console.log("City: " + city);
        }
    }

    public checkOutBooks(customer: string, ...booksId: number[]): string[] {

        console.log("Checking out books for " + customer);

        let booksCheckedOut: string[] = [];

        for (let id of booksId) {
            let book: Book = this.getBookById(id);
            if (book.available) {
                booksCheckedOut.push(book.title);
            }
        }

        return booksCheckedOut;

    }

    public printBook(book: BookInterface): void {
        console.log(book.title + " by " + book.author);
    }

    public logFirstAvilable(books: Array<Book> = this.getAllBooks()): void {

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

    public getTitles(author: string): string[];
    public getTitles(available: boolean): string[];
    public getTitles(bookProperty: any): string[] {
        const allBooks = this.getAllBooks();
        const foundTitles: string[] = [];

        if (typeof bookProperty === "string") {
            // Filter books by author name
            console.log("Filter books by author name: " + bookProperty);
            for (let book of allBooks) {
                if (book.author === bookProperty) {
                    foundTitles.push(book.title);
                }
            }
        }
        else if (typeof bookProperty === "boolean") {
            // Filter books on specified availability
            console.log("Filter books on specified availability: " + bookProperty);
            for (let book of allBooks) {
                if (book.available === bookProperty) {
                    foundTitles.push(book.title);
                }
            }
        }

        return foundTitles;

    }

    public logBookTitles(titles: Array<string>): void {
        for (let title of titles) {
            console.log(title);
        }
    }

}

class UniversityLibrarian implements LibrarianInterface {
    name: string;
    email: string;
    department: string;
    public assistCustomer(custName: string) {
        console.log(this.name + " is assisting to customer " + custName + " from UniversityLibrarian");
    }
}

export { Book, Library, UniversityLibrarian };
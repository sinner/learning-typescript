import { Category } from "./enums";
import { BookInterface, StringGeneratorInterface, AuthorInterface, LibrarianInterface } from "./interfaces";
import { Book, Library } from "./classes";

let myLibrary: Library = new Library(1, "Simón Bolívar");
const allBooks: Array<Book> = myLibrary.getAllBooks();
myLibrary.logFirstAvilable(allBooks);

const poetryBooks: Array<string> = myLibrary.getBookTitleByCategory(Category.Poetry);
myLibrary.logBookTitles(poetryBooks);

// Arrow Function
const fictionBooks: Array<string> = myLibrary.getBookTitleByCategory(Category.Fiction);
fictionBooks.forEach((val, idx, arr) => console.log(++idx + ".- " + val));

const myBook: Book = myLibrary.getBookById(1);
console.log(myBook);

// Function Types
let idGenerator: (chars: string, nums: number) => string;
idGenerator = myLibrary.createCustomerId;

let myId: string = idGenerator("jsinner", 10);
console.log(myId);

idGenerator = (chars: string, nums: number) => nums + chars.toUpperCase();

myId = idGenerator("jsinner", 10);
console.log(myId);

// Overloding Functions
let hermansBooks = myLibrary.getTitles("Herman Melville");
hermansBooks.forEach((val, idx, arr) => console.log(++idx + ".- " + val));

let availableBooks = myLibrary.getTitles(true);
hermansBooks.forEach((val, idx, arr) => console.log(++idx + ".- " + val));

// let favoriteAuthor: AuthorInterface = {};
// let favoriteLibrarian: LibrarianInterface = {};

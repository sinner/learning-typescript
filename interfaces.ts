import {Category} from "./enums";

interface BookInterface {

    id: number;

    title: string;

    author: string;

    pages?: number;

    available: boolean;

    category: Category;

    markDamaged?: (reason: string) => void;

}

interface StringGeneratorInterface {
    (text: string): void;
}

interface PersonInterface {
    name: string;
    email: string;
}

interface AuthorInterface extends PersonInterface {
    booksPublished: number;
}

interface LibrarianInterface extends PersonInterface {
    department: string;
    assistCustomer: (custName: string) => void;
}

export { BookInterface, StringGeneratorInterface, AuthorInterface, LibrarianInterface };
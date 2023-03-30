export type ImageLinks = {
    smallThumbnail: string;
    thumbnail: string;
}

export type Book = {
    title: string;
    categories: string[];
    authors: string[];
    imageLinks: ImageLinks;
    description: string
}

export type BooksData = {
    totalItems: number;
    items: Book[]
}
export type ImageLinks = {
  smallThumbnail: string;
  thumbnail: string;
};

export type Book = {
  id: string;
  volumeInfo: {
    authors: string[];
    categories: string[];
    description: string;
    imageLinks: ImageLinks;
    title: string;
  };
};

export type BooksData = {
  items: Book[];
  totalItems: number;
};

export type Item = {
  id: string;
  volumeInfo: {
    authors: string[];
    categories: string[];
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
    title: string;
  };
};

export type VolumeDTO = {
  items: Item[];
  totalItems: number;
};

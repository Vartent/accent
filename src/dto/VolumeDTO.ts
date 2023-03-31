export type Item = {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        categories: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        }
        description: string;
    }
}

export type VolumeDTO = {
    totalItems: number,
    items: Item[]
}
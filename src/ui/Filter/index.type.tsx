export enum FilterEnum {
    all = 'all', 
    art ='art', 
    biography ='biography', 
    computers ='computers', 
    history ='history', 
    medical ='medical', 
    poetry ='poetry'
}

export enum SorterEnum {
    relevance = 'relevance',
    newest = 'newest'
}

export type Filter = keyof typeof FilterEnum;

export type Sorter = keyof typeof SorterEnum;
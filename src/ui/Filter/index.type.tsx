export enum FilterEnum {
  all = "all",
  art = "art",
  biography = "biography",
  computers = "computers",
  history = "history",
  medical = "medical",
  poetry = "poetry",
}

export enum SorterEnum {
  newest = "newest",
  relevance = "relevance",
}

export type Filter = keyof typeof FilterEnum;

export type Sorter = keyof typeof SorterEnum;

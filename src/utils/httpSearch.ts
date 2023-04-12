import { Item } from "@/entities";

import products from "../data/products.json";

export type RequestData = {
  filter: number[] | null;
  startIndex: number;
};

export type ItemsData = {
  items: Item[];
  totalAmount: number;
};

const getItems = (requestData: RequestData) => {
  const filteredData = requestData.filter?.length
    ? products.filter((item) => {
        return requestData.filter?.includes(item.brand);
      })
    : products;

  const data = {
    items: filteredData.slice(
      requestData.startIndex,
      requestData.startIndex + 6
    ),
    totalAmount: filteredData.length,
  };

  return data;
};

export default getItems;

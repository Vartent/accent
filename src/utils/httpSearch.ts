import { Item } from "@/entities";
import { FilterEnum } from "@/ui/Filter/index.type";

import { API_KEY, BASE_URL, MAX_RESULTS } from "./constants";
import products from "../data/products.json";

export type RequestData = {
  filter: number[] | null;
  startIndex: number;
};

export type ItemsData = {
  items: Item[];
  totalAmount: number;
};
// const compose_url = (requestData: RequestData) => {
//   const baseUrl = requestData.baseUrl;
//   const order = `orderBy=${encodeURIComponent(requestData.sorter as string)}`;
//   let filters;

//   requestData.filter == FilterEnum.all
//     ? (filters = "")
//     : `+subject:${encodeURIComponent(requestData.filter as string)}`;
//   const query = `q=${encodeURIComponent(
//     requestData.searchQuery as string
//   )}${filters}`;
//   const key = `key=${encodeURIComponent(API_KEY)}`;
//   const maxResults = `maxResults=${MAX_RESULTS}`;
//   const startIndex = `startIndex=${requestData.startIndex}`;

//   const url = `${baseUrl}?${query}&${order}&${maxResults}&${startIndex}&${key}`;

//   return url;
// };

const getItems = (requestData: RequestData) => {
  // const data = requestData.filter?.length
  //   ? products
  //       .filter((item) => {
  //         return requestData.filter?.includes(item.brand);
  //       })
  //       .slice(requestData.startIndex, requestData.startIndex + 6)
  //   : products.slice(requestData.startIndex, requestData.startIndex + 6);

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

  // const data = fetch(compose_url(requestData))
  //   .then((resp) => {
  //     return resp.json();
  //   })
  //   .then((resp: VolumeDTO): BooksData => {
  //     console.log(resp);

  //     return resp;
  //   })
  //   .then((resp) => {
  //     return resp;
  //   })
  //   .catch((error) => {
  //     console.error("Error occured: ", error);
  //   });

  return data;
};

export default getItems;

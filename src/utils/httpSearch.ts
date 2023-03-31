import { VolumeDTO } from "@/dto/VolumeDTO";
import { BooksData } from "@/entities";
import { FilterEnum } from "@/ui/Filter/index.type";

import { API_KEY, BASE_URL, MAX_RESULTS } from "./constants";

export type RequestData = {
  baseUrl: typeof BASE_URL;
  filter: string | null;
  searchQuery: string | null;
  sorter: string | null;
  startIndex: number | null;
};

const compose_url = (requestData: RequestData) => {
  const baseUrl = requestData.baseUrl;
  const order = `orderBy=${encodeURIComponent(requestData.sorter as string)}`;
  let filters;

  requestData.filter == FilterEnum.all
    ? (filters = "")
    : `+subject:${encodeURIComponent(requestData.filter as string)}`;
  const query = `q=${encodeURIComponent(
    requestData.searchQuery as string
  )}${filters}`;
  const key = `key=${encodeURIComponent(API_KEY)}`;
  const maxResults = `maxResults=${MAX_RESULTS}`;
  const startIndex = `startIndex=${requestData.startIndex}`;

  const url = `${baseUrl}?${query}&${order}&${maxResults}&${startIndex}&${key}`;

  return url;
};

const getBooks = (requestData: RequestData) => {
  console.log(compose_url(requestData));

  const data = fetch(compose_url(requestData))
    .then((resp) => {
      return resp.json();
    })
    .then((resp: VolumeDTO): BooksData => {
      console.log(resp);

      return resp;
    })
    .then((resp) => {
      return resp;
    })
    .catch((error) => {
      console.error("Error occured: ", error);
    });

  return data;
};

export default getBooks;

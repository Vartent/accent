import { Item } from "@/dto/VolumeDTO";

import { BASE_URL } from "./constants";

const compose_url = (bookId: string) => {
  const baseUrl = BASE_URL;

  const url = `${baseUrl}/${bookId}`;

  return url;
};

const getBookById = (bookId: string) => {
  console.log(compose_url(bookId));

  const data = fetch(compose_url(bookId))
    .then((resp) => {
      return resp.json();
    })
    .then((resp: Item) => {
      return resp;
    })
    .catch((error) => {
      console.error("Error occured: ", error);
    });

  return data;
};

export default getBookById;

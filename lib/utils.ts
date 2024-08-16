import { TMDB_Response } from "../lib/types";

export const TMDB = async (endpoint: string) => {
  const request: TMDB_Response = await fetch(endpoint, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN}`,
    },
  })
    .then((res) => res.json())
    .catch((e) => console.warn(`Error in making request to TMDB: ${e}`));
  return request.results;
};

export const formatDate = (date: string) => {
  const arr = date.split("-");
  return `${arr[1]}/${arr[2]}/${arr[0]}`;
};

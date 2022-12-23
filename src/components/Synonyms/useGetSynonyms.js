import { useState } from "react";
import { fetchSynonyms } from "./api";

export const useGetSynonyms = () => {
  const [synonyms, setSynonyms] = useState([]);
  const [isFetchingSynonyms, setIsFetchingSynonyms] = useState(false);

  const getSynonyms = (word) => {
    setIsFetchingSynonyms(true);
    fetchSynonyms(word)
      .then((res) => setSynonyms(res))
      .then(() => setIsFetchingSynonyms(false));
  };

  return { isFetchingSynonyms, synonyms, getSynonyms };
};

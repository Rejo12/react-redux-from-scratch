import React, { useState } from "react";
import { fetchSynonyms } from "./api";
import { useGetSynonyms } from "./useGetSynonyms";

const Synonym = () => {
  const [word, setWord] = useState("");
  const { isFetchingSynonyms, synonyms, getSynonyms } = useGetSynonyms();

  const handleFetchSynonyms = (e) => {
    e.preventDefault();
    getSynonyms(word);
  };
  const handleSynonymsClicked = (newWord) => {
    setWord(newWord);
    getSynonyms(newWord);
  };
  return (
    <>
      <form onSubmit={handleFetchSynonyms}>
        <label htmlFor="word-input">Your word</label>
        <input
          id="word-input"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        ></input>
        <button>Submit</button>
      </form>
      <ul>
        {isFetchingSynonyms
          ? "Loading..."
          : synonyms.map((item) => (
              <li
                key={item.word}
                onClick={() => handleSynonymsClicked(item.word)}
              >
                {item.word}
              </li>
            ))}
      </ul>
    </>
  );
};

export default Synonym;

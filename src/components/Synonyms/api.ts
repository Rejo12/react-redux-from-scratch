const BASE_URL = 'https://api.datamuse.com'

export const fetchSynonyms = (wordToSearch:string) => {
  return fetch(`${BASE_URL}/words?rel_syn=${wordToSearch}`).then((res) =>
    res.json(),
  )
}

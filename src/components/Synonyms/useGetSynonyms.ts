import { useState } from 'react'
import { fetchSynonyms } from './api'

type synonymsType={
  word:string,
  score:number
}[]

export const useGetSynonyms = () => {
  const [synonyms, setSynonyms] = useState<synonymsType>([])
  const [isFetchingSynonyms, setIsFetchingSynonyms] = useState<boolean>(false)

  const getSynonyms = (word:string) => {
    setIsFetchingSynonyms(true)
    fetchSynonyms(word)
      .then((res) => setSynonyms(res))
      .then(() => setIsFetchingSynonyms(false))
  }

  return { isFetchingSynonyms, synonyms, getSynonyms }
}

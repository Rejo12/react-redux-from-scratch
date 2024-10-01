import { useState, useEffect } from 'react'
import axios from 'axios'

export const createNewState = (input, fieldsRequired = [], shape) => {
  const [newState, setNewState] = useState(shape)
  useEffect(() => {
    let tmp = {}
    fieldsRequired.forEach((item) => {
      //   console.log({ input });
      if (Object.keys(input).length > 0) {
        if (Object.hasOwn(input, item)) {
          console.log('here', input, item, newState)
          tmp[item] = input[item] ?? 'missing value'
        }
      }
    })
    setNewState(tmp)
  }, [input.id])

  //   console.log({ newState });
  return [newState, setNewState]
}

export const useFetchApi = (url) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [apiResponse, setApiResponse] = useState(null)

  const fetchApi = async () => {
    const response = await axios.get(url)
    setApiResponse(response.data)
    setIsSuccess(true)
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
    try {
      fetchApi()
    } catch (e) {
      setIsSuccess(false)
      setIsLoading(false)
    }
  }, [])

  return [isLoading, isSuccess, apiResponse]
}

export const useSelectedData = (item) => {
  const [selectedData, setSelectedData] = useState(null)

  const storeData = (item) => {
    console.log({ item })
    sessionStorage.setItem('ship', JSON.stringify(item))
    setSelectedData(item)
  }

  return [selectedData, storeData]
}

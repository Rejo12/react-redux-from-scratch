import { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

type SelectedPostType = {
  body:string,
  id:number,
  title:string,
  userId:number
  }

  type NewStateType={
    title:string,
    body:string
  }

export const createNewState = (input:SelectedPostType|{}, fieldsRequired:string[] = [], shape:{}) => {
  const [newState, setNewState] = useState<NewStateType>(shape as NewStateType)
  const tmp = []
  useEffect(() => {
    let tmp = {}
    fieldsRequired.forEach((item) => {
      //   console.log({ input });
      if (Object.keys(input).length > 0) {
        if (Object.hasOwnProperty(item)) {
          console.log('here', input, item, newState)
          tmp[item] = input[item] ?? 'missing value'
        }
      }
    })
    setNewState(tmp)
  }, [input.id])

  //   console.log({ newState });
  return {newState, setNewState}
}

type StarShipType={
  count: number,
  next: string,
  previous: null,
  results:{
    MGLT: string,
  cargo_capacity:string,
  consumables:string,
  cost_in_credits:string,
  created:string,
  crew:string,
  edited:string,
  films:string[],
  hyperdrive_rating:string,
  length:string,
  manufacturer:string,
  max_atmosphering_speed:string,
  model:string,
  name:string,
  passengers:string,
  pilots:[],
  starship_class:string,
  url:string,
  }[]
}

type ResultType = {
  MGLT: string,
cargo_capacity:string,
consumables:string,
cost_in_credits:string,
created:string,
crew:string,
edited:string,
films:string[],
hyperdrive_rating:string,
length:string,
manufacturer:string,
max_atmosphering_speed:string,
model:string,
name:string,
passengers:string,
pilots:[],
starship_class:string,
url:string,
}

type fetchApiType={
  data:StarShipType
}

export const useFetchApi = (url:string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [apiResponse, setApiResponse] = useState<StarShipType>(null as any as StarShipType)

  const fetchApi = async () => {
    const response = await axios.get<StarShipType>(url)
    console.log({response})
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

export const useSelectedData = () => {
  const [selectedData, setSelectedData] = useState<ResultType>(null as any as ResultType)

  const storeData = (item:ResultType):void => {
    console.log({ item })
    sessionStorage.setItem('ship', JSON.stringify(item))
    setSelectedData(item)
  }

  return [selectedData, storeData]
}

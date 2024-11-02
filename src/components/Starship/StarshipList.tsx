import React, { useEffect } from 'react'
import { useFetchApi, useSelectedData } from '../../Reusable/hooks'
import { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'

type listType = {
  MGLT: string
  cargo_capacity: string
  consumables: string
  cost_in_credits: string
  created: string
  crew: string
  edited: string
  films: string[]
  hyperdrive_rating: string
  length: string
  manufacturer: string
  max_atmosphering_speed: string
  model: string
  name: string
  passengers: string
  pilots: []
  starship_class: string
  url: string
}

const StarshipList = (props: RouteComponentProps) => {
  const [listData, setListData] = useState<listType[]>([])
  const [searchText, setSearchText] = useState('')
  const [isLoading, isSuccess, apiResponse] = useFetchApi(
    'https://swapi.dev/api/starships',
  )
  // const [selectedData, storeData] = useSelectedData()

  useEffect(() => {
    if (typeof apiResponse === 'object' && apiResponse !== null) {
      console.log({ apiResponse })

      setListData(apiResponse.results)
    }
  }, [apiResponse])

  // console.log(apiResponse)
  // console.log({ isLoading })
  console.log({ listData })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    let timerId = setTimeout(() => {
      filterSearch(searchText, timerId)
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [searchText])

  const filterSearch = (text: string, timerId: NodeJS.Timeout) => {
    console.log(text, timerId)
    if (typeof apiResponse === 'object' && apiResponse !== null) {
      let resultList = apiResponse.results.filter((item) => {
        // console.log(item)
        return (
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.manufacturer.toLowerCase().includes(text.toLowerCase())
        )
      })
      // console.log({ resultList })
      setListData(resultList)
    }
    clearTimeout(timerId)
  }

  const handleClick = (item: listType) => {
    // console.log({ item })
    // console.log({ storeData })
    // storeData(item)
    props.history.push('card')
  }
  console.log({ props })
  if (isLoading) {
    return <p>Loading...</p>
  } else {
    if (!isSuccess) {
      return <p>Oops something went wrong</p>
    }
    // if (lis)
    return (
      <div className="">
        <p>List view for starship</p>
        <input
          type="text"
          placeholder="search here.."
          value={searchText}
          onChange={handleChange}
        />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {listData.map((item) => (
              <tr onClick={() => handleClick(item)}>
                <td>{item.name}</td>
                <td>{item.manufacturer}</td>
                <td>{item.starship_class}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default StarshipList

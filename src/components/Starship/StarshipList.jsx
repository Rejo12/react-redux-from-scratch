import React, { useEffect } from 'react'
import { useFetchApi, useSelectedData } from '../../Reusable/hooks'
import { useState } from 'react'

const StarshipList = (props) => {
    const [listData, setListData] = useState([])
    const [searchText, setSearchText] = useState("")
    const [isLoading, isSuccess, apiResponse] = useFetchApi('https://swapi.dev/api/starships')
    const [selectedData, storeData] = useSelectedData()

    useEffect(() => {
        if (apiResponse) {
            setListData(apiResponse.results)
        }
    }, [apiResponse])


    // console.log(apiResponse)
    // console.log({ isLoading })
    // console.log({ listData })

    const handleChange = (e) => {
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


    const filterSearch = (text, timerId) => {
        console.log(text, timerId)
        let resultList = apiResponse.results.filter((item) => {
            // console.log(item)
            return item.name.toLowerCase().includes(text.toLowerCase()) || item.manufacturer.toLowerCase().includes(text.toLowerCase())
        })
        // console.log({ resultList })
        setListData(resultList)
        clearTimeout(timerId)
    }

    const handleClick = (item) => {
        // console.log({ item })
        // console.log({ storeData })
        storeData(item)
        props.history.push('card')
    }

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }
    else {
        if (!isSuccess) {
            return (
                <p>Oops something went wrong</p>
            )
        }
        // if (lis)
        return (
            <div className="">
                <p>List view for starship</p>
                <input type="text" placeholder='search here..' value={searchText} onChange={handleChange} />
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
                            <tr onClick={e => handleClick(item)}>
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
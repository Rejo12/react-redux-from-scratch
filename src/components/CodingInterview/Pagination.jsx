import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Pagination = () => {
  const [todos, setTodos] = useState([])
  const [noOfTodos, setNoOfTodos] = useState(10)
  const [currPage, setCurrPage] = useState(1)

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => setTodos(res.data))
  }, [])

  const totalPages = Math.ceil(todos.length / noOfTodos)

  const pageList = [...Array(totalPages + 1).keys()].slice(1)
  const lastElementIndex = noOfTodos * currPage
  const firstElementIndex = lastElementIndex - noOfTodos
  const visibleTodos = todos.slice(firstElementIndex, lastElementIndex)

  const handlePrevNavigation = () => {
    if (currPage !== 1) setCurrPage(currPage - 1)
  }

  const handleNextNavigation = () => {
    if (currPage !== pageList[pageList.length - 1]) setCurrPage(currPage + 1)
  }

  console.log(pageList)

  return (
    <>
      <select onChange={(e) => setNoOfTodos(e.target.value)}>
        <option value={10}>{10}</option>
        <option value={20}>{20}</option>
        <option value={50}>{50}</option>
      </select>
      {visibleTodos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
      <span onClick={handlePrevNavigation}>Previous</span>
      <p>
        {pageList.map((page) => (
          <span
            key={page}
            className={`${currPage === page ? 'activePage' : ''}`}
            onClick={() => setCurrPage(page)}
          >{`${page} | `}</span>
        ))}
      </p>
      <span onClick={handleNextNavigation}>Next</span>
    </>
  )
}

export default Pagination

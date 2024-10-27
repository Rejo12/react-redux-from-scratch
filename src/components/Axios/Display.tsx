import React, { useState } from 'react'
import Api from '../../Api'

type RequestTypes = 'get' | 'put' | 'post' | 'delete'

type ResultType = {
  body: string
  id: number
  title: string
  userId: number
}[]

type ServerResponse = {
  data: ResultType
}

const Display = () => {
  const [response, setResponse] = useState<ServerResponse>(
    null as unknown as ServerResponse,
  )
  const [error, setError] = useState(null)
  const apiConnector = new Api()
  const handleRequest = (type: RequestTypes) => {
    let result
    if (type === 'get') {
      result = apiConnector.getPosts()
    } else if (type === 'post') {
      let reqBody = {
        title: 'New post',
        body: 'Post saved to check the response.',
      }
      apiConnector.savePosts(reqBody)
    } else if (type === 'put') {
      let reqBody = {
        title: 'Updated post',
        body: 'Post updates.',
      }
      apiConnector.updatePost(reqBody)
    } else if (type === 'delete') {
      apiConnector.deletePost()
    } else {
      console.error('Invalid type')
    }
    if (result) {
      result
        .then((value) => {
          if (value.data) {
            console.log('value.data', value.data)
            setResponse(value.data)
          }
        })
        .catch((err) => {
          console.log(err.message)
          setError(err.message)
        })
    }
  }
  console.table(response)
  return (
    <>
      <button onClick={(e) => handleRequest('get')}>GET</button>
      <button onClick={(e) => handleRequest('post')}>POST</button>
      <button onClick={(e) => handleRequest('put')}>PUT</button>
      <button onClick={(e) => handleRequest('delete')}>DELETE</button>
      <div>
        <span>Display your data here</span>
      </div>
    </>
  )
}

export default Display

import axios, { AxiosInstance } from 'axios'

type ResultType={
  body:string,
id:number,
title:string
userId:number
}[]

type ServerResponse ={
  data:ResultType
}

type saveBody={
  title: string,
  body: string
}

class Api {
  baseUrl:string;
  token:string;
  apiInterface: AxiosInstance 
  constructor() {
    this.baseUrl = 'https://jsonplaceholder.typicode.com'
    this.token = 'not-required'
    this.apiInterface = axios.create({
      baseURL: this.baseUrl,
    })
    this.apiInterface.interceptors.request.use((req) => {
      // req.token = 'updated-token'
      console.log({ req })
      return req
    })
    this.apiInterface.interceptors.response.use((response) => {
      console.log({ response })
      if (response.status !== 200) {
        throw new Error(`error status thrown, status:${response.status}`)
      }
      return response
    })
  }

  getPosts = () => {
    // const newApi = new Api();
    return this.apiInterface.get<ServerResponse>('/posts')
  }

  savePosts = (reqBody:saveBody) => {
    return this.apiInterface.post('/posts', { reqBody })
  }

  updatePost = (reqBody:saveBody) => {
    return this.apiInterface.put('/posts/1', { reqBody })
  }

  deletePost = () => {
    return this.apiInterface.delete('/posts/1')
  }

  getPostById = (id:string) => {
    return this.apiInterface.get(`/posts/${id}`)
  }
}

export default Api

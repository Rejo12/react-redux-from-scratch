import axios from 'axios'
type userDataType={
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}[]

type ResponseType={
  data:userDataType
}
export const fetchInterviewDataApi = () => {
  return axios.get<ResponseType>('https://jsonplaceholder.typicode.com/users')
}

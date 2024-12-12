type InterviewActionType={
  type:string,
  payload:{
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
}

type PostsActionType={
  type:string,
  payload:{
    userId:number,
    id:number,
    title:string,
    body:string
}[]
}

type PostByIdType={
  type:string,
  payload:{
    userId:number,
    id:number,
    title:string,
    body:string
}
}

type ClearPost={
  type:string,
  payload?:{}
}

type ActionTypes = InterviewActionType | PostsActionType | PostByIdType | ClearPost

export type InterviewStateType={
  fetchedData: {
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
  }[],
  posts:{
    userId:number,
    id:number,
    title:string,
    body:string
}[],
  selectedPost: {
    userId?:number,
    id?:number,
    title?:string,
    body?:string
}  | {},
}


export const initialInterviewState:InterviewStateType = {
  fetchedData: [],
  posts: [],
  selectedPost: {} ,
}

export default function reducer(state = initialInterviewState, action:ActionTypes):InterviewStateType {
  switch (action.type) {
    case 'ghjm,':
      return Object.assign({}, state, { fetchedData: [] })

    case 'FETCH_INTERVIEW_DATA_DONE':
      return Object.assign({}, state, { fetchedData: action.payload })

    case 'FETCH_POSTS_DONE':
      return Object.assign({}, state, { posts: action.payload })

    case 'FETCH_POST_BY_ID_DONE':
      if(action.payload){

        return { ...initialInterviewState, selectedPost: action.payload }
      }

    case 'CLEAR_SELECTED_POST':
      return { ...initialInterviewState, selectedPost: {} }

    default:
      return state
  }
}

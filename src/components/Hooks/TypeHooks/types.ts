export type toDoProps={
    id:number,
    value:string,
    disabled:boolean
  }

 export type toDoActionProps={
    type:string,
    payload:string
  }  

  export type contextProps={
    userName:string,
    setUserName:React.Dispatch<React.SetStateAction<string>>
  }
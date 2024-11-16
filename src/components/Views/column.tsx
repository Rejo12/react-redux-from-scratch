import React from 'react'
import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp'
import type { GridRenderCellParams, GridColDef } from '@mui/x-data-grid'

type PostType = {
  body: string
  id: number
  title: string
  userId: number
}

const handleEditAction = (rowSelected: PostType) => {
  console.log({ rowSelected })
  // TODO: change the route by appending row id in url
}

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'Id',
    width: 50,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 400,
  },
  {
    field: 'userId',
    headerName: 'Action',
    width: 100,
    renderCell: (params: GridRenderCellParams<any, Date>) => {
      console.log({ params })
      return (
        <ModeEditOutlineSharpIcon
          style={{ cursor: 'pointer' }}
          onClick={(e) => handleEditAction(params.row)}
        />
      )
    },
  },
  // valueGetter: (value) => {
  //   // console.log({value})
  // },
]

export default columns

export const rowFormatter = (row: PostType) => {
  // if(row.userId){
  //     row.userId = []
  //     row.userId.push(
  //         <div>
  //         <ModeEditOutlineSharpIcon/>
  //         </div>
  //     )
  //     }
  return row
}

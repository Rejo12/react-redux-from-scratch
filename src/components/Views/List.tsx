import React, { useEffect, useContext } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import type { GridTreeNode, GridCellParams } from '@mui/x-data-grid'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'
import { fetchPosts } from '../../Action.js/InterviewAction'
import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp'
import columns, { rowFormatter } from './column'
import { ThemeContext } from '../../RouteComponent'

// const columns = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'firstName', headerName: 'First name', width: 130 },
//     { field: 'lastName', headerName: 'Last name', width: 130 },
//     {
//         field: 'age',
//         headerName: 'Age',
//         type: 'number',
//         width: 90,
//     },
//     {
//         field: 'fullName',
//         headerName: 'Full name',
//         description: 'This column has a value getter and is not sortable.',
//         sortable: true,
//         width: 160,
//         valueGetter: (params) =>
//             `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//         onCellClick: (value) => { console.log({ value }) }
//     },

// ];

type PostType = {
  body: string
  id: number
  title: string
  userId: number
}

type ListProps = RouteComponentProps & {
  posts: PostType[]
  fetchPosts: () => void
}

const List = (props: ListProps) => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext)

  useEffect(() => {
    props.fetchPosts()
  }, [])
  console.log('props', props)

  const rows = props.posts.map((item) => rowFormatter(item))
  const cellClicked = (
    value: GridCellParams<any, unknown, unknown, GridTreeNode>,
  ) => {
    console.log({ value })
    props.history.push(`/post/${value.row.id}`)
  }
  const colorStyle =
    currentTheme === 'light'
      ? { backgroundColor: '#F7E7CE', color: '#1E2640' }
      : {}
  return (
    <div className="table-props" style={colorStyle}>
      <DataGrid
        rows={rows}
        columns={columns}
        // pageSize={1}
        // autoPageSize={true}
        // rowsPerPageOptions={4}
        // checkboxSelection
        density="standard"
        // loading
        onCellClick={(value) => cellClicked(value)}
      />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  posts: state.interviewReducer.posts,
})

const mapDispatchToProps = (dispatch: any) => ({
  fetchPosts: () => {
    dispatch(fetchPosts())
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(List)

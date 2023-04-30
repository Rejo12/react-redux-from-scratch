import ModeEditOutlineSharpIcon from '@mui/icons-material/ModeEditOutlineSharp';
import React from 'react'

const handleEditAction=(rowSelected)=>{
    console.log({rowSelected})
    // TODO: change the route by appending row id in url
    
}

const columns=[
    {
        field:'id',
        headerName: 'Id',
        width:50
    },
    {
        field:'title',
        headerName: 'Title',
        width:400
    },
    {
        field:'userId',
        headerName:'Action',
        width:100,
        renderCell: (params) =>{
            console.log({params})
         return (
            <ModeEditOutlineSharpIcon style={{'cursor':'pointer'}} onClick={e=>handleEditAction(params.row)}/>
          )
        },
        valueGetter:(value)=>{
            // console.log({value})
        }
            
    }
]

export default columns;

export const rowFormatter=(row)=>{
    // if(row.userId){
    //     row.userId = []
    //     row.userId.push(
    //         <div>
    //         <ModeEditOutlineSharpIcon/>
    //         </div>
    //     )
    //     }
    return row;
}




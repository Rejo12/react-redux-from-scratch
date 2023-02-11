import React from 'react';
import { useState } from 'react';

const DragDrop=()=>{
    const [widgets,setWidget] = useState([])
    const handleOnDrag=(widgetType,e)=>{
        e.dataTransfer.setData("widgetType",widgetType)
    }
    const handleDragOver=(e)=>{
        e.preventDefault()
    }
    
    const handleDrop=(e)=>{
        const widget = e.dataTransfer.getData("widgetType");
        console.log({widget});
        setWidget([...widgets,widget])
    }
    return(
        <>
        <div className="widget" draggable onDragStart={e=>handleOnDrag("Widget A",e)}>
            Widget A
        </div>
        <div className="widget" draggable onDragStart={e=>handleOnDrag("Widget B",e)}>
            Widget B
        </div>
        <div className="widget" draggable onDragStart={e=>handleOnDrag("Widget C",e)}>
            Widget C
        </div>
        <>
        <div className='drop-page' onDrop={handleDrop} onDragOver={handleDragOver}>
        {widgets.map((item,index)=>(
            <div key={index}>
                {item}
                </div>
        )
            
        )}
        </div>
        </>
        </>
    )
}

export default DragDrop;
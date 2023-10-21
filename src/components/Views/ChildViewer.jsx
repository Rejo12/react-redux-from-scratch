import React from 'react'
import { useEffect } from 'react'

const ChildViewer = ({ clHeight, clWidth, imgUrl }) => {



    return (
        <>
            <div style={{ 'height': clHeight, width: clWidth, background: 'red' }}>
                <img src={imgUrl} width="100%" height="100%" />

            </div>
        </>
    )
}

export default ChildViewer
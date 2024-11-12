import React from 'react'
import { useEffect } from 'react'

type ChildViewerProps = {
  clHeight: string
  clWidth: string
  imgUrl: string
}
const ChildViewer = ({ clHeight, clWidth, imgUrl }: ChildViewerProps) => {
  return (
    <>
      <div style={{ height: clHeight, width: clWidth, background: 'red' }}>
        <img src={imgUrl} width="100%" height="100%" />
      </div>
    </>
  )
}

export default ChildViewer

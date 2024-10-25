import React from 'react'
import { useState } from 'react'

const DragDrop = () => {
  const [widgets, setWidget] = useState<string[]>([])
  const handleOnDrag = (
    widgetType: string,
    e: React.DragEvent<HTMLDivElement>,
  ) => {
    e.dataTransfer.setData('widgetType', widgetType)
  }
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const widget = e.dataTransfer.getData('widgetType')
    // console.log({ widget })
    setWidget([...widgets, widget])
  }
  console.log({ widgets })
  return (
    <>
      <div
        className="widget"
        draggable
        onDragStart={(e) => handleOnDrag('Widget A', e)}
      >
        Widget A
      </div>
      <div
        className="widget"
        draggable
        onDragStart={(e) => handleOnDrag('Widget B', e)}
      >
        Widget B
      </div>
      <div
        className="widget"
        draggable
        onDragStart={(e) => handleOnDrag('Widget C', e)}
      >
        Widget C
      </div>
      <>
        <div
          className="drop-page"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {widgets.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </>
    </>
  )
}

export default DragDrop

import React, { useState, useEffect } from 'react'
import ChildViewer from './ChildViewer'

let input = [
  {
    imgUrl:
      'https://fastly.picsum.photos/id/437/300/300.jpg?hmac=k1atMeeR7NK_U3kqTdje8-dswg4vWyxF3WzogfHh9P8',
  },
  {
    imgUrl:
      'https://fastly.picsum.photos/id/500/300/300.jpg?hmac=fdEpaPwRUT3XtTZ7Kb3avFD1V1OQoLmdWZ9Vt9alXDY',
  },
  {
    imgUrl:
      'https://fastly.picsum.photos/id/600/300/300.jpg?hmac=RDwbwl7UEDo73lYwxfj3A3MiL-ND0Covj58-0_RUqhM',
  },
]
const Carousel = () => {
  const [inputList, setInputList] = useState(input)
  const [timerId, setTimerId] = useState(null)
  const [mainImageIndex, setMainImageIndex] = useState(0)

  useEffect(() => {
    // let newList = [inputList[0], inputList[1]]
    // setImageList(newList)
    // setMainImageIndex(1)
  }, [])

  const handleNav = (direction) => {
    handlePause()
    if (direction === 'back') {
      let newImageIndex =
        mainImageIndex === 0 ? input.length - 1 : mainImageIndex - 1
      console.log({ newImageIndex })
      setMainImageIndex(newImageIndex)
    } else {
      let newImageIndex =
        mainImageIndex === input.length - 1 ? 0 : mainImageIndex + 1
      console.log({ newImageIndex })
      setMainImageIndex(newImageIndex)
    }
  }

  const handlePlay = () => {
    let currTimerId = null
    if (!timerId) {
      currTimerId = setInterval(() => {
        console.log('currIndex', mainImageIndex)
        setMainImageIndex((prevId) =>
          prevId === input.length - 1 ? 0 : prevId + 1,
        )
      }, 1000)
      setTimerId(currTimerId)
    }
  }

  const handlePause = () => {
    if (timerId) {
      clearInterval(timerId)
      setTimerId(null)
    }
  }

  console.log({ mainImageIndex })
  // console.log({ imageList })
  return (
    <>
      {/* <div className='cl-container'>
                <span onClick={e => handleNav('back')}>Back</span>
                <div className='cl-imgContainer'>
                    <img src={input[mainImageIndex].imgUrl} width="300" height='300' />
                    <span onClick={e => handlePlay()}>Play </span>
                    <span onClick={e => handlePause()}>Pause </span>
                </div>
                <span onClick={e => handleNav('forward')}>Forward</span>

            </div> */}

      <div className="container">
        <p>React-Redux</p>
      </div>
    </>
  )
}

export default Carousel

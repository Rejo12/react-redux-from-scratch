import React, { useState } from 'react'
import HideImageIcon from '@mui/icons-material/HideImage'
import { Button } from '@mui/material'

const input = [
  {
    url: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb',
    disp: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c',
    disp: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1520763185298-1b434c919102',
    disp: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1442458017215-285b83f65851',
    disp: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1496483648148-47c686dc86a8',
    disp: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1591181520189-abcb0735c65d',
    disp: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1626808642875-0aa545482dfb',
    disp: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c',
    disp: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1520763185298-1b434c919102',
    disp: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1442458017215-285b83f65851',
    disp: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1496483648148-47c686dc86a8',
    disp: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1591181520189-abcb0735c65d',
    disp: false,
  },
]

const generateGrid = (input: { url: string; disp: boolean }[]) => {
  const rowArr = new Array(3)
    .fill([])
    .map((item, index) => new Array(4).fill('hi' + index))
  let i = 0
  rowArr.forEach((innerArr) => {
    innerArr.forEach((item, index) => {
      innerArr[index] = input[i]
      i++
    })
  })
  return rowArr
}

const MemoryGame = () => {
  const [imgList, setImageList] = useState(generateGrid(input))
  const [userSelectionList, setUserSelectionList] = useState<
    { outerIndex: number; innerIndex: number; value: string }[]
  >([])
  const checkForMatch = (
    outerIndex: number,
    innerIndex: number,
    value: string,
  ) => {
    let tmpImgList = JSON.parse(JSON.stringify(imgList))
    let tmpUserSelection = [...userSelectionList]
    tmpImgList[outerIndex][innerIndex].disp = true
    let obj = { outerIndex, innerIndex, value }
    if (tmpUserSelection.length === 2) {
      tmpUserSelection.shift()
    }
    tmpUserSelection.push(obj)
    // check logic
    if (tmpUserSelection.length > 1) {
      if (tmpUserSelection[0].value === tmpUserSelection[1].value) {
        tmpUserSelection = []
      } else {
        tmpImgList[tmpUserSelection[0].outerIndex][
          tmpUserSelection[0].innerIndex
        ].disp = false
        // tmpUserSelection.pop()
      }
    }
    setUserSelectionList(tmpUserSelection)
    setImageList(tmpImgList)
  }

  const resetImages = () => {
    setImageList(generateGrid(input))
    setUserSelectionList([])
  }

  const imagesNotRevealed = imgList.find((item) =>
    item.find((ele) => ele.disp === false),
  )
  return (
    <div>
      {imgList.map((outerRow, outerIndex) => {
        return (
          <div
            className="centered"
            style={{ gap: '25px', paddingBottom: '25px' }}
          >
            {outerRow.map((item, innerIndex) => {
              return item.disp === false ? (
                <HideImageIcon
                  fontSize="large"
                  color="primary"
                  style={{ width: '200px', height: '200px' }}
                  onClick={(e) =>
                    checkForMatch(outerIndex, innerIndex, item.url)
                  }
                />
              ) : (
                // <img src={ item.url} alt={item.url} width="200px" height="200px" />
                <img
                  src={item.url}
                  alt={item.url}
                  width="200px"
                  height="200px"
                />
              )
              // return (<HideImageIcon fontSize="medium"/>)
            })}
          </div>
        )
      })}
      {imagesNotRevealed === undefined && (
        <div className="centered" style={{ gap: '35px', paddingTop: '10px' }}>
          <p style={{ paddingTop: '10px' }}>You won</p>
          <Button onClick={resetImages}>Reset</Button>
        </div>
      )}
    </div>
  )
}

export default MemoryGame

import React, { useState } from 'react'

function generateBoard(size) {
  const board = []
  for (let i = 0; i < size; i++) {
    board.push(new Array(size).fill())
  }
  return board
}

function TicTacToe() {
  const [board, setBoard] = useState(generateBoard(3))
  const [currUser, setCurrUser] = useState('x')
  const handleClick = (r, c) => {
    console.log(r, c)
    let tmp = [...board]
    tmp[r][c] = currUser
    console.log(tmp)
    setBoard(tmp)
    if (checkForWin()) {
      console.log(currUser + ' wins')
      setBoard(generateBoard(3))
    }
    setCurrUser(currUser === 'x' ? 'o' : 'x')
    // else {
    // }
  }

  function checkForWin() {
    console.log(board)
    // horizontally
    for (let row of board) {
      let symbols = new Set(row)
      // console.log(symbols)
      if (symbols.size === 1 && !symbols.has(undefined)) {
        return true
      }
    }
    // vertically
    let i = 0
    while (i < board.length) {
      let columnArray = []
      for (let j = 0; j < board.length; j++) {
        columnArray.push(board[j][i])
        if (columnArray.length === board.length) {
          let symbols = new Set(columnArray)
          // console.log(symbols)
          if (symbols.size === 1 && !symbols.has(undefined)) {
            return true
          }
        }
      }
      i++
    }

    // diagonally

    let diagonalArr = [[], []]
    for (let i = 0; i < board.length; i++) {
      diagonalArr[0].push(board[i][i])
      if (diagonalArr[0].length === board.length) {
        let symbols = new Set(diagonalArr[0])
        // console.log(symbols)
        if (symbols.size === 1 && !symbols.has(undefined)) {
          return true
        }
      }
    }
    for (let j = board.length - 1; j !== -1; j--) {
      let i = board.length - 1 - j
      // console.log("i,j", i, j)
      diagonalArr[1].push(board[board.length - 1 - j][j])
      if (diagonalArr[1].length === board.length) {
        let symbols = new Set(diagonalArr[1])
        // console.log(symbols)
        if (symbols.size === 1 && !symbols.has(undefined)) {
          return true
        }
      }
    }
    console.log(diagonalArr)
    return false
  }
  // console.log(board)
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {board.map((row, r) => {
        return (
          <div key={r} style={{ display: 'flex' }}>
            {row.map((cell, c) => {
              return (
                <div
                  key={c}
                  style={{
                    border: '2px solid blue',
                    height: '50px',
                    width: '50px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onClick={() => handleClick(r, c)}
                >
                  {board[r][c]}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default TicTacToe

import React from 'react'

type NumberCompProps = {
  numericValue: number
  handleSelect: (value: number) => void
  selectedRating: number
}

const Number = ({
  numericValue,
  handleSelect,
  selectedRating,
}: NumberCompProps) => {
  return (
    <span
      onClick={() => handleSelect(numericValue)}
      className={
        selectedRating === numericValue ? 'rating-selected' : 'rating-value'
      }
    >
      {numericValue}
    </span>
  )
}

export default Number

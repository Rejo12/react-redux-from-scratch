import React from 'react';

const Number = ({ numericValue, handleSelect, selectedRating }) => {
    return (
        <span onClick={e => handleSelect(numericValue)} className={selectedRating === numericValue ? 'rating-selected' : 'rating-value'}>
            {numericValue}
        </span>
    )
}

export default Number;
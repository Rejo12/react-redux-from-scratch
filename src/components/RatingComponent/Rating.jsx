import React from 'react';
import { useState } from 'react';
import Number from './NumberComponent';
// import star from './images/icon-star.svg'

const Rating = () => {
    const [selectedRating, setSelectedRating] = useState(null)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const list = [1, 2, 3, 4, 5]
    const handleselectedRating = (value) => {
        setSelectedRating(value)
    }
    const handleSubmit = () => {
        setIsSubmitted(true)
    }
    return (
        <div className='rating-container'>
            <div className='rating-panel'>
                <div className="padding-container">
                    {!isSubmitted ? (
                        <>
                            <span className='rating-star'>
                                <img src='./images/icon-star.svg' alt="star" width="13.5px" height="13.5px" />
                            </span>
                            <br />
                            <br />
                            <br />
                            <h4 className='rating-header'>How did we do?</h4>
                            <p className='rating-paragraph'>Please let us know how we did with your support requests. All feedback is appreciated to help us improve our offering!</p>
                            <br />
                            {list.map((item, id) => (
                                <Number key={id} numericValue={item} selectedRating={selectedRating} handleSelect={handleselectedRating} />
                            ))}
                            <br />
                            <br />
                            <br />
                            <div>
                                <button className='rating-button' onClick={handleSubmit}>SUBMIT</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className='rating-thank-you-img-container'>
                                <div>
                                    <img src='./images/illustration-thank-you.svg' alt="thank you" width="155px" height="100px" />
                                </div>
                                <div className='rating-thank-you-p'>
                                    <p>You selected {selectedRating} out of 5</p>
                                </div>
                                <br />
                                <h4>Thank you!</h4>
                                <p>
                                    We appreciate you taking the time to give a rating. If you ever need more support,don't hesitate to get in touch!
                                </p>
                            </div>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Rating;
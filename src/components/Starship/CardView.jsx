import React from 'react'
import { useSelectedData } from '../../Reusable/hooks'

const CardView = () => {

    let obj = JSON.parse(sessionStorage.getItem('ship'))
    return (
        <div className="">
            <p>
                name:{obj.name}
            </p>
            <p>
                manufacturer:{obj.manufacturer}
            </p>
            <p>
                starship_class:{obj.starship_class}
            </p>
        </div>
    )
}

export default CardView
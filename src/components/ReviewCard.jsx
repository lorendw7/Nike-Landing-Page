import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,
    customerName, rating, feedback
}) => {
    return (
        <div className="flex flex-col
            justify-center items-center">
            <img
                src={imgURL}
                alt="customer"
                className='rounded-full
                w-[120px] h-[120px] object-cover'/>
            <p className="mt-6 info-text
                max-w-sm text-center">{feedback}</p>
            <div className="flex justify-center
                items-center gap-2.5 mt-3">
                <img 
                    src={star}
                    width={24}
                    height={24}
                    className="object-contain m-0"/>
                <p className="text-xl font-montserrat
                    text-slate-gray">({rating})</p>
            </div>
            <h3 className="font-palanquin
                text-3xl font-bold mt-1">{customerName}</h3>
        </div>
    )
}

export default ReviewCard
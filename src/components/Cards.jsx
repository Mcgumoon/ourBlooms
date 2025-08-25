import React from 'react'

const Cards = ({ image, alt, className='' }) => {
    return (
        <div className={`w-64 h-64 rounded-lg overflow-hidden shadow ${className}`}>
            <img
                src={image}
                alt={alt}
                className='block w-full h-full object-cover'
                loading='eager'
            />
        </div>
    )
}

export default Cards

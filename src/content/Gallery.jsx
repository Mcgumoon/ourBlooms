import React from 'react'
import GalleryArrangements from '../components/GalleryArrangements'
import ListingServices from '../components/ListingServices'
import { Link } from 'react-router-dom'

const Gallery = () => {
  return (
    <div className='w-full flex flex-col'>
      <h2 className='text-8xl font-dancing font-extrabold text-center m-4 p-2'>Gallery</h2>

      <div className='flex flex-col lg:flex-row'>
        <h4 className='uppercase text-gray-500 font-semibold w-full lg:w-52 px-5 pt-5'>Seasonal Arrangements</h4>
        <GalleryArrangements />
      </div>

      <div className='flex flex-col lg:flex-row'>
        <h4 className='uppercase text-gray-500 font-semibold w-full lg:w-52 px-5 pt-5'>Services</h4>
        <ListingServices />
      </div>

      <section className='w-full h-screen bg-white flex flex-col justify-center items-center'>
        <h4 className='uppercase font-semibold text-gray-600'>Work with us</h4>
        <h2 className='font-dancing font-extrabold  text-4xl md:text-5xl text-center py-24 px-6'>Discover how we can add a touch of natural beauty <br /> to your next event</h2>
        <button className='relative rounded-md bg-yellow-400 w-[100px] h-10 flex justify-center items-center mt-5 hover:bg-yellow-300 transition-colors duration-300'>
          <Link to="/about">
            <p className='no-underline text-black text-bold'>About Us</p>
          </Link>
        </button>
      </section>

    </div>
  )
}

export default Gallery

import React from 'react'
import owner from '../images/owner.jpg'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='w-full flex flex-col space-y-6'>
      <h2 className='text-8xl font-dancing font-extrabold text-center m-4 py-6'>About</h2>
      <p className='uppercase text-gray-500 font-bold p-4 px-48 max-md:px-14 md:text-lg'>Our story</p>
      <Cards image={owner} alt="photo of lily smith" className='self-center w-[500px] h-[550px] max-md:w-80 max-md:h-96' />
      <h4 className='text-center uppercase font-bold py-1 text-2xl max-md:text-xl'>Lily Smith</h4>
      <p className='text-gray-500 text-center font-semibold'>Owner</p>

      <h5 className='font-bold text-center font-dancing text-5xl p-10 max-md:text-4xl'>Our Blooms was founded in honor of Lily Smith’s loving aunts, Teresa and Beth.</h5>

      <section className='flex flex-col md:flex-row self-center max-md:space-y-6 rounded-3xl overflow-x-hidden'>
        <Cards image={owner} alt='sdfds' className='lg:m-5 lg:w-[30vw] lg:h-96 md:w-[30vw] md:h-52 w-[500px] max-sm:w-[450px]' />
        <Cards image={owner} alt='sdfds' className='lg:m-5 lg:w-[30vw] lg:h-96 md:w-[30vw] md:h-52 w-[500px] max-sm:w-[450px]' />
        <Cards image={owner} alt='sdfds' className='lg:m-5 lg:w-[30vw] lg:h-96 md:w-[30vw] md:h-52 w-[500px] max-sm:w-[450px]' />
      </section>

      <p className='text-lg font-semibold px-10 py-1 md:p-20 md:text-2xl text-left'>Lily’s journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil.</p>
      <p className='text-lg font-semibold px-10 py-1 md:p-20 md:text-2xl text-left'>Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.</p>

      <Cards image={owner} alt='blaljknjf' className='self-center w-[600px] h-[350px] max-sm:w-[450px] max-sm:h-[300px]' />
      <p className='text-lg font-semibold w-full px-10 py-1 md:px-20 md:py-10 md:text-2xl text-left'>From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality.</p>
      <p className='text-lg font-semibold w-full px-10 py-1 md:px-20 md:py-10 
      md:text-2xl text-left'>Discover how we can add a touch of natural
        beauty to your next event.</p>

      <div className='self-center h-24'>
        <button className='relative rounded-md bg-yellow-400 w-[200px] h-10 flex justify-center items-center self-center mt-5 hover:bg-yellow-300 transition-colors duration-300 uppercase'>
          <Link to="/contact">
            <p className='no-underline text-black text-bold text-sm'>Book a consultation</p>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default AboutUs

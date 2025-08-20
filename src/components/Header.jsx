import React from 'react';
import img from '../images/flower.jpg';

const Header = () => {
  const imageUrl = img;

  return (
    <header className='position-relative text-center p-14'>
      <h1 className='text-9xl max-md:text-7xl font-extrabold pt-10 pb-10 font-serif w-[100%] justify-center'>Our Blooms</h1>
      <div className='relative flex justify-center items-center'>
        <img src={imageUrl} alt="A flower inside a bottle base"
          className='w-full h-[700px] justify-center rounded-3xl max-md:w-[600px] max-md:h-[620px]' />

        <div className='absolute bottom-6 left-6 justify-center items-center flex flex-col'>
          <div className='w-40 h-40 max-md:w-28 max-md:h-28 rounded-full bg-yellow-400 shadow-xl ring-1 ring-black/10 grid place-items-center text-center'>
            <div className='text-[10px] font-bold uppercase leading-3'>New</div>
            <div className='text-sm font-extrabold leading-tight'>10% Off Your <br />First Order</div>
            <div className='text-[10px] font-semibold uppercase tracking-wide'>Special</div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

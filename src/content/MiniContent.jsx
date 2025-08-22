import React from 'react'
import { Link } from 'react-router-dom';
import LoopingCarousel from '../components/LoopingCarousel';


const MiniContent = () => {
    return (
        <>
            <section className='w-full h-80 bg-white flex flex-col justify-center items-center'>
                <h3 className='uppercase from-neutral-600 p-3'>Who we are</h3>
                <h2 className='font-dancing font-bold text-3xl p-2 text-center'>We're Our Blooms and we're here to help you find <br />your floral story</h2>

                <button className='relative rounded-md bg-yellow-400 w-[100px] h-10 flex justify-center items-center mt-5 hover:bg-yellow-300 transition-colors duration-300'>
                    <Link to="/about">
                        <p className='no-underline text-black text-bold'>About Us</p>
                    </Link>
                </button>
            </section>

            <section>
                <LoopingCarousel />
                <div className='flex flex-col justify-center items-center text-center border-b border-black p-1'>
                    <h2 className='uppercase font-dancing text-3xl font-extrabold max-md:font-bold p-8'>What we do</h2>
                    <h6 className='font-dancing text-2xl max-md:text-xl font-normal p-3'>We bring a touch of that simple magic into your world</h6>
                </div>
            </section>
        </>
    )
}

export default MiniContent

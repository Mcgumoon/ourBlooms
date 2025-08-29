import ListingServices from '../components/ListingServices';
import bloosoms from '../images/bloosoms.jpg';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';


const Listings = () => {
    return (
        <div className='flex flex-col items-center justify-center p-4 bg-white'>
            <ListingServices />

            <div className='w-full flex flex-col place-items-center m-20'>
                <Cards image={bloosoms} alt='Cherry Bloosoms' className='w-full h-[700px] rounded-3xl max-md:h-96' />
            </div>

            <section className='w-full h-96 bg-white flex flex-col justify-center items-center'>
                <h4 className='uppercase font-semibold text-gray-600'>Work with us</h4>
                <h2 className='font-dancing font-extrabold text-4xl md:text-5xl text-center px-6 py-16'>Discover how we can add a touch of natural beauty <br /> to your next event</h2>
                <button className='relative rounded-md bg-red-400 w-[100px] h-10 flex justify-center items-center mt-5 hover:bg-red-300 transition-colors duration-300'>
                    <Link to="/about">
                        <p className='no-underline text-white font-semibold'>About Us</p>
                    </Link>
                </button>
            </section>
        </div>
    )
}

export default Listings

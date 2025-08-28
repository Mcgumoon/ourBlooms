import Cards from './Cards';
import services from '../data/ServiceCardsData';


const ListingServices = ({ item = services}) => {
  return (
    <div className='relative w-full items-center bg-white p-4'>
      <div>
        <ul className='flex flex-col justify-center items-center gap-4'>
          {item.map((service) => (
            <li  key={service.id} className='border-t border-black w-full  place-items-center p-5'>
              <h2 className='text-2xl text-center font-extrabold font-dancing p-4'>
                {service.id}
              </h2>
              <Cards image={service.src} alt={service.alt} />
              <h3 className='text-2xl font-bold font-serif text-center py-7 uppercase '>
                {service.title}
              </h3>

              <h6 className='text-center w-9/12 max-md:w-full py-2 pb-12'>
                {service.description}
              </h6>

            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ListingServices

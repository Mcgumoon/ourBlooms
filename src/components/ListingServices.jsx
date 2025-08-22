import flower from '../images/flower.jpg';
import Cards from './Cards';

const ServiceCardsData = [
  {
    id: 1,
    title: 'Floral Installations',
    description: 'Living art for Homes, businesses, and events.',
    src: flower,
    alt: 'Floral Installations',
  },
  {
    id: 2,
    title: 'Native Plant Arrangements',
    description: 'Whether it\'s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.',
    src: flower,
    alt: 'Native Plant Arrangements',
  },
  {
    id: 3,
    title: 'Custom Floral Concepts',
    description: 'Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.',
    src: flower,
    alt: 'Custom Floral Concepts',
  }
];

const ListingServices = () => {
  return (
    <div className='relative w-full items-center bg-white p-4'>
      <div>
        <ul className='flex flex-col justify-center items-center gap-4'>
          {ServiceCardsData.map((service) => (
            <li className='border-b border-black w-full  place-items-center p-5'>
              <h2 className='text-2xl text-center font-bold font-dancing p-4'>
                {service.id}
              </h2>
              <Cards image={service.src} alt={service.alt} />
              <h3 className='text-2xl font-bold font-serif text-center py-7 uppercase '>
                {service.title}
              </h3>

              <h6 className='text-center  py-2 pb-12'>
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

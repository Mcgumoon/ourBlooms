import img from '../images/flower.jpg';

const Hero = () => {
  const imageUrl = img;

  return (
    <header className='position-relative text-center p-14'>
      <h1 className='font-dancing text-9xl font-extrabold max-md:text-9xl pt-10 pb-10 w-[100%] justify-center'>Our Blooms</h1>
      <div className='relative flex justify-center items-center'>
        <img src={imageUrl} alt="A flower inside a bottle base"
          className='w-full h-[700px] object-none justify-center rounded-3xl max-md:w-[600px] max-md:h-[620px] max-md:object-fill' />

        <div className='absolute bottom-6 left-6 justify-center items-center flex flex-col max-md:pl-5'>
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

export default Hero;

import flower from '../images/flower.jpg'

const Footer = () => {
    return (
        <footer className='flex flex-col items-center'>
            <div className="relative w-[600px] md:w-[90vw] max-sm:w-[450px] h-[500px] rounded-t-3xl overflow-hidden">
                <img src={flower} alt="flower" className='absolute inset-0 w-full h-full object-cover' />
                <div className='absolute inset-0 bg-gradient-to-t from-red-200 to-transparent'>
                    <h1 className='absolute bottom-16 left-1/2 -translate-x-1/2 text-white font-extrabold
                    tracking-tight text-8xl md:text-9xl'>OB.</h1>
                    <h5 className='absolute bottom-4 left-10 -translate-x-2 text-white font-bold
                    tracking-tight text-2xl md:text-3xl'>Miami, Fl</h5>
                    <h5 className='absolute bottom-4 right-10 translate-x-2 text-white font-bold
                    tracking-tight text-2xl md:3xl'>Contact</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer
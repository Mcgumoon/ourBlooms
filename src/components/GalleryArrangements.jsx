import Cards from "./Cards"
import seasonal from '../data/SeasonalArrangements';

const GalleryArrangements = () => {
    return (
        <div className="w-full flex flex-row items-center">
            <ul className="flex flex-col lg:flex-row flex-wrap w-full p-5">
                {seasonal.map((service) => (
                    <li className="flex flex-col py-4 px-4">
                        <div className="flex flex-row py-2 md:py-4 md:px-2">
                            <h5 className="uppercase flex flex-row font-bold">{service.title}</h5>
                            <p className="flex flex-row text-gray-500 font-semibold text-xs px-2 py-1">${service.price}/Bunch</p>
                        </div>
                        <Cards image={service.src} alt={service.alt}
                        className="w-[100%] lg:w-96"/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GalleryArrangements

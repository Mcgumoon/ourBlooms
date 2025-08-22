import flowerImage from '../images/pinkbouquet.jpg';
import flower2Image from '../images/bouquet.jpg';
import flower3Image from '../images/flowerbouquet.jpg';
import flower4Image from '../images/pinktulips.jpg';
import flower5Image from '../images/whiteflower.jpg';
import Cards from './Cards';

const flower = [
    { src: flowerImage, alt: "Pink Flower arrangement" },
    { src: flower2Image, alt: "Flower bouquet" },
    { src: flower3Image, alt: "Flower bouquet" },
    { src: flower4Image, alt: "Pink tulips" },
    { src: flower5Image, alt: "White flower" }
]

const LoopingCarousel = () => {

    const loopedFlowers = [...flower, ...flower, ...flower];

    return (
        <div className='relative w-full overflow-hidden py-8'>
            <div className='group'>
                <ul
                    className='flex gap-4 w-max
            animate-[scroll_25s_linear_infinite]
            '>
                    {loopedFlowers.map((item, index) => (
                        <li className='shrink-0 list-none' key={index} aria-hidden={index >= flower.length ? "true" : "false"}>
                            <Cards image={item.src} alt={item.alt} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default LoopingCarousel

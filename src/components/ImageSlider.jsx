import  { useState } from 'react';
import {GoArrowLeft, GoArrowRight} from "react-icons/go";
import PropTypes from "prop-types";

const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animating, setAnimating] = useState(false);


    const handleNext = () => {
        if (!animating) {
            setAnimating(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setTimeout(() => setAnimating(false), 500);
        }
    };

    const handlePrev = () => {
        if (!animating) {
            setAnimating(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setTimeout(() => setAnimating(false), 500);
        }
    };

    return (
        <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-4">
            <div className="relative w-full md:hidden">

                <GoArrowLeft  onClick={handlePrev} className='md:hidden text-3xl absolute left-0 top-1/2 transform -translate-y-1/2 ' />

                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className={`w-full h-auto ${animating ? 'animate-fadeIn' : ''}`} />

                <GoArrowRight  onClick={handleNext} className='md:hidden text-3xl absolute right-0 top-1/2 transform -translate-y-1/2' />

            </div>
            <div className="hidden md:flex md:flex-col md:items-end w-full space-y-4 ">
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} className="w-[490px] h-auto" />
                ))}
            </div>
        </div>
    );
};

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default ImageSlider;



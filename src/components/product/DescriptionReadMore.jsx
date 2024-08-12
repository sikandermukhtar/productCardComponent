import {useState} from "react";
import PropTypes from "prop-types";

export default function DescriptionReadMore( {text} ){

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className='flex w-96 mx-auto md:mx-0 mb-6 pl-2 md:p-0'>
            <p className='text-md text-gray-800 w-full font-light normal-case'>
                {isExpanded ? text :  `${text.slice(0, 200)}... `}
                <span onClick={toggleReadMore} className='font-medium ml-2 underline hover:no-underline cursor-pointer'>{isExpanded ? "Read less" : " Read more"}</span>
            </p>
        </div>
    )
}

DescriptionReadMore.propTypes = {
    text: PropTypes.string.isRequired
}


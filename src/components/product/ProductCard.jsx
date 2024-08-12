import ImageSlider from "./ImageSlider.jsx";
import OrderForm from "./OrderForm.jsx";
import DescriptionReadMore from "./DescriptionReadMore.jsx";
import FeaturesList from "./FeaturesList.jsx";
import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";
function ProductCard({
        title,
        subTitle,
        description,
        packSize = "6PK",
        price,
        subscriptionPrice,
        subscriptionBenefit,
        images = [],
        features= [],
        rating,
        reviewCount,
        reviews= [],
        buttonLabel= "Add to cart",
})
{

    const [ isReviewTabOpen, setIsReviewTabOpen] = useState(false)
    const reviewRef = useRef(null);

    const showReviews = () => {
        setIsReviewTabOpen(prevState => !prevState);
    }

    useEffect(() => {
        if (isReviewTabOpen && reviewRef.current) {
            reviewRef.current.scrollIntoView({behavior : "smooth"});
        }
    }, [isReviewTabOpen]);



    return (
        <>
            <div className='flex mt-14 border-t border-gray-400 flex-col md:flex-row justify-between'>

                <div className="container mx-auto p-4 md:m-0 md:w-1/2">
                    <ImageSlider images={images}/>
                </div>
                <div className='mt-6 mx-0 md:w-1/2 flex flex-col gap-y-6 md:items-start'>
                    <div className='my-2 flex flex-col items-center gap-y-3 justify-center md:items-start'>
                        <h1 className='text-2xl font-medium'>{title}</h1>
                        <h2 className='text-md font-normal'>{subTitle}</h2>
                        <h2 className='text-md font-normal'>{packSize}</h2>
                    </div>
                    <div>
                        <OrderForm price={price} subscriptionPrice={subscriptionPrice}
                                   subscriptionBenefit={subscriptionBenefit}
                                   buttonLabel={buttonLabel}/>
                    </div>
                    <div className='w-full'>
                        <DescriptionReadMore text={description}/>
                    </div>
                    <div className='w-full'>
                        <FeaturesList featuresList={features}/>
                    </div>
                    <div className='w-full flex'>
                        <p className='ml-28 md:ml-0'>⭐⭐⭐⭐⭐<span
                            className='mx-2 underline underline-offset-2'>{rating}</span><span>({reviewCount})</span></p>
                    </div>
                    <p className='ml-28 mb-6 md:ml-0 capitalize text-gray-700 cursor-pointer text-md underline hover:no-underline underline-offset-2 hover:text-black'
                    onClick={showReviews}
                    >
                        {isReviewTabOpen ? 'Hide Reviews' : 'See Reviews'}
                    </p>
                </div>

            </div>
            {isReviewTabOpen &&
                <div ref={reviewRef} className='w-96 md:w-2/3 mx-auto p-8 md:px-8 py-8 bg-gray-50 rounded-xl border border-gray-200'>
                    <div className='flex flex-col gap-y-4'>
                        {reviews.map((review, index) => (
                            <div key={index} className='flex flex-col gap-y-2'>
                                <p className='flex justify-start normal-case text-md text-red-500'>{review.reviewerName}
                                    <span className='flex ml-10'>
                                        {Array.from({length : review.starCount}).map((_, index) =>(
                                            <p key={index}>⭐</p>
                                        ))}
                                    </span>
                                </p>
                                <p className='text-sm normal-case'>{review.reviewText}</p>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    description: PropTypes.string, //Optional
    packSize: PropTypes.string, //Optional, 6PK by default
    price: PropTypes.number.isRequired,
    subscriptionPrice: PropTypes.number.isRequired,
    subscriptionBenefit: PropTypes.string,
    images: PropTypes.array.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
        reviewerName: PropTypes.string.isRequired,
        reviewText: PropTypes.string.isRequired,
        starCount: PropTypes.number.isRequired
    })),
    buttonLabel: PropTypes.string //Optional
}

export default ProductCard



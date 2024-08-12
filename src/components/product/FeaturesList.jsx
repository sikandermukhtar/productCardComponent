import PropTypes from "prop-types";
export default function FeaturesList({featuresList}){

    return (
        <ul className='w-96 flex flex-col mx-auto md:mx-0 pl-3 md:pl-0 text-[13px] capitalize space-y-2 list-disc list-inside font-normal'>
            {featuresList.map((feature, index) => (
                <li key={index} className='text-gray-700'>{feature}</li>
            ))}
        </ul>
    )
}

FeaturesList.propTypes = {
    featuresList: PropTypes.arrayOf(PropTypes.string).isRequired
}
import {useState} from "react";
import PropTypes from "prop-types";

export default function OrderForm({
    price,
    subscriptionPrice,
    subscriptionBenefit,
    buttonLabel,
    })
{

    const [selectedOption, setSelectedOption] = useState('One Time Purchase');
    const [productCount, setProductCount] = useState(1)

    const minusProductCount = () =>{
        if(productCount > 1){
            setProductCount(productCount-1);
        }
    }
    const addProductCount = () => {
        if(productCount < 50){
            setProductCount(productCount+1);
        }
    }

    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            selectedOption,
            productCount
        }
        console.log(formData);
        alert(`Selected Option: ${selectedOption} and Quantity selected is ${productCount}`)
    }

    return (
        <>
            <div className='flex flex-col items-center my-4 md:mb-4 md:mt-0 justify-center'>
                <form onSubmit={handleSubmit}>
                    <div className='w-fit border border-gray-400 flex flex-col'>
                        <div className={`${selectedOption === 'One Time Purchase' ? 'bg-gray-100' : ''} flex items-center p-1`}>
                            <input
                                type="radio"
                                id="option1"
                                value="One Time Purchase"
                                className='m-2 appearance-none h-4 w-4 rounded-full border-2 border-black checked:bg-black'
                                checked={selectedOption === 'One Time Purchase'}
                                onChange={handleChange}
                            />
                            <label  htmlFor="option1" className='font-semibold mr-6'><span className='mx-4'>${price}</span>One-Time Purchase</label>
                        </div>
                        <div className={`${selectedOption === 'Subscription Purchase' ? 'bg-gray-100' : ''} flex items-center p-1`}>
                            <input
                                type="radio"
                                id="option2"
                                className='m-2 appearance-none h-4 w-4 rounded-full border-2 border-black checked:bg-black'
                                value="Subscription Purchase"
                                checked={selectedOption === 'Subscription Purchase'}
                                onChange={handleChange}
                            />
                            <label htmlFor='option2' className='mr-6 font-semibold'><span className='mx-4'>${subscriptionPrice}</span>Subscribe to save 5%</label>
                        </div>
                    </div>
                    <h3 className='left-0 text-xs my-3'>{subscriptionBenefit}</h3>
                    <div className='flex items-center justify-center md:justify-start my-6'>
                        <div className='border border-black w-32 flex gap-x-6 justify-center py-2 select-none' >
                            <button className={`text-lg ${productCount === 1 ? 'text-gray-400 hover:cursor-no-drop' : 'text-black'}`} type="button" onClick={minusProductCount}>-</button>
                            <p className='text-md'>{productCount}</p>
                            <button className={`text-lg ${productCount === 50 ? 'text-gray-400 hover:cursor-no-drop' : 'text-black'}`} type="button" onClick={addProductCount}>+</button>
                        </div>
                    </div>
                    <button type="submit"
                    className='w-fit py-3 px-28 bg-black text-white uppercase text-lg my-2 hover:bg-white hover:text-black border border-black transition-colors duration-200'
                    >{buttonLabel}</button>
                </form>
            </div>
        </>
    )
}

OrderForm.propTypes = {
    price: PropTypes.number.isRequired,
    subscriptionPrice: PropTypes.number.isRequired,
    subscriptionBenefit: PropTypes.string.isRequired,
    buttonLabel: PropTypes.string.isRequired
}
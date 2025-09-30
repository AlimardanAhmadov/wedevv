import React from 'react';
import PropTypes from 'prop-types';
import classes from './PricingCard.module.css';


interface PricingCardProps {
    buttonText: string;
    planTitle: string;
    planPrice: string;
    planFeatures: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ buttonText, planTitle, planPrice, planFeatures }) => {
    return (
        <a href='#' className={`${classes.pricingCard} transition ease-in-out duration-100`}>
            <div className="px-8 py-4 rounded-2xl">
                <div className="mt-2 flex flex-col items-center justify-center">
                    <p className="text-sm text-center font-bold text-gray-700 dark:text-white" role="link">Explore Syncee and a wide range of products for free.</p>
                    <div className="my-10 h-1.5 w-11 rounded-lg" style={{ backgroundColor: 'rgb(245 212 92)' }}></div>

                    <div className={`${classes.planDetails}`}>
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{planTitle}</h1>
                        <span className={`font-bold text-3xl ${classes.pricing}`}>{planPrice}</span>
                        <a type='button' className="rounded-md text-center w-full py-4 mt-6 bg-white hover:bg-gray-300 text-black text-xs font-bold uppercase transition duration-300 ease-in-out">
                            {buttonText}
                        </a>
                        <ul className={`${classes.features} text-sm text-gray-700 dark:text-white mt-4 flex flex-col gap-4 mt-8`}>
                            {planFeatures.map((feature, index) => (
                                <li key={index}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </a>
    );
};

PricingCard.propTypes = {
    planTitle: PropTypes.string.isRequired,
    planPrice: PropTypes.string.isRequired,
    planFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PricingCard;

import classes from './CTA.module.css';


export default function CTA() { 
    return (
        <div className={`${classes.CTA}`}>
            <div className={`${classes.ctaOverlay}`}></div>
            <div className={`${classes.ctaContent} text-gray-300 relative mx-auto flex flex-col justify-center`}>
                <h1 className='uppercase'>exclusive offers and</h1>
                <h3 className='uppercase'>latest updates</h3>
                <a type='button' className="rounded-md text-center w-40 py-4 mt-6 bg-white hover:bg-gray-300 text-black font-bold uppercase transition duration-300 ease-in-out">
                    subscribe
                </a>
            </div>
        </div>
    )
}
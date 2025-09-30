import classes from './Pricing.module.css';
import PricingCard from './PricingCard/PricingCard';

interface PricingPlan {
    buttonText: string;
    planTitle: string;
    planPrice: string;
    planFeatures: string[];
}

const pricingPlans: PricingPlan[] = [
    {
        buttonText: '',
        planTitle: 'Basic',
        planPrice: '$10/month',
        planFeatures: ['Basic nutrition plan', 'Access to group classes', 'Weekly progress tracking', 'Community forum access']
    },
    {
        buttonText: '',
        planTitle: 'Standard',
        planPrice: '$20/month',
        planFeatures: ['Advanced nutrition plan', 'Personalized workout plan', 'Monthly 1-on-1 coach session', 'Exclusive content access', 'Fitness assessment every 3 months']
    },
    {
        buttonText: '',
        planTitle: 'Premium',
        planPrice: '$30/month',
        planFeatures: ['24/7 chat support', 'Personalized meal plan', 'Weekly 1-on-1 coach sessions', 'Exclusive content access', 'Priority booking', 'Monthly fitness challenges with rewards']
    }
];

export default function Pricing() { 
    return (
        <>
            <div className={`${classes.pricing} mx-auto relative overflow-hidden rounded-3xl text-center pt-10`}>
                {/* <div className="blended-light-animation mix-blend-lighten absolute z-0 glow-2 top-[9rem] right-[11rem] w-[19rem] h-[19rem] rounded-full opacity-20 transform scale-200 -rotate-[30deg] bg-[radial-gradient(circle,#2b48ba,transparent_65%,transparent)]">
                </div>
                <div className="blended-light-animation mix-blend-lighten absolute z-0 glow-2 top-[11rem] left-[11rem] w-[19rem] h-[19rem] rounded-full opacity-10 transform scale-200 -rotate-[30deg] bg-[radial-gradient(circle,#408299,transparent_65%,transparent)]">
                </div>
                <div className="blended-light-animation mix-blend-lighten absolute z-0 glow-2 top-[-6rem] left-[-6rem] w-[19rem] h-[19rem] rounded-full opacity-10 transform scale-200 -rotate-[30deg] bg-[radial-gradient(circle,#408299,transparent_65%,transparent)]">
                </div>
                <div className="blended-light-animation mix-blend-lighten absolute z-0 glow-2 bottom-[-2rem] left-[4rem] w-[19rem] h-[19rem] rounded-full opacity-10 transform scale-200 -rotate-[30deg] bg-[radial-gradient(circle,#408299,transparent_65%,transparent)]">
                </div>
                <div className="blended-light-animation mix-blend-lighten absolute z-0 glow-2 top-[2rem] right-[50%] w-[19rem] h-[19rem] rounded-full opacity-10 transform scale-200 -rotate-[30deg] bg-[radial-gradient(circle,#2b48ba,transparent_65%,transparent)]">
                </div>
                <div className="mix-blend-lighten absolute z-0 glow-4 bottom-[-3rem] right-[-4rem] w-[29rem] h-[19rem] rounded-full opacity-10 transform scale-200 -rotate-[30deg] bg-[radial-gradient(circle,#9a5bfd,transparent_65%,transparent)]">
                </div> */}
                <div className={`${classes.pricingTitle}`}>
                    <h2 className='uppercase'>Simple, transparent pricing</h2>
                </div>
                <div className={`${classes.pricingToggle}`}>
                    <div className='flex items-center'>
                        <button className="Pricing_active__gTBiC trasition duration-300 ease-in-out w-40 py-4 text-white text-xs font-bold uppercase transition duration-300 ease-in-out">
                            Monthly
                        </button>
                        <button className="trasition duration-300 ease-in-out w-40 py-4 text-white text-xs font-bold uppercase transition duration-300 ease-in-out">
                            Yearly
                        </button>
                    </div>
                </div>
                <div className={`${classes.pricingList} flex gap-4 items-center justify-center`}>
                    {pricingPlans.map((plan, index) => (
                        <PricingCard
                            key={index}
                            buttonText={'TRY THIS PLAN'}
                            planTitle={plan.planTitle}
                            planPrice={plan.planPrice}
                            planFeatures={plan.planFeatures}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

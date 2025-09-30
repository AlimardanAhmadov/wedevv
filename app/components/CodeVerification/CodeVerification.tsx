import { useState, useRef } from 'react';
import { getCookie, csrftoken } from '../../../utils/cookies';
import ErrorMessage from '../ErrorMessage/ErrorMessage';


const VerificationForm = ({ formData }) => {
    const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const inputsRef = useRef([]);

    const handleVerificationInputChange = (e, index) => {
        const newCode = [...verificationCode];
        newCode[index] = e.target.value;
        setVerificationCode(newCode);

        if (e.target.value.length === 1 && index < 3) {
        inputsRef.current[index + 1].focus();
        }
    };

    const handleSubmit = async () => {
        const code = verificationCode.join('');
        if (code.length !== 4) {
            setError('Please enter all 4 digits of the verification code.');
            return;
        }

        const csrftoken = getCookie("csrftoken");

        if (!csrftoken) {
            throw new Error("CSRF token missing");
        }

        setIsSubmitting(true);
        setError('');
        setSuccess(false);

        try {
            const response = await fetch('http://localhost:8000/email-verification/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                    "X-CSRFToken": csrftoken,
                },
                credentials: 'include',
                body: JSON.stringify({ email: formData.email, code }),
            });

            if (response.ok) {
                setSuccess(true);
                window.location.href = '/dashboard';
            } else {
                const result = await response.json();
                setError(result.error || 'Something went wrong. Please try again.');
            }
        } catch (err) {
            setError('Failed to verify. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="verification__fields">
            <div className='flex flex-col gap-2 items-start justify-start mb-6'>
                <h3 className='text-xl font-semibold text-start w-full text-gray-300'>Welcome to PeakFit</h3>
                <div className='flex flex-row gap-2 items-center'>
                    <h4 className='text-[14px] text-gray-300'>We sent a code to </h4>
                    <span className='text-[14px] text-[#8f5aff] font-semibold cut-text' style={{ lineHeight: 'normal', display: 'block' }}>{formData.email}</span>
                </div>
            </div>

            <fieldset className="flex flex-row items-center gap-4">
                {Array.from({ length: 4 }).map((_, index) => (
                <input
                    key={index}
                    type="text"
                    className="verification__input bg-gray-800 border-2 border-gray-800 rounded-[15px] font-medium focus:border-gray-200 transition duration-200 ease-in-out"
                    maxLength={1}
                    ref={(el) => {
                    if (el) inputsRef.current[index] = el;
                    }}
                    onChange={(e) => handleVerificationInputChange(e, index)}
                />
                ))}
            </fieldset>

            {error && (
                <ErrorMessage error={error} />
            )}
            {success && <div className="text-green-500 text-sm mt-2">Email verified successfully!</div>}
            
            {isSubmitting && 
                <div className='absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center z-40' style={{ backgroundColor: 'rgb(255 255 255 / 8%)' }}>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
            }
            <button
                onClick={handleSubmit}
                className='mt-6 bg-[#6B37D8] hover:bg-[#5e29cf] w-full h-[42px] px-4 py-2 rounded-lg border text-sm font-semibold leading-5 transition duration-200 ease-in-out focus:outline-none disabled:pointer-events-none disabled:opacity-40 border-transparent shadow-sm ring-primary-focus ring-offset-2 focus-visible:outline-none focus-visible:ring-2'
                disabled={isSubmitting}
            >
                <div className='flex flex-row items-center gap-3 justify-center'>
                    Continue
                    <svg className='mt-[1px]' fill='#fff' width={'14'} height={'14'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </div>
            </button>

            <div className='mt-2 w-full'>
                <div className="checkbox-wrapper-13 flex flex-row items-center gap-2 py-3">
                    <input name='keepme-signed-in' id="keep-signed" type="checkbox" style={{ backgroundColor: 'rgb(67, 74, 80)' }} />
                    <label htmlFor="c1-0" className='text-sm'>Keep me signed in for 30 days</label>
                </div>
            </div>

            <button
                className="mt-2 px-4 py-3 flex flex-row items-center justify-center gap-2 dark:bg-gray-800 hover:bg-gray-700 duration-200 w-full transition ease-in-out dark:bg-gray-800 text-gray-100 font-semibold lg:btn-5xl inline-block font-medium rounded-lg text-[13px]"
            >
                Resend code
            </button>
        </section>
    );
};

export default VerificationForm;

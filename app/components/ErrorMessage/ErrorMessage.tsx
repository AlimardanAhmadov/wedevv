'use client';

import { useState, useEffect } from 'react';

const ErrorMessage = ({ error }) => {
    const [visible, setVisible] = useState(!!error);

    useEffect(() => {
        if (error) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [error]);

    if (!visible) return null;

    return (
        <div
            className={`rounded-[.5rem] shadow-3xl scale-target z-[9999] fixed bottom-0 right-0 mr-[4rem] mb-[3rem] text-[#000] text-[11px] flex items-center max-w-[600px] w-auto 
            transition-transform transition-opacity duration-300 ease-in-out`}
        >
            <div className="redirect-message-left flex items-center text-[#0A0A0A] p-[0.8rem] gap-[2rem] pr-[3rem]">
                <div className="message-icon danger p-[6px] rounded-[50%] bg-[#d53838]">
                    <svg
                        className="w-[12px] h-[12px]"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"></path>
                    </svg>
                </div>
                <span className="text-gray-300 text-[13px]">
                    {error}
                </span>
            </div>
        </div>
    );
};

export default ErrorMessage;

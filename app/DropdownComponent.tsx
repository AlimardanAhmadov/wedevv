import { useState, useEffect } from 'react';

const DropdownComponent = ({ label, options, selected, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const [selectedValue, setSelectedValue] = useState(selected);

    const handleDropdownToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleOptionSelect = (option) => {
        setSelectedValue(option);
        onChange(option);
        setIsOpen(false);
    };

    useEffect(() => {
        setSelectedValue(selected);
    }, [selected]);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timeout = setTimeout(() => setIsVisible(false), 200);
            return () => clearTimeout(timeout);
        }
    }, [isOpen]);

    return (
        <div className="relative w-full flex flex-col items-end">
            <button
                onClick={handleDropdownToggle}
                className="flex items-center justify-between gap-1 block px-3 py-2.5 rounded-lg w-full bg-gray-800"
            >
                <span className="mx-1 text-sm font-semibold">{selectedValue || label}</span> 
                <svg
                    style={{
                        rotate: `${isOpen ? '180deg' : ''}`
                    }}
                    className="w-4 h-4"
                    fill="#d1d1d1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
            </button>

            {isOpen && (
                <div
                    className={`z-10 w-full rounded-lg px-4 py-3 absolute mt-12 shadow-md dark:bg-gray-800 duration-300 transform transition-all ease-out max-h-[10rem] overflow-auto ${
                        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                    }`}
                >
                    <ul className="flex flex-col gap-2.5 transition ease-in-out duration-300">
                        {options.map((option, idx) => (
                            <li
                                key={idx}
                                className="hover:text-gray-100 rounded-lg text-sm text-gray-300 cursor-pointer transition ease-in-out duration-300"
                                onClick={() => handleOptionSelect(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default DropdownComponent;

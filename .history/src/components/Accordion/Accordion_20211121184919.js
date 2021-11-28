import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Button, Title, Body } from './accordionStyles';

const Accordion = ({
    children,
    title,
    duration,
}) => {
    const [isOpen, setIsOpen] = useState < boolean > (false);

    return (
        <div>
            <button
                className="flex items-center focus:outline-none w-full"
                onClick={() => setIsOpen((prev) => !prev)}
                type="button"
            >
                <div className="mr-2">
                    <FontAwesomeIcon icon={!isOpen ? faChevronUp : faChevronDown} />
                </div>
                <div className="ml-2 w-full text-left">{title}</div>
            </button>
            <div
                className={` my-4 ml-8 overflow-hidden transition-all duration-${duration}
                ${isOpen ? 'max-h-screen opacity-100 ease-in' : 'max-h-0 opacity-0 ease-out'}
                `}
            >
                {children}
            </div>
        </div>
    );
};
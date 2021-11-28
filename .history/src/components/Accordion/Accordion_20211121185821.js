import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Button, Title, Body, ButtonImage} from './accordionStyles';

const Accordion = ({
    children,
    title,
}) => {
    const [isOpen, setIsOpen] = useState < boolean > (false);

    return (
        <div>
            <Button
                onClick={() => setIsOpen((prev) => !prev)}
                type="button"
            >
                <ButtonImage>
                    <FontAwesomeIcon icon={!isOpen ? faChevronUp : faChevronDown} />
                </ButtonImage>
                <Title>{title}</Title>
            </Button>
            <Body>
                {children}
            </Body>
        </div>
    );
};

export default Accordion;
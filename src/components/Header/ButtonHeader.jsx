import React from 'react';
import { Link } from 'react-router-dom';

const ButtonHeader = ({ isActive, onClick, label, toLink }) => {
    const buttonStatus = isActive ? 'text-primary' : 'text-white';

    return (
        <Link to={toLink} onClick={onClick} className={`hover:text-primary font-bold ${buttonStatus}`}>
            {label}
        </Link>
    );
};

export default React.memo(ButtonHeader);
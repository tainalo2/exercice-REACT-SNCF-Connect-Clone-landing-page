import React from 'react';

const LogoExit = ({ className, onClick }) => {
    return (
        <div className={`${className}`} onClick={onClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 6.4L17.6 5L12 10.6L6.4 5L5 6.4L10.6 12L5 17.6L6.4 19L12 13.4L17.6 19L19 17.6L13.4 12L19 6.4Z"></path>
            </svg>
        </div>
    );
};

export default LogoExit;
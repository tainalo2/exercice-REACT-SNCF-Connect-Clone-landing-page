import React from 'react';

const LogoWarning = ({ className }) => {
    return (
        <div className={`${className}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 6C11 5.44772 11.4477 5 12 5C12.5523 5 13 5.44772 13 6V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V6ZM13.5 17C13.5 17.8284 12.8284 18.5 12 18.5C11.1716 18.5 10.5 17.8284 10.5 17C10.5 16.1716 11.1716 15.5 12 15.5C12.8284 15.5 13.5 16.1716 13.5 17Z"></path>
            </svg>
        </div>
    );
};

export default LogoWarning;
import React from 'react';

const Logo = ({ className, href }) => {
    return (
        <a className={`${className}`} href={`${href}`}>
            <svg version="1.1" id="logo-sncf-connect" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 523.7 259.1" xmlSpace="preserve">
                <path className='fill-primary' d="M136 48.4H41.6C18.6 48.4 0 67.1 0 90.1c0 23 18.6 41.6 41.6 41.6H136c23 0 41.6-18.6 41.6-41.6S159 48.4 136 48.4z"></path>
                <path className='fill-primary' d="M18.5 171.2c-3.6 0-7.3 1.3-7.3 4.9 0 3.5 3.5 4.3 9.8 5.8 6.7 1.6 14.6 4.6 14.6 13.6 0 11-9 15.1-18.9 15.1-5 0-10.7-1.4-14.2-4.1C.5 205 0 203.3 0 202c0-2.6 2-4.8 4.7-4.8 1.2 0 2.4.4 3.9 1.5 2.6 2.1 5.5 3.2 8.7 3.2 3.3 0 7.4-1.3 7.4-5.4 0-3.8-3.6-4.8-10.5-6.4C7.5 188.5.8 185.8.8 177.2c0-10.1 9-14.4 18-14.4 4.5 0 9.3 1.1 12.5 3.5 2.2 1.6 2.7 3.1 2.7 4.4 0 2.5-1.8 4.6-4.6 4.6-1 0-2.1-.4-3.3-1.3-2.4-2-4.9-2.8-7.6-2.8zm26.9-2.1c0-5.1 3.7-5.9 5.4-5.9 1.7 0 5.4.8 5.4 5.9v2.2h.2c2-4.5 7.4-8.6 14-8.6 11.8 0 16.7 9 16.7 18.3v22.8c0 5.4-3.8 6.3-5.7 6.3-1.9 0-5.7-.9-5.7-6.3v-19.6c0-5.4-1.2-12.1-8.5-12.1-7.2 0-10.6 6.2-10.6 12.3v19.4c0 5.4-3.8 6.3-5.7 6.3-1.9 0-5.7-.9-5.7-6.3v-34.7zm86.8 28.7c2.9 0 4.6 2.2 4.6 4.5 0 1.6-.5 3.2-3 5-3.2 2.3-8.2 3.3-12.1 3.3-13.5 0-24.1-8.9-24.1-23.9 0-14.7 10.9-23.9 24.2-23.9 4.3 0 8.7 1 11.9 3.2 2.6 1.8 3.2 3.6 3.2 4.9 0 2.5-1.9 4.9-4.9 4.9-1 0-2.1-.3-3.8-1.5-1.5-1.1-3.7-2.1-6.4-2.1-8.3 0-12.4 7.4-12.4 14.5s4 14.4 12.4 14.4c2.5 0 4.7-.6 6.7-1.9 1.5-1 2.7-1.4 3.7-1.4zm16.6-24.7c-4.3 0-5.1-3-5.1-4.5s.8-4.5 5.1-4.5h4.3v-6.7c0-10.8 4.2-20.5 17.3-20.5 4.7 0 7.2 1.6 7.2 5 0 2.5-1.7 4.6-5.3 4.6-6.1 0-7.9 3.9-7.9 10.2v7.4h6.2c4.3 0 5.1 3 5.1 4.5s-.8 4.5-5.1 4.5h-6.2v30.7c0 5.4-3.8 6.3-5.7 6.3-1.8 0-5.7-.9-5.7-6.3v-30.7h-4.2z"></path>
                <path className='fill-white' d="M227.2 48.4c-23 0-41.6 18.6-41.6 41.6s18.6 41.6 41.6 41.6S268.8 113 268.8 90s-18.6-41.6-41.6-41.6z"></path>
                <path className='fill-white' d="M220.2 197.8c2.9 0 4.6 2.2 4.6 4.5 0 1.6-.5 3.2-3 5-3.2 2.3-8.2 3.3-12.1 3.3-13.5 0-24.2-8.9-24.2-24 0-14.7 11-24 24.3-24 4.3 0 8.7 1 11.9 3.2 2.6 1.8 3.2 3.6 3.2 4.9 0 2.5-1.9 4.9-4.9 4.9-1 0-2.1-.3-3.8-1.5-1.5-1.1-3.7-2.1-6.4-2.1-8.3 0-12.5 7.5-12.5 14.5 0 7.1 4 14.4 12.5 14.4 2.5 0 4.7-.6 6.7-1.9 1.5-.7 2.7-1.2 3.7-1.2zm35.5 12.9c-13.7 0-24.6-9.9-24.6-24.2 0-14.3 11-23.8 24.6-23.8 13.7 0 24.6 9.5 24.6 23.8 0 14.2-10.9 24.2-24.6 24.2zm0-38.8c-9 0-13.1 7.5-13.1 14.5 0 7.1 4.2 14.7 13.1 14.7 9 0 13.1-7.6 13.1-14.7 0-7-4.2-14.5-13.1-14.5zm34.3-2.8c0-5.1 3.7-6 5.4-6 1.7 0 5.4.8 5.4 6v2.2h.2c2-4.5 7.4-8.6 14.1-8.6 11.8 0 16.7 9.1 16.7 18.3v22.9c0 5.4-3.8 6.3-5.7 6.3-1.9 0-5.7-.9-5.7-6.3v-19.6c0-5.4-1.2-12.1-8.5-12.1-7.2 0-10.6 6.2-10.6 12.3V204c0 5.4-3.8 6.3-5.7 6.3-1.9 0-5.7-.9-5.7-6.3v-34.9zm53 0c0-5.1 3.7-6 5.4-6 1.7 0 5.4.8 5.4 6v2.2h.2c2-4.5 7.4-8.6 14.1-8.6 11.8 0 16.7 9.1 16.7 18.3v22.9c0 5.4-3.8 6.3-5.7 6.3-1.9 0-5.7-.9-5.7-6.3v-19.6c0-5.4-1.2-12.1-8.5-12.1-7.2 0-10.6 6.2-10.6 12.3V204c0 5.4-3.8 6.3-5.7 6.3-1.9 0-5.7-.9-5.7-6.3v-34.9zm62.4 21.2c.5 6.4 6.3 11.1 12.9 11.1 4.7 0 7.6-1.5 10.4-3.9 1.6-1.3 2.6-1.6 3.9-1.6 2.5 0 4.5 1.8 4.5 4.5 0 .9-.4 2.6-1.9 4.1-4.4 4.2-9.5 6.1-16.8 6.1-14 0-24.4-9-24.4-23.7 0-14.6 10.3-24.3 24-24.3 11 0 19.8 6.2 21.6 19.5.1.9.2 1.6.2 2.4 0 4-2.2 5.7-5.9 5.7h-28.5zm23.2-8.2c0-5.9-3.3-11-10.7-11-6.7 0-12.1 4.6-12.6 11h23.3zm53 15.7c2.9 0 4.6 2.2 4.6 4.5 0 1.6-.5 3.2-3 5-3.2 2.3-8.2 3.3-12.1 3.3-13.5 0-24.2-8.9-24.2-24 0-14.7 11-24 24.3-24 4.3 0 8.7 1 11.9 3.2 2.6 1.8 3.2 3.6 3.2 4.9 0 2.5-1.9 4.9-4.9 4.9-1 0-2.1-.3-3.8-1.5-1.5-1.1-3.7-2.1-6.4-2.1-8.3 0-12.5 7.5-12.5 14.5 0 7.1 4 14.4 12.5 14.4 2.5 0 4.7-.6 6.7-1.9 1.5-.7 2.7-1.2 3.7-1.2zm33.4 12.5c-12 0-14.6-7.4-14.6-16.1V173h-3.7c-4.3 0-5.1-3-5.1-4.5s.8-4.5 5.1-4.5h3.7v-7.8c0-5.2 3.7-6.1 5.6-6.1 1.9 0 5.6.9 5.6 6.1v7.8h7.1c4.3 0 5.1 3 5.1 4.5s-.8 4.5-5.1 4.5h-7.1v21.1c0 4.4 1.5 6.8 4.3 6.8.5 0 1.1-.1 1.8-.2.8-.1.9-.1 1.3-.1 2.8 0 4.3 2.1 4.3 4.2 0 1.8-1 3.3-2.7 4.2-1.6.8-3.5 1.3-5.6 1.3z"></path>
                <circle transform="rotate(-63.435 134.269 90.075)" cx="134.3" cy="90.1" r="30.3"></circle>
            </svg>
        </a>
    );
};

export default Logo;
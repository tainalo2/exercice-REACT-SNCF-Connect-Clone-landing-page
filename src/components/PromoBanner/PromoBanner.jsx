import React, { useState } from 'react';

const PromoBanner = () => {
    const [isHovered, setIsHovered] = useState("bg-white");

    return (
        <a
            href="https://www.sncf-connect.com/bons-plans/tgv-inoui"
            target='_blank'
            className='w-full bg-third flex gap-0 m-0 max-h-[450px] text-left'
            onMouseEnter={() => setIsHovered('bg-gray')}
            onMouseLeave={() => setIsHovered('bg-white')}
        >
            <div className=' basis-1/2 flex flex-col justify-center items-start pl-20'>
                <div className='flex gap-0 rounded-lg w-fit overflow-hidden'>
                    <div className='text-black font-semibold bg-yellow p-1 pl-2 pr-2 shrink-0'>
                        Ventes Flash été
                    </div>
                    <div className='bg-white self-stretch p-1 pl-4 pr-4 flex justify-center items-center w-[80px]'>
                        <img src="https://www.sncf-connect.com/assets/media/2023-11/tgv-inoui.svg" alt="" />
                    </div>

                </div>
                <div className='mt-4 mb-7'>
                    <div className='text-yellow font-bold text-4xl mb-2'>
                        La vraie folie, ce serait de ne pas en profiter !
                    </div>
                    <div className='text-white font-semibold text-xl'>
                        500 000 billets pour vous évader à prix fou
                    </div>

                </div>
                <div className='text-white flex items-end gap-2'>
                    <span>
                        Dés
                    </span>
                    <span className='font-semibold relative text-4xl'>
                        29€
                        <span className='absolute top-[-5px] right-[-20px] text-sm'>(1)</span>
                    </span>
                    <span>/aller</span>
                    <button className={`rounded-full p-2 pl-10 pr-10 text-black font-semibold transition-all eas7-in-out duration-500 ${isHovered}`}>
                        Foncer
                    </button>
                </div>
            </div>
            <div className='basis-1/2 overflow-hidden'>
                <img src="https://www.sncf-connect.com/assets/media/2024-06/fr_homepage-800x530_0.jpg" alt="" className='object-cover object-left-top w-full h-full' />
            </div>

        </a>

    );
};

export default PromoBanner;
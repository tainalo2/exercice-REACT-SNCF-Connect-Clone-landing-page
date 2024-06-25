import React, { useState } from 'react';
import ButtonHeader from './ButtonHeader'
import Logo from './Logo'
import { Link } from 'react-router-dom';

const Header = () => {
    const [buttonsList, setButtonsList] = useState([{ label: 'Accueil', toLink: '/' }, { label: 'Voyager', toLink: '/voyager' }, { label: 'Billets', toLink: '/billets' }, { label: 'Button 4', toLink: '/' }]);
    const [activeIndex, setActiveIndex] = useState(null);

    const handleButtonClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className='w-full bg-secondary h-fit flex justify-center'>
            <div className='max-w-[1440px] pl-8 pr-8 flex justify-between w-full'>
                <Link to="/" className='flex-1'>
                    <Logo
                        className='block w-32 self-center'
                        href="#"
                    />
                </Link>

                <div className='flex justify-center items-center gap-6 w-auto flex-1'>
                    {buttonsList.map((item, index) => (
                        <ButtonHeader
                            key={index}
                            label={item.label}
                            toLink={item.toLink}
                            isActive={activeIndex === index}
                            onClick={() => handleButtonClick(index)}
                        />
                    ))}
                </div>
                <div className='flex-1'></div>
            </div>
        </div>

    );
};

export default React.memo(Header);;
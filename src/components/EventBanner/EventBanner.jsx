import React, { useState } from 'react';
import LogoWarning from './LogoWarning';
import LogoExit from './LogoExit';

const EventBanner = () => {
    const [innerBannerCollapse, setInnerBannerCollapse] = useState("max-h-[0px]");
    const [fullBannerCollapse, setFullBannerCollapse] = useState("max-h-[300px]");

    const toggleInnerBanner = () => {
        if (innerBannerCollapse === "max-h-[0px]") {
            setInnerBannerCollapse("max-h-[100px]");
        } else {
            setInnerBannerCollapse("max-h-[0px]");
        }
    };

    const toggleFullBanner = () => {
        setFullBannerCollapse("max-h-[0px]");
    };
    return (
        <div className={`w-full flex justify-center bg-white overflow-hidden transition-all ease-in-out duration-300 ${fullBannerCollapse}`}>
            <div className='max-w-[1440px] pl-8 pr-8'>
                <div className='pt-4 pb-4'>
                    <div className='flex justify-between gap-4'>
                        <LogoWarning className="mt-1" />
                        <div className='grow text-left'>
                            <span className='text-xl font-bold'>
                                Jeux Paris 2024 : anticipez vos déplacements.
                            </span>
                            <div className={`overflow-hidden transition-height ease-in-out duration-300 ${innerBannerCollapse}`}>
                                <p>
                                    Du 26/07 au 08/09, privilégiez le métro et le RER pour vous déplacer à Paris et en Ile-de-France. Vérifiez les conditions d’accès en gare et prévoyez un temps de parcours plus long.
                                </p>
                                <a href="https://anticiperlesjeux.gouv.fr/" target='_blank'>
                                    <p className='text-primary font-bold'>En savoir plus</p>
                                </a>
                            </div>
                        </div>
                        <button className='shrink-0 self-start' onClick={toggleInnerBanner}>Lire la suite</button>
                        <LogoExit onClick={toggleFullBanner} className={"cursor-pointer"} />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default EventBanner;
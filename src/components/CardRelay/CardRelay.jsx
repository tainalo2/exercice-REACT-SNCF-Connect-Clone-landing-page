import { useState } from "react";
import React from "react";

const CardRelay = ({ imgSrc, title, description, url, ctaText, game }) => {
    const isGame = game ? 'absolute' : 'hidden';
    const [isHovered, setIsHovered] = useState("bg-white");

    return (

        <a
            href={url}
            target="_blank"
            onMouseEnter={() => setIsHovered('bg-grayMinor')}
            onMouseLeave={() => setIsHovered('bg-white')}
            className={`flex flex-col rounded-lg overflow-hidden text-left self-stretch min-w-[200px] transition-all ease-in-out cursor-pointer duration-200 ${isHovered}`}>
            <div className="relative w-full h-[200px]">
                <img src={imgSrc} alt="" className="object-cover w-full h-full" />
                <div className={`bottom-[-10px] left-2 text-black font-semibold bg-yellow p-1 pl-2 pr-2 shrink-0 rounded-lg ${isGame}`}>Jeu concours</div>
            </div>
            <div className="flex flex-col gap-1 p-4 grow">
                <div className="text-xl font-bold text-black">{title}</div>
                <div className="text-grayText">{description}</div>
            </div>
            <div href={url} target="_blank" className="text-blueLink font-semibold text-sm p-2 h-fit w-full border-t-[1px] border-grayMinus text-center">{ctaText}</div>
        </a>
    );
};

export default CardRelay;
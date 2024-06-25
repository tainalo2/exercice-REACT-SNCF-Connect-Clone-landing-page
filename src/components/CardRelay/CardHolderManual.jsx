import React from "react";
import CardRelay from "./CardRelay";

const CardHolderManual = () => {
    return (
        <div className="w-full flex justify-center mt-5 mb-5 text-left">
            <div className="max-w-[1328px] pl-8 pr-8 w-full">
                <div className="text-2xl font-semibold text-black mb-3">
                    Explorez l'univers SNCF connect
                </div>
                <div className="grid sm:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(4,_1fr)] gap-6">
                    <CardRelay
                        imgSrc="https://www.sncf-connect.com/assets/styles/image_scale_height_400/public/media/2024-06/bp_302x200_16.jpg?itok=Wpa417Z2"
                        title="Derniers jours"
                        description="Cap sur l'été : Prenez le train du Chèques-Vacances Connect et tentez de remportez l'un de nos 18 lots 100% loisirs"
                        url="https://www.jeu-sncf-connect.com/ancv/"
                        ctaText="Jouer"
                        game
                    />
                    <CardRelay
                        imgSrc="https://www.sncf-connect.com/assets/styles/image_scale_height_400/public/media/2024-06/bp_302x200_16.jpg?itok=Wpa417Z2"
                        title="Derniers jours"
                        description="Cap sur l'été : Prenez le train du Chèques-Vacances Connect et tentez de remportez l'un de nos 18 lots 100% loisirs"
                        url="https://www.jeu-sncf-connect.com/ancv/"
                        ctaText="Jouer"
                    />

                    <CardRelay
                        imgSrc="https://www.sncf-connect.com/assets/styles/image_scale_height_400/public/media/2024-06/bp_302x200_16.jpg?itok=Wpa417Z2"
                        title="Derniers jours"
                        description="Cap sur l'été : Prenez le train du Chèques-Vacances Connect et tentez de remportez l'un de nos 18 lots 100% loisirs"
                        url="https://www.jeu-sncf-connect.com/ancv/"
                        ctaText="Jouer"
                    />

                    <CardRelay
                        imgSrc="https://www.sncf-connect.com/assets/styles/image_scale_height_400/public/media/2024-06/bp_302x200_16.jpg?itok=Wpa417Z2"
                        title="Derniers jours"
                        description="Cap sur l'été : Prenez le train du Chèques-Vacances Connect et tentez de remportez l'un de nos 18 lots 100% loisirs"
                        url="https://www.jeu-sncf-connect.com/ancv/"
                        ctaText="Jouer"
                    />

                    <CardRelay
                        imgSrc="https://www.sncf-connect.com/assets/styles/image_scale_height_400/public/media/2024-06/bp_302x200_16.jpg?itok=Wpa417Z2"
                        title="Derniers jours"
                        description="Cap sur l'été : Prenez le train du Chèques-Vacances Connect et tentez de remportez l'un de nos 18 lots 100% loisirs"
                        url="https://www.jeu-sncf-connect.com/ancv/"
                        ctaText="Jouer"
                    />

                    <CardRelay
                        imgSrc="https://www.sncf-connect.com/assets/styles/image_scale_height_400/public/media/2024-06/bp_302x200_16.jpg?itok=Wpa417Z2"
                        title="Derniers jours"
                        description="Cap sur l'été : Prenez le train du Chèques-Vacances Connect et tentez de remportez l'un de nos 18 lots 100% loisirs"
                        url="https://www.jeu-sncf-connect.com/ancv/"
                        ctaText="Jouer"
                    />
                </div>
            </div>
        </div>

    );
};

export default CardHolderManual;
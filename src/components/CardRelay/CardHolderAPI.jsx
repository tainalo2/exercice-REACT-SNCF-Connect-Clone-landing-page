import React, { useEffect, useState } from "react";
import CardRelay from "./CardRelay";
import axios from "axios";

const CardHolderAPI = () => {
    const [dataCards, setDataCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/cards'); // Remplacez par l'URL de votre API
                setDataCards(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full flex justify-center mt-5 mb-5 text-left">
            <div className="max-w-[1328px] pl-8 pr-8 w-full">
                <div className="text-2xl font-semibold text-black mb-3">
                    Explorez l'univers SNCF connect
                </div>
                <div className="grid sm:grid-cols-[repeat(2,_1fr)] lg:grid-cols-[repeat(4,_1fr)] gap-6">
                    {dataCards.map((item, index) => (
                        <CardRelay
                            key={index}
                            imgSrc={item.imgSrc}
                            title={item.title}
                            description={item.description}
                            url={item.url}
                            ctaText={item.ctaText}
                            game={item.game}
                        />
                    ))}
                </div>
            </div>
        </div>
    );


};

export default CardHolderAPI;
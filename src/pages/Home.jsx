import CardHolderAPI from "../components/CardRelay/CardHolderAPI";
import CardHolderManual from "../components/CardRelay/CardHolderManual";
import EventBanner from "../components/EventBanner/EventBanner";
import Header from "../components/Header/Header";
import PromoBanner from "../components/PromoBanner/PromoBanner";



function App() {
    //définition du usestate (variable dynamique)

    //comportements (fonctions dynamiques)

    //rendu (transforme un composant en HTML)
    return (
        <div className="App bg-bg">
            <Header />
            <EventBanner />
            <PromoBanner />
            <CardHolderManual />
            <CardHolderAPI />
        </div>
    );
}

export default App;




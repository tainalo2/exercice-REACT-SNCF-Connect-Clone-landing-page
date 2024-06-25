import './App.css';
import './components/Header/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Voyager from './pages/Voyager';
import Home from './pages/Home';
import Billets from './pages/Billets';

function App() {
  //définition du usestate (variable dynamique)

  //comportements (fonctions dynamiques)

  //rendu (transforme un composant en HTML)
  return (
    <Router>
      <div className="App bg-bg">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/voyager" element={<Voyager />} />
          <Route path="/Billets" element={<Billets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

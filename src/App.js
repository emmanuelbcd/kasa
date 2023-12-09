// App.js est le coeur de l'application React.
//App est à la racine de l'application.
//On y place la structure principale de l'application (barre de navigation, routage, etc.)

//importation des bibliothèques, composants et styles nécessaires.
import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Apartment from './pages/Apartment';
import NotFound from './pages/NotFound';
import './styles/main.scss';


function App(){
    return (
        <div className="App">
            {/* Router est utilisé pour gérer la navigation dans l'appli */}
            <Router>
                {/* A l'intérieur du router, le composant routes définit les différents routes de l'appli */}
                <Routes>
                    {/* Chaque route associe un chemin d'URL à un composant */}
                    <Route path="/" element={<Home/>} />
                    <Route path="/a-propos" element={<About/>} /> 
                    <Route path="/fiche-logement/:id" element={<Apartment/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
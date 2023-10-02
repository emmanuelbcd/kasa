//App est à la racine de l'application.
//On y place la structure principale de l'application (barre de navigation, routage, etc.)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Apartment from './pages/Apartment';
import NotFound from './pages/NotFound';


function App(){
    return (
        <div className="App">
            <Router>
                {/* Le composant router englobe les routes et permet le routage de l'appli */}
                <Routes>
                    {/* On définit les routes de l'appli */}
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
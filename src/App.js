//App est à la racine de l'application.
//On y place la structure principale de l'application (barre de navigation, routage, etc.)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
//import apartmentsData from './data/apartments.json';

function App(){
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/a-propos" element={<About/>} /> 
                </Routes>
            </Router>
        </div>
    );
}

export default App;
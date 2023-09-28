//App est à la racine de l'application.
//On y place la structure principale de l'application (barre de navigation, routage, etc.)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/a-propos" element={<About/>} />
            </Routes>
        </Router>
    );
}

export default App;
//components/Navbar/Navbar.jsx

import React from 'react'; //on importe la bibliothèque React pour pouvoir créer des composants react
import { Link } from 'react-router-dom'; //on importe le composant Link depuis react-router-dom

//on définit le composant Navbar
function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/a-propos">A propos</Link></li>
            </ul>
        </nav>
    );
}

//on exporte le composant Navbar pour qu'il puisse être importé et utilisé dans d'autres fichiers
export default Navbar;
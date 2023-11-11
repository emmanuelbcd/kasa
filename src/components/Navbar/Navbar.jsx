//components/Navbar/Navbar.jsx

import React from 'react'; //on importe la bibliothèque React pour pouvoir créer des composants react
import { Link, useLocation } from 'react-router-dom'; //on importe le composant Link depuis react-router-dom

//on définit le composant Navbar
function Navbar() {
    const location = useLocation(); //on souhaite obtenir l'emplacement
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/" className={location.pathname === "/" ? "active-link" : "" }>Accueil</Link></li>
                <li><Link to="/a-propos" className={location.pathname === "/a-propos" ? "active-link" : ""}>A Propos</Link></li>
            </ul>
        </nav>
    );
}

//on exporte le composant Navbar pour qu'il puisse être importé et utilisé dans d'autres fichiers
export default Navbar;
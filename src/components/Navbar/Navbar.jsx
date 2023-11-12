//components/Navbar/Navbar.jsx
//Le composant Navbar fournit une navigation entre différentes pages.

//imports
//on importe la bibliothèque React pour pouvoir créer des composants react
import React from 'react'; 
//on importe le composant Link et useLocation depuis react-router-dom.
//Link est utilisé pour créer des liens navigables sans recharger la page
//useLocation est un Hook qui permet d'accéder à l'objet location qui représente l'URL actuelle
import { Link, useLocation } from 'react-router-dom'; 

//on définit le composant Navbar
function Navbar() {
    const location = useLocation(); //on souhaite obtenir l'emplacement
    return (
        <nav className="navbar">
            <ul>
                {/*on utilise un opérateur ternaire ?. */}
                {/*condition: on vérifie si on est sur la page d'accueil */}
                <li><Link to="/" className={location.pathname === "/" ? "active-link" : "" }>Accueil</Link></li>
                {/*condition: on vérifie si on est sur la page à propos */}
                <li><Link to="/a-propos" className={location.pathname === "/a-propos" ? "active-link" : ""}>A Propos</Link></li>
            </ul>
        </nav>
    );
}

//on exporte le composant Navbar pour qu'il puisse être importé et utilisé dans d'autres fichiers
export default Navbar;
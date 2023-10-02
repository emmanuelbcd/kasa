//components/Header/Header.jsx

import Logo from '../../assets/logo.png'; //on importe l'image du logo
import Navbar from '../Navbar/Navbar.jsx'; //on importe le composant Navbar (barre de navigation)

//on définit le composant Header
function  Header() {
    return (
        //on crée un élément header avec une classe header
        <header className="header">
            <h1>
                <img src={ Logo } alt="Kasa - location d'appartements entre particuliers depuis 10 ans." className="header-logo" />
            </h1>
            <Navbar />
        </header>
    );
}

//on exporte le composant Header pour qu'il puisse être utilisé dans d'autres parties de l'appli
export default Header;
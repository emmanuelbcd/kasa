//components/Header/Header.jsx

import Logo from '../../assets/logo.png'; //on importe l'image du logo
import Navbar from '../Navbar/Navbar.jsx'; //on importe le composant Navbar (barre de navigation)

//on définit le composant Header
function  Header() {
    return (
        //on crée un élément header avec une classe header
        <header className="header">
            <img src={ Logo } alt="Logo Kasa" className="header-logo" />
            <Navbar />
        </header>
    );
}

//on exporte le composant Header pour qu'il puisse être utilisé dans d'autres parties de l'appli
export default Header;
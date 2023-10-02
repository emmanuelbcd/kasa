import Logo from '../../assets/logo-footer.png'; //on importe l'image du logo

//on définit le composant Header
function  Footer() {
    return (
        //on crée un élément header avec une classe header
        <footer className="footer">
            {/* Affichage du logo du footer */}
            <img src={ Logo } alt="Kasa - location d'appartements entre particuliers" className="footer-logo" />
            {/* Texte de copyright */}
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

//on exporte le composant Header pour qu'il puisse être utilisé dans d'autres parties de l'appli
export default Footer;
//import React from 'react';
import { Link } from 'react-router-dom'; //
import Header from '../../components/Header/Header.jsx';

function NotFound() {
    return (
        <div className="not-found-page">
            <Header />
            <div className="error-section">
                <h1 className="error-code">404</h1>
                <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
                {/* Link remplace a href : on améliore l'expérience utilisateur en évitant le rechargement de la page */}
                <Link to="/" className="return-home">Retourner sur la page d'accueil</Link>
            </div>
        </div>
    );
}

export default NotFound;
//import React from 'react';
import Header from '../../components/Header/Header.jsx';

function NotFound() {
    return (
        <div className="not-found-page">
            <Header />
            <div className="error-section">
                <h1 className="error-code">404</h1>
                <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
                <a href="/" className="return-home">Retourner sur la page d'accueil</a>
            </div>
        </div>
    );
}

export default NotFound;
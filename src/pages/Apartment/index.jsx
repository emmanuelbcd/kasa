//import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Slideshow from '../../components/Slideshow/Slideshow.jsx';
import Footer from '../../components/Footer/Footer.jsx';

import { useParams, Navigate } from 'react-router-dom';

//import des données
import apartmentsData from '../../data/apartments.json';

function Apartment({ match }) {
    const {id} = useParams();
    const apartment = apartmentsData.find(apt => apt.id === id);

    // Ajout des logs de débogage ici
    console.log("ID de l'URL:", id);
    console.log("Appartement trouvé:", apartment);
    console.log("Données complètes des appartements:", apartmentsData);

    if (!apartment) {
        return <Navigate to="/not-found" replace />; // ou toute autre logique pour gérer cette erreur
    }

    return (
        <div className="apartment">
            <Header />
            <Slideshow pictures={apartment.pictures} /> {/* Utilisation du composant Slideshow */}
            <Footer />
        </div>
    );
}

export default Apartment;
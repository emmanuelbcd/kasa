//import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Slideshow from '../../components/Slideshow/Slideshow.jsx';
import Collapse from '../../components/Collapse/Collapse.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import activeStar from '../../assets/active-star.png';
import inactiveStar from '../../assets/inactive-star.png'

import { useParams, Navigate } from 'react-router-dom';

//import des données
import apartmentsData from '../../data/apartments.json';

//fonction pour générer les étoiles
function generateStars(rating) {
    const totalStars = 5;
    let stars = [];

    for(let i=0; i < totalStars; i++) {
        if(i < rating){
            stars.push(<img key={i} src={activeStar} alt="Étoile active" className="active-star" />)
        } else {
            stars.push(<img key={i} src={inactiveStar} alt="Étoile inactive" className="inactive-star" />)
        }
    }

    return stars;
}

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
            <main className="content">
                <h1>{ apartment.title }</h1>
                
                
                <div className="content_location">{ apartment.location }</div>
                <div className="content_tags">
                    { apartment.tags.map(tag => <span key={tag}>{tag}</span>)}
                    {/*apartment.tags*/}
                </div>
                <div className="rate_host_container">
                    <div className="content_rate">
                        {generateStars(apartment.rating)}
                    </div>
                    <div className="content_host">
                        <div className="content_hostName">{apartment.host.name}</div>
                        <div className="content_hostPicture">
                            <img src={apartment.host.picture} alt={`Hôte ${apartment.host.name}`} />
                        </div>       
                    </div>
                </div>
                {/* Ici, on intègre le composant collapse*/}
                <Collapse title="Description" content={apartment.description} />
                <Collapse title="Équipement" content={apartment.equipments.map(equipment => <div key={equipment}>{equipment}</div>)} />
            </main>
            <Footer />
        </div>
    );
}

export default Apartment;
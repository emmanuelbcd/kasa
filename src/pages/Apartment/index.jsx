//importation des composants nécessaires
//import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Slideshow from '../../components/Slideshow/Slideshow.jsx';
import Collapse from '../../components/Collapse/Collapse.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import activeStar from '../../assets/active-star.png';
import inactiveStar from '../../assets/inactive-star.png'

import { useParams, Navigate } from 'react-router-dom';

//import des données : contient les info détaillées des appartements
import apartmentsData from '../../data/apartments.json';

//fonction pour générer les étoiles
//cette fonctioon prend en entrée une note (rate) et retourne un tableau d'images d'étoiles
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

//structure de la fonction Apartment
function Apartment({ match }) {
    // récupération de l'id : useParams est utilisé pour extraire l'id de l'appartement depuis l'URL
    const {id} = useParams();
    // recherche de l'appartement : les données de l'appartement correspondant sont récupérées de apartmentsData en utilisant l'id.
    const apartment = apartmentsData.find(apt => apt.id === id);

    // Ajout des logs de débogage ici
    console.log("ID de l'URL:", id);
    console.log("Appartement trouvé:", apartment);
    console.log("Données complètes des appartements:", apartmentsData);

    //gestion des appartements inexistants : si aucun appartement n'est trouvé pour l'id donné,
    //l'utilisateur est redirigé vers la page notFound
    if (!apartment) {
        return <Navigate to="/not-found" replace />; // ou toute autre logique pour gérer cette erreur
    }

    return (
        <div className="apartment">
            <Header />
            <Slideshow pictures={apartment.pictures} /> {/* Utilisation du composant Slideshow */}
            <main className="content">
                <div className="content_top">
                    <div className="content_header">
                        {/* affiche le titre de l'appartement */}
                        <h1>{ apartment.title }</h1>
                        {/* affiche la localisation de l'appartement */}
                        <div className="content_location">{ apartment.location }</div>
                        <div className="content_tags">
                            {/* affiche les tags de l'appartement */}
                            {/* utilise la méthode map pour créer un élément pour chaque tag */}
                            {/* la méthode map itère sur tous les éléments du tableau apartment.tags ...*/}
                            {/* ...et crée un nouvel élément pour chaque span */}
                            { apartment.tags.map(tag => <span key={tag}>{tag}</span>)}
                        </div>
                    </div>
                    <div className="rate_host_container">
                        <div className="content_rate">
                            {/* on appelle la fonction generateStars qui prend la note de l'appartement apartment.rating */}
                            {/* et retourne un élément visuel représentant cette évaluation */}
                            {generateStars(apartment.rating)}
                        </div>
                        <div className="content_host">
                            <div className="content_hostName">{apartment.host.name}</div>
                            <div className="content_hostPicture">
                                <img src={apartment.host.picture} alt={`Hôte ${apartment.host.name}`} />
                            </div>       
                        </div>
                    </div>
                </div>
                {/* Ici, on intègre le composant collapse*/}
                <div className="collapse_component">
                    {/*le composant collapse est utilisé pour afficher la description de l'appartement*/}
                    <Collapse title="Description" content={apartment.description} customClass="collapse_description"/>
                    {/*autre composant collapse utilisé pour les équipements */}
                    {/*la méthode map est utilisée pour créer un élément div pour chaque équipement */}
                    {/*chaque div contient un équipement*/}
                    <Collapse title="Équipement" content={apartment.equipments.map(equipment => <div key={equipment}>{equipment}</div>)} customClass="collapse_equipment"/>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Apartment;
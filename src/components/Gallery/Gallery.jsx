import React from 'react';
import apartmentsData from '../../data/apartments.json';
import { Link } from 'react-router-dom'; //on importe le composant link

function Gallery() {
    return(
        <main className="gallery">
            {apartmentsData.map(apartment => (
                <Link key={ apartment.id } to={`/fiche-logement/${apartment.id}`} className="apartment-item">
                    <img src={apartment.cover} alt={`${apartment.title}`} />
                    <h3>{apartment.title}</h3>
                </Link>
            ))}
        </main>
    );
}
// on a utilisé la méthode map pour itérer sur chaque appartement de la liste.
//pour chaque appartement, la méthode map génère un élément (ici, un lien) avec une image et un titre.

export default Gallery;
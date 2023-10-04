import React from 'react';
import apartmentsData from '../../data/apartments.json';
import Card from '../Card/Card.jsx';

function Gallery() {
    return(
        <main className="gallery">
            {apartmentsData.map(apartment => (
                <Card   key={ apartment.id } 
                        id={apartment.id} 
                        cover={apartment.cover} 
                        title={apartment.title} />
            ))}
        </main>
    );
}
// on a utilisé la méthode map pour itérer sur chaque appartement de la liste.
//pour chaque appartement, la méthode map génère un élément (ici, un lien) avec une image et un titre.

export default Gallery;
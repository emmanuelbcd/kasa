//components/Slideshow/Slideshow

//useState est un Hook de react qui permet d'ajouter un état local à un composant fonctionnel
import React, { useState } from 'react'; 

//Slideshow est un composant fonctionnel de React
//Il accepte une prop pictures qui est un tableau d'URLs d'images à afficher dans le diaporama
function Slideshow({ pictures }) {
    const[currentIndex, setCurrentIndex]=useState(0);

    const goNext = () => {
        setCurrentIndex(( prevIndex ) => ( prevIndex + 1 ) % pictures.length);
    }

    const goPrev = () => {
        setCurrentIndex(( prevIndex ) => ( prevIndex - 1 + pictures.length ) % pictures.length);
    }

    return (
        <div className="slideshow-container">
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
            <button onClick={goPrev} className="slide-button prev">←</button>
            <button onClick={goNext} className="slide-button next">→</button>
        </div>
    );
}

export default Slideshow;


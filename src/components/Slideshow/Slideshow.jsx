//components/Slideshow/Slideshow

//useState est un Hook de react qui permet d'ajouter un état local à un composant fonctionnel
import React, { useState } from 'react'; 
import Slideleft from '../../assets/slideshow-left.png'; //on importe la flèche gauche 
import Slideright from '../../assets/slideshow-right.png'; //on importe la flèche droite

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
        <section className="slideshow-container">
            <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide-image" />
            {/* Condition pour afficher le compteur si le nombre d'images est supérieur à 1 */}
            {pictures.length > 1 && (
                <span className="slide-counter">{currentIndex + 1}/{pictures.length}</span>
            )}
            {/*Condition pour afficher la flèche précédente si le nombre d'images est supérieur à 1*/}
            {pictures.length > 1 && (
                <button onClick={goPrev} className="slide-button prev">
                    <img src={Slideleft} alt="Précédent"/>
                </button>
            )}
            {/*Condition pour afficher la flèche suivante si le nombre d'images est supérieur à 1*/}
            {pictures.length > 1 && (
            <button onClick={goNext} className="slide-button next">
                <img src={Slideright} alt="Suivant" className="slide-button-img"/>
            </button>
            )}
        </section>
    );
}

export default Slideshow;


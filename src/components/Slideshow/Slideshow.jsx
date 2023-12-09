//components/Slideshow/Slideshow

//useState est un Hook de react qui permet d'ajouter un état local à un composant fonctionnel
import React, { useState } from 'react'; 
import Slideleft from '../../assets/slideshow-left.png'; //on importe la flèche gauche 
import Slideright from '../../assets/slideshow-right.png'; //on importe la flèche droite

//Slideshow est un composant fonctionnel de React
//Il accepte une prop pictures qui est un tableau d'URLs d'images à afficher dans le diaporama

//Slideshow reçoit "pictures" en tant que PROP
//La PROP pictures est utilisée pour déterminer 
//quelles images afficher dans le slideshow
//et combien d'images il y a au total
function Slideshow({ pictures }) {
    // L'index du 1er slideshow est défini dans l'état intial useState
    //currentIndex est la variable qui stocke l'index actuel de l'image affichée
    const[currentIndex, setCurrentIndex]=useState(0);

    const goNext = () => {
        // cette ligne calcule le nouvel index pour l'image suivante 
        // le modulo est utilisé pour créer un effet de boucle
        // quand on atteint la fin du tableau, l'index revient à O
        setCurrentIndex(( prevIndex ) => ( prevIndex + 1 ) % pictures.length);
    }

    const goPrev = () => {
        // cette ligne permet de revenir à l'image précédente
        // le modulo est aussi utilisé pour permettre une navigation en boucle
        // si l'index devient négatif, il boucle vers la fin du tableau
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


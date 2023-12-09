//compnents/Banner/Banner.jsx
//import React from 'react';

// le composant Banner reçoit 2 props : image et slogan
function  Banner( { image, slogan } ) {
    return (
        // un élément section est créé avec une class qui change en fonction de la présence ou non d'un slogan
        // si un slogan est fourni, la class with slogan est utilisée
        <section className={`banner ${slogan ? "with-slogan" : "without-slogan"}`}>
            <img src={ image } alt="bannière" />
            {/* on utilise une logique conditionnelle pour voir si slogan est présent. Si oui, création de h2 */}
            { slogan && <h2>{slogan}</h2>}
        </section>
    );
}

//on exporte le composant Banner pour qu'il puisse être utilisé dans d'autres parties de l'appli
export default Banner;
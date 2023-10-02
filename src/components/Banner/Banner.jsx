//compnents/Banner/Banner.jsx
//import React from 'react';

function  Banner( { image, slogan } ) {
    return (
        <section className="banner">
            <img src={ image } alt="bannière" />
            { slogan && <h2>{slogan}</h2>}
        </section>
    );
}

//on exporte le composant Banner pour qu'il puisse être utilisé dans d'autres parties de l'appli
export default Banner;
//importations
import React from 'react';
import Header from '../../components/Header/Header.jsx';
import aboutData from '../../data/aboutData.json';
import Banner from '../../components/Banner/Banner.jsx';
import aboutBanner from '../../assets/about-banner.png';
import Collapse from '../../components/Collapse/Collapse.jsx';
import Footer from '../../components/Footer/Footer.jsx';

//structure de la fonction About
function About() {
    return (
        <div className="about">
            <Header />
            <Banner image={aboutBanner} />
            {/*aboutData.map : utilise la méthode map pour itérer sur chaque élément de aboutData*/}
            {/*pour chaque élément contenant un title et un content, il crée un composant collapse*/}
            {/*chaque collapse reçoit title, content et une key unique (le titre de l'élément */}
            {aboutData.map(data => (
                <Collapse title={data.title} content={data.content} key={data.title} customClass="about_collapse" />
            ))}
            <Footer />
        </div>
    );
}

export default About;
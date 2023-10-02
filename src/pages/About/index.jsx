//import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import aboutBanner from '../../assets/about-banner.png';
import Footer from '../../components/Footer/Footer.jsx';

function About() {
    return (
        <div className="about">
            <Header />
            <Banner image={aboutBanner} />
            <Footer />
        </div>
    );
}

export default About;
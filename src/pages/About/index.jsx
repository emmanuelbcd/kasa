import React from 'react';
import Header from '../../components/Header/Header.jsx';
import aboutData from '../../data/aboutData.json';
import Banner from '../../components/Banner/Banner.jsx';
import aboutBanner from '../../assets/about-banner.png';
import Collapse from '../../components/Collapse/Collapse.jsx';
import Footer from '../../components/Footer/Footer.jsx';


function About() {
    return (
        <div className="about">
            <Header />
            <Banner image={aboutBanner} />
            {aboutData.map(data => (
                <Collapse title={data.title} content={data.content} key={data.title} />
            ))}
            <Footer />
        </div>
    );
}

export default About;
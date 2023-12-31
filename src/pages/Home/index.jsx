import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Gallery from '../../components/Gallery/Gallery.jsx';
import Banner from '../../components/Banner/Banner.jsx';
import homeBanner from '../../assets/home-banner.png';
import Footer from '../../components/Footer/Footer.jsx';

function Home() {
    return (
        <div className="home">
            <Header />
            <Banner image={homeBanner} slogan={<><span>Chez vous,</span><br className="mobile-break"/><span> partout et ailleurs</span></>} />
            <Gallery />
            <Footer />
        </div>
    );
}

//on exporte le composant Home pour qu'il puisse être utilisé
export default Home;
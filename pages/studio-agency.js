import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import FooterCustom from '../components/Layouts/FooterCustom';
import MainBanner from '../components/StudioAgency/MainBanner';
import Services from '../components/StudioAgency/Services';
import About1 from '../components/StudioAgency/About1';
import OurWorks from '../components/StudioAgency/OurWorks';
import FunFactsTwo from '../components/Common/FunFactsTwo';
import About from '../components/StudioAgency/About';
import Feedback from '../components/Common/Feedback';
import LatestNewsSlider from '../components/Common/LatestNewsSlider';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/Layouts/Footer';

class StudioAgency extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                <MainBanner />

                <FooterCustom />

                <About1/>
                
                <Services />

                <OurWorks />

                <FunFactsTwo />

                <About />

                <Feedback />
                
                <LatestNewsSlider />
                
                <CtaAreaTwo />

                <Partner />
                
                <Footer />
            </>
        );
    }
}

export default StudioAgency;
import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import TeamStyleThree from '../components/Team/TeamStyleThree';
import TeamStyleMgt from '../components/Team/TeamStyleMgt';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Team extends Component {
    render() {
        return (
            <>
                <NavbarTwo />

                {/* <PageBanner 
                    pageTitle="Our Skilled Team" 
                    BGImage="bg-one"
                />   */}
                <TeamStyleThree />

                <TeamStyleMgt />

                {/* <CtaAreaTwo /> */}
                
                <Footer />
            </>
        );
    }
}

export default Team;
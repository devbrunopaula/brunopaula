import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import TeamStyleThree from '../components/Team/TeamStyleThree';
import TeamStyleTwo from '../components/Team/TeamStyleTwo';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';


class Team extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Our Skilled Team" 
                />  
                <TeamStyleThree />
                <TeamStyleTwo />
                <CtaAreaTwo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Team;
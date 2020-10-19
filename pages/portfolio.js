import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import WorksStyleOne from '../components/Portfolio/WorksStyleOne';
import WorksStyleTwo from '../components/Portfolio/WorksStyleTwo';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class Portfolio extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Our Portfolio" 
                />  
                <WorksStyleOne />
                <WorksStyleTwo />
                <CtaAreaTwo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Portfolio;
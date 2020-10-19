import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import PortfolioDetailsContent from '../components/Portfolio/PortfolioDetailsContent';
import CtaAreaTwo from '../components/Common/CtaAreaTwo';
import Footer from '../components/Layouts/Footer';

class PortfolioDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="UX for Mobile Apps" 
                />  
                <PortfolioDetailsContent />
                <CtaAreaTwo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default PortfolioDetails;
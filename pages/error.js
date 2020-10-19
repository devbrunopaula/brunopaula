import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import ErrorContent from '../components/Error/ErrorContent';
import Footer from '../components/Layouts/Footer';

class Error extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="404 Error" 
                />  
                <ErrorContent />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Error;
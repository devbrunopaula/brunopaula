import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogRightSidebar from '../components/Blog/BlogRightSidebar';
import Footer from '../components/Layouts/Footer';

class Blog2 extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Blog Right Sidebar" 
                />  
                <BlogRightSidebar />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Blog2;
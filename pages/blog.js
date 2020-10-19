import React, { Component } from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';
import PageBanner from '../components/Common/PageBanner';
import BlogGridThree from '../components/Blog/BlogGridThree';
import Footer from '../components/Layouts/Footer';

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarTwo />
                <PageBanner 
                    pageTitle="Blog Grid" 
                />  
                <BlogGridThree />
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Blog;
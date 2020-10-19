import React, { Component } from 'react';

class ErrorContent extends Component {
    render() {
        return (
            <section className="error-area ptb-100">
                <div className="container">
                    <div className="error-content">
                        <img src="/images/404.png" alt="Error" />

                        <form className="search-form">
                            <input type="text" className="search-field" placeholder="search" />
                            <button type="submit" className="search-submit">Search</button>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

export default ErrorContent;
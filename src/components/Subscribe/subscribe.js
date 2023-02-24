import React from 'react';

const Subscribe = () => {
    return (
        <section id="subscribe">
            <div className="container">
                <div className="subscribe">
                    <h2>Subscribe to the Newsletter</h2>
                    <p>Enter your email below to get our daily offers and news</p>
                    <div className="subscribe--email">
                        <input type="text" placeholder="Enter your email."/>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
import React from 'react';
import Header from '../components/Header'; 

const Home = () => {
    return (
        <div className="parent">
            <Header />

            <div className="body">
                <h1>Body</h1>
            </div>
            <footer className="footer">Footer</footer>
        </div>
    );
};

export default Home;

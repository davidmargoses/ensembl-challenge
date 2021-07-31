import React from 'react';
import Placeholder from '../assets/placeholder.png';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();
    return (
        <div className="home-container">
            <div className="home-header">
                <h2>Popular Titles</h2>
            </div>
            <div className="home-content">
                <div className="home-series">
                    <button onClick={() => history.push('/series')}>
                        <img src={Placeholder} alt="placeholder" />
                        <h3>SERIES</h3>
                    </button>
                    <span>Popular series</span>
                </div>
                <div className="home-movies">
                    <button onClick={() => history.push('/movies')}>
                        <img src={Placeholder} alt="placeholder" />
                        <h3>MOVIES</h3>
                    </button>
                    <span>Popular movies</span>
                </div>
            </div>
        </div>
    );
};

export default Home;

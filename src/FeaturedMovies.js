import React from 'react';
import './index.css';

const FeaturedMovies = props => {
    return (
        <div className="movieContainer">
            <div className="content">
                {props.children}
            </div>
            <div className="extra content">
                <div className="buttons">
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMovies;
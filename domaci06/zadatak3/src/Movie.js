import React from 'react';
import './index.css';

const Movie = props => {
    return (
        <div className="container">
           <div className="image">
                <img alt="movie" src="movie.png"/>
            </div>
            <div className="movie">
                {props.name},
                sala: 
                {props.hall},
                cena:
                {props.price}
            </div>
        </div>
    );
};

export default Movie;
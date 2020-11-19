import React from 'react';
import './index.css';

const Movie = props => {
    return (
        <div className="container">
           <div className="image">
                <img alt="img" src={props.img}/>
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
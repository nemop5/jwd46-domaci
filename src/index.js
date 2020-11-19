import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Movie from './Movie.js';
import FeaturedMovies from './FeaturedMovies.js';

const App = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy + '.';
    return (
        <div>
            <h1>
                Repertoar za danas ({today})
            </h1>
            <FeaturedMovies>
                <Movie name="Captain America - The first Avenger" hall="2" price="350din" img="captain.png"/>
            </FeaturedMovies>

           <FeaturedMovies>
                <Movie name="The papillon" hall="1" price="300din" img="papillon.png"/>
           </FeaturedMovies>
           
           <FeaturedMovies>
                <Movie name="The lost city of Z" hall="5" price="350din" img="cityz.png"/>
           </FeaturedMovies>
        </div>
    );
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
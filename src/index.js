import React from 'react';
import ReactDOM from 'react-dom';


const App = function() {
    // Zadatak 1
    const buttonText = 'Click';
    return <div>
        <label for="name">Enter name:</label>
        <input id="name" type="text"/>
        <button style={{backgroundColor: 'blue', color: 'white'}}>
            {buttonText}
        </button>
    </div>
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
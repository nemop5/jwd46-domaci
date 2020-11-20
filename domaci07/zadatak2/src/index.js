import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    
    render() {
        return ( 
            <form>
                <label>Enter email address:</label>
                <input/>
            </form>
        );
    };
   
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
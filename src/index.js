import React from 'react';
import ReactDOM from 'react-dom';

const App = function() {
    return <div>
    <table style={{width:'100%', border: '5px ridge coral'}}>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
        <tr style={{textAlign: 'center'}}>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
        </tr>
        <tr style={{textAlign: 'center'}}>
            <td>John</td>
            <td>Doe</td>
            <td>80</td>
        </tr>
    </table>
    </div>
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);


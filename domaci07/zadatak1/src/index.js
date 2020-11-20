import React from 'react';
import ReactDOM from 'react-dom';

function getCurrentTime() {
    var date = new Date();
    var strArray=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var d = date.getDate();
    var m = strArray[date.getMonth()];
    var y = date.getFullYear();
    return '' + (d <= 9 ? '0' + d : d) + '-' + m + '-' + y;
}

// funkcijska komponenta
class App extends React.Component {
    
    render() {
        return <div>Hello user! Today is {getCurrentTime()}!</div> // sta bi bilo da rezultat getCurrentTime() dolazi sa nekog servera
    }
   
};

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import Calendar from './Calendar';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = { time: new Date().toLocaleTimeString(), date: new Date().toLocaleDateString()};
     
    }

    render() {
        return (
            <div>
                <button onClick={() => this.getCurrentTime()}>
                    Get current time
                </button>
                <br/><br/>
                <Clock time={this.state.time}/>
                <Calendar date={this.state.date}/>
                
            </div>
        );
    }

    getCurrentTime() {
        this.setState({time: new Date().toLocaleTimeString()});
    }

    getCurrentDate() {
        this.setState({date: new Date().toLocaleDateString()})
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);
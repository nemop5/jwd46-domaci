import React from 'react';

const Clock = (props) => {
    console.log(props);
    return <div>Hello from Clock! Current time is: {props.time}</div>
}

export default Clock;
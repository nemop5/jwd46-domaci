import React from 'react';

const Calendar = (props) => {
    console.log(props);
    return <div>Hello from Calendar! Current date is: <input type="date" defaultValue={props.date}></input></div>
}

export default Calendar;
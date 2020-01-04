import React, { useState, useEffect } from 'react'
import Moment from 'react-moment';

const Clock = () => {
    //let time = new Date().toLocaleString();
    const date = new Date();
    /* const time = new Date(); */
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timerID = setInterval( () => tick(), 1000 );
       
        return function cleanup() {
            clearInterval(timerID);
          };
       });
       
         function tick() {
          setTime(new Date());
         }
    return (
        <div className="container-fluid d-flex flex-row">
            <div className="col-md-4 mx-auto">
                <div className="display">
                    <Moment className="display-time" format='hh:mm:ss'>{time}</Moment>
                    <Moment className="display-date" format='ddd DD MMMM YYYY'>{date}</Moment>
                    {/* <div className="display-time">1</div>
                    <div className="display-date">Sat 04 January 2020</div> */}
                </div>
            </div>
        </div>
    )
}

export default Clock

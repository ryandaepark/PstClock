import { useState } from 'react';
import './clock.css';
const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000); //1000 is 1sec 

    return (
        <div className="clock">
            <h1>{currentTime}</h1>
        </div>
    )
}

export default Clock 
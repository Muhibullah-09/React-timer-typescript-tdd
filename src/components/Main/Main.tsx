import React, { useState, useEffect } from 'react'
import './Main.css';
import CalculateTimer from '../Helper/CalculateTimer';
import Control from '../Control/Control';
function Main() {
    const [timeInSeconds, setTimeInSeconds] = useState<number>(0);
    const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
    useEffect(() => {
        let timeArray: Array<number | string> = CalculateTimer(timeInSeconds);
        setTimerArray(timeArray);
    }, [timeInSeconds]);

    return (
        <div>
            <section className="time-container">
                <p className="timer-text">{timerArray[0]}</p>
                <span>:</span>
                <p className="timer-text">{timerArray[1]}</p>
                <span>:</span>
                <p className="timer-text">{timerArray[2]}</p>
            </section>
            <Control setTimerInSeconds={setTimeInSeconds} />
        </div>
    )
}

export default Main

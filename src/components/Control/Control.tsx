import React, { useState } from 'react';
import './Control.css';
type Props = {
    setTimerInSeconds: Function
};
function Control(props: Props) {
    const { setTimerInSeconds } = props;
    const [intervalId, setIntervalId] = useState<number>(0);

    const handlePlayButton = () => {
        let interval: any = setInterval(() => {
            setTimerInSeconds((previousState: number) => previousState + 1)
        }, 1000);

        setIntervalId(interval);
    }

    const handleStopButton = () => {
        clearInterval(intervalId);

    }
    const handleResetButton = () => {
        clearInterval(intervalId);
        setTimerInSeconds(0);
    }
    return (
        <div>
            <section className='controls-container'>
                <button className='start-timer' onClick={handlePlayButton}>Play</button>
                <button className='stop-timer' onClick={handleStopButton}>Stop</button>
                <button className='reset-timer' onClick={handleResetButton}>Reset</button>
            </section>
        </div>
    )
}

export default Control
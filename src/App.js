import React from 'react';
import './App.css';
import Datatimer from './Component/Datatimer';

function App() {
    const countDownDate = new Date('June 1,2022').getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;
    let objTime;

    const days = Math.floor(distance / (24 * 60 * 60 * 1000));
    const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) + 1;
    const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
    const seconds = Math.floor((distance % (60 * 1000)) / 1000);

    if (distance < 0) {
        clearInterval();
    } else {
        objTime = {
            day: days,
            hour: hours,
            minute: minutes,
            second: seconds,
        };
    }

    return (
        <div className="App">
            <Datatimer {...objTime} />
        </div>
    );
}

export default App;

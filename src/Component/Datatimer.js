import React, { Fragment } from 'react';

const Datatimer = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
    return (
        <Fragment>
            <section className="timer-container">
                <section className="timer">
                    <h1 className="title">LOOKING FORWARD TO SUMMER ...</h1>
                    <div className="datatimer">
                        <section>
                            <p className="text">{timerDays}</p>
                            <small>Days</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p className="text">{timerHours}</p>
                            <small>Hours</small>
                        </section>{' '}
                        <span>:</span>
                        <section>
                            <p className="text">{timerMinutes}</p>
                            <small>Minutes</small>
                        </section>{' '}
                        <span>:</span>
                        <section>
                            <p className="text">{timerSeconds}</p>
                            <small>Seconds</small>
                        </section>
                    </div>
                </section>
            </section>
        </Fragment>
    );
};

Datatimer.defaultProps = {
    timerDays: 10,
    timerHours: 10,
    timerMinutes: 10,
    timerSeconds: 10,
};

export default Datatimer;

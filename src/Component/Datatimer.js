import React, { Fragment } from 'react';

const Datatimer = props => {
    // debugger;
    return (
        <Fragment>
            <section className="timer-container">
                <section className="timer">
                    <h1 className="title">LOOKING FORWARD TO SUMMER ...</h1>
                    <div className="datatimer">
                        <section>
                            <p className="text">{props.day}</p>
                            <small>Days</small>
                        </section>
                        <span>:</span>
                        <section>
                            <p className="text">{props.hour}</p>
                            <small>Hours</small>
                        </section>{' '}
                        <span>:</span>
                        <section>
                            <p className="text">{props.minute}</p>
                            <small>Minutes</small>
                        </section>{' '}
                        <span>:</span>
                        <section>
                            <p className="text">{props.second}</p>
                            <small>Seconds</small>
                        </section>
                    </div>
                </section>
            </section>
        </Fragment>
    );
};

export default Datatimer;

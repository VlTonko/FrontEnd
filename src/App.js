import React from 'react';
import './App.css';
import transformData from './helpers/transformData';
import Datatimer from './component/Datatimer';

const countDownDate = new Date('June 1,2022').getTime();
let now = new Date().getTime();
let distance = countDownDate - now;
console.log('dist1', distance);

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: distance };
    }

    componentDidMount() {
        this.timerSummer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerSummer);
    }

    tick() {
        now = new Date().getTime();
        distance = countDownDate - now;
        this.setState({ data: distance });
    }

    render() {
        return (
            <div className="App">
                <Datatimer {...transformData(this.state.data)} />
            </div>
        );
    }
}

export default Timer;

import React from 'react';
import './App.css';
import transformData from './helpers/transformData';
import Datatimer from './component/Datatimer';

const countDownDate = new Date('June 1,2022').getTime();
let now = new Date().getTime();

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: countDownDate - now };
    }

    componentDidMount() {
        this.timerSummer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerSummer);
    }

    tick() {
        now = new Date().getTime();
        let amountTime = countDownDate - now;
        this.setState({ data: amountTime });
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

import React from 'react';
import '../App.css';

class PausePlayButton extends React.Component {
    render() {
        return (
            <div className="pause-play-container">
                <i id="pause-icon" className="fa fa-pause">
                    <img src={require('../image/play.png')}></img>
                </i>
            </div>
        );
    }
}

export default PausePlayButton;

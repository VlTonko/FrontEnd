import React from 'react';
import '../App.css';

class BackwardButton extends React.Component {
    render() {
        return (
            <div className="back-container">
                <i id="back-icon" className="fa fa-backward">
                    <img src={require('../image/prew.png')}></img>
                </i>
            </div>
        );
    }
}

export default BackwardButton;

import React from 'react';
import '../App.css';

class ForwardButton extends React.Component {
    render() {
        return (
            <div className="fwrd-container">
                <i id="fwrd-icon" className="fa fa-forward">
                    <img src={require('../image/next.png')}></img>
                </i>
            </div>
        );
    }
}

export default ForwardButton;

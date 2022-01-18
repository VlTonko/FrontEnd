import React from 'react';
import '../App.css';
import TweenMax from 'gsap';

class Display extends React.Component {
    componentDidMount() {
        TweenMax.to('.album-cover', 80, {
            transformOrigin: '50% 50%',
            rotation: 360,
            delay: 3,
            ease: 'ease-in-out',
        });
        TweenMax.to('.progress', 80, {
            width: 185,
            delay: 3,
            ease: 'ease-in-out',
        });
        TweenMax.to('.display', 1, {
            top: '28%',
            delay: 1,
        });
    }

    render() {
        return (
            <div className="display">
                <div className="progress-bar"></div>
                <p className="song-title">Heavy</p>
                <p className="artist">Oh Wonder</p>
                <div className="progress"></div>
            </div>
        );
    }
}

export default Display;

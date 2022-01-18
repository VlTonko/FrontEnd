import React from 'react';
import './App.css';
import PausePlayButton from './button/PausePlayButton';
import BackwardButton from './button/BackwardButton';
import ForwardButton from './button/ForwardButton';
import AlbumCover from './button/AlbumCover';
import Display from './button/Display';

class MusicPlayer extends React.Component {
    render() {
        return (
            <div className="player-container">
                <div className="player-body"></div>
                <PausePlayButton />
                <BackwardButton />
                <ForwardButton />
                <AlbumCover />
                <Display />
            </div>
        );
    }
}

export default MusicPlayer;

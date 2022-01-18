import React from 'react';
import './App.css';
import MusicPlayer from './MusicPlayer';

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <MusicPlayer />
            </div>
        );
    }
}

export default App;

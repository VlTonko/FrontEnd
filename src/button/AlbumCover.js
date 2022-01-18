import React from 'react';
import '../App.css';

class AlbumCover extends React.Component {
    render() {
        return (
            <div className="album-container">
                <img className="album-cover" src="https://firebasestorage.googleapis.com/v0/b/web-demo-2188e.appspot.com/o/ow.png?alt=media&token=30067711-5169-4596-939a-e3ccc4632c46" alt=""></img>
                <div className="album-center"></div>
            </div>
        );
    }
}

export default AlbumCover;

import React from 'react';
import './Image.css';

const Image = ({ className, src, alt }) => (
    <div className={className}>
        <img src={src} alt={alt} />
    </div>
);

export default Image;

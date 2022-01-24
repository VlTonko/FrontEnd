import React from 'react';
import './Image.css';

export default function Image({ className, src, alt }) {
    return (
        <div className={className}>
            <img src={src} alt={alt} />
        </div>
    );
}

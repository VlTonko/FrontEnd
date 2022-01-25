import React from 'react';
import Image from '../imageEl/Image';
import wing from '../image/wing.png';
import './Images.css';

export default function imagesWing() {
    return (
        <div className="imagesWing">
            <Image className={'wingImgTwo'} src={wing} alt={wing} />
            <Image className={'wingImgOne'} src={wing} alt={wing} />
            <Image className={'wingImgTwo'} src={wing} alt={wing} />
            <Image className={'wingImgOne'} src={wing} alt={wing} />
            <Image className={'wingImgTwo'} src={wing} alt={wing} />
            <Image className={'wingImgTwo'} src={wing} alt={wing} />
        </div>
    );
}

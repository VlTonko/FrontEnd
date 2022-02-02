import React from 'react';
import Image from '../imageEl/Image';
import wing from '../image/wing.png';
import './Images.css';
import {StWings, OneWings, TwoWings} from "../styled";

export default function imagesWing() {
    return (
        <StWings>
            <Image small src={wing} alt={wing} />
            <Image src={wing} alt={wing} />
            <Image small src={wing} alt={wing} />
            <Image  src={wing} alt={wing} />
            <Image small src={wing} alt={wing} />
            <Image small src={wing} alt={wing} />
        </StWings>
    );
}

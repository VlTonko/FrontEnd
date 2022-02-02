import React from 'react';
import {WingItem} from "../styled";

const Image = ({ src, alt, small }) => (
    <WingItem small={small}>
        <img src={src} alt={alt} />
    </WingItem>
);

export default Image;

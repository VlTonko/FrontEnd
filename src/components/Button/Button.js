import React from 'react';
import {StButton} from "./StButton";

const Button = ({onClick, contentKey}) => {
    return (
        <StButton onClick={onClick}>{contentKey}</StButton>
    );
};

export default Button;
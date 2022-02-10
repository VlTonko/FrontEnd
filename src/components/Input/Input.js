import React from 'react';

const Input = ({onChange, value}) => {
    return (
        <div>
            <input
                className="inputText"
                onChange={onChange}
                placeholder="Please signin"
                value={value}
            />
        </div>
    );
};

export default Input;
import React from 'react';
import './index.css';

function Input({ handleChange, value }) {
    return (
        <input className="input" type="text" onChange={handleChange} value={value}></input>
    );
}

export default Input;
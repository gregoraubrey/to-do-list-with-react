import React from 'react';
import './index.css';

function Button({ handleSubmit }) {
    return (
        <button className="button" onClick={handleSubmit}>Add</button>
    );
}

export default Button;
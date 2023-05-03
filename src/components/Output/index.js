import React from 'react';
import './index.css';

function Output({ value }) {
    return (
        <div className="output">
            <p>{value}</p>
        </div>
    );
}

export default Output;
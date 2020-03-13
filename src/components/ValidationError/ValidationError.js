import React from 'react';
import './ValidationError.css'; 

const ValidationError = ({ content }) => {
    return <div className="uk-text-danger uk-text-small" style={{ "height": "21px" }}>{content}</div>
}

export default ValidationError;
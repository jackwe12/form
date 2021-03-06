import React from 'react';
import ValidationError from '../ValidationError/ValidationError';

function TextareaInput({ name, label, type, value, alert, setInputs }) {
    return (
        <div className="input-component">
            <label className="form-label">{label}</label>
            <textarea id={name} name={name} value={value} type={type} onChange={setInputs} className={"uk-textarea" + (alert ? ' uk-form-danger' : '')}></textarea>
            <ValidationError content={alert} />
        </div>
    )
}

export default TextareaInput;
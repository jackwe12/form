import * as React from 'react';
import ValidationError from '../ValidationError/ValidationError';
import './TextInput.css'



function TextInput({ name, label, type, value, alert, setInputs, placeholder }) {

    return (
        <div className="input-component text-input">
            <label className="form-label">{label}</label>
            <input id={name} placeholder={placeholder} name={name} type={type || ""} value={value} onChange={setInputs} className={"uk-input" + (alert ? ' uk-form-danger' : '')} />
            <ValidationError content={alert} />
        </div>
    )
}

export default TextInput;
import * as React from 'react';
import ValidationError from '../ValidationError/ValidationError';

function TextInput({ name, label, type, value, alert, setInputs, placeholder }) {
    return (
        <div>
            <label htmlFor={name} className="uk-form-label uk-text-large">{label}</label>
            <input id={name} placeholder={placeholder} name={name} type={type || ""} value={value} onChange={setInputs} className={"uk-input" + (alert ? ' uk-form-danger' : '')} />
            <ValidationError content={alert} />
        </div>
    )
}

export default TextInput;
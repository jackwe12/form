import React from 'react';
import ValidationError from '../ValidationError/ValidationError';

function SelectTextInput({ name, label, type, value, alert, options, setInputs, placeholder }) {
    return (
        <div>
            <label>{label}</label>
            <select  name={name} type={type} value={value} onChange={setInputs} >
                {options && options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
            </select>
            <input id={name} placeholder={placeholder} name={name} type={type} value={value} onChange={setInputs} className={"uk-input" + (alert ? ' uk-form-danger' : '')} />

            <ValidationError content={alert} />
        </div>
    )
}

export default SelectTextInput;


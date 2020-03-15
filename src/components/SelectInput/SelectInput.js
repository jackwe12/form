import React from 'react';
import ValidationError from '../ValidationError/ValidationError';
import './SelectInput.css';

function SelectInput({ name, label, type, value, alert, options, setInputs, placeholder }) {
    return (
        <div className="input-component">
            <label>{label}</label>
            <select id={name} name={name} type={type} value={value} onChange={setInputs} className={"uk-select" + (alert ? ' uk-form-danger' : '')}>
                {options && options.map(option => <option key={option.value} value={option.value} >{option.name}</option>)}
            </select>
            <ValidationError content={alert} />
        </div>
    )
}

export default SelectInput;


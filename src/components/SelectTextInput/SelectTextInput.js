import React from 'react';
import ValidationError from '../ValidationError/ValidationError';
import './SelectTextInput.css';

function SelectTextInput({ name, label, type, value, alert, options, setInputs, placeholder, setSelectColor }) {


    return (
        <div className="input-component select-text">
            <label>{label}</label>
            <select className="select-text-input-select" defaultValue={options[0].value} name={name} onChange={setSelectColor} >
                {options && options.map(option => <option key={option.value} value={option.value} disabled={option.disabled} onClick={setSelectColor} >{option.name}</option>)}
            </select>
            <input id={name} placeholder={placeholder} name={name} value={value} onChange={setInputs} className={"uk-input" + (alert ? ' uk-form-danger' : '')} />

            <ValidationError content={alert} />
        </div>
    )
}

export default SelectTextInput;


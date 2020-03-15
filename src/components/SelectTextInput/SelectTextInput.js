import React from 'react';
import ValidationError from '../ValidationError/ValidationError';
import './SelectTextInput.css';

function SelectTextInput({ name, label, type, value, alert, options, setInputs, placeholder }) {
    const setSelectColor = (e)=>{
        const element = e.target;
        element.classList.add("change-select-color")
    }

    return (
        <div className="input-component">
            <label>{label}</label>
            <select className="select-text-input-select" defaultValue={'-None'} name={name} type={type} onChange={setInputs,setSelectColor} >
                {options && options.map(option => <option key={option.value} value={option.value} disabled={option.disabled} onClick={setSelectColor} >{option.name}</option>)}
            </select>
            <input id={name} placeholder={placeholder} name={name} type={type} value={value} onChange={setInputs} className={"uk-input" + (alert ? ' uk-form-danger' : '')} />

            <ValidationError content={alert} />
        </div>
    )
}

export default SelectTextInput;


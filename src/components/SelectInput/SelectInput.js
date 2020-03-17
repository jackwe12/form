import React from 'react';
import ValidationError from '../ValidationError/ValidationError';
import './SelectInput.css';
import {useEffect} from 'react';
import selectDrownDown from './selectDropDown';

function SelectInput({ name, label, type, value, alert, options, setInputs, placeholder, handleSelectChange }) {

    useEffect(() => {
        selectDrownDown(handleSelectChange, name);
       
    
    });


      
    return (
        <div className="input-component">
            <label>{label}</label>
            <input className="chosen-value" id={name} name={name} value={value} type={type || ""}  onChange={setInputs} placeholder={placeholder}/>
            <ul className="value-list">
                {options.map(option=><li key={option.name} name={name} value={option.value}>{option.name}</li>)}
            </ul>
            <ValidationError content={alert} />
        </div>
    )
}

export default SelectInput;


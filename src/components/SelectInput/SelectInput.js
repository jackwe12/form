import React from 'react';
// import ValidationAlert from '../ValidationAlert';

function SelectInput({ name, label, type, value, alert, options, setInputs, placeholder }) {
    return (
        <div>
            <label>{label}</label>
            <select id={name} name={name} type={type} value={value} onChange={setInputs} className={"uk-select" + (alert ? ' uk-form-danger' : '')}>
                {options && options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
            </select>
            {/* <ValidationAlert content={alert} /> */}
        </div>
    )
}

export default SelectInput;


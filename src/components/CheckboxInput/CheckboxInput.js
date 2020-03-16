import React from 'react';
// import ValidationAlert from '../ValidationAlert';

const CheckboxInput = ({ name, label, type, value, alert, setInputs }) => {
    return (
        <div className="check-input-component">
            <label htmlFor={name} className="checkbox-label">{label}</label>
            <input id={name} name={name} type={type} value={value||false} checked={value} onChange={setInputs} className={"uk-checkbox"} />
            {/* <ValidationAlert content={alert} /> */}
        </div>
    )
}

export default CheckboxInput;
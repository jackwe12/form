import React from 'react';

const CheckboxInput = ({ name, label, type, value, alert, setInputs }) => {
    return (
        <div className="check-input-component">
            <label className="checkbox-label">{label}</label>
            <input id={name} name={name} type={type} value={value||false} checked={value} onChange={setInputs} className={"uk-checkbox"} />
        </div>
    )
}

export default CheckboxInput;
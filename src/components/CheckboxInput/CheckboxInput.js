import React from 'react';
// import ValidationAlert from '../ValidationAlert';

const CheckboxInput = ({ name, label, type, value, alert, setInputs }) => {
    return (
        <div>
            <label htmlFor={name} className="uk-form-label uk-margin-small-left">{label}</label>
            <input id={name} name={name} type={type} value={value||false} checked={value} onChange={setInputs} className={"uk-checkbox"} />
            {/* <ValidationAlert content={alert} /> */}
        </div>
    )
}

export default CheckboxInput;
import * as React from 'react';
import ValidationError from '../ValidationError/ValidationError';
import './TextInput.css'
import { useState } from "react";



function TextInput({ name, label, type, value, alert, setInputs, placeholder }) {
    // const [isShowWarning, setIsShowWarning] = useState(false);

    // const showWarning = (e) =>{
    //     // const element = e.target;
    //     // element.classList.add('show-warning');
    //     setIsShowWarning(true);
    // }

    return (
        <div className="input-component text-input">
            <label className="form-label">{label}</label>
            <input id={name} placeholder={placeholder} name={name} type={type || ""} value={value} onChange={setInputs} className={"uk-input" + (alert ? ' uk-form-danger' : '')} />
            <ValidationError content={alert} />
        </div>
    )
}

export default TextInput;
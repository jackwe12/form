import React from 'react';
import FormPanel from './FormPanel';
import formModel from '../models/Model';

function RegisterForm(){
    return (
        <div className="">
            <FormPanel model={formModel}/>
        </div>
    )
}

export default RegisterForm;
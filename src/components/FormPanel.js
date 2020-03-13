import React from 'react';
import TextInput from './TextInput/TextInput';
import SelectInput from './SelectInput/SelectInput';
import SelectTextInput from './SelectTextInput/SelectTextInput';
import TextAreaInput from './TextAreaInput/TextAreaInput';
import CheckboxInput from './CheckboxInput/CheckboxInput';
import useForm from '../hooks/useForm';

function FormPanel ({submitCallback, model }){
    const [inputs, setInputs, setSubmit] = useForm(model, submitCallback);

    return (
        <section>
            <div></div>
            <div>
                <div>Create Contact</div>
                <button>Cancel</button>
                <button>Save</button>
            </div>
            <form>
            <div>
                <div>Contact Information</div>
                <SelectTextInput setInputs={setInputs} {...{
                    name:"firstName",
                    label:"First Name", 
                    options:[
                        {value:'Mr', name:'Mr'},
                        {value:'Mrs', name:'Mrs'},
                        {value:'Miss', name:'Miss'},
                        {value:'Dr', name:'Dr'}
                        ],
                    placeholder:"John",
                    alert:inputs[0].alert,
                        }}/>
                <TextInput setInputs={setInputs} {...{
                    name:"lastName",
                    label:"Last Name",
                    type:"Text",
                    placeholder:"Smith",
                    alert:inputs[1].alert,
                    }}/>
                <TextInput setInputs={setInputs} {...{
                    name:"accountName",
                    label:"Account Name",
                    placeholder:"John's Joinery",
                    alert:inputs[2].alert,
                    }}/>
                <TextInput setInputs={setInputs} {...{
                    name:"companyName",
                    label:"Company Name (optional)",
                    placeholder:"",
                    alert:inputs[3].alert,
                    }}/>
                <TextInput setInputs={setInputs} {...{
                    name:"phone",
                    label:"Phone",
                    placeholder:"01 123 456 78",
                    alert:inputs[4].alert,
                    }}/>
                <TextInput setInputs={setInputs} {...{
                    name:"fax",
                    label:"Fax (optional)",
                    placeholder:"John's Joinery",
                    alert:inputs[5].alert,

                    }}/>
                <TextInput setInputs={setInputs} {...{
                    name:"title",
                    label:"Title (optional)",
                    placeholder:"Owner",
                    alert:inputs[6].alert,
                    }}/>
                <TextInput setInputs={setInputs} {...{
                    name:"email",
                    label:"Email",
                    placeholder:"Sample@email.com",
                    alert:inputs[7].alert,
                    }}/>
                <CheckboxInput setInputs={setInputs} {...{
                    name:"emailOpt",
                    label:"Email Opt Out",
                    type:"checkbox",
                    alert:inputs[8].alert,
                    }}/>
            </div>
            <div>
                <div>Address Information</div>
                <TextInput setInputs={setInputs} {...{
                    name:"address",
                    label:"Street No. & Street",
                    placeholder:"1, Elizabeth Street",
                    alert:inputs[9].alert,
                    }}/>
                <TextInput setInputs={setInputs} {...{
                    name:"city",
                    label:"City",
                    placeholder:"Sydney",
                    alert:inputs[10].alert,
                    }}/>
                <SelectInput setInputs={setInputs} {...{
                    name:"state",
                    label:"State", 
                    options:[
                        {value:'New South Wales', name:'New South Wales'},
                        {value:'Victoria', name:'Victoria'},
                        {value:'Queensland', name:'Queensland'},
                        {value:'Western Australia', name:'Western Australia'},
                        {value:'South Australia', name:'South Australia'},
                        {value:'Tasmania', name:'Tasmania'},
                        ],
                    placeholder:"New South Wales",
                    alert:inputs[11].alert,

                        }}/>
                <TextInput setInputs={setInputs} {...{
                    name:"postcode",
                    label:"Postcode",
                    placeholder:"2000",
                    alert:inputs[12].alert,
                    }}/>
            </div>
            <div>
                <div>Description</div>
                <TextAreaInput setInputs={setInputs} {...{
                    name:"description",
                    label:"Description",
                    alert:inputs[13].alert,

                    }}/>
            </div>
            <div>
                <input type="submit" onClick={setSubmit} value="submit" />
            </div>
            </form>
        </section>
    )
}

export default FormPanel;


import React from 'react';
import TextInput from './TextInput/TextInput';
import SelectInput from './SelectInput/SelectInput';
import SelectTextInput from './SelectTextInput/SelectTextInput';
import TextAreaInput from './TextAreaInput/TextAreaInput';
import CheckboxInput from './CheckboxInput/CheckboxInput';
import useForm from '../hooks/useForm';
import '../style/style.css';
import logo from '../image/Crunch_Accounting.png'
import useModal from '../hooks/useModal';
import Modal from './SaveModal/SaveModal'

function FormPanel({ submitCallback, model }) {
    const [inputs, setInputs, clearInputs] = useForm(model, submitCallback);
    const {isShowing, toggle} = useModal();



    return (
        <section>
            <div className="head-logo">
                <img src={logo} alt="logo" />
                <Modal
                    inputs={inputs}
                    isShowing={isShowing}
                    hide={toggle}
                />
            </div>
            <div className="blue-banner">
                <p className="create-content">Create Contact</p>
                <button className="cancel-btn btn" onClick={clearInputs}>Cancel</button>
                <button className="save-btn btn" onClick={toggle}>Save</button>
            </div>
            <form id="contact-form">
                <div className="grey-banner">
                    <div className="contact-section">
                        <div className="contact title">Contact Information</div>
                        <div className="contact flex-box">
                            <SelectTextInput setInputs={setInputs} {...{
                                name: "firstName",
                                label: "First Name",
                                options: [
                                    { value:'-None', name:'-None', disabled:true, selected:true},
                                    { value: 'Mr', name: 'Mr' },
                                    { value: 'Mrs', name: 'Mrs' },
                                    { value: 'Miss', name: 'Miss' },
                                    { value: 'Dr', name: 'Dr' }
                                ],
                                placeholder: "John",
                                alert: inputs[0].alert,
                            }} />
                            <TextInput setInputs={setInputs} {...{
                                name: "lastName",
                                label: "Last Name",
                                type: "Text",
                                placeholder: "Smith",
                                alert: inputs[1].alert,
                            }} />
                            <TextInput setInputs={setInputs} {...{
                                name: "accountName",
                                label: "Account Name",
                                placeholder: "John's Joinery",
                                alert: inputs[2].alert,
                            }} />
                            <TextInput setInputs={setInputs} {...{
                                name: "companyName",
                                label: "Company Name (optional)",
                                placeholder: "",
                                alert: inputs[3].alert,
                            }} />
                            <TextInput setInputs={setInputs} {...{
                                name: "phone",
                                label: "Phone",
                                placeholder: "01 123 456 78",
                                alert: inputs[4].alert,
                            }} />
                            <TextInput setInputs={setInputs} {...{
                                name: "fax",
                                label: "Fax (optional)",
                                placeholder: "John's Joinery",
                                alert: inputs[5].alert,

                            }} />
                            <TextInput setInputs={setInputs} {...{
                                name: "title",
                                label: "Title (optional)",
                                placeholder: "Owner",
                                alert: inputs[6].alert,
                            }} />
                            <TextInput setInputs={setInputs} {...{
                                name: "email",
                                label: "Email",
                                placeholder: "Sample@email.com",
                                alert: inputs[7].alert,
                            }} />
                            <CheckboxInput setInputs={setInputs} {...{
                                name: "emailOpt",
                                label: "Email Opt Out",
                                type: "checkbox",
                                alert: inputs[8].alert,
                            }} />
                        </div>
                    </div>
                    <div className="address-section ">
                        <div className="address title">Address Information</div>
                        <div className="address flex-box">
                            <TextInput setInputs={setInputs} {...{
                                name: "address",
                                label: "Street No. & Street",
                                placeholder: "1, Elizabeth Street",
                                alert: inputs[9].alert,
                            }} />
                            <TextInput setInputs={setInputs} {...{
                                name: "city",
                                label: "City",
                                placeholder: "Sydney",
                                alert: inputs[10].alert,
                            }} />
                            <SelectInput setInputs={setInputs} {...{
                                name: "state",
                                label: "State",
                                options: [
                                    { value: 'New South Wales', name: 'New South Wales' },
                                    { value: 'Victoria', name: 'Victoria' },
                                    { value: 'Queensland', name: 'Queensland' },
                                    { value: 'Western Australia', name: 'Western Australia' },
                                    { value: 'South Australia', name: 'South Australia' },
                                    { value: 'Tasmania', name: 'Tasmania' },
                                ],
                                placeholder: "New South Wales",
                                alert: inputs[11].alert,

                            }} />
                            <TextInput setInputs={setInputs} {...{
                                name: "postcode",
                                label: "Postcode",
                                placeholder: "2000",
                                alert: inputs[12].alert,
                            }} />
                        </div>

                    </div>
                    <div className="description-section">
                        <div className="description title">Description</div>
                        <div className="description flex-box">
                            <TextAreaInput setInputs={setInputs} {...{
                                name: "description",
                                label: "Description",
                                alert: inputs[13].alert,

                            }} />
                        </div>
                    </div>
                    <div>
                        {/* <input className="submit-btn" type="submit" onClick={setSubmit} value="submit" /> */}
                    </div>
                    <footer>
                        <span className="crunch-accounting">&copy;2020 Crunch Accounting. All right reserved.</span>
                        <div className="footer-right">
                            <span className="privacy-policy">Privacy Policy </span>
                            <span className="terms-of-service">Terms of Service </span>
                        </div>

                    </footer>
                </div>

            </form>

        </section>

    )
}

export default FormPanel;


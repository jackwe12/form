import { useState } from 'react';
const useForm = (initModel, submitCallback) => {
  const [inputs, setInputs] = useState(initModel);

  const clearInput = () =>{
    document.getElementById("contact-form").reset();
    inputs.forEach(i=>{
      i.value="";
      i.alert=null;
    })
    setInputs([...inputs]);
  }

  const handleChange = e => {
    e.persist();
    inputs.forEach(i => {
      if (i.name === e.target.name) {
        i.value = i.type === 'checkbox' ? e.target.checked : e.target.value;

        validateInput(i);
      }
    });
    setInputs([...inputs]);
  };

  const handleSubmit = e => {
    e && e.preventDefault();
  };


  const validateInput = input => {
    let alert = null;

    if (!input.validators.regex.test(input.value)) {alert = input.validators.alert}
    input.alert = alert;
  }

  return [inputs, handleChange, clearInput]
};

export default useForm;
import { useState } from 'react';
const useForm = (initModel, submitCallback) => {
  const [inputs, setInputs] = useState(initModel);

  const clearInput = () =>{
    document.getElementById("contact-form").reset();
    inputs.forEach(i=>{
      i.value="";
      i.alert="";
    })
    setInputs([...inputs]);
  }

  const handleChange = e => {
    // e.persist();
    inputs.forEach(i => {
      if (i.name === e.target.name) {
        i.value = i.type === 'checkbox' ? e.target.checked : e.target.value;
        validateInput(i);
      }
    });
    setInputs([...inputs]);
  };
  const handleSelectChange = ele => {
    inputs.forEach(i => {
      if (i.name === ele.name) {
        i.value = ele.value;
      }
    });
    setInputs([...inputs]);

  }
  // const handleSubmit = e => {
  //   e && e.preventDefault();
  // };


  const validateInput = input => {
    let alert = "";

    if (!input.validators.regex.test(input.value)) {alert = input.validators.alert}
    input.alert = alert;
  }

  return [inputs, handleChange, clearInput, handleSelectChange]
};

export default useForm;
import { useState } from 'react';
const useForm = (initModel) => {
  const [inputs, setInputs] = useState(initModel);

  const clearInput = () =>{
    document.getElementById("contact-form").reset();
    inputs.forEach(i=>{
      i.value="";
      i.alert="";
    })
    setInputs([...inputs]);
    document.getElementsByClassName("select-text-input-select")[0].classList.remove("change-select-color");
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

  const setSelectColor = (e)=>{
    const element = e.target;
    element.classList.add("change-select-color")
}


  const validateInput = input => {
    let alert = "";

    if (!input.validators.regex.test(input.value)) {
      alert = input.validators.alert;
      input.validate=false;
    }
    else{input.validate=true}
    input.alert = alert;
  }

  return [inputs, handleChange, clearInput, handleSelectChange, setSelectColor]
};

export default useForm;
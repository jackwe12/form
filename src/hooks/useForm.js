import { useState } from 'react';

const useForm = (initModel, submitCallback) => {
  const [inputs, setInputs] = useState(initModel);
  const handleChange = e => {
    e.persist();
    inputs.forEach(i => {
      if (i.name === e.target.name) {
        i.value = i.type === 'checkbox' ? e.target.checked : e.target.value;
        // console.log(e.target.value)
        // parseInput(i);
        validateInput(i);
      }
    });
    setInputs([...inputs]);
  };

  const handleSubmit = e => {
    e && e.preventDefault();
  };

//   const parseInput = input => input.value = input.parseFun ? input.parseFun(input.value) : input.value;

  const validateInput = input => {
    let alert = null;
    // input.validators && input.validators.forEach(v => alert = v.isValidFun && !v.isValidFun(input.value) ? v.alert : alert);
    // console.log(input.validators.regex.test('Jack'))
    // console.log(input.validators)
    // console.log(input.validators.regex.test(input.value))
    if (!input.validators.regex.test(input.value)) {alert = input.validators.alert}
    input.alert = alert;
  }

  return [inputs, handleChange, handleSubmit]
};

export default useForm;
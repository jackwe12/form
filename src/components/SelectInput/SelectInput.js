import React from 'react';
import ValidationError from '../ValidationError/ValidationError';
import './SelectInput.css';
import {useEffect} from 'react';
function SelectInput({ name, label, type, value, alert, options, setInputs, placeholder, handleSelectChange }) {

    useEffect(() => {
        const inputField = document.querySelector('.chosen-value');
        const dropdown = document.querySelector('.value-list');
        const dropdownArray = [...document.querySelectorAll('li')];
        // console.log(inputField);
        // dropdown.classList.add('open');
        let valueArray = [];
        dropdownArray.forEach(item => {
        valueArray.push(item.textContent);
        });

        // const closeDropdown = () => {
        //     dropdown.classList.remove('open');
        //   }
        
          inputField.addEventListener('input', (e) => {
            dropdown.classList.add('open');
            let inputValue = inputField.value.toLowerCase();
            // let valueSubstring;
            if (inputValue.length > 0) {
              for (let j = 0; j < valueArray.length; j++) {
                if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
                  dropdownArray[j].classList.add('closed');
                } else {
                  dropdownArray[j].classList.remove('closed');
                }
              }
            } else {
              for (let i = 0; i < dropdownArray.length; i++) {
                dropdownArray[i].classList.remove('closed');
              }
            }
          });
        
          dropdownArray.forEach(item => {
            item.addEventListener('click', (evt) => {
              inputField.value = item.textContent;
              const ele = {name:name, value:inputField.value};
              handleSelectChange(ele);
              dropdownArray.forEach(dropdown => {
                dropdown.classList.add('closed');
              });
            });
          })
        
          inputField.addEventListener('focus', () => {
             inputField.placeholder = 'Search State or Territory';
             dropdown.classList.add('open');
             inputField.classList.add('show-search-image');
             dropdownArray.forEach(dropdown => {
               dropdown.classList.remove('closed');
             });
          });
        
          inputField.addEventListener('blur', () => {
             inputField.placeholder = 'New South Wales';
            dropdown.classList.remove('open');
            inputField.classList.remove('show-search-image');
          });

        
        //   document.addEventListener('click', (evt) => {
        //     const isDropdown = dropdown.contains(evt.target);
        //     const isInput = inputField.contains(evt.target);
        //     if (!isDropdown && !isInput) {
        //       dropdown.classList.remove('open');
        //     }
        //   });


    });


      
    return (
        <div className="input-component">
            <label>{label}</label>
            {/* <select id={name} name={name} type={type} value={value} onChange={setInputs} className={"uk-select" + (alert ? ' uk-form-danger' : '')+" select-input"}>
                {options && options.map(option => <option key={option.value} value={option.value} >{option.name}</option>)}
            </select> */}
            <input className="chosen-value" id={name} name={name} value={value} type={type || ""}  onChange={setInputs} placeholder={placeholder}/>
            <ul className="value-list">
                {options.map(option=><li key={option.name} name={name} value={option.value}>{option.name}</li>)}
            </ul>
            <ValidationError content={alert} />
        </div>
    )
}

export default SelectInput;


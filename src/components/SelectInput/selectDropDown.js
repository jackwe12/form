
const selectDropDown = (handleSelectChange, name, ) =>{
    const inputField = document.querySelector('.chosen-value');
    const dropdown = document.querySelector('.value-list');
    const dropdownArray = [...document.querySelectorAll('li')];
    let valueArray = [];
    dropdownArray.forEach(item => {
    valueArray.push(item.textContent);
    });


    
      inputField.addEventListener('input', (e) => {
        dropdown.classList.add('open');
        let inputValue = inputField.value.toLowerCase();
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

}

export default selectDropDown;
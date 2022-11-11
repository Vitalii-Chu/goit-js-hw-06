const validationInput = document.querySelector('#validation-input');


validationInput.addEventListener('blur', handlerValidationInput);

const lengthNumber = Number(validationInput.dataset.length);

function handlerValidationInput(event) {
    
    if (event.currentTarget.value.length === lengthNumber) {
        validationInput.classList.add(`valid`);
        validationInput.classList.remove(`invalid`);
    }
    
    else {
  validationInput.classList.add(`invalid`);
 validationInput.classList.remove(`valid`);
}

}


  





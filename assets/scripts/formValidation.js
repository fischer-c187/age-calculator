export class FormValidation {
  #formElement;
  #error;
  constructor(formSelector) {
    this.#formElement = document.querySelector(formSelector);
    if(!this.#formElement) {
      throw new Error('this form does not exist');
    }
    this.#error = {
      day: {
        errorMessage: 'Must be a valid day',
        condition: this.#validDay,
        valid: false
      },
      month: {
        errorMessage: 'Must be a valid month',
        condition: this.#validMonth,
        valid: false
      },
      year: {
        errorMessage: 'Must be in the past',
        condition: this.#validYear,
        valid: false
      }
    };
  }

  submitValidity() {
    this.#manageInputValidity();
    return this.#formIsValid();
  }

  getDateInForm() {
    const { year, month, day } = this.#getDateData();

    return new Date(year, month, day);
  }

  #formIsValid() {
    return Object.values(this.#error).every(input => input.valid);
  }

  #getDateData() {
    const year = +this.#formElement.querySelector('#year').value;
    const month = +this.#formElement.querySelector('#month').value - 1;
    const day = +this.#formElement.querySelector('#day').value;

    return { year, month, day };
  }

  // TODO : fonction beaucoup trop longue
  #manageInputValidity() {
    Object.keys(this.#error).forEach(key => {
      const input = this.#formElement.querySelector(`#${key}`);
      if(input.value === '') {
        this.#error[key].valid = false;
        this.#addErrorMessage(input, 'This field is required');
        return;
      }
      if(!this.#error[key].condition()) {
        this.#error[key].valid = false;
        this.#addErrorMessage(input, this.#error[key].errorMessage);
      } else {
        this.#error[key].valid = true;
        this.#removeErrorMessage(input);
      }
    });
  }

  #createErrorElement(message) {
    const errorElement = document.createElement('p');
    errorElement.classList.add('error-message');
    errorElement.innerText = message;
    return errorElement;
  }

  #removeErrorMessage(element) {
    if(this.#containErrorMessage(element)){
      element.nextElementSibling.remove();
    }
    this.#toggleErrorClass(element, false);
  }

  #addErrorMessage(element, message, cible='afterend') {
    if(!this.#containErrorMessage(element)){
      element.insertAdjacentElement(cible, this.#createErrorElement(message));
    }
    else if(element.nextElementSibling.innerText !== message) {
      element.nextElementSibling.innerText = message;
    }

    this.#toggleErrorClass(element, true);
  }

  #toggleErrorClass(element, add) {
    element.classList.toggle('input--error', add);
    element.previousElementSibling.classList.toggle('label--error', add);
  } 

  #containErrorMessage(element) {
    return element.parentElement.querySelector('.error-message') ? true : false;
  }

  #validMonth = () => {
    const month = this.#formElement.querySelector('#month').value;
    if(month > 0 && month <= 12){
      return true;
    } else {
      return false;
    }
  };

  #validYear = () => {
    const date = this.getDateInForm();
    const actuallyDate = new Date();
    if(date > actuallyDate) {
      return false;
    } else {
      return true;
    }
  };

  #validDay = () => {
    const { year, month, day } = this.#getDateData();
    const date = new Date(year, month, day);
    return (date.getMonth() === month) 
      && (date.getFullYear() === year) 
      && (date.getDate() === day);
  };
}
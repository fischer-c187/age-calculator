export class AgeDisplay {
  #monthsElement;
  #yearsElement;
  #daysElement;
  #defaultValue;
  constructor() {
    this.#monthsElement = document.querySelector('.result-months');
    this.#yearsElement = document.querySelector('.result-years');
    this.#daysElement = document.querySelector('.result-days');
    this.#defaultValue = '- -';
  }

  displayDate(years, months, days) {
    console.log(typeof years)
    this.#monthsElement.innerText = months;
    this.#yearsElement.innerText = years;
    this.#daysElement.innerText = days;
  }

  displayDefaultDate() {
    this.displayDate(this.#defaultValue, this.#defaultValue, this.#defaultValue);
  }
}
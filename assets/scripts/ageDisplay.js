export class AgeDisplay {
  #monthsElement;
  #yearsElement;
  #daysElement;
  #defaultValue;
  #target;
  #step;
  #current;
  constructor() {
    this.#monthsElement = document.querySelector('.result-months');
    this.#yearsElement = document.querySelector('.result-years');
    this.#daysElement = document.querySelector('.result-days');
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.#defaultValue = '- -';
    this.#target = 0;
    this.#step = 0;
    this.#current = 0;
  }

  displayDate(final=false) {
    this.#monthsElement.innerText = final ? this.month : this.#current.toString().slice(0, this.month.toString().length);
    this.#yearsElement.innerText = final ? this.year : this.#current.toString().slice(0, this.year.toString().length);
    this.#daysElement.innerText = final ? this.day : this.#current.toString().slice(0, this.day.toString().length);
  }
  
  displayAnimation(years, months, days) {
    this.#target = Math.max(years, months, days)*10;
    this.#step = Math.round(this.#target*0.008);
    this.#current = 0;
    this.year = years;
    this.month = months;
    this.day = days;
    console.log(this.year, this.month, this.day)
    console.log(this.#current + this.#step);
    this.startAnimation();

  }

  startAnimation() {
    document.querySelectorAll('.result__value')
      .forEach(element => element.classList.add('animate'));
    this.update();
  }

  update = () => {
    console.log(this.#step)
    this.#current += this.#step;
    this.displayDate();
    if(Math.abs(this.#target-this.#current) > this.#step) {
      requestAnimationFrame(this.update);
    } else {
      requestAnimationFrame(() => {
        this.#current = this.#target;
        this.displayDate(true);
        document.querySelectorAll('.result__value')
          .forEach(element => element.classList.remove('animate'));
      });
    }

  }

  displayDefaultDate() {
    this.year = this.#defaultValue;
    this.month = this.#defaultValue;
    this.day = this.#defaultValue;
    this.displayDate(true);
  }
}
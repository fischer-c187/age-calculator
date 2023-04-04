export class AgeDisplay {
  #date;
  #defaultValue;
  #target;
  #step;
  #current;
  constructor() {
    this.#date = {
      year: {
        value: 0,
        element: document.querySelector('.result-years'),
      },
      month: {
        value: 0,
        element: document.querySelector('.result-months'),
      },
      day: {
        value: 0,
        element: document.querySelector('.result-days'),
      }
    };
    this.#defaultValue = '- -';
    this.#target = 0;
    this.#step = 0;
    this.#current = 0;
  }

  #displayDate(finalValue=false) {
    Object.values(this.#date).forEach(date => {
      date.element.innerText = finalValue
        ? date.value 
        : this.#current.toString().slice(0, date.value.toString().length);
    });
  }

  #toggleClassAnimation(add=true) {
    Object.values(this.#date).forEach(date => {
      date.element.classList.toggle('animate', add);
    });
  }

  #update = () => {
    this.#current += this.#step;
    this.#displayDate();
    if(Math.abs(this.#target-this.#current) > this.#step) {
      requestAnimationFrame(this.#update);
    } else {
      requestAnimationFrame(() => {
        this.#current = this.#target;
        this.#displayDate(true);
        this.#toggleClassAnimation(false);
      });
    }
  };

  displayAnimation(year, month, day) {
    this.#target = Math.max(year, month, day)*10;
    this.#step = Math.round(this.#target*0.008);
    this.#current = 0;

    const values = { year, month, day };
    Object.keys(this.#date).forEach(date => {
      this.#date[date].value = values[date];
    });
    this.#toggleClassAnimation(true);
    this.#update();
  }


  displayDefaultDate() {
    Object.keys(this.#date).forEach(date => {
      this.#date[date].value = this.#defaultValue;
    });
    this.#displayDate(true);
  }
}
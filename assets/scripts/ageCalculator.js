import { differenceInYears, differenceInMonths, differenceInDays } from 'https://cdn.skypack.dev/date-fns';

export class AgeCalculator {
  #date;
  #actuallyDate;
  #years;
  #months;
  #days;
  constructor() {
    this.#date;
    this.#actuallyDate = new Date();
    this.#years;
    this.#months;
    this.#days;
  }

  #refreshDifference() {
    this.#years = differenceInYears(this.#actuallyDate, this.#date);
    this.#months = differenceInMonths(this.#actuallyDate, this.#date) % 12;
    this.#days = differenceInDays(this.#actuallyDate, new Date(this.#date).setMonth(this.#date.getMonth() + this.#years * 12 + this.#months));
  }

  set date(date) {
    if(isNaN(date)){
      throw new Error('date not valid object');
    }
    this.#date = date;
    this.#refreshDifference();
  }

  get years() {
    return this.#years;
  }

  get months() {
    return this.#months;
  }

  get days() {
    return this.#days;
  }
}
import { FormValidation } from './formValidation.js';
import { AgeCalculator } from './ageCalculator.js';
import { AgeDisplay } from './ageDisplay.js';

function handleSubmit(managerForm, ageCalculator, ageDisplay) {
  document.querySelector('form')
    .addEventListener('submit', () => {
      if(managerForm.submitValidity()){
        ageCalculator.date = managerForm.getDateInForm();
        ageDisplay.displayDate(ageCalculator.years, ageCalculator.months, ageCalculator.days);
        console.log(ageCalculator.years, ageCalculator.months, ageCalculator.days);
      } else {
        ageDisplay.displayDefaultDate();
      }
    });
}

function main() {
  const managerForm = new FormValidation('form');
  const manageAge = new AgeCalculator();
  const manageDisplayDate = new AgeDisplay();
  handleSubmit(managerForm, manageAge, manageDisplayDate);

}

main();


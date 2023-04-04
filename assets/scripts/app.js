import { FormValidation } from './formValidation.js';
import { AgeCalculator } from './ageCalculator.js';
import { AgeDisplay } from './ageDisplay.js';

function main() {
  const managerForm = new FormValidation('form');
  const manageAge = new AgeCalculator();
  const manageDisplayDate = new AgeDisplay();

  document.querySelector('form')
    .addEventListener('submit', () => {
      if(managerForm.submitValidity()){
        manageAge.date = managerForm.getDateInForm();
        manageDisplayDate.displayAnimation(manageAge.years, manageAge.months, manageAge.days);
      } else {
        manageDisplayDate.displayDefaultDate();
      }
    });
}

main();


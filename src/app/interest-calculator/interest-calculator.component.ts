import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.css']
})
export class InterestCalculatorComponent {

  interestForm: FormGroup;
  interestEarned: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.interestForm = this.formBuilder.group({
      principleAmount: [null, [Validators.required, Validators.min(0)]],
      rateOfInterest: [null, [Validators.required, Validators.min(0)]],
      duration: [null, [Validators.required, Validators.min(0)]],
      timePeriod: ['year', Validators.required]
    });
  }

  calculateInterest(): void {
    const principleAmount = this.interestForm.get('principleAmount')?.value;
    const rateOfInterest = this.interestForm.get('rateOfInterest')?.value;
    const duration = this.interestForm.get('duration')?.value;
    const timePeriod = this.interestForm.get('timePeriod')?.value;

    const rate = rateOfInterest / 100;
    const time = timePeriod === 'year' ? duration : duration / 12;

    this.interestEarned = principleAmount * rate * time;
  }
}

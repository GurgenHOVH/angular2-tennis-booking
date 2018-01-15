import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class StepsService {
  steps: string[] = [
    'Service',
    'Time',
    'Details',
    'Payment',
    'Done'
  ];
  activeStep = 0;

  stepChanged = new Subject<number>();

  constructor() { }

  getSteps() {
    return this.steps.slice();
  }

  getStep() {
    return this.activeStep;
  }

  setStep(step: number) {
    this.activeStep = step;
    this.stepChanged.next(step);
  }
}

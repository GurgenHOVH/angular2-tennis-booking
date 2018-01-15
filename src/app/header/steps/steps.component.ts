import { Component, OnInit } from '@angular/core';
import { StepsService } from '../../steps.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css']
})
export class StepsComponent implements OnInit {
  steps: string[];
  activeStep = 0;
  subscription: Subscription;
  constructor(private stepsService: StepsService) { }

  ngOnInit() {
    this.steps = this.stepsService.getSteps();
    this.activeStep = this.stepsService.getStep();

    this.subscription = this.stepsService.stepChanged.subscribe(
      (step: number) => {
        this.activeStep = step;
      }
    );
  }

}

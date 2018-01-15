import { Component, OnInit } from '@angular/core';
import { StepsService } from '../steps.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  currentStep: number;
  subscription: Subscription;
  constructor(private stepsService: StepsService) { }

  ngOnInit() {
    this.currentStep = this.stepsService.getStep();
    this.subscription = this.stepsService.stepChanged.subscribe(
      (step: number) => {
        this.currentStep = step;
      }
    );
  }

  onBack() {
    this.stepsService.setStep(this.currentStep - 1);
  }

  onNext() {
    this.stepsService.setStep(this.currentStep + 1);
  }
}

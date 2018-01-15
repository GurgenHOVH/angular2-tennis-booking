import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input() stepName;
  @Input() stepNum;
  @Input() isActive;
  constructor() { }

  ngOnInit() {
  }

}

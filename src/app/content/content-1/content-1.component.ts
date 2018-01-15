import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-1',
  templateUrl: './content-1.component.html',
  styleUrls: ['./content-1.component.css']
})
export class Content1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}

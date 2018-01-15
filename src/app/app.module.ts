import { FormsModule } from '@angular/forms';
import { StepsService } from './steps.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { StepsComponent } from './header/steps/steps.component';
import { StepComponent } from './header/steps/step/step.component';
import { FooterComponent } from './footer/footer.component';
import { Content1Component } from './content/content-1/content-1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    StepsComponent,
    StepComponent,
    FooterComponent,
    Content1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [StepsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

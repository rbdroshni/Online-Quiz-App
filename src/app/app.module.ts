import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

import { HttpModule } from '@angular/http'

import {QuesService} from './components/questions-service/ques.service';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { QuesEntryFormComponent } from './components/ques-entry-form/ques-entry-form.component';
import { QuesAddedViewComponent } from './components/ques-added-view/ques-added-view.component';


const routes:Routes =[
  {path:'quee-entry-form',component:QuesEntryFormComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    QuesEntryFormComponent,
    QuesAddedViewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
   ReactiveFormsModule,
   HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

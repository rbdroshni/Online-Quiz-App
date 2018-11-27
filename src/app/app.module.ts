import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import {QuesService} from './components/questions-service/ques.service';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { QuesEntryFormComponent } from './components/ques-entry-form/ques-entry-form.component';
import { QuesAddedViewComponent } from './components/ques-added-view/ques-added-view.component';
import { QuesFormComponent } from './components/ques-form/ques-form.component';


const routes:Routes =[
  {path:'ques-entry-form',component:QuesEntryFormComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    QuesEntryFormComponent,
    QuesAddedViewComponent,
    QuesFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
   ReactiveFormsModule,
   HttpClientModule,
   DialogModule,
   BrowserAnimationsModule,
   CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

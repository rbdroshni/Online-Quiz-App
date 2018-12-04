import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { QuesService } from './components/questions-service/ques.service';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule,Validators} from '@angular/forms';
import { QuesEntryFormComponent } from './components/ques-entry-form/ques-entry-form.component';
import { QuesAddedViewComponent } from './components/ques-added-view/ques-added-view.component';
// import { QuesFormComponent } from './components/ques-form/ques-form.component';
// import { MatCardModule,MatToolbarModule,MatDialogModule,MatIconModule,
//   // MatDialog, 
//   MatInputModule,
//   // MatDialogRef,
//   MAT_DIALOG_DATA
// } from '@angular/material';
// import { QuestionsListComponent } from './components/questions-list/questions-list.component';




const routes:Routes =[
  {path:'ques-entry-form',component:QuesEntryFormComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    QuesEntryFormComponent,
    QuesAddedViewComponent,
    // QuesFormComponent,
    // QuestionsListComponent,
    
  
  ],
  imports: [
   BrowserModule,
   ReactiveFormsModule,
   FormsModule,
   HttpClientModule,
   DialogModule,
   BrowserAnimationsModule,
   CommonModule,
  //  MatInputModule,
  //  MatCardModule,
  //  MatIconModule,
  //  MatToolbarModule,
  //  MatDialogModule,
  //  MatDialogRef,
  //  MatDialog  
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // QuesService,QuestionsListComponent,
    // { provide: MatDialog, useValue: {} },
    // { provide: MatDialogRef, useValue: {} },
	// { provide: MAT_DIALOG_DATA, useValue: [] },
  ],
  // entryComponents:[QuesFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

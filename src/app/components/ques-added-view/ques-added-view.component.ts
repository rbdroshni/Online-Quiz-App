import { Component, OnInit } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
// import {Http} from '@angular/http';
import {NgForm} from '@angular/forms'
import {QuesEntryFormComponent} from '../ques-entry-form/ques-entry-form.component';
import {QuesService} from '../questions-service/ques.service';
import {QuestionType} from '../questions-service/questions.model';
import {QuesSet} from './questionset' 
import {QuesFormComponent} from '../ques-form/ques-form.component';


@Component({
  selector: 'app-ques-added-view',
  templateUrl: './ques-added-view.component.html',
  styleUrls: ['./ques-added-view.component.css']
})

export class QuesAddedViewComponent implements OnInit {
  quesset=QuesSet;
  display: boolean = false;


  constructor( ) {
  }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
}


  // EditQuestions(form: NgForm) {
  //   console.log(form.value);
  //   this.questionService.EditQuestions(form.value,form.value.id)
  //     .subscribe((data) => {
  //       console.log(data);
  //     });
  //   alert(form.value.commonevents + ' has been updated');
  // }

  OnUpdate(){
    console.log("Edit is working");
  }



  // deleteQuestions(form:NgForm) {
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //    console.log(form.value);
  //     this.questionService.deleteQuestions(form.value.id).subscribe(response => {
  //       console.log(response);
  //       // this.refetchEvents();
  //     })
  //   }
  // }

  OnDelete(){
    console.log("Delete button is working");
  }

}

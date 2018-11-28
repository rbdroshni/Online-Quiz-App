import { Component, OnInit } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms'
import {QuesEntryFormComponent} from '../ques-entry-form/ques-entry-form.component';
import {QuesService} from '../questions-service/ques.service';
// import {QuestionType} from '../questions-service/questions.model';
// import {QuesSet} from './questionset' 
import {QuesFormComponent} from '../ques-form/ques-form.component';


@Component({
  selector: 'app-ques-added-view',
  templateUrl: './ques-added-view.component.html',
  styleUrls: ['./ques-added-view.component.css']
})

export class QuesAddedViewComponent implements OnInit {
  
  // selectedQuiz:QuestionType;
  quesset:any=[];
  display: boolean = false;
  _form:any=[];
  id:any;


  constructor(private quesservice:QuesService ) {
    this.quesset=[];
    this._form;
    this.getQuestionsById;
  }

  ngOnInit() {
    this.getQuestions();
  }

  showDialog(id?:any) {
    if(id){
      for(let i in this.quesset){

        console.log("teting for",i);
        if(id==this.quesset[i]._id){
          console.log("testing if")
          this.getQuestionsById(id)
          this.display = true;   
        }
      }
    }
   else{
     this.display=true;
   }
   
}

getQuestions(){
  this.quesservice.getQuestions()
  .subscribe((questions)=>{
    this.quesset=questions
    console.log(questions);
    console.log(this.quesset)
  })
}

getQuestionsById(id:any){
  
  this.quesservice.getQuestionsById(id)
  .subscribe((ques)=>{
   this._form=ques
   console.log("question by id is getting",id,this._form);
  })

}

  editQuestions(id:any,_form:NgForm) {
  
    console.log("test",id);
    this.showDialog();{  
    this.quesservice.editQuestions(id,_form)
      .subscribe((data) => {
        console.log(data);
      });
    }
    alert(_form.value + ' has been updated');
  }

 

  deleteQuestions(id:any) {
    if (confirm('Are you sure to delete this record ?') == true) {
     console.log("delete test",+id);
      this.quesservice.deleteQuestions(id).subscribe(response => {
        console.log(response);
        // this.refetchEvents();
      })
    }
  }

}

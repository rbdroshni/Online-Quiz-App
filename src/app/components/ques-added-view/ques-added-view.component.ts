import { Component, OnInit } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms'
import {QuesEntryFormComponent} from '../ques-entry-form/ques-entry-form.component';
import {QuesService} from '../questions-service/ques.service';
// import {QuestionType} from '../questions-service/questions.model';
// import {QuesSet} from './questionset' 
// import {QuesFormComponent} from '../ques-form/ques-form.component';


@Component({
  selector: 'app-ques-added-view',
  templateUrl: './ques-added-view.component.html',
  styleUrls: ['./ques-added-view.component.css']
})

export class QuesAddedViewComponent implements OnInit {
  
  // selectedQuiz:QuestionType;
  quesset:any=[];
  display: boolean = false;
  _form :any= {
    key: 0,
    title: '',
    type:'',
    optionsArray:[
      {
        optText:'',
        isCorrect:''
      }
    ]
  }

  id:any;
  constructor(public quesservice:QuesService ) {
    this.quesset=[];
    this._form;
    this.getQuestionsById;
  }

  ngOnInit() {
    this.getQuestions();
  }

  showDialog(id?:any,_form?:any) {
  
    if(id){

      this.quesservice.getQuestionsById(id,)
      .subscribe((ques)=>{
        this._form=ques;
        console.log("testing id",id);
        console.log("testing data",ques);
      })
      // for(let i in this.quesset){

      //   console.log("teting for",i);
      //   if(id==this.quesset[i]._id){
      //     console.log("testing if")
      //     this.getQuestionsById(id)
      //     this.display = true;   
      //   }
      // }

      this.display = true; 
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
    
  })
}

getQuestionsById(id:any){
  
  this.quesservice.getQuestionsById(id)
  .subscribe((ques)=>{
   this._form=ques
   this.quesservice.quesData =ques;
   console.log("data from one id",ques);
   console.log("question by id is getting",id,this._form);
  })
}

  editQuestions(_id:any,_form:NgForm) {
    console.log("test",_id);
    this.showDialog(_form);{  
    this.quesservice.editQuestions(_id,_form)
      .subscribe((data) => {
        console.log(data);
      });
    }
    alert(_id + ' has been updated');
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

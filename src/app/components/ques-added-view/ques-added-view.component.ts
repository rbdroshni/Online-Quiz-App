import { Component, OnInit } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms'
import {QuesEntryFormComponent} from '../ques-entry-form/ques-entry-form.component';
import {QuesService} from '../questions-service/ques.service';



@Component({
  selector: 'app-ques-added-view',
  templateUrl: './ques-added-view.component.html',
  styleUrls: ['./ques-added-view.component.css']
})

export class QuesAddedViewComponent implements OnInit {
  
  quesset:any=[];
  display: boolean = false;
  isOption:boolean =false;
  isEdit = false
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
    
  }

  ngOnInit() {
    console.log("in add comp");
    this.getQuestions();
  }

  showDialog(id?:any,_form?:any) {
  
    if(id){
      this.isEdit = true
      this._form =_form
      this.isOption = true

      this.quesservice.getQuestionsById(id)
      .subscribe((ques)=>{
        this._form=ques;
       
      })
      this.quesservice.display = true; 
    }
   else{ 
    this.isOption = false
    this._form ={
      key: 1,
      title: '',
      type:'',
      optionsArray:[
      ]
}

     this.quesservice.display=true;
   }  
}

getQuestions(index:any){
  this.quesservice.quesset.push(index);
  this.quesservice.getQuestions()
  .subscribe((questions)=>{
    this.quesservice.quesset=questions
    
    console.log("test add service",this.quesservice.quesset);
  })
}

  deleteQuestions(id:any,index:any) {
    this.quesservice.quesset.splice(index,1);
    console.log("rload",this.quesset);
    if (confirm('Are you sure to delete this record ?') == true) {
     console.log("delete test",+id);
      this.quesservice.deleteQuestions(id).subscribe(response => {
        console.log(response);
        // location.reload();
      })
    }
  }

}

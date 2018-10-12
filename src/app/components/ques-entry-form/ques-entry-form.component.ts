import { Component, OnInit } from '@angular/core';
// import { Options } from 'selenium-webdriver/opera';
import {Http} from '@angular/http';
import { NgForm } from '@angular/forms';
import {FormGroup,FormBuilder,FormArray,FormControl,Validators} from '@angular/forms';
import { QuesService } from '../questions-service/ques.service';

import {QuestionType} from '../questions-service/questions.model'

@Component({
  selector: 'app-ques-entry-form',
  templateUrl: './ques-entry-form.component.html',
  styleUrls: ['./ques-entry-form.component.css']
})
export class QuesEntryFormComponent implements OnInit {

  Options = ["Single Options", "Multiple Options", "Input text"]
  QuesType:any=[];
  key:any=0;
  Qoption:any=[];
  FormGroup:FormGroup;
  display:'none';
  

  EventsHasError = true;

  _form = {
    key: 0,
    title: '',
    optText:'',
    isCorrect:'',
    optionsArray:[{
    optText:'',
    isCorrect:'',
    }]
  }

  constructor(private questionService:QuesService,private _fb:FormBuilder) { 

    this.QuesType=[
      {
        "id": "1",
        "name": "Single Options"
      },
      {
        "id": "2",
        "name": "Multiple Options"
      },
      {
        "id": "3",
        "name": "input text"
      }
    ]
  }

  ngOnInit() {
    this._form.optionsArray.push({"optText":"","isCorrect":""})
  }


  Add(){
    console.log("One more option Added")
    // this._form.optionsArray.push({"optText":"","isCorrect":""})
    // this._form.option
    
    this._form.optionsArray.push({optText:this._form.optText,isCorrect:this._form.isCorrect})
  }

  Remove()
    {
      console.log("last options has been removed")
      this._form.optionsArray.pop();
    }


  validateQuestions(value) {
    if (value == 'default') {
      this.EventsHasError = true;
    } else {
      this.EventsHasError = false;
    }
  }



  OnSubmit() {
    console.log(this._form);
    
    // this.questionService.addQuestions(form.value)
    // .subscribe((data)=>{
    //   console.log(data);
    // })
    // alert(form.value.questype + 'question has added');
    // this.resetForm(form);
  }



  OnClick(options) {
    console.log(options);
  }

  closeModalDialog(){
    console.log("it been closed");
    this.display="none";
  }


  // resetForm(form?: NgForm) {

  //   if (form != null)
  //     form.reset();

  //   this.questionService.selectedQuestionType.emit({
  //     key: 0,
  //     title:'',
  //     type:''

  //   });
  // }

  // deleteQuestions(form:NgForm) {
  //   if (confirm('Are you sure to delete this record ?') == true) {
  //    console.log(form.value);
  //     this.questionService.deleteQuestions(form.value.id).subscribe(response => {
  //       console.log(response);
  //       // this.refetchEvents();
  //     })
  //   }
  // }

}

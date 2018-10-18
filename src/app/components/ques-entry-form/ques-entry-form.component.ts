import { Component, OnInit } from '@angular/core';
// import { Options } from 'selenium-webdriver/opera';
import {Http} from '@angular/http';
import { NgForm } from '@angular/forms';
import { FormGroup,FormBuilder,FormArray,FormControl,Validators } from '@angular/forms';
import { QuesService } from '../questions-service/ques.service';
import { QuestionType } from '../questions-service/questions.model'

@Component({
  selector: 'app-ques-entry-form',
  templateUrl: './ques-entry-form.component.html',
  styleUrls: ['./ques-entry-form.component.css']
})
export class QuesEntryFormComponent implements OnInit {
  SelectedOptions:Boolean=false;
  AnotherSelectedOption:Boolean=false;
  QuesType:any=[];
  EventsHasError = true;
  // optionsList:any=[];
  options;
  answers;

   

  _form = {
    key: '',
    title: '',
    type:'',
    optionsArray:[
      {
        optText:'',
        isCorrect:'' 
      }
    ]
  }

  constructor(private questionService:QuesService) { 

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
    this._form.optionsArray=[]
  }


  // AddOptions(){
  //   console.log(this.optText+" "+this.isCorrect);
  //   // this._form.optionsArray.push({"optText":"","isCorrect":""})
  //   // this._form.option
    
  //   this._form.optionsArray.push({optText:this.optText,isCorrect:this.isCorrect})
  
  // }

  AddOptions(){
    console.log(this._form.optionsArray);
    console.log(this.options+" "+this.answers);
  
    this._form.optionsArray.push({optText:this.options,isCorrect:this.answers})
  
  }


  DeleteOptions(optText){
    console.log(optText);
    for(var i=0;i<this._form.optionsArray.length;i++){
      if(this._form.optionsArray[i]["optText"]==optText){
        this._form.optionsArray.splice(i,1);
      }
    }
  }

  // Remove()
  //   {
  //     console.log("last options has been removed")
  //     this._form.optionsArray.pop();
  //   }


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
    if((options==0)||(options==1)){
      this.SelectedOptions=true;
      console.log("SelectedOptions ", this.SelectedOptions);
    } 
    else if(options==2){
      this.SelectedOptions=false;
      this.AnotherSelectedOption=true;
      console.log("AnotherSelectedOption", this.AnotherSelectedOption);
    } 
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

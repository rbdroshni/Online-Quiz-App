import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormGroup,FormBuilder,FormArray,FormControl,Validators } from '@angular/forms';
import { QuesService } from '../questions-service/ques.service';
// import { QuestionType } from '../questions-service/questions.model'

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

  options:any="";
  answers:boolean=false;

  _form = {
    key: 0,
    title: '',
    type:'',
    optionsArray:[
      {
        optText:'',
        isCorrect:false
      }
    ]
  }

  constructor(public questionService:QuesService) { 

    this.QuesType = [
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
    this._form.optionsArray=[];
    console.log("testing get data at ui",this.questionService.quesData)
  }


  AddOptions(){
    console.log(this._form.optionsArray);
    console.log(this.options+" "+this.answers);
    this._form.optionsArray.push({optText:this.options,isCorrect:this.answers});
    this.options="";
   this.answers=false;
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


  resetForm(form?:NgForm){
    if(form !=null)
    this._form.key=null;
    this._form.title=null;
    this._form.type=null;
    this.options=null;
    this.answers=null
    this._form.optionsArray=[];
    
  }

  OnSubmit(form:NgForm) {
    console.log(this._form);
    this.questionService.addQuestions(this._form)
    .subscribe((data)=>{
      console.log("hello",data);
    })

    alert('question has added');
    this.resetForm(form);
  }


  OnClick(options) {

    console.log(options);
    if((options=="Single Options")||(options=="Multiple Options")){
      this.SelectedOptions=true;
      console.log("SelectedOptions ", this.SelectedOptions);
    } 
    else if(options=="input text"){
      this.SelectedOptions=false;
      this.AnotherSelectedOption=true;
      console.log("AnotherSelectedOption", this.AnotherSelectedOption);
    } 
  }

}

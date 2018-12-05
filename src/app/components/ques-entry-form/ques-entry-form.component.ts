import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormGroup,FormBuilder,FormArray,FormControl,Validators } from '@angular/forms';
import { QuesService } from '../questions-service/ques.service';
import { Options } from 'selenium-webdriver/ie';
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
  answers:any="";

  _form = {
    key: 1,
    title: '',
    type:'',
    optionsArray:[
      {
        optText:'',
        isCorrect:''
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
  //   this.options="";
  //  this.answers=false;
  //  console.log("chexkbox",+this.answers);
  }

  optionChecked(value:any,event){
   let index;
   if(event.target.checked){
    //  let tempArray=[];
    // tempArray.push({optText:this.options,isCorrect:value});

    
     console.log("checked");
     index= this._form.optionsArray.findIndex(x=>{return x.optText == value})
     this._form.optionsArray[index]={optText:value,isCorrect:value}
     console.log(" result options",this._form.optionsArray);
     console.log(index,"index");

    // console.log("checked ",tempArray);

   }
   else{
    index= this._form.optionsArray.findIndex(x=>{return x.optText == value})
    this._form.optionsArray[index]={optText:value,isCorrect:""}
    console.log("else case",this._form.optionsArray);
    console.log(value,event,"option unchecked");
    console.log("unchecked ",null);

   }
    
  }


  DeleteOptions(optText){
    console.log(optText);
    for(var i=0;i<this._form.optionsArray.length;i++){
      if(this._form.optionsArray[i]["optText"]==optText){
        this._form.optionsArray.splice(i,1);
      }
    }
  }

 
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

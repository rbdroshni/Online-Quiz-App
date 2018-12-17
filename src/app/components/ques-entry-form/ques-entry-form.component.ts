import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormGroup,FormBuilder,FormArray,FormControl,Validators } from '@angular/forms';
import { QuesService } from '../questions-service/ques.service';
import { Options } from 'selenium-webdriver/ie';

import { QuesAddedViewComponent } from '../ques-added-view/ques-added-view.component'

@Component({
  selector: 'app-ques-entry-form',
  templateUrl: './ques-entry-form.component.html',
  styleUrls: ['./ques-entry-form.component.css']
})
export class QuesEntryFormComponent implements OnInit {
 
  AnotherSelectedOption:Boolean=false;
  QuesType:any=[];

  @Input() _form:any={};
  @Input() SelectedOptions:Boolean =false
  @Input() isEditable:Boolean =false
  
  titleBlank:boolean=true;
  EventsHasError = true;

  options:any="";
  answers:any="";

  _form2 = {
    key: 1,
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
  }

  AddOptions(){
    
    this._form.optionsArray.push({optText:this.options,isCorrect:false});
    this.options="";
  }


  forsingle(id) {

    
    for(var i=0;i<this._form.optionsArray.length;i++){
      let x = "" + i;
      let a =  document.getElementById(x);
        a['checked'] = false;
        this._form.optionsArray[i].isCorrect =false;
    }

    let y="" + id;
    let b= document.getElementById(y);
    b['checked']= true;
    this._form.optionsArray[id].isCorrect=true;

  }

  optionChecked(value:any,data){  
   let index;
   if(value){
    

     console.log("checked");
     index= this._form.optionsArray.findIndex(x=>{return x.optText == data})
     this._form.optionsArray[index]={optText:data,isCorrect:value}
     console.log(" result options",this._form.optionsArray);
     console.log(index,"index");

    

   }
   else{
    index= this._form.optionsArray.findIndex(x=>{return x.optText == data})
    this._form.optionsArray[index]={optText:data,isCorrect:value}
    console.log("else case",this._form.optionsArray);
    console.log(value,event,"option unchecked");
    console.log("unchecked ",null);
   }
    
  }

  DataUpdate(_form:NgForm) {
    this.questionService.editQuestions(this._form)
      .subscribe((data) => {
        this.questionService.display=false;
        console.log(data);
      });
    
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


  OnSubmit(form:any,id:any) {
    console.log("getting form",form);
   
   
    if(this._form.title==""){
      console.log("inside title")
      this.titleBlank=false;
    }
    else{

    this.titleBlank=true;
    }

    if(!this.titleBlank){

     console.log("error in the title");
    }else{

    if(form['_id']){
      console.log("inside if",id)
      this.questionService.editQuestions(form).subscribe((data)=>{
        console.log("inside edit api",data);
      })

      
    } else{
      console.log("INSIDE ELSE");
      this.questionService.addQuestions(this._form).subscribe((data)=>{
      
      })
    }
    this.questionService.display=false;
  }
   
  }


  SingleOptions=false;

  OnClick(options) {

    if(options=="Single Options"){
      this.SingleOptions=true;
     
      }
      else
      {
        this.SingleOptions=false
      }

   
    if((options=="Single Options")||(options=="Multiple Options")){
      this.SelectedOptions=true;
     
    } 
    else if(options=="input text"){
      this.SelectedOptions=false;
      
    } 
  }


}

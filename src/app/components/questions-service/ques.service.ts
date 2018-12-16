import { Injectable,EventEmitter} from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { QuestionType } from './questions.model';
// import { QuestionType } from './questions.model'

@Injectable({
  providedIn: 'root'
})
export class QuesService {

  public static quesData:any={};

  // _quesList:QuestionType[]=[];

  public display:boolean=false;
  
 
  // selectedQuestionType=new EventEmitter<QuestionType>();

  uri = 'http://localhost:3000';
  constructor(private _http:HttpClient) {}



  // public get quesData() : any {    
  //   return QuesService.quesData  
  // }
  // public set quesData(v : any) {    
  // QuesService.quesData = v  
  // }

 
    addQuestions(_form){
      console.log("post is working",_form);
      return this._http.post(`${this.uri}/quizes`,_form);
    }

    getQuestions(){ 
      return this._http.get(`${this.uri}/quizes`)
    }
  
   getQuestionsById(id:any){    
     return this._http.get(`${this.uri}/quizes/${id}`);
   }


    editQuestions(form:NgForm){
    //   const quiz= {
    //     title:title,
    //    type:type,
    //    optionsArray:[{
    //    optText:optText,
    //    isCorrect:isCorrect 
    //    }]
    //  }
<<<<<<< HEAD
       console.log("edit is working");
       return this._http.post(`${this.uri}/quizesupdate`, form);
=======
       console.log("edit is working",id);
       return this._http.put(`${this.uri}/quizes/${id}`,form);
>>>>>>> b5452efc9f8afeba60ed6dd0761ce0a7412078ed
     }

    deleteQuestions(id:any){
      console.log("delete is working",+ id)
      return this._http.delete(`${this.uri}/quizes/${id}`); 
    }  
}

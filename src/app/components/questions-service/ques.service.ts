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
  public static quesset:any=[];
  
 
  // selectedQuestionType=new EventEmitter<QuestionType>();

  uri = 'http://localhost:3000';
  constructor(private _http:HttpClient) {}



  public get quesset() : any {    
    return QuesService.quesset
  }



  public set quesset(v : any) {    
  QuesService.quesset = v  
  }

 
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
       console.log("edit is working");
       return this._http.post(`${this.uri}/quizesupdate`, form);
     }

    deleteQuestions(id:any){
      console.log("delete is working",+ id)
      return this._http.delete(`${this.uri}/quizes/${id}`); 
    }  
}

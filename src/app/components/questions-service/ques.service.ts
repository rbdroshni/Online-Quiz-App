import { Injectable,EventEmitter} from '@angular/core';
import {Observable,of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';
// import { QuestionType } from './questions.model'

@Injectable({
  providedIn: 'root'
})
export class QuesService {

 
  // selectedQuestionType=new EventEmitter<QuestionType>();

  uri = 'http://localhost:3000';

  constructor(private _http:HttpClient) {}


    addQuestions(_form){
    //  const quiz= {
    //    title:title,
    //   type:type,
    //   optionsArray:[{
    //   optText:optText,
    //   isCorrect:isCorrect 
      
    //   }]
    // }
      console.log("post is working",+_form);
      return this._http.post(`${this.uri}/quizes`,_form);
    }


  
    getQuestions(){
      console.log("get is working")
      return this._http.get(`${this.uri}/quizes`)
    }
  
   getQuestionsById(id:any){
    
    // let id_number=parseInt(id)
     console.log("get questions by Id is working",typeof id);
     return this._http.get(`${this.uri}/quizes/${id}`);
   }


    editQuestions(id:any,form:NgForm){
    //   const quiz= {
    //     title:title,
    //    type:type,
    //    optionsArray:[{
    //    optText:optText,
    //    isCorrect:isCorrect 
    //    }]
    //  }
       console.log("edit is working");
       return this._http.put(`${this.uri}/quizes/${id}`,+ form);
     }


  
    deleteQuestions(id:any){
      console.log("delete is working",+ id)
      return this._http.delete(`${this.uri}/quizes/${id}`); 
    }  
}

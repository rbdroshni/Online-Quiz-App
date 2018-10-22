import { Injectable,EventEmitter} from '@angular/core';
import {Observable,of} from 'rxjs';
import {Http} from '@angular/http';
import { QuestionType } from './questions.model'

@Injectable({
  providedIn: 'root'
})
export class QuesService {


  selectedQuestionType=new EventEmitter<QuestionType>();

  constructor(private _http:Http) {}
    addQuestions(questiontype:QuestionType){
      console.log("its working");
      return this._http.post("http://localhost:3000/quizes",questiontype);
    }
  
    getQuestions(){
      return this._http.get("http://localhost:3000/quizes")
    }
  
    EditQuestions(questiontype:QuestionType,key:number){
      console.log(key);
      return this._http.put("http://localhost:3000/quizes/:quizId" +key,{
        questiontype
      })
    }
  
    deleteQuestions(key:number){
      console.log("key",key)
      return this._http.delete('http://localhost:3000/quizes/:quizId'+key);
      
    }
   
}

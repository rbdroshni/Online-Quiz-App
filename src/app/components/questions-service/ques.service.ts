import { Injectable,EventEmitter} from '@angular/core';
import {Http} from '@angular/http';
import { QuestionType } from './questions.model'

@Injectable({
  providedIn: 'root'
})
export class QuesService {


  selectedQuestionType=new EventEmitter<QuestionType>();

  constructor(private _http:Http) {}
    addQuestions(questiontype){
      return this._http.post("__",questiontype);
    }
  
    getQuestions(){
      return this._http.get('')
    }
  
    EditQuestions(questiontype:QuestionType,key:number){
      console.log(key);
      return this._http.put('___'+key,{
        questiontype
      })
    }
  
    deleteQuestions(key:number){
      console.log("key",key)
      return this._http.delete('__'+key);
      
    }
   
}

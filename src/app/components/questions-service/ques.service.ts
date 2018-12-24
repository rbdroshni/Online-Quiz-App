import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { environment } from '.././.././../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class QuesService {

  public display: boolean = false;
  public static quesset: any = [];

  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) { }

  public get quesset(): any {
    return QuesService.quesset
  }

  public set quesset(v: any) {
    QuesService.quesset = v
  }

  addQuestions(_form) {
    return this._http.post(`${this.baseUrl}/quizes`, _form);
  }

  getQuestions() {
    return this._http.get(`${this.baseUrl}/quizes`)
  }

  getQuestionsById(id: any) {
    return this._http.get(`${this.baseUrl}/quizes/${id}`);
  }

  editQuestions(form: NgForm) {
    return this._http.post(`${this.baseUrl}/quizesupdate`, form);
  }

  deleteQuestions(_id: any) {
    console.log("delete is working", _id)
    return this._http.delete(`${this.baseUrl}/quizes/${_id}`);
  }
}

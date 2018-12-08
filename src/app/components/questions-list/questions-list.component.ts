import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {QuesService} from '../questions-service/ques.service';
import {QuesFormComponent} from '../ques-form/ques-form.component'


@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  isPopupOpened =false;
  private dialogRef: any;

  constructor(private dialog?:MatDialog,
    private quesService?:QuesService) { }

  ngOnInit() {
  }

 addQuestions(){
  this.isPopupOpened =true;
  const dialogRef=this.dialog.open(QuesFormComponent,{
  width: '300px', height: '450px',
  data:{}
 });
 

dialogRef.afterClosed().subscribe(result=>{  
  this.isPopupOpened=false;
});
}
}

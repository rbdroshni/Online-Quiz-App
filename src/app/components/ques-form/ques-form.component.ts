import { Component, OnInit, Inject } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormBuilder, FormArray} from '@angular/forms';
import { MatDialogModule,MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuesService } from '../questions-service/ques.service';
import { QuestionType } from '../questions-service/questions.model';


@Component({
  selector: 'app-ques-form',
  templateUrl: './ques-form.component.html',
  styleUrls: ['./ques-form.component.css'],
  
  
})
export class QuesFormComponent implements OnInit {
    SelectedOptions:Boolean=false;
    AnotherSelectedOption:Boolean=false;
    QuesType:any=[];
  public questionForm:FormGroup;
  public _options:FormArray;



  constructor(public _formBuilder:FormBuilder ,public dialog: MatDialog,
    public dailogRef:MatDialogRef<any>,
    public quesService:QuesService,
    @Inject(MAT_DIALOG_DATA) public data:any) {


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

    onClick():void{
        this.dailogRef.close();
    }

  ngOnInit() {
      this.questionForm=this._formBuilder.group({
          ID:[],
          title:'',
          qtype:'',
          _options:this._formBuilder.array(
          [this.createOptions()])
      });
  }

  createOptions():FormGroup{
      return this._formBuilder.group({
          
          optText:'',
          isCorrect:''
      })
  }

  addOptions():void{
      this._options=this.questionForm.get('_options') as FormArray;
      this._options.push(this.createOptions());
  }

  onSubmit(){
      this.quesService.addQuestions(this.questionForm.value);
    this.dailogRef.close();
  }
}

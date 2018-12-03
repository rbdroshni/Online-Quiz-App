// import { Component, OnInit, Inject } from '@angular/core';
// import { ReactiveFormsModule,FormGroup,FormBuilder,Validators, FormArray} from '@angular/forms';
// import { MatDialog,MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { QuesService } from '../questions-service/ques.service';


// @Component({
//   selector: 'app-ques-form',
//   templateUrl: './ques-form.component.html',
//   styleUrls: ['./ques-form.component.css'],
  
  
// })
// export class QuesFormComponent implements OnInit {

//   public QuestionForm:FormGroup;
//   public _options:FormArray;

//   constructor(public _formBuilder:FormBuilder ,public dialog: MatDialog,
// public dailogRef:MatDialogRef<any>,
//     public quesService:QuesService,
//     @Inject(MAT_DIALOG_DATA) public data:any) { }

//     onClick():void{
//         this.dailogRef.close();

//     }

//   ngOnInit() {
//     //   this.QuestionForm=this._formBuilder.group({
//     //       ID:[],
//     //       title:['',[Validators.required],
//     //     //   qtype:['',[Validators.required],
//     //     //   _options:this._formBuilder.array([this.optText],
//     //     //     [this.isCorrect])    
//     //   });
//   }

//   onSubmit(){
//     //   this.quesService.addQuestions(this.QuestionForm.value);
//     this.dailogRef.close();
//   }
// }

import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms'
import { QuesEntryFormComponent } from '../ques-entry-form/ques-entry-form.component';
import { QuesService } from '../questions-service/ques.service';

@Component({
	selector: 'app-ques-added-view',
	templateUrl: './ques-added-view.component.html',
	styleUrls: ['./ques-added-view.component.css']
})

export class QuesAddedViewComponent implements OnInit {
	quesSet: any = [];
	display: boolean = false;
	isOption: boolean = false;
	isEdit = false;
	questionForm: any = {
		title: '',
		type: '',
		optionsArray: [
			{
				optText: '',
				isCorrect: ''
			}
		]
	}
	_id: any;

	constructor(public quesservice: QuesService) {
	}

	ngOnInit() {
		this.getQuestions();
	}

	showDialog(_id?: any, questionForm?: any) {
		if (!_id) {
			this.isOption = false;
		} else {
			this.isEdit = true
			this.isOption = true
			this.quesservice.getQuestionsById(_id).subscribe((ques) => {
				this.questionForm = ques;
			})
		}
		this.quesservice.display = true;
	}

	getQuestions() {
		this.quesservice.getQuestions().subscribe((questions) => {
			this.quesservice.quesSet = questions;
		})
	}

	deleteQuestions(_id: any, index: any) {
		this.quesservice.quesSet.splice(index, 1);
		if (confirm('Are you sure to delete this record ?') == true) {
			this.quesservice.deleteQuestions(_id).subscribe(response => {
			})
		}
	}
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { QuesService } from '../questions-service/ques.service';
import { Router, RouterLink } from '@angular/router';

import { Options } from 'selenium-webdriver/ie';
import { QuesAddedViewComponent } from '../ques-added-view/ques-added-view.component'

@Component({
	selector: 'app-ques-entry-form',
	templateUrl: './ques-entry-form.component.html',
	styleUrls: ['./ques-entry-form.component.css']
})
export class QuesEntryFormComponent implements OnInit {
	QuesType: any = [];
	@Input() _form: any = {};
	@Input() SelectedOptions: Boolean = false
	@Input() isEditable: Boolean = false;
	CheckboxAllBlank: boolean = false;
	titleBlank: boolean = true;
	isOptionChecked: boolean = true;
	emptyCheckbox: boolean = false;
	optionBlank: boolean = false;
	SingleOptions: boolean = false;
	options: any = "";
	answers: any = "";

	constructor(public router: Router, public questionService: QuesService) {
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

	ngOnInit() {

		this._form.optionsArray = [];
	}

	addOptions() {
		this._form.optionsArray.push({ optText: this.options, isCorrect: false });
		this.options = "";
	}

	forSingle(id) {
		for (var i = 0; i < this._form.optionsArray.length; i++) {
			let x = "" + i;
			let a = document.getElementById(x);
			a['checked'] = false;
			this._form.optionsArray[i].isCorrect = false;
		}
			let y = "" + id;
			let b = document.getElementById(y);
			b['checked'] = true;
			this._form.optionsArray[id].isCorrect = true;
	}

	optionChecked(value: any, data) {
		let index;
		if (value) {
			index = this._form.optionsArray.findIndex(x => { return x.optText == data })
			this._form.optionsArray[index] = { optText: data, isCorrect: value }
		}else {
			index = this._form.optionsArray.findIndex(x => { return x.optText == data })
			this._form.optionsArray[index] = { optText: data, isCorrect: value }
		}
	}

	DeleteOptions(optText) {
		for (var i = 0; i < this._form.optionsArray.length; i++) {
			if (this._form.optionsArray[i]["optText"] == optText) {
				this._form.optionsArray.splice(i, 1);
			}
		}
	}

	resetForm(form?: NgForm) {
		if (form != null)
			this._form = null
	}

	validateForm(form: any, id: any) {
		let count = 0, count1 = 0;
		for (var i = 0; i < this._form.optionsArray.length; i++) {
			if (this._form.optionsArray[i]["isCorrect"] != "") {
				count++;
			}
			if (this._form.optionsArray[i]["optText"] != "") {
				count1++;
			}
		}
		this.optionBlank = (count1 == 0) ? true : false;
		this.emptyCheckbox = (count == 0) ? true : false;
		this.titleBlank = (this._form.title == "") ? false : true;
		this.CheckboxAllBlank = ((!this.optionBlank) && (this.emptyCheckbox)) ? true : false;
		return true;
	}

	OnSubmit(form: any, _id: any) {
		if (!((!this.titleBlank) || (this.emptyCheckbox) || (this.optionBlank))) {
			if (!_id) {
				this.questionService.addQuestions(this._form).subscribe((data) => {
					this.questionService.getQuestions().subscribe((questions) => {
						this.questionService.quesset = questions;
					})
				})

			} else {
				this.questionService.editQuestions(this._form).subscribe((data) => {
					this.questionService.getQuestions().subscribe((questions) => {
						this.questionService.quesset = questions;
					})
				});
			}
			this.questionService.display = false;
		}
	}

	OnClick(options) {
		this.SingleOptions = (options == "Single Options") ? true : false;
		if ((options == "Single Options") || (options == "Multiple Options")) {
			this.SelectedOptions = true;
		}
		else if (options == "input text") {
			this.SelectedOptions = false;
		}
	}
}

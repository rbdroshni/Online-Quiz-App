import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { QuesService } from '../questions-service/ques.service';
import { Router, RouterLink } from '@angular/router';
import { QuesAddedViewComponent } from '../ques-added-view/ques-added-view.component';
import { QType } from '../../codeConstants'

@Component({
	selector: 'app-ques-entry-form',
	templateUrl: './ques-entry-form.component.html',
	styleUrls: ['./ques-entry-form.component.css']
})
export class QuesEntryFormComponent implements OnInit {
	QuestionType = QType;
	@Input() questionForm: any = {};
	@Input() SelectedOptions: Boolean = false
	@Input() isEditable: Boolean = false;
	CheckboxAllBlank: boolean = false;
	titleBlank: boolean = true;
	isOptionChecked: boolean = true;
	emptyCheckbox: boolean = false;
	optionBlank: boolean = false;
	SingleOptions: boolean = false;
	options: any = "";

	constructor(public router: Router, public questionService: QuesService) {
	}

	ngOnInit() {
		this.questionForm.optionsArray = [];
	}

	addOptions() {
		this.questionForm.optionsArray.push({ optText: this.options, isCorrect: false });
		this.options = "";
	}

	singleAnsChecked(id) {
		for (var i = 0; i < this.questionForm.optionsArray.length; i++) {
			let check_boxes_false = "" + i;
			let check_fasle = document.getElementById(check_boxes_false);
			check_fasle['checked'] = false;
			this.questionForm.optionsArray[i].isCorrect = false;
		}
		let check_box_true = "" + id;
		let check_true = document.getElementById(check_box_true);
		check_true['checked'] = true;
		this.questionForm.optionsArray[id].isCorrect = true;
	}

	multiAnsChecked(checked: any, optionValue) {
		let index;
		if (checked) {
			index = this.questionForm.optionsArray.findIndex(x => {
				return x.optText == optionValue;
			})
			this.questionForm.optionsArray[index] = { 
				optText: optionValue, 
				isCorrect: checked 
			}
		} 
	}

	deleteOptions(optText) {
		for (var i = 0; i < this.questionForm.optionsArray.length; i++) {
			if (this.questionForm.optionsArray[i]["optText"] == optText) {
				this.questionForm.optionsArray.splice(i, 1);
			}
		}
	}

	resetForm(form?: NgForm) {
		if (form != null)
			this.questionForm = null;
	}

	validateForm(form: any, id: any) {
		let checkedCount = 0, optionsCount = 0;
		for (var i = 0; i < this.questionForm.optionsArray.length; i++) {
			if (this.questionForm.optionsArray[i]["isCorrect"] != "") {
				checkedCount++;
			}
			if (this.questionForm.optionsArray[i]["optText"] != "") {
				optionsCount++;
			}
		}
		this.optionBlank = (optionsCount == 0) ? true : false;
		this.emptyCheckbox = (checkedCount == 0) ? true : false;
		this.titleBlank = (this.questionForm.title == "") ? false : true;
		this.CheckboxAllBlank = ((!this.optionBlank) && (this.emptyCheckbox)) ? true : false;
		return true;
	}

	OnSubmit(form: any, _id: any) {
		if (!((!this.titleBlank) || (this.emptyCheckbox) || (this.optionBlank))) {
		let api = (!_id) ? this.questionService.addQuestions(this.questionForm) : this.questionService.editQuestions(this.questionForm)
			api.subscribe((response) => {
				if(response){
					this.getQuestions();
				}
			})
			this.questionService.display = false;
		}
	}

	getQuestions(){
		this.questionService.getQuestions().subscribe((questions) => {
			this.questionService.quesSet = questions;
		})	
	}

	OnClick(ansType) {
		this.SingleOptions = (ansType == "Single Options") ? true : false;
		if ((ansType == "Single Options") || (ansType == "Multiple Options")) {
			this.SelectedOptions = true;
		}
		else if (ansType == "input text") {
			this.SelectedOptions = false;
		}
	}
}

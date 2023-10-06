import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
	selector: 'app-form-student-basic',
	standalone: true,
	imports: [
		MatCardModule,
		MatInputModule,
		MatFormFieldModule,
		MatCheckboxModule,
		MatButtonModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		NgIf
	],
	templateUrl: './form-student-basic.component.html',
	styleUrls: ['./form-student-basic.component.scss']
})
export class FormStudentBasicComponent {
	private _formBuilder = inject(FormBuilder);

	formGroup = this._formBuilder.group({
		doYouPayAttentionToClasses: false,
		doYouSubmitYourAssignmentsOnTime: false,
		missingClasses: false,
		observations: ['', Validators.required],
		dataFather: this._formBuilder.group({
			names: ['', Validators.required],
			lastName: ['', Validators.required]
		}),
		dataMother: this._formBuilder.group({
			names: ['', Validators.required],
			lastName: ['', Validators.required]
		})
	});
	saveData() {
		console.log(this.formGroup.value);
	}

	get observationsField() {
		return this.formGroup.controls.observations;
	}

	get dataFatherField() {
		return this.formGroup.controls.dataFather;
	}
	get dataMotherField() {
		return this.formGroup.controls.dataMother;
	}
}

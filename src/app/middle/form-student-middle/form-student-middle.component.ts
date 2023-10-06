import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { IStudentAdvancedForm } from '../../commons/model/person-data.model';
import { getFormControlError } from '../../commons/utils/functions-form';
import { PersonDataMiddleComponent } from '../person-data-middle/person-data-middle.component';

@Component({
	selector: 'app-form-student-middle',
	standalone: true,
	imports: [
		MatCardModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		NgFor,
		PersonDataMiddleComponent
	],
	templateUrl: './form-student-middle.component.html',
	styleUrls: ['./form-student-middle.component.scss']
})
export class FormStudentMiddleComponent {
	private _formBuilder = inject(NonNullableFormBuilder);

	formGroup = this._formBuilder.group<IStudentAdvancedForm>({
		doYouPayAttentionToClasses: this._formBuilder.control(false),
		doYouSubmitYourAssignmentsOnTime: this._formBuilder.control(false),
		missingClasses: this._formBuilder.control(false),
		observations: this._formBuilder.control('', {
			validators: [Validators.required]
		})
	});

	getError(formControl: AbstractControl) {
		return getFormControlError(formControl);
	}

	saveData(): void {
		if (this.formGroup.valid) {
			console.log(this.formGroup.value);
		}
	}
}

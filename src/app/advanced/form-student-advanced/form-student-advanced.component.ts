import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ControlErrorsDirective } from '../../commons/directives/control-error.directive';
import { FormSubmitDirective } from '../../commons/directives/form-submit.directive';
import { QualifyingsService } from '../../commons/services/qualifyings.service';
import { qualifyingValidator } from '../../commons/utils/custom-validators';
import { NgxValidators } from '../../commons/utils/ngx-validators';

@Component({
	selector: 'app-form-student-advanced',
	standalone: true,
	imports: [
		MatCardModule,
		MatInputModule,
		MatFormFieldModule,
		MatCheckboxModule,
		MatButtonModule,
		MatSlideToggleModule,
		ReactiveFormsModule,
		FormSubmitDirective,
		ControlErrorsDirective
	],
	templateUrl: './form-student-advanced.component.html',
	styleUrls: ['./form-student-advanced.component.scss']
})
export class FormStudentAdvancedComponent {
	private _formBuilder = inject(FormBuilder);
	private _qualifyingsService = inject(QualifyingsService);

	formGroup = this._formBuilder.group({
		doYouPayAttentionToClasses: false,
		doYouSubmitYourAssignmentsOnTime: false,
		missingClasses: false,
		observations: [
			'',
			[NgxValidators.required('Ingresa la observacion')],
			[qualifyingValidator(this._qualifyingsService)]
		],
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
		console.log(this.formGroup.controls.observations.errors);
	}
}

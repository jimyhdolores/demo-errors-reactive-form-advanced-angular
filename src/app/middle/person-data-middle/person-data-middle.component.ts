import { NgFor } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import {
	AbstractControl,
	ControlContainer,
	FormGroup,
	NonNullableFormBuilder,
	ReactiveFormsModule
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IPersonDataForm } from '../../commons/model/person-data.model';
import { getFormControlError } from '../../commons/utils/functions-form';

@Component({
	selector: 'app-person-data-middle',
	standalone: true,
	imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, NgFor],
	templateUrl: './person-data-middle.component.html',
	styleUrls: ['./person-data-middle.component.scss'],
	viewProviders: [
		{
			provide: ControlContainer,
			useFactory: () => inject(ControlContainer, { skipSelf: true })
		}
	]
})
export class PersonDataMiddleComponent {
	@Input({ required: true }) title = '';
	@Input({ required: true }) controlKey = '';

	private parentContainer = inject(ControlContainer);
	private _formBuilder = inject(NonNullableFormBuilder);

	formGroup!: FormGroup<IPersonDataForm>;

	ngOnInit(): void {
		this.formGroup = this._formBuilder.group<IPersonDataForm>({
			names: this._formBuilder.control(''),
			lastName: this._formBuilder.control('')
		});

		this.parentFormGroup.addControl(this.controlKey, this.formGroup);
	}

	private get parentFormGroup() {
		return this.parentContainer.control as FormGroup;
	}

	getError(formControl: AbstractControl) {
		return getFormControlError(formControl);
	}
}

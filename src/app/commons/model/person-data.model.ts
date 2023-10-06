import { FormControl, FormGroup } from '@angular/forms';

export interface IPersonData {
	names: string;
	lastName: string;
}

export interface IPersonDataForm {
	names: FormControl<string>;
	lastName: FormControl<string>;
}

export interface IStudent {
	doYouPayAttentionToClasses: boolean;
	doYouSubmitYourAssignmentsOnTime: boolean;
	missingClasses: boolean;
	dataFather: IPersonData;
	dataMother: IPersonData;
}

//USADO EN FORM-MIDDLE
// export interface IStudentForm {
// 	doYouPayAttentionToClasses: FormControl<boolean>;
// 	doYouSubmitYourAssignmentsOnTime: FormControl<boolean>;
// 	missingClasses: FormControl<boolean>;
// 	dataFather: FormControl<IPersonData | null>;
// 	dataMother: FormControl<IPersonData | null>;
// }

//USADO EN FORM-MIDDLE
export interface IStudentAdvancedForm {
	doYouPayAttentionToClasses: FormControl<boolean>;
	doYouSubmitYourAssignmentsOnTime: FormControl<boolean>;
	missingClasses: FormControl<boolean>;
	observations: FormControl<string>;
}

//USADO EN FORM-ADVANCED-2
export interface IStudentAdvanced2Form {
	doYouPayAttentionToClasses: FormControl<boolean>;
	doYouSubmitYourAssignmentsOnTime: FormControl<boolean>;
	missingClasses: FormControl<boolean>;
	dataFather: FormGroup<IPersonDataForm>;
	dataMother: FormGroup<IPersonDataForm>;
}

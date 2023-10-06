import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { QualifyingsService } from '../services/qualifyings.service';

export const qualifyingValidator = (userService: QualifyingsService): AsyncValidatorFn => {
	return (control: AbstractControl): Observable<ValidationErrors | null> => {
		return userService
			.checkIfQualifyingExists(control.value)
			.pipe(
				map((result: boolean) =>
					result ? { qualifierExists: 'No debe de agregar calificativos en la observación' } : null
				)
			);
	};
};

import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
	selector: 'app-control-error',
	standalone: true,
	imports: [MatFormFieldModule, MatInputModule, NgIf],
	templateUrl: './control-error.component.html',
	styleUrls: ['./control-error.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlErrorComponent {
	textError = '';

	@Input() set error(value: string) {
		if (value !== this.textError) {
			this.textError = value;
			this.cdr.detectChanges();
		}
	}

	constructor(private cdr: ChangeDetectorRef) {}
}

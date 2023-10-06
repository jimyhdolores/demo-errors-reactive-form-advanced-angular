import { ComponentRef, Directive, ElementRef, OnDestroy, OnInit, ViewContainerRef, inject } from '@angular/core';
import { NgControl } from '@angular/forms';
import { EMPTY, Subject, fromEvent, merge, takeUntil } from 'rxjs';
import { ControlErrorComponent } from '../components/control-error/control-error.component';
import { getFormControlError } from '../utils/functions-form';
import { FormSubmitDirective } from './form-submit.directive';

@Directive({
	selector: '[formControl], [formControlName]',
	standalone: true
})
export class ControlErrorsDirective implements OnInit, OnDestroy {
	private readonly ngControl = inject(NgControl);
	private readonly form = inject(FormSubmitDirective, { optional: true });
	private readonly destroy$ = new Subject<void>();
	private readonly elementRef: ElementRef<HTMLElement> = inject(ElementRef);
	private readonly vcr = inject(ViewContainerRef);

	private componentRef!: ComponentRef<ControlErrorComponent>;

	private readonly submit$ = this.form ? this.form.submit$ : EMPTY;
	private readonly blurEvent$ = fromEvent(this.elementRef.nativeElement, 'blur');

	ngOnInit(): void {
		merge(this.submit$, this.blurEvent$, this.ngControl.statusChanges!)
			.pipe(takeUntil(this.destroy$))
			.subscribe(() => {
				const errorControl = getFormControlError(this.ngControl.control!);
				this.setError(errorControl);

				if (this._isMatInput()) {
					this._addIntoMatFormField();
				}
			});
	}
	private _isMatInput() {
		return this.elementRef.nativeElement.classList.contains('mat-mdc-input-element');
	}

	private _addIntoMatFormField() {
		let parentElement = this.elementRef.nativeElement.parentElement;
		while (parentElement) {
			if (parentElement.classList.contains('mat-mdc-form-field')) {
				const mdcFieldWrapper = parentElement.querySelector('.mat-mdc-text-field-wrapper');
				if (mdcFieldWrapper) {
					mdcFieldWrapper.classList.add('mat-mdc-form-field-subscript-dynamic-size');
				}

				const subscriptWrapper = parentElement.querySelector('.mat-mdc-form-field-subscript-wrapper');

				if (subscriptWrapper) {
					subscriptWrapper.appendChild(this.componentRef.location.nativeElement);
				}
				break;
			}
			parentElement = parentElement.parentElement;
		}
	}

	setError(text: string) {
		if (!this.componentRef) {
			this.componentRef = this.vcr.createComponent(ControlErrorComponent);
		}
		this.componentRef.instance.error = text;
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}

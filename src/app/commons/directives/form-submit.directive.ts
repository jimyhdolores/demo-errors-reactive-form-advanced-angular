import { Directive, ElementRef, inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Directive({ selector: 'form', standalone: true })
export class FormSubmitDirective {
	private readonly host: ElementRef<HTMLFormElement> = inject(ElementRef);

	submit$ = fromEvent(this.element, 'submit').pipe(shareReplay(1));

	get element() {
		return this.host.nativeElement;
	}
}

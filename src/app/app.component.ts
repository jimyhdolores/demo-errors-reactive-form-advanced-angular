import { Component } from '@angular/core';
import { FormStudentAdvancedComponent } from './advanced/form-student-advanced/form-student-advanced.component';
import { FormStudentBasicComponent } from './basic/form-student-basic/form-student-basic.component';
import { FormStudentMiddleComponent } from './middle/form-student-middle/form-student-middle.component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [FormStudentBasicComponent, FormStudentMiddleComponent, FormStudentAdvancedComponent],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {}

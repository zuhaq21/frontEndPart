import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-form';

  constructor(private employeeService: EmployeeService)
  {

  }
  register(registerForm: NgForm)
  {
    this.employeeService.registerEmployee(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}

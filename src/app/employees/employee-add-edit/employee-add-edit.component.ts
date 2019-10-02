import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_service/employee.service';
import { FormBuilder, FormGroup, Validators, FormControl, Form } from '@angular/forms';
import { Employee } from 'src/app/_model/employee';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.scss']
})
export class EmployeeAddEditComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  // employee: Employee;
  employeeDataForm: FormGroup;
  // employeeDataForm = new FormGroup({
  //   fullname: new FormControl('alaa')
  // });

  ngOnInit() {
    this.employeeDataForm = this.formBuilder.group({
      // fullname: ['', [Validators.required , Validators.pattern(/^[a-z][a-z\s]*$/)]],
      fullname: ['' , [Validators.required, Validators.pattern(/^[a-zA-Z ]+(([',. - ][a-zA-Z ])?[a-zA-Z ]*)*$/)]],
      position: [''],
      code: [''],
      mobile: ['', [Validators.required , Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{11}$/)]],
    });
    // this.employee = this.employeeDataForm.value;
  }

  onSubmit(form: Form) {
    console.log(this.employeeDataForm);
    // console.log(this.employee);
  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_service/employee.service';
import { FormBuilder, FormGroup, Validators, FormControl, Form, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.scss']
})
export class EmployeeAddEditComponent implements OnInit {

  constructor(public employeeService: EmployeeService, private formBuilder: FormBuilder, private toastr: ToastrService) { }

  employeeDataForm: FormGroup;

  ngOnInit() {
    this.employeeDataForm = this.formBuilder.group({
      EmployeeFullName: ['' , [Validators.required, Validators.pattern(/^[a-zA-Z ]+(([',. - ][a-zA-Z ])?[a-zA-Z ]*)*$/)]],
      position: [''],
      EMPCode: [''],
      mobile: ['', [Validators.required , Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{11}$/)]],
    });
  }

  onSubmit() {
    // console.log(this.employeeDataForm);
    this.employeeService.addEmployee(this.employeeDataForm.value).subscribe(res => {
      this.toastr.success('Inserted Successfully', 'Register Employee');
      this.employeeDataForm.reset();
      this.employeeService.getAllEmployees();
    });
  }
}

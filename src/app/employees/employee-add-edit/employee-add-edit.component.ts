import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_service/employee.service';
import { FormBuilder, FormGroup, Validators, FormControl, Form, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { $ } from 'protractor';

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
      EmployeeId: [],
      EmployeeFullName: ['' , [Validators.required, Validators.pattern(/^[a-zA-Z ]+(([',. - ][a-zA-Z ])?[a-zA-Z ]*)*$/)]],
      Position: [''],
      EmpCode: [''],
      Mobile: ['', [Validators.required , Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{11}$/)]],
    });
    this.employeeService.employee = this.employeeDataForm.value;
  }

  refreshList() {
    this.employeeDataForm.reset();
    this.employeeService.employee = this.employeeDataForm.value;
    this.employeeService.getAllEmployees();
  }

  onSubmit() {
    // console.log(this.employeeDataForm.value);
    // console.log(this.employeeService.employee.EmployeeId);
    // console.log(this.employeeService.employee);
    if (this.employeeService.employee.EmployeeId == null  ) {
      this.employeeService.addEmployee(this.employeeService.employee).subscribe(res => {
        this.toastr.success('Inserted Successfully', 'Register Employee');
        this.refreshList();
      });
    } else {
      this.employeeService.updateEmployee(this.employeeService.employee).subscribe(res => {
        this.toastr.info('Updated Successfully', 'Update Employee');
        this.refreshList();
      });
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/_service/employee.service';
import { Employee } from 'src/app/_model/employee';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService, private toastr: ToastrService) { }

  ngOnInit() {
    this.employeeService.getAllEmployees();
  }

  showEmployee(emp: Employee) {
    this.employeeService.employee = Object.assign({}, emp); // to prevent update on time
  }

  deleteEmployee(id: number) {
    if(confirm('Are you sure you want to delete this employee ?!')) {
      this.employeeService.deleteEmployee(id).subscribe(res => {
        this.employeeService.getAllEmployees();
        this.toastr.error('Employee Deleted !' , 'Delete Employee');
      });
    }
  }

}
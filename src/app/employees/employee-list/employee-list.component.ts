import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { EmployeeService } from 'src/app/_service/employee.service';
import { Employee } from 'src/app/_model/employee';
import { ToastrService } from 'ngx-toastr';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  @ViewChild('myModal', {static: false}) myModal;
  @Output() empId: number;
  constructor(public employeeService: EmployeeService, private toastr: ToastrService, private modalService: ModalManager) { }

  ngOnInit() {
    this.employeeService.getAllEmployees();
  }

  showEmployee(emp: Employee) {
    this.employeeService.employee = Object.assign({}, emp); // to prevent update on time
  }

  deleteEmployee(id: number) {
    // if (confirm('Are you sure you want to delete this employee ?!')) {
      this.employeeService.deleteEmployee(id).subscribe(res => {
        this.employeeService.getAllEmployees();
        this.toastr.error('Employee Deleted !' , 'Delete Employee');
        this.modalService.close(this.myModal );
      });
    // }
  }

  openModel(emp: Employee) {
    this.modalService.open(this.myModal );
    this.empId = emp.EmployeeId;
  }

  closeModel() {
    this.modalService.close(this.myModal );
  }
}

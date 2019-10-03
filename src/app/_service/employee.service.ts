import { Employee } from '../_model/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class EmployeeService {

  employee: Employee;
  employees: Employee[];
  readonly baseURL = 'http://localhost:17971/api';

  constructor(private http: HttpClient) {}

  addEmployee(emp: Employee) {
    return this.http.post(this.baseURL + '/Employee' , emp);
  }

  getAllEmployees() {
    this.http.get(this.baseURL + '/Employee').toPromise().then(res => this.employees = res as Employee[]);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.baseURL + `/Employee/${id}`);
  }

}

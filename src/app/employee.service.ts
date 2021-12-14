import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  api = 'http://localhost:8080';
  constructor(private http: HttpClient) { }
  
  public registerEmployee(employeeData: any)
  {
    return this.http.post(this.api + '/registerEmployee', employeeData);
  }
}

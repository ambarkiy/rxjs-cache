import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class EmployeHttpService {
  constructor(private httpClient: HttpClient) {}

  loadEmployees() {
    return this.httpClient
      .get("http://dummy.restapiexample.com/api/v1/employees");
  }
}

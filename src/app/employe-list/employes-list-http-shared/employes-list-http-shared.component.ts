import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { map, share, tap } from "rxjs/operators";
import { EmployeHttpService } from "src/app/services/employe-http.service";

const LIMIT_AGE = 50;
@Component({
  selector: "app-employes-list-http-shared",
  templateUrl: "./employes-list-http-shared.component.html",
  styleUrls: ["./employes-list-http-shared.component.scss"],
})
export class EmployesListHttpSharedComponent implements OnInit {
  employes$: Observable<any>;
  youngEmployes$: Observable<any>;
  oldEmployes$: Observable<any>;

  constructor(private employeHttpService: EmployeHttpService) {}

  ngOnInit(): void {
    this.employes$ = this.employeHttpService.loadEmployees().pipe(
      tap((responseData) => console.log("http request executed", responseData)),
      map((res) => res["data"]),
      share()
    );

    this.refreshEmployes();
  }

  refreshEmployes() {
    this.youngEmployes$ = this.employes$.pipe(
      map((employes) =>
        employes.filter((employe) => +employe.employee_age < LIMIT_AGE)
      ),
      tap((value) => console.log(value))
    );

    this.oldEmployes$ = this.employes$.pipe(
      map((employes) =>
        employes.filter((employe) => +employe.employee_age >= LIMIT_AGE)
      ),
      tap((value) => console.log(value))
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeHttpService } from 'src/app/services/employe-http.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-employes-list-http',
  templateUrl: './employes-list-http.component.html',
  styleUrls: ['./employes-list-http.component.scss'],
})
export class EmployesListHttpComponent implements OnInit {
  youngEmployes$: Observable<any>;
  oldEmployes$: Observable<any>;

  constructor(private employeHttpService: EmployeHttpService) {}

  ngOnInit(): void {
    this.loadEmployes();
  }

  loadEmployes() {
    const httpEmployes$ = this.employeHttpService.loadEmployees();
    const employes$ = httpEmployes$.pipe(
      tap((responseData) => console.log('http request executed', responseData)),
      map((res) => res.data)
    );

    const LIMIT_AGE = 50;

    this.youngEmployes$ = employes$.pipe(
      map((employes) =>
        employes.filter((employe) => +employe.employee_age < LIMIT_AGE)
      ),
      tap((value) => console.log(value))
    );

    this.oldEmployes$ = employes$.pipe(
      map((employes) =>
        employes.filter((employe) => +employe.employee_age >= LIMIT_AGE)
      ),
      tap((value) => console.log(value))
    );

    // add a subscription will result http call three times
    //  employes$.subscribe();
  }
}

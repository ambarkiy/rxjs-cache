import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, multicast, tap } from 'rxjs/operators';
import { EmployeHttpService } from 'src/app/services/employe-http.service';

const LIMIT_AGE = 50;
@Component({
  selector: 'app-employes-list-http-multicasting',
  templateUrl: './employes-list-http-multicasting.component.html',
  styleUrls: ['./employes-list-http-multicasting.component.scss'],
})
export class EmployesListHttpMulticastingComponent implements OnInit {
  employes$: any;
  youngEmployes$: Observable<any>;
  oldEmployes$: Observable<any>;

  constructor(private employeHttpService: EmployeHttpService) {}

  ngOnInit(): void {
    this.employes$ = this.employeHttpService.loadEmployees().pipe(
      tap((responseData) => console.log('http request executed', responseData)),
      map((res) => res.data),
      multicast(new Subject())
    );

    this.refreshEmployes();

    // you have to connect
    this.employes$.connect();
  }

  refreshEmployes() {
    this.youngEmployes$ = this.employes$.pipe(
      map((employes: any[]) =>
        employes.filter((employe) => +employe.employee_age < LIMIT_AGE)
      ),
      tap((value) => console.log(value))
    );

    this.oldEmployes$ = this.employes$.pipe(
      map((employes: any[]) =>
        employes.filter((employe) => +employe.employee_age >= LIMIT_AGE)
      ),
      tap((value) => console.log(value))
    );
  }
}

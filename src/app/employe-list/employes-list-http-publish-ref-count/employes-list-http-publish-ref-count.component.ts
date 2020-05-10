import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, publish, refCount, tap } from 'rxjs/operators';
import { EmployeHttpService } from 'src/app/services/employe-http.service';

const LIMIT_AGE = 50;

@Component({
  selector: 'app-employes-list-http-publish-ref-count',
  templateUrl: './employes-list-http-publish-ref-count.component.html',
  styleUrls: ['./employes-list-http-publish-ref-count.component.scss'],
})
export class EmployesListHttpPublishRefCountComponent implements OnInit {
  employes$: Observable<any>;
  youngEmployes$: Observable<any>;
  oldEmployes$: Observable<any>;

  constructor(private employeHttpService: EmployeHttpService) {}

  ngOnInit(): void {
    this.employes$ = this.employeHttpService.loadEmployees().pipe(
      tap((responseData) => console.log('http request executed', responseData)),
      map((res: any) => res.data),
      publish(),
      refCount()
    );

    this.refreshEmployes();
  }

  refreshEmployes() {
    this.youngEmployes$ = this.employes$.pipe(
      map((employes) => employes.filter((employe) => +employe.employee_age < LIMIT_AGE)),
      tap((value) => console.log(value))
    );

    this.oldEmployes$ = this.employes$.pipe(
      map((employes) => employes.filter((employe) => +employe.employee_age >= LIMIT_AGE)),
      tap((value) => console.log(value))
    );
  }
}

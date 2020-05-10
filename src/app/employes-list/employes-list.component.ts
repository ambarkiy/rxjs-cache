import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.scss'],
})
export class EmployesListComponent implements OnInit {
  displayedColumns: string[] = ['status', 'name', 'age', 'salary'];
  @Input() employes: any;
  constructor() {}

  ngOnInit(): void {}
}

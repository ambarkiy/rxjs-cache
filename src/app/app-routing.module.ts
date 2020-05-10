import { RouterModule, Routes } from '@angular/router';
// tslint:disable-next-line: max-line-length
import { EmployesListHttpMulticastingComponent } from './employe-list/employes-list-http-multicasting/employes-list-http-multicasting.component';
// tslint:disable-next-line: max-line-length
import { EmployesListHttpPublishRefCountComponent } from './employe-list/employes-list-http-publish-ref-count/employes-list-http-publish-ref-count.component';
// tslint:disable-next-line: max-line-length
import { EmployesListHttpPublishReplayRefCountComponent } from './employe-list/employes-list-http-publish-replay-ref-count/employes-list-http-publish-replay-ref-count.component';
import { EmployesListHttpSharedComponent } from './employe-list/employes-list-http-shared/employes-list-http-shared.component';
import { EmployesListHttpComponent } from './employe-list/employes-list-http/employes-list-http.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'http', component: EmployesListHttpComponent },
  {
    path: 'http-multicasting',
    component: EmployesListHttpMulticastingComponent,
  },
  { path: 'http-shared', component: EmployesListHttpSharedComponent },
  {
    path: 'http-publish-ref-count',
    component: EmployesListHttpPublishRefCountComponent,
  },
  {
    path: 'http-publish-replay-ref-count',
    component: EmployesListHttpPublishReplayRefCountComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];

export const routing = RouterModule.forRoot(routes);

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { routing } from "./app-routing.module";
import { AppComponent } from "./app.component";
// tslint:disable-next-line: max-line-length
import { EmployesListHttpPublishReplayRefCountComponent } from "./employe-list/employes-list-http-publish-replay-ref-count/employes-list-http-publish-replay-ref-count.component";
import { EmployesListHttpSharedComponent } from "./employe-list/employes-list-http-shared/employes-list-http-shared.component";
import { EmployesListHttpComponent } from "./employe-list/employes-list-http/employes-list-http.component";
import { EmployesListComponent } from "./employes-list/employes-list.component";
import { PageNotFoundComponent } from "./errors/page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { MaterialModule } from "./material.module";
// tslint:disable-next-line: max-line-length
import { EmployesListHttpPublishRefCountComponent } from "./employe-list/employes-list-http-publish-ref-count/employes-list-http-publish-ref-count.component";
import { EmployesListHttpMulticastingComponent } from './employe-list/employes-list-http-multicasting/employes-list-http-multicasting.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployesListHttpComponent,
    EmployesListHttpSharedComponent,
    EmployesListHttpPublishRefCountComponent,
    EmployesListHttpPublishReplayRefCountComponent,
    PageNotFoundComponent,
    HomeComponent,
    EmployesListComponent,
    EmployesListHttpMulticastingComponent,
  ],
  imports: [BrowserModule, MaterialModule, HttpClientModule, routing],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoughnutsComponent } from './components/doughnuts/doughnuts.component';
import { DounutDetailComponent } from './components/dounut-detail/dounut-detail.component';
import { FamousPeopleComponent } from './components/famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './components/famous-person-detail/famous-person-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DoughnutsComponent,
    DounutDetailComponent,
    FamousPeopleComponent,
    FamousPersonDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

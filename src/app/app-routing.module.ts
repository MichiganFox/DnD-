import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoughnutsComponent } from './components/doughnuts/doughnuts.component';
import { DounutDetailComponent } from './components/dounut-detail/dounut-detail.component';
import { FamousPeopleComponent } from './components/famous-people/famous-people.component';

const routes: Routes = [
  { path: 'Donuts', component: DoughnutsComponent },
  { path: 'Donuts/:id', component: DounutDetailComponent },
  { path: "Devs", component:FamousPeopleComponent},
  { path: '', redirectTo: '/Donuts', pathMatch:'full'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

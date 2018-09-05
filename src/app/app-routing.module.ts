import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from '../app/components/heroes/heroes.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { HeroDetailComponent } from '../app/components/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  //   CommonModule
  ],
  // declarations: []
  exports: [ RouterModule ]
})



export class AppRoutingModule { 

  

}

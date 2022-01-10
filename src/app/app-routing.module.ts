import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ItinerariosComponent } from './components/itinerarios/itinerarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'itinerario/:id', component: ItinerariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

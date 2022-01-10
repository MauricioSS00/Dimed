import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItinerariosComponent } from './itinerarios.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ItinerariosComponent
  ],
  imports: [
    CommonModule,

    SharedModule
  ]
})
export class ItinerariosModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinhaOnibusComponent } from './linha-onibus/linha-onibus.component';
import { ItinerarioListaComponent } from './itinerario-lista/itinerario-lista.component';

@NgModule({
  declarations: [
    LinhaOnibusComponent,
    ItinerarioListaComponent
  ],
  exports: [
    LinhaOnibusComponent,
    ItinerarioListaComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

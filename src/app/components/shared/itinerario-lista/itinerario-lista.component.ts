import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-itinerario-lista',
  templateUrl: './itinerario-lista.component.html',
  styleUrls: ['./itinerario-lista.component.scss']
})
export class ItinerarioListaComponent implements OnInit {

  @Input() registros: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  abrirItinerarioMaps(registro: any) {
    window.open(`https://www.google.com/maps/?q=${registro.lat},${registro.lng}`, '_blank')
  }
}

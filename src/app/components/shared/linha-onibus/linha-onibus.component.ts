import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linha-onibus',
  templateUrl: './linha-onibus.component.html',
  styleUrls: ['./linha-onibus.component.scss']
})
export class LinhaOnibusComponent implements OnInit {

  @Input() registros: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async buscarItinerario(id: number) {
    this.router.navigateByUrl(`/itinerario/${id}`)
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LinhasService } from 'src/app/services/linhas.service';

@Component({
  selector: 'app-itinerarios',
  templateUrl: './itinerarios.component.html',
  styleUrls: ['./itinerarios.component.scss']
})
export class ItinerariosComponent implements OnInit {

  id: number = 0;
  nomeLinha: string = '';
  registros: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private linhasService: LinhasService,
    private router: Router
  ) {
    this.activatedRoute.paramMap.subscribe((paramMap: any) => {
      this.id = Number(paramMap.params.id);
    })
  }

  ngOnInit(): void {
    this.buscarItinerario();
  }

  async buscarItinerario() {
    this.registros = await this.linhasService.buscarItinerario(this.id);
    this.nomeLinha = this.registros.nome;
    delete (this.registros.codigo);
    delete (this.registros.idlinha);
    delete (this.registros.nome);
    this.objetoParaArray();
  }

  objetoParaArray() {
    this.registros = Object.keys(this.registros).map(i => this.registros[Number(i)]);
  }

  voltar() {
    this.router.navigateByUrl('');
  }
}

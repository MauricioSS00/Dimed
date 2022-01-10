import { Component, OnInit } from '@angular/core';

import { LinhasService } from 'src/app/services/linhas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registros: any[] = [];
  registrosFiltrados: any[] = [];
  lotacao: any[] = [];
  exibindoItinerario = false;

  constructor(
    private linhasService: LinhasService
  ) { }

  async ngOnInit() {
    await this.buscarLinhas();
    await this.buscarLotacao();
    this.registrosFiltrados = this.registros;
  }

  async buscarLinhas() {
    this.registros = await this.linhasService.buscarLinhas().catch(error => console.log('QQQQ'));
    this.registros = this.registros.map((linha: any) => Object.assign(linha, { tipo: 'Linha' }));
  }

  async buscarLotacao() {
    const lotacoes = await this.linhasService.buscarLotacao().catch(error => console.log('QQQQ'));
    this.registros = this.registros.concat(lotacoes.map((lotacao: any) => Object.assign(lotacao, { tipo: 'Lotação' })));
  }

  filtrar(campo: string, valor: string) {
    if (valor) {
      this.registrosFiltrados = this.registros.filter(registro => this.aplicarFiltro(registro, campo, valor));
    } else {
      this.registrosFiltrados = this.registros;
    }
  }

  aplicarFiltro(registro: any, campo: string, valor: string) {
    return registro[campo].toLocaleLowerCase().indexOf(valor.toLocaleLowerCase()) > -1;
  }
}

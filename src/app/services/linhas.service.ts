import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LinhasService {

  private _url = 'http://www.poatransporte.com.br/php/facades/process.php?';

  constructor(
    private http: HttpClient
  ) { }

  buscarLinhas(): Promise<any> {
    return this.http.get(`${this._url}a=nc&p=%25&t=o`).toPromise();
  }

  buscarLotacao(): Promise<any> {
    return this.http.get(`${this._url}a=nc&p=%25&t=l`).toPromise();
  }

  buscarItinerario(id: number): Promise<any> {
    return this.http.get(`${this._url}a=il&p=${id}`).toPromise();
  }
}

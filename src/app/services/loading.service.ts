import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  showLoading = false

  constructor() { }

  setLoading(value: boolean) {
    this.showLoading = value;
  }
}

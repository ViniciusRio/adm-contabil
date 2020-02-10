import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Conta } from 'src/app/contas/conta';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }

  addConta(conta: Conta) {
    const url = `${environment.urlApi}/contas`;
    const arg = {
      conta
    }

    return new Promise((resolve, reject) => {
      this.http.post(url, arg).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  tipoContas() {
    const url = `${environment.urlApi}/tipo-conta`;

    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err)
      });
    });
  }

  todasContas() {
    const url = `${environment.urlApi}/contas`;

    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err);
      })
    })
  }

  contaPai() {
    const url = `${environment.urlApi}/conta-pai`;

    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err);
      })
    })
  }

  contasAnaliticas() {
    const url = `${environment.urlApi}/contas-analiticas`;

    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err)
      });
    });
  }
}

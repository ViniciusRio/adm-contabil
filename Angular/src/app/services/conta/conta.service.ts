import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  constructor(private http: HttpClient) { }

  addConta(Descricao: string, NumeroEstruturado: string, Grupo: number, TipoConta: number, EmpresaID: number) {
    const url = `${environment.urlApi}/contas`;
    const arg = {
      Descricao,
      NumeroEstruturado,
      Grupo,
      TipoConta, 
      EmpresaID
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
}

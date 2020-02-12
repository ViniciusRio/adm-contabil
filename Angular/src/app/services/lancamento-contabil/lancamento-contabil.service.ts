import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LancamentoContabilService {

  constructor(private http: HttpClient) { }

  deletarLancamento(id) {
    const url = `${environment.urlApi}/lancamento/${id}/delete`;

    return new Promise((resolve, reject) => {
      this.http.delete(url).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  addLancamento(data: string, historico: string) {
    const url = `${environment.urlApi}/lancamentos`;
    const arg = {
      data,
      historico
    }

    return new Promise((resolve, reject) => {
      this.http.post(url, arg).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  todosLancamentos() {
    const url = `${environment.urlApi}/lancamentos`;
    
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err)
      });
    });
  }

  lancamentosContabeis() {
    const url = `${environment.urlApi}/lancamentos-contabeis`;
    
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err)
      });
    });
  }

}

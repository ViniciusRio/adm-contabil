import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DetalhesLancamentoService {
  constructor(private http: HttpClient) { }

  addDetalheLancamento(
    Valor: number, 
    Tipo: string,
    LancamentoContabilID: number,
    ContaAnaliticaID: number
    ) {
    const url = `${environment.urlApi}/detalhes-lancamento`;
    const arg = {
      Valor,
      Tipo,
      LancamentoContabilID,
      ContaAnaliticaID
    }

    return new Promise((resolve, reject) => {
      this.http.post(url, arg).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  todosDetalhesLancamento() {
    const url = `${environment.urlApi}/detalhes-lancamento`;
    
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err)
      });
    });
  }
  
}

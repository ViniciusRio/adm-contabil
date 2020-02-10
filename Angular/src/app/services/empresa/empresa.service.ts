import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }



  deletarEmpresa(id) {
    const url = `${environment.urlApi}/empresa/${id}/delete`;

    return new Promise((resolve, reject) => {
      this.http.delete(url).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
  
  addEmpresa(razaoSocial: string) {
    const url = `${environment.urlApi}/empresas`;
    const arg = {
      razaoSocial
    }

    return new Promise((resolve, reject) => {
      this.http.post(url, arg).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  todasEmpresas() {
    const url = `${environment.urlApi}/empresas`;
    
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err)
      });
    });
  }
}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }

  getGrupos() {
    const url = `${environment.urlApi}/grupos`;
    
    return new Promise((resolve, reject) => {
      this.http.get(url).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err)
      });
    });
  }
}

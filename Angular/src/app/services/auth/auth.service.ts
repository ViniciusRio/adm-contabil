import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from 'src/app/auth/registro/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userAuthenticate;
  // tslint:disable-next-line: variable-name
  local = null;

  get userAuth() {
    return this.userAuthenticate;
  }

  constructor(private http: HttpClient) {
    this.local = localStorage.getItem('value');

    if(this.local != null) {
      this.userAuthenticate = true;
    } else {
      this.userAuthenticate = false;
    }
   }


  
  login(usuario: Usuario) {
    const url = `${environment.urlApi}/login`;
    const arg = {
      usuario
    }

    return new Promise((resolve, reject) => {
      this.http.post(url, arg).subscribe((data: any) => {
        if (data.hasOwnProperty('Value')) {
          localStorage.clear();
          localStorage.setItem('value', data.Value);
          var values = data.Values;
          if (values[1])
          {
            localStorage.setItem('admin', "1");
          }
        }

        this.userAuthenticate = true;
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }

  registro(usuario) {
    const url = `${environment.urlApi}/registro`;
    const arg = {
      usuario
    }

    return new Promise((resolve, reject) => {
      this.http.post(url, arg).subscribe((data: any) => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
}

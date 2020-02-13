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
    console.log("auth: ", this.userAuthenticate);
    return this.userAuthenticate;
  }

  constructor(private http: HttpClient) {
    this.local = localStorage.getItem('value');
    console.log("local construtor: ", this.local);

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
          localStorage.setItem('value', data.Value);
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

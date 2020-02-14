import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { 
      this.form = this.formBuilder.group({
        email: '',
        senha: '',
        isAdmin: false
      });
    }

  ngOnInit() {
  }

  criarRegistro() {
    const usuario = {
      Nome: this.form.value.email,
      Senha: this.form.value.senha,
      IsAdmin: this.form.value.isAdmin
    }

    this.authService.registro(usuario).then(() => {
      this.router.navigateByUrl('/home');
    })
  }
}

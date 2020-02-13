import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
    ) { 
      this.form = this.formBuilder.group({
        email: '',
        senha: ''
      });
    }

  ngOnInit() {
  }

  onLogin() {
    const usuario = {
      Nome: this.form.value.email,
      Senha: this.form.value.senha
    }

    this.authService.login(usuario).then(() => {
      this.router.navigateByUrl('/contas');
    });
  }

}

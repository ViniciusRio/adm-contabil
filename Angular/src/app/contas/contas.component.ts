import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ContaService } from '../services/conta/conta.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { AuthService } from '../services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from '../auth/login/login.component';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  contas;
  cookieValue;
  cookieValue2;
  valueCo;


  @ViewChild(LoginComponent, null) child;


  constructor(
    private contaService: ContaService,
    private confirmationDialogService: ConfirmationDialogService,
    private authService: AuthService,
    private cookieService: CookieService
    ) { }

  ngOnInit() {
    this.onListarContas();
  }

  ngAfterViewInit() {
    this.valueCo = this.child.valueCo
    console.log("value conta child: ", this.valueCo);
  }

  onDeletarConta(id) {
    this.confirmationDialogService.confirm('Deseja realmente excluir?', 'Ação não poderá ser desfeita.')
    .then(() => {
      this.contaService.deletarConta(id).then(() => {
        this.onListarContas();
      });
    })
    .catch();
    
  }
  onListarContas() {
    this.contaService.todasContas().then(resultado => {
      this.contas = resultado;
    });
  }

}

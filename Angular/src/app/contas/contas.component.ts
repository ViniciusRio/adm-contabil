import { Component, OnInit } from '@angular/core';
import { ContaService } from '../services/conta/conta.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  contas;
  cookieValue;

  constructor(
    private contaService: ContaService,
    private confirmationDialogService: ConfirmationDialogService,
    private authService: AuthService
    ) { }

  ngOnInit() {
    this.onListarContas();
    this.getCookie();
  }

  getCookie()
  {
    this.authService.login().then(resultado => {
      this.cookieValue = resultado;
    })
    
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

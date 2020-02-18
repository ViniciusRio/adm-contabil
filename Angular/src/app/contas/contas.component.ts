import { Component, OnInit } from '@angular/core';
import { ContaService } from '../services/conta/conta.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  contas;
  cookieValue;
  valueLocalStorage;
  errorMsg;
  isAdmin;

  constructor(
    private contaService: ContaService,
    private confirmationDialogService: ConfirmationDialogService,
    ) { }

  ngOnInit() {
    this.onListarContas();
    this.valueLocalStorage = localStorage.getItem('value');
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
    }, err => {
      this.errorMsg = err;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../services/empresa/empresa.service';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas;
  valueLocalStorage;
  
  constructor(
    private empresaService: EmpresaService,
    private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
    this.listarEmpresas();
    this.valueLocalStorage = localStorage.getItem('value');

  }
  onDeletarEmpresa(id) {
    this.confirmationDialogService.confirm('Deseja realmente excluir?', 'Contas associadas também serão Ação não poderá ser desfeita.')
    .then(() => {
      this.empresaService.deletarEmpresa(id).then(() => {
        this.listarEmpresas();
      });
    })
    .catch();
    
  }

  listarEmpresas() {
    this.empresaService.todasEmpresas().then(resultado => {
      this.empresas = resultado;
    })
  }

}

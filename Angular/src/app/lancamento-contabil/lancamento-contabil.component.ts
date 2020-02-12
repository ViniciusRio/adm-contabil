import { Component, OnInit } from '@angular/core';
import { LancamentoContabilService } from '../services/lancamento-contabil/lancamento-contabil.service';
import * as moment from 'moment';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-lancamento-contabil',
  templateUrl: './lancamento-contabil.component.html',
  styleUrls: ['./lancamento-contabil.component.css']
})
export class LancamentoContabilComponent implements OnInit {
  lancamentos;
  now = moment().format('dddd');


  constructor(
    private lancamentoService: LancamentoContabilService,
    private confirmationDialogService: ConfirmationDialogService
    ) { }

  ngOnInit() {
    this.listarLancamentos();
  }

  converterData(dataAntiga: string)
  {
    return moment(dataAntiga, "YYYY/MM/DD").format("DD/MM/YYYY");
  }
  
  onDeletarLancamento(id) {
    this.confirmationDialogService.confirm('Deseja realmente excluir?', 'Ação não poderá ser desfeita.')
    .then(() => {
      this.lancamentoService.deletarLancamento(id).then(() => {
        this.listarLancamentos();
      });
    })
    .catch();
    
  }

  listarLancamentos() {
    this.lancamentoService.todosLancamentos().then(resultado => {
      this.lancamentos = resultado;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { LancamentoContabilService } from '../services/lancamento-contabil/lancamento-contabil.service';
import * as moment from 'moment';

@Component({
  selector: 'app-lancamento-contabil',
  templateUrl: './lancamento-contabil.component.html',
  styleUrls: ['./lancamento-contabil.component.css']
})
export class LancamentoContabilComponent implements OnInit {
  lancamentos;
  now = moment().format('dddd');


  constructor(private lancamentoService: LancamentoContabilService) { }

  ngOnInit() {
    this.listarLancamentos();
  }

  converterData(dataAntiga: string)
  {
    return moment(dataAntiga, "YYYY/MM/DD").format("DD/MM/YYYY");
  }
  
  listarLancamentos() {
    this.lancamentoService.todosLancamentos().then(resultado => {
      this.lancamentos = resultado;
      console.log("LANÇAMENTOS: ", this.lancamentos);
    });
  }
}

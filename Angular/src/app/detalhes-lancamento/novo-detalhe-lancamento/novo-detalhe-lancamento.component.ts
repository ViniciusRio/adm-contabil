import { Component, OnInit } from '@angular/core';
import { DetalhesLancamentoService } from 'src/app/services/detalhes-lancamento/detalhes-lancamento.service';
import { FormBuilder } from '@angular/forms';
import { ContaService } from 'src/app/services/conta/conta.service';
import { LancamentoContabilService } from 'src/app/services/lancamento-contabil/lancamento-contabil.service';

@Component({
  selector: 'app-novo-detalhe-lancamento',
  templateUrl: './novo-detalhe-lancamento.component.html',
  styleUrls: ['./novo-detalhe-lancamento.component.css']
})
export class NovoDetalheLancamentoComponent implements OnInit {
  form;
  lancamentosAnaliticos;
  contasAnaliticas;
  showMsg = false;

  constructor(
    private detalhesService: DetalhesLancamentoService,
    private formBuilder: FormBuilder,
    private contaService: ContaService,
    private lancamentoService: LancamentoContabilService
  ) {
    this.form = this.formBuilder.group({
      valor: '',
      tipo: '',
      lancamentoContabil: [''],
      contaAnalitica: ['']
    });
  }

  ngOnInit() {
    this.listarLancamentosContabeis();
    this.listarContasAnaliticas();
  }

  listarContasAnaliticas() {
    this.contaService.contasAnaliticas().then(resultado => {
      this.contasAnaliticas = resultado;
    });
  }

  listarLancamentosContabeis() {
    this.lancamentoService.lancamentosContabeis().then(resultado => {
      this.lancamentosAnaliticos = resultado;
    });
  }

  criarDetalhes() {
    this.detalhesService.addDetalheLancamento(
      this.form.value.valor,
      this.form.value.tipo,
      this.form.value.lancamentoContabil,
      this.form.value.contaAnalitica
    ).then(() => {
      this.form.reset();
      this.showMsg = true;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ContaService } from '../../services/conta/conta.service';
import { GrupoService } from 'src/app/services/grupo/grupo.service';
import { EmpresaService } from 'src/app/services/empresa/empresa.service';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.css']
})

export class NovaContaComponent implements OnInit {
  form;
  grupos;
  tiposContas;
  empresas;
  contasPai
  showMsg = false;

  constructor(
    private contaService: ContaService,
    private grupoService: GrupoService,
    private empresaService: EmpresaService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      descricao: '',
      numeroEstruturado: '',
      grupo: [''],
      tipoConta: [''],
      empresa: [''],
      contaPai: ['']
    });
  }

  ngOnInit() {
    this.listarGrupos();
    this.listarTipoContas();
    this.listarEmpresas();
    this.listarContasPai();
  }

  listarContasPai() {
    this.contaService.contaPai().then(resultado => {
      this.contasPai = resultado;
    });
  }

  listarEmpresas() {
    this.empresaService.todasEmpresas().then(resultado => {
      this.empresas = resultado;
    });
  }

  listarTipoContas() {
    this.contaService.tipoContas().then(resultado => {
      this.tiposContas = resultado;
    });
  }
  listarGrupos() {
    this.grupoService.todosGrupos().then(resultado => {
      this.grupos = resultado;
    })
  }

  criarConta() {
    this.contaService.addConta(
      this.form.value.descricao,
      this.form.value.numeroEstruturado,
      this.form.value.grupo,
      this.form.value.tipoConta,
      this.form.value.empresa,
      this.form.value.contaPai

    ).then(() => {
      this.form.reset();
      this.showMsg = true;
    });
  }

}

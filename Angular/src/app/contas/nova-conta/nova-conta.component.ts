import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContaService } from '../../services/grupo/conta/conta.service';
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
      empresa: ['']
    });
  }

  ngOnInit() {
    this.listarGrupos();
    this.listarTipoContas();
    this.listarEmpresas();
  }

  listarEmpresas() {
    this.empresaService.getEmpresas().then(resultado => {
      this.empresas = resultado;
    })
  }

  listarTipoContas() {
    this.contaService.getTipoConta().then(resultado => {
      this.tiposContas = resultado;
    })
  }
  listarGrupos() {
    this.grupoService.getGrupos().then(resultado => {
      this.grupos = resultado;
    })
  }

  criarConta() {
    this.contaService.addConta(
      this.form.value.descricao,
      this.form.value.numeroEstruturado,
      this.form.value.grupo,
      this.form.value.tipoConta,
      this.form.value.empresa
    ).then(() => {
      this.form.reset();
    });
  }

}

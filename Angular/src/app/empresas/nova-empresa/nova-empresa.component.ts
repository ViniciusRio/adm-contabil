import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa/empresa.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-nova-empresa',
  templateUrl: './nova-empresa.component.html',
  styleUrls: ['./nova-empresa.component.css']
})
export class NovaEmpresaComponent implements OnInit {
  form;

  constructor(
    private empresaService: EmpresaService,
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      razaoSocial: '',
    });
  }

  ngOnInit() {
  }

  criarEmpresa() {
    this.empresaService.addEmpresa(
      this.form.value.razaoSocial
    ).then(() => {
      this.form.reset();
    });
  }

}

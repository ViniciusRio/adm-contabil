import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../services/empresa/empresa.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  empresas;

  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.listarEmpresas();
  }

  listarEmpresas() {
    this.empresaService.todasEmpresas().then(resultado => {
      this.empresas = resultado;
    })
  }

}

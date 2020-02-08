import { Component, OnInit } from '@angular/core';
import { ContaService } from '../services/conta/conta.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  contas;

  constructor(private contaService: ContaService) { }

  ngOnInit() {
    this.onListarContas();
  }

  onListarContas() {
    this.contaService.todasContas().then(resultado => {
      this.contas = resultado;
    });
  }

}

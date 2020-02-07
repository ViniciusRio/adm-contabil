import { Component, OnInit } from '@angular/core';
import { ContaService } from '../services/grupo/conta/conta.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.component.html',
  styleUrls: ['./contas.component.css']
})
export class ContasComponent implements OnInit {
  contas;

  constructor(private contaService: ContaService) { }

  ngOnInit() {
    this.getContas();
  }

  getContas() {
    this.contaService.fetchContas().then(resultado => {
      this.contas = resultado;
      console.log("CONTAS: ", this.contas);
    });
  }

}

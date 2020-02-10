import { Component, OnInit } from '@angular/core';
import { DetalhesLancamentoService } from '../services/detalhes-lancamento/detalhes-lancamento.service';

@Component({
  selector: 'app-detalhes-lancamento',
  templateUrl: './detalhes-lancamento.component.html',
  styleUrls: ['./detalhes-lancamento.component.css']
})
export class DetalhesLancamentoComponent implements OnInit {
  detalhes;
  
  constructor(
    private detalhesService: DetalhesLancamentoService
    ) { }

  ngOnInit() {
    this.listarDetalhes();
  }

  listarDetalhes() {
    this.detalhesService.todosDetalhesLancamento().then(resultado => {
      this.detalhes = resultado;
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesLancamentoRoutingModule } from './detalhes-lancamento-routing.module';
import { DetalhesLancamentoComponent } from './detalhes-lancamento.component';

@NgModule({
  imports: [
    CommonModule,
    DetalhesLancamentoRoutingModule
  ],
  declarations: [DetalhesLancamentoComponent]
})
export class DetalhesLancamentoModule { }

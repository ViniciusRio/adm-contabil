import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesLancamentoComponent } from './detalhes-lancamento.component';

const routes: Routes = [
  { path: '', component: DetalhesLancamentoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalhesLancamentoRoutingModule { }

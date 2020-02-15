import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentoContabilComponent } from './lancamento-contabil.component';
import { LancamentoRoutingModule } from './lancamento-contabil-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LancamentoRoutingModule
  ],
  declarations: [LancamentoContabilComponent]
})
export class LancamentoContabilModule { }

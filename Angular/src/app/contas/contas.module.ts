import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContasComponent } from './contas.component';
import { ContasRoutingModule } from './contas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ContasRoutingModule
  ],
  declarations: [ContasComponent]
})
export class ContasModule { }

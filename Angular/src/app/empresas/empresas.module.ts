import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresasComponent } from './empresas.component';
import { EmpresasRoutingModule } from './empresas-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EmpresasRoutingModule
  ],
  declarations: [EmpresasComponent]
})
export class EmpresasModule { }

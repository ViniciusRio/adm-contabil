import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovaContaComponent } from './contas/nova-conta/nova-conta.component';
import { ContasComponent } from './contas/contas.component';
import { EmpresasComponent } from './empresas/empresas/empresas.component';
import { NovaEmpresaComponent } from './empresas/nova-empresa/nova-empresa.component';


const routes: Routes = [
  {
    path: '',
    component: ContasComponent,
    children: [
      {
        path: 'contas',
        component: ContasComponent
      }
    ]
  },
  {
    path: 'nova-conta',
    component: NovaContaComponent,
  },
  {
    path: 'empresas',
    component: EmpresasComponent
  },
  {
    path: 'nova-empresa',
    component: NovaEmpresaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

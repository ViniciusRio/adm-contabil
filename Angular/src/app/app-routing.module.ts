import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovaContaComponent } from './contas/nova-conta/nova-conta.component';
import { ContasComponent } from './contas/contas.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { NovaEmpresaComponent } from './empresas/nova-empresa/nova-empresa.component';
import { LancamentoContabilComponent } from './lancamento-contabil/lancamento-contabil.component';
import { NovoLancamentoContabilComponent } from './lancamento-contabil/novo-lancamento-contabil/novo-lancamento-contabil.component';
import { DetalhesLancamentoComponent } from './detalhes-lancamento/detalhes-lancamento.component';
import { NovoDetalheLancamentoComponent } from './detalhes-lancamento/novo-detalhe-lancamento/novo-detalhe-lancamento.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: ContasComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'contas',
        component: ContasComponent,
        canActivate: [AuthGuard]

      }
    ]
  },
  {
    path: 'nova-conta',
    component: NovaContaComponent,
  },
  {
    path: 'empresas',
    component: EmpresasComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'nova-empresa',
    component: NovaEmpresaComponent,
  },
  {
    path: 'lancamentos-contabeis',
    component: LancamentoContabilComponent
  },
  {
    path: 'novo-lancamento-contabil',
    component: NovoLancamentoContabilComponent
  },
  {
    path: 'detalhes-lancamento',
    component: DetalhesLancamentoComponent
  },
  {
    path: 'novo-detalhe-lancamento',
    component: NovoDetalheLancamentoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

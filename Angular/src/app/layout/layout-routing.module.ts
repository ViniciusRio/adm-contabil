import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegistroComponent } from '../auth/registro/registro.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomeModule' },
      { path: 'contas', loadChildren: '../contas/contas.module#ContasModule' },
      { path: 'empresas', loadChildren: '../empresas/empresas.module#EmpresasModule' },
      { path: 'lancamento-contabil', loadChildren: '../lancamento-contabil/lancamento-contabil.module#LancamentoContabilModule' },
      { path: 'detalhes-lancamento', loadChildren: '../detalhes-lancamento/detalhes-lancamento.module#DetalhesLancamentoModule' },

    ]
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

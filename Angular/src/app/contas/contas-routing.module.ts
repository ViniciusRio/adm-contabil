import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContasComponent } from './contas.component';

const routes: Routes = [
  { path: '', component: ContasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContasRoutingModule { }

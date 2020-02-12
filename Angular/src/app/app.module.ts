import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovaContaComponent } from './contas/nova-conta/nova-conta.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContasComponent } from './contas/contas.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { NovaEmpresaComponent } from './empresas/nova-empresa/nova-empresa.component';
import { LancamentoContabilComponent } from './lancamento-contabil/lancamento-contabil.component';
import { NovoLancamentoContabilComponent } from './lancamento-contabil/novo-lancamento-contabil/novo-lancamento-contabil.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetalhesLancamentoComponent } from './detalhes-lancamento/detalhes-lancamento.component';
import { NovoDetalheLancamentoComponent } from './detalhes-lancamento/novo-detalhe-lancamento/novo-detalhe-lancamento.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    NovaContaComponent,
    ContasComponent,
    EmpresasComponent,
    NovaEmpresaComponent,
    LancamentoContabilComponent,
    NovoLancamentoContabilComponent,
    DetalhesLancamentoComponent,
    NovoDetalheLancamentoComponent,
    ConfirmationDialogComponent,
    RegistroComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ConfirmationDialogService, NgbActiveModal, CookieService],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponent ]

})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NovaContaComponent } from './contas/nova-conta/nova-conta.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContasComponent } from './contas/contas.component';
import { EmpresasComponent } from './empresas/empresas/empresas.component';


@NgModule({
  declarations: [
    AppComponent,
    NovaContaComponent,
    ContasComponent,
    EmpresasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

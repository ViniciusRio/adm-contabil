import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  exports: [],
  declarations: [
      SidebarComponent,
      MainLayoutComponent,
      HeaderComponent,
      FooterComponent
    ]
})
export class LayoutModule { }

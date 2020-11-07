import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidenavComponent],
  imports: [
    CommonModule, MaterialModule
  ], exports: [FooterComponent, HeaderComponent, SidenavComponent]
})
export class SharedModule { }

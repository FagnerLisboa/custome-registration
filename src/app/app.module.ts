import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormPessoaFisicaComponent } from './register/form-pessoa-fisica/form-pessoa-fisica.component';
import { FormPessoaJuridicaComponent } from './register/form-pessoa-juridica/form-pessoa-juridica.component';
import { CommonComponent } from './common/common.component';
import { RegisterAddressComponent } from './common/register-address/register-address.component';
import { RegisterFooterComponent } from './common/register-footer/register-footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    FormPessoaFisicaComponent,
    FormPessoaJuridicaComponent,
    CommonComponent,
    RegisterAddressComponent,
    RegisterFooterComponent,
    HomeComponent,
    NavbarComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

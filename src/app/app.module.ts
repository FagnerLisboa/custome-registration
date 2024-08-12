import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FormPessoaFisicaComponent } from './register/form-pessoa-fisica/form-pessoa-fisica.component';
import { FormPessoaJuridicaComponent } from './register/form-pessoa-juridica/form-pessoa-juridica.component';
import { RegisterFooterComponent } from './register/register-footer/register-footer.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterService } from './register/register.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFooterComponent,
    HomeComponent,
    NavbarComponent,
    FormPessoaJuridicaComponent,
    FormPessoaFisicaComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
    ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

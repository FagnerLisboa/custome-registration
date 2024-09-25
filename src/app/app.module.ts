import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask'

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
import { RegisterAddressComponent } from './register/register-address/register-address.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    RegisterFooterComponent,
    HomeComponent,
    NavbarComponent,
    FormPessoaJuridicaComponent,
    FormPessoaFisicaComponent,
    RegisterComponent,
    RegisterAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgxMaskModule.forRoot(maskConfig),
    ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }

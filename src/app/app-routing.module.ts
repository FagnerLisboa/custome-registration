import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FormPessoaFisicaComponent } from './register/form-pessoa-fisica/form-pessoa-fisica.component';
import { RegisterAddressComponent } from './common/register-address/register-address.component';
import { RegisterFooterComponent } from './common/register-footer/register-footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FormPessoaJuridicaComponent } from './register/form-pessoa-juridica/form-pessoa-juridica.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'navbar', component: NavbarComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'formPessoaFisica', component: FormPessoaFisicaComponent },
  { path: 'formPessoaJuridica', component: FormPessoaJuridicaComponent },
  { path: 'registerAddress', component: RegisterAddressComponent },
  { path: 'registerFooter' , component: RegisterFooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

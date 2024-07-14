import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-pessoa-juridica',
  templateUrl: './form-pessoa-juridica.component.html',
  styleUrls: ['./form-pessoa-juridica.component.scss']
})
export class FormPessoaJuridicaComponent implements OnInit {
    pessoaJuridica = {
      nome: '',
      email: '',
      telefone: '',
      cnpj: '',
      razaoSocial: ''
    };

    submitted = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.pessoaJuridica)
  }

  goBack(): void {
    this.router.navigate(['/register']);
  }
}

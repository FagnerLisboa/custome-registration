import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-form-pessoa-fisica',
  templateUrl: './form-pessoa-fisica.component.html',
  styleUrls: ['./form-pessoa-fisica.component.scss']
})
export class FormPessoaFisicaComponent implements OnInit {
  pessoaFisica = {
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    dataNascimento: ''
  };

  submitted = false;

  constructor(private router: Router ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.pessoaFisica)
  }

  goBack(): void {
    this.router.navigate(['/register']);
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-pessoa-juridica',
  templateUrl: './form-pessoa-juridica.component.html',
  styleUrls: ['./form-pessoa-juridica.component.scss']
})
export class FormPessoaJuridicaComponent implements OnInit {
  cadastroForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.cadastroForm = this.fb.group({
      nome: [''],
      email: [''],
      telefone: [''],
      cnpj: [''],
      razaoSocial: [''],
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.cadastroForm.value)
  } 

  goBack() {
    this.router.navigate(['/register']);
  }
}



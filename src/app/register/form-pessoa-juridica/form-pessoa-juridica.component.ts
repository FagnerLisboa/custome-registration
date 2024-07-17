import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

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
    private router: Router,
    private registerService: RegisterService
  ) { 
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cnpj: ['', Validators.required],
      razaoSocial: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  cadastrar(): void {
    this.submitted = true;
    if (this.cadastroForm.valid) {
      const resultado = this.registerService.cadastrar(this.cadastroForm.value);
      if (resultado) {
        console.log('Cadastro realizado com sucesso');
      } else {
        console.log('Erro ao realizar o cadastro');
      }
    }
  }

  goBack() {
    this.router.navigate(['/register']);
  }
}
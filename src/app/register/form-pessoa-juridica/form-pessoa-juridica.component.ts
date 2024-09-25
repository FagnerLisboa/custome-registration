import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

function cnpjValidator(control: AbstractControl): ValidationErrors | null {
  const cnpj = control.value.replace(/\D/g, ''); 

  const isValid = /^(?!^(\d)\1{13}$)\d{14}$/.test(cnpj);

  return isValid ? null : { cnpjInvalido: true };
  
}
@Component({
  selector: 'app-form-pessoa-juridica',
  templateUrl: './form-pessoa-juridica.component.html',
  styleUrls: ['./form-pessoa-juridica.component.scss']
})
export class FormPessoaJuridicaComponent implements OnInit {
  cadastroForm: FormGroup;
  public registrationType: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {

    this.cadastroForm = this.fb.group({
      razaoSocial: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+( [a-zA-Z]+)*$')]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      cnpj: ['', [Validators.required, Validators.pattern(/^(?!.*(\d)\1{13})\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}$/),
      ]]
    });
  }

  ngOnInit(): void { }

  selectRegistration(type: string) {
    this.registrationType = type;
  }

  cadastrar(): void {
    this.registerService.cadastrar(this.cadastroForm.value);
  }

  onGoBack() {
    this.router.navigate(['/home']);
  }
}

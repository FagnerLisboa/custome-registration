import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-form-pessoa-fisica',
  templateUrl: './form-pessoa-fisica.component.html',
  styleUrls: ['./form-pessoa-fisica.component.scss']
})
export class FormPessoaFisicaComponent implements OnInit {
  cadastroForm: FormGroup;
  submitted = false;
  xpto = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService

  ) {

    this.cadastroForm = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+( [a-zA-Z]+)*$')]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required, Validators.pattern(/^\(\d{2}\) \d{4,5}-\d{4}$/)]], 
      cpf: ['', [Validators.required, Validators.pattern(/^(?!.*(\d)\1{10})\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/),
      ]]
    });
  }

  ngOnInit(): void { }

  cadastrar() {
    this.registerService.cadastrar(this.cadastroForm.value);
  }

  onGoBack() {
    this.router.navigate(['/home']);
  }
}
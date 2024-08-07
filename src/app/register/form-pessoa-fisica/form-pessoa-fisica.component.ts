import { Component, Input, OnInit } from '@angular/core';
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
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required]
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

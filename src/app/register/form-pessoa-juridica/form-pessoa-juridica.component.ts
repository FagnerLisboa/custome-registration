import { Component, Input, OnInit } from '@angular/core';
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService
  ) {
    this.cadastroForm = this.fb.group({
      razaoSocial: ['', Validators.required, Validators.maxLength(80)],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cnpj: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  cadastrar(): void {
    this.registerService.cadastrar(this.cadastroForm.value);
  }

  onGoBack() {
    this.router.navigate(['/home']);
  }
}

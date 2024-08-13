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
      nome: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['',[Validators.required, Validators.pattern('^[0-9]{10,11}$')]],
      cpf: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
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

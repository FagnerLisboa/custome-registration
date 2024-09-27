import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.scss']
})
export class RegisterAddressComponent implements OnInit {

  addressForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      cep: ['', [Validators.required, Validators.pattern('^[0-9]{5}-[0-9]{3}$')]]
    });
  }

  ngOnInit(): void {}

  isFieldInvalid(fieldName: string): boolean {
    const field = this.addressForm.get(fieldName);
    return !!field && field.invalid && (field.dirty || field.touched);
  }

  cadastrar() {
    if (this.addressForm.valid) {
      // lógica de cadastro
      console.log('Formulário de endereço enviado:', this.addressForm.value);
    } else {
      this.addressForm.markAllAsTouched(); // Marca todos os campos como tocados para exibir os erros
    }
  }

}


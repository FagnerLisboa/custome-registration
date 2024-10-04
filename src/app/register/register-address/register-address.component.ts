import { SharedService } from './../../shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.scss']
})
export class RegisterAddressComponent implements OnInit {

  addressForm: FormGroup;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    this.addressForm = this.fb.group({
      logradouro: ['', [Validators.required, Validators.minLength(3)]],
      numero: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      complemento: ['', [Validators.required, Validators.minLength(3)]],
      bairro: ['', [Validators.required, Validators.minLength(3)]],
      cidade: ['', [Validators.required, Validators.minLength(3)]],
      estado: ['', [Validators.required, Validators.minLength(3)]],
      cep: ['', [Validators.required, Validators.pattern(/^[0-9]{5}-[0-9]{3}$/)]],
    });
  }

  ngOnInit(): void {
    this.getAddressBy('04005001');
    this.getCepBy('SP', 'São Paulo', 'Rua Abilio Soares');
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.addressForm.get(fieldName);
    return !!field && field.invalid && (field.dirty || field.touched);
  }

  dataAddress() {
    return this.addressForm.value;
  }

  getAddressBy(cep: string) {
    this.sharedService.getAddressBy(cep).subscribe(
      (resp) => {
        console.log('manda cep', resp);
      }
    )
  }

  getCepBy(uf: string, city: string, street: string) {
    this.sharedService.getCepBy(uf, city, street).subscribe(
      (resp) => {
        console.log('manda endereço', resp);
      }
    )
  }

  esqueciCep() {
    throw new Error('Method not implemented.');
  }
}
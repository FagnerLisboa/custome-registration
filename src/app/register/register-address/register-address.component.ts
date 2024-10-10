import { SharedService } from './../../shared/shared.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-register-address',
  templateUrl: './register-address.component.html',
  styleUrls: ['./register-address.component.scss']
})
export class RegisterAddressComponent implements OnInit {

  @ViewChild('cepModal') cepModal!: ElementRef;

  addressForm: FormGroup;
  cepForm: FormGroup;

  constructor(private fb: FormBuilder, private sharedService: SharedService) {
    this.addressForm = this.fb.group({
      logradouro: ['', [Validators.required, Validators.minLength(3)]],
      numero: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      complemento: ['', [Validators.required, Validators.minLength(3)]],
      bairro: ['', [Validators.required, Validators.minLength(3)]],
      cidade: ['', [Validators.required, Validators.minLength(3)]],
      estado: ['', [Validators.required, Validators.minLength(3)]],
      cep: ['', [Validators.required, Validators.pattern(/^(?!.*(\d)\1{10})\d{5}-?\d{3}$/)]],
    });
    this.cepForm = this.fb.group({
      uf: ['', [Validators.required, Validators.minLength(2)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      street: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void { }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.addressForm.get(fieldName);
    return !!field && field.invalid && (field.dirty || field.touched);
  }

  getAddressBy(cep: string) {
    this.sharedService.getAddressBy(cep).subscribe(
      (resp) => {
        if (resp) {
          this.addressForm.patchValue({
            logradouro: resp.logradouro,
            bairro: resp.bairro,
            cidade: resp.localidade,
            estado: resp.uf,
          });
        }
      },
      (error) => {
        console.error('Erro ao buscar CEP:', error);
      }
    );
  }

  dataAddress() {
    return this.addressForm.value;
  }

  onBlurCep() {
    const cep = this.addressForm.get('cep')?.value;
    if (cep && cep.length === 8) {
      this.getAddressBy(cep);
    }
  }

  openModal(event: Event) {
    event.preventDefault();
    const modalElement = new bootstrap.Modal(this.cepModal.nativeElement);
    modalElement.show();
  }

  closeModal() {
    const modal = bootstrap.Modal.getInstance(this.cepModal.nativeElement);
    if (modal) {
      modal.hide();
    }
  }

  buscarCep(): void {
    const { uf, city, street } = this.cepForm.value;
    this.sharedService.getCepBy(uf, city, street).subscribe((data) => {
      if (data.length > 0) {
        this.addressForm.patchValue({
          cep: data[0].cep,
          logradouro: data[0].logradouro,
          bairro: data[0].bairro,
          cidade: data[0].localidade,
          estado: data[0].uf,
        });
      } else {
        console.error('CEP não encontrado');
      }
    });
  }
}
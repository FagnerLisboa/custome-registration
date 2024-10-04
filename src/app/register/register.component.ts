import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './register.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterAddressComponent } from './register-address/register-address.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registrationType: string = '';
  public showAddressForm: boolean;
  public cadastroForm: FormGroup;
  public addressForm: FormGroup;

  @ViewChild('RegisterAddress') registerAddress: RegisterAddressComponent;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    ) { }

  ngOnInit(): void {
     this.cadastroForm = this.fb.group({
    });
  }

  selectRegistration(type: string) {
    this.registrationType = type;
  }

  onGoBack() {
    this.router.navigate(['/home']); 
  }

  onFormSubmit() {
    if (this.cadastroForm.valid && this.addressForm.valid) {
      this.registerService.cadastrar(this.cadastroForm.value && this.addressForm.value);
      this.showAddressForm = true;
    } else {
      this.cadastroForm.markAllAsTouched();
    }
  }

}

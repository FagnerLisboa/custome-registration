import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-pessoa-fisica',
  templateUrl: './form-pessoa-fisica.component.html',
  styleUrls: ['./form-pessoa-fisica.component.scss']
})
export class FormPessoaFisicaComponent implements OnInit {
  cadastroForm: FormGroup;
  submitted = false;

  constructor(
     private fb: FormBuilder, 
     private router: Router
     ) {
    this.cadastroForm = this.fb.group({
      nome: [''],
      email: [''],
      telefone: [''],
      cpf: [''],
      dataNascimento: ['']
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
   this.submitted = true;
   console.log(this.cadastroForm.value);
  }

  goBack() {
    this.router.navigate(['/register']);
  }
}
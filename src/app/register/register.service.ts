import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  cadastrar(dasdosCadastrais: any): boolean {
    console.log("Dados Cadastrais Service", dasdosCadastrais);
    return true;

  }
  }
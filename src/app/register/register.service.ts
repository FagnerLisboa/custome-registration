import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private dataPf = 'assets/pf.json';
  private dataPj = 'assets/pj.json';

  constructor() { }

  cadastrar(dasdosCadastrais: any) {
    console.log("Dados Cadastrais Service", dasdosCadastrais);
  }
}

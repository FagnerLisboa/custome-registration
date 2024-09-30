import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  private cepData = 'assets/cep.json';
  private dataPf = 'assets/pf.json';
  private dataPj = 'assets/pj.json';

  constructor(private http: HttpClient ) { }

  cadastrar(dasdosCadastrais: any) {
    console.log("Dados Cadastrais Service", dasdosCadastrais);
  }

  getPessoaFisica(): Observable<any> {
    return this.http.get<any>(this.dataPf)
  }

  getPessoaJuridica(): Observable<any> {
    return this.http.get<any>(this.dataPj)
  }

  buscarCep(cep: string): Observable<any> {
    return this.http.get<any>(this.cepData)
  }

}

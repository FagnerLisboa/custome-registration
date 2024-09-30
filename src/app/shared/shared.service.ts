import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http: HttpClient) {}

  getAddressBy(cep: string): Observable<any> {
    return this.http.get<any>(`${environment.getAddressBy(cep)}`);
  }

  getCepBy(uf: string, city: string, street: string): Observable<any> {
    return this.http.get<any>(`${environment.getCepBy(uf, city, street)}`);
  }
}

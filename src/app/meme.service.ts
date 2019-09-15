import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  
  constructor( private http: HttpClient ) { }

  ListarMemes() {
    return this.http.get<Object[]>('https://check-back.herokuapp.com/listar');
  }

  SalvarMeme(formData){
    return this.http.post<any>("https://check-back.herokuapp.com/salvar", formData);
  }
}

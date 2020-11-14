import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meme } from './meme';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor( private http: HttpClient ) { }

  ListarMemes() {
    return this.http.get<any>(environment.baseUrl + '/listarPaginado?pageNo=0&pageSize=10&sortBy=id');
  }

  ObterMeme(meme : Meme){
      return this.http.get<Meme>(environment.baseUrl +  '/obter' + meme);
  }

  SalvarMeme(formData: Meme){
    return this.http.post<Meme>(environment.baseUrl + "/salvar", formData);
  }
}

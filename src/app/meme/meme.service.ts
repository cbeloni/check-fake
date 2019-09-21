import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meme } from './meme';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  
  constructor( private http: HttpClient ) { }

  ListarMemes() {
    return this.http.get<Meme[]>("https://check-back.herokuapp.com/listar");
  }

  ObterMeme(meme : Meme){
      return this.http.get<Meme>("https://check-back.herokuapp.com/obter" + meme);
  }

  SalvarMeme(formData: Meme){
    return this.http.post<Meme>("https://check-back.herokuapp.com/salvar", formData);
  }
}

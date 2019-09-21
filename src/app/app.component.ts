import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MemeService } from './meme/meme.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Check Fake';
  memes = [];
  meme = {};
  memeForm: FormGroup;
  mensagem: '';
  compartilhe: '';

  constructor(private memeService: MemeService, private formBuider: FormBuilder){
    memeService.ListarMemes().subscribe(memes => this.sucesso(memes) ,
                                        error => console.log('Error: ' + error));
  };

  ngOnInit(): void {
    this.memeForm = this.formBuider.group({imagem: "", nome: "", profile: ['']});
  };

  arrayBufferToBase64 = function (buffer) {
    return btoa(
      new Uint8Array(buffer)
        .reduce((data, byte) => data + String.fromCharCode(byte), '')
    );
  };
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.memeForm.get('profile').setValue(file);
    }
  };
  
  sucesso = function (meme){
    this.memes = meme;
  };

  salvar = function(meme){
    const formData = new FormData();
    formData.append('file', this.memeForm.get('profile').value);
    formData.append('nome', meme.nome);
    this.memeService.SalvarMeme(formData ).subscribe(
      (res) => {
        this.memes.push(res);
        this.mensagem = "Imagem provavelmente fake!"
        this.compartilhe =  "Compartilhe o resultado: http://check-fake.com/id=" + res.id;
      },
      (err) => {
          console.log(err);
          this.mensagem = "Erro ao enviar imagem";
      });
  };
}  

import { Injectable } from '@angular/core';
import { Jogo } from '../model/jogo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

    apiURL = "http://localhost:8080/api/v1/jogos";
  
    constructor(private http:HttpClient) { }

    getJogos(){
     return this.http.get<Jogo[]>(this.apiURL);
  }
}

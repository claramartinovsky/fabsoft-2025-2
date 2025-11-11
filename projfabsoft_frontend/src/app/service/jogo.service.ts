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

  saveJogo(jogo:Jogo){
    if(jogo.id){
      return this.http.put(this.apiURL + '/' + jogo.id, jogo);
    }
    return this.http.post(this.apiURL,jogo);
  }

  getJogoById(id: any) {
    return this.http.get<Jogo>(this.apiURL + '/' + id);
  }

  
}

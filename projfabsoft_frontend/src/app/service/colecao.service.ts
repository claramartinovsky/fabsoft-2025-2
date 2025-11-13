import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Colecao } from '../model/colecao';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {
  apiURL = "http://localhost:8080/api/v1/colecoes";
  
  constructor(private http:HttpClient) { }

  getColecoes(){
    return this.http.get<Colecao[]>(this.apiURL);
  }

  saveColecao(colecao:Colecao){
    if(colecao.id){
      return this.http.put(this.apiURL + '/' + colecao.id, colecao);
    }
    return this.http.post(this.apiURL,colecao);
  }

  getColecaoById(id: any) {
    return this.http.get<Colecao>(this.apiURL + '/' + id);
  }

excluirColecao(id: any){
  return this.http.delete<Colecao>(this.apiURL + '/' + id);
}
}

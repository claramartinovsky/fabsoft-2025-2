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
 
}

import { Injectable } from '@angular/core';
import { Avaliacao } from '../model/avaliacao';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {
  apiURL = "http://localhost:8080/api/v1/avaliacoes";
  
  constructor(private http:HttpClient) { }

  getAvaliacoes(){
    return this.http.get<Avaliacao[]>(this.apiURL);
  }
}

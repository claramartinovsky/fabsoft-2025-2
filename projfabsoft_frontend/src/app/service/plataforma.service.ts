import { Injectable } from '@angular/core';
import { Plataforma } from '../model/plataforma';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {
  apiURL = "http://localhost:8080/api/v1/plataformas";
  
  constructor(private http:HttpClient) { }

  getPlataformas(){
    return this.http.get<Plataforma[]>(this.apiURL);
  }

 savePlataforma(plataforma:Plataforma){
  return this.http.post(this.apiURL,plataforma);
  } 
}

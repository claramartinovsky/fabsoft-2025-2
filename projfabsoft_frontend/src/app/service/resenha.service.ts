import { Injectable } from '@angular/core';
import { Resenha } from '../model/resenha';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResenhaService {
  apiURL = "http://localhost:8080/api/v1/resenhas";

  constructor(private http:HttpClient) { }

  getResenhas(){
    return this.http.get<Resenha[]>(this.apiURL);
  }

  saveResenha(resenha:Resenha){
    if(resenha.id){
       return this.http.put(this.apiURL + '/' + resenha.id, resenha);
    }
    return this.http.post(this.apiURL,resenha);
  }

    getResenhaById(id: any) {
    return this.http.get<Resenha>(this.apiURL + '/' + id);
  }


}

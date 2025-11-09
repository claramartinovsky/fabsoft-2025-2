import { Injectable } from '@angular/core';
import { Categoria } from '../model/categoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiURL = "http://localhost:8080/api/v1/categorias";
  
  constructor(private http:HttpClient) { }

  getCategorias(){
    return this.http.get<Categoria[]>(this.apiURL);
  }

  saveCategoria(categoria:Categoria){
    return this.http.post(this.apiURL,categoria);
  }
}

import { Component } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { Router } from '@angular/router';
import { Categoria } from '../model/categoria';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-categoria',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-categoria.html',
  styleUrl: './form-categoria.css',
  providers: [CategoriaService, Router]
})
export class FormCategoria {
    categoria: Categoria = new Categoria();

    constructor(
      private categoriaService:CategoriaService,
      private router:Router
    ){}

    salvar(){
      this.categoriaService.saveCategoria(this.categoria)
        .subscribe(resultado => {
            this.router.navigate(['categorias']);
        });
    }
}

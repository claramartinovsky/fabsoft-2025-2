import { Component } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
  providers: [CategoriaService, Router]
})
export class CategoriaComponent {
  listaCategorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private router:Router
  ) {}

  ngOnInit() {
    console.log("Carregando categorias...");
    this.categoriaService.getCategorias().subscribe(categorias => {
      this.listaCategorias = categorias;
    });
  }

  novo(){
  this.router.navigate(['categorias/novo']);
  }
  
  alterar(categoria:Categoria){
    this.router.navigate(['categorias/alterar', categoria.id]);
  }
}

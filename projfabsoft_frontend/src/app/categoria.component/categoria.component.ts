import { Component } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
  providers: [CategoriaService]
})
export class CategoriaComponent {
  listaCategorias: Categoria[] = [];

  constructor(private categoriaService: CategoriaService) {}

  ngOnInit() {
    console.log("Carregando categorias...");
    this.categoriaService.getCategorias().subscribe(categorias => {
      this.listaCategorias = categorias;
    });
  }
}

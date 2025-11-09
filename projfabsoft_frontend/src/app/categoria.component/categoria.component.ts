import { Component, ElementRef, ViewChild } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-categoria.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
  providers: [CategoriaService, Router]
})
export class CategoriaComponent {
  listaCategorias: Categoria[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private categoriaSelecionada!: Categoria;

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

  abrirConfirmacao(categoria:Categoria) {
    this.categoriaSelecionada = categoria;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
}

fecharConfirmacao() {
  this.modal.hide();
}

confirmarExclusao() {
    this.categoriaService.excluirCategoria(this.categoriaSelecionada.id.toString()).subscribe(
        () => {
            this.fecharConfirmacao();
            this.categoriaService.getCategorias().subscribe(
              categorias => {
                this.listaCategorias = categorias;
              }
            );
        },
        error => {
            console.error('Erro ao excluir categoria:', error);
        }
    );
}
}

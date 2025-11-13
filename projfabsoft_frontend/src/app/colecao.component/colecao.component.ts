import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Colecao } from '../model/colecao';
import { ColecaoService } from '../service/colecao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-colecao.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './colecao.component.html',
  styleUrl: './colecao.component.css',
   providers: [ColecaoService, Router]
})
export class ColecaoComponent {

  listaColecoes: Colecao[] = [];

  constructor(private colecaoService: ColecaoService,
    private router:Router
  ) {}

  ngOnInit() {
    console.log("Carregando colecoes...");
    this.colecaoService.getColecoes().subscribe(colecoes => {
      this.listaColecoes = colecoes;
    });
  }

novo(){
  this.router.navigate(['colecoes/novo']);
}

  alterar(colecao:Colecao){
      this.router.navigate(['colecoes/alterar', colecao.id]);
  }
}

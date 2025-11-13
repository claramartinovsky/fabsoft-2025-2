import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Colecao } from '../model/colecao';
import { ColecaoService } from '../service/colecao.service';

@Component({
  selector: 'app-colecao.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './colecao.component.html',
  styleUrl: './colecao.component.css',
   providers: [ColecaoService]
})
export class ColecaoComponent {

  listaColecoes: Colecao[] = [];

  constructor(private colecaoService: ColecaoService) {}

  ngOnInit() {
    console.log("Carregando colecoes...");
    this.colecaoService.getColecoes().subscribe(colecoes => {
      this.listaColecoes = colecoes;
    });
  }
}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Colecao } from '../model/colecao';
import { ColecaoService } from '../service/colecao.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-colecao.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './colecao.component.html',
  styleUrl: './colecao.component.css',
   providers: [ColecaoService, Router]
})
export class ColecaoComponent {

  listaColecoes: Colecao[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
private modal!: bootstrap.Modal;

private colecaoSelecionada!: Colecao;
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

abrirConfirmacao(colecao:Colecao) {
    this.colecaoSelecionada = colecao;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
}

fecharConfirmacao() {
  this.modal.hide();
}
confirmarExclusao() {
    this.colecaoService.excluirColecao(this.colecaoSelecionada.id).subscribe(
        () => {
            this.fecharConfirmacao();
            this.colecaoService.getColecoes().subscribe(
              colecoes => {
                this.listaColecoes = colecoes;
              }
            );
        },
        error => {
            console.error('Erro ao excluir cliente:', error);
        }
    );
}
}

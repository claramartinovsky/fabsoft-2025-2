import { Component, ElementRef, ViewChild } from '@angular/core';
import { Avaliacao } from '../model/avaliacao';
import { AvaliacaoService } from '../service/avaliacao.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';


@Component({
  selector: 'app-avaliacao.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './avaliacao.component.html',
  styleUrl: './avaliacao.component.css',
  providers: [AvaliacaoService]
})
export class AvaliacaoComponent {
  listaAvaliacoes: Avaliacao[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private avaliacaoSelecionada!: Avaliacao;


  constructor(private avaliacaoService: AvaliacaoService,
    private router:Router
  ) {}

  ngOnInit() {
    console.log("Carregando avaliacoes...");
    this.avaliacaoService.getAvaliacoes().subscribe(avaliacoes => {
      this.listaAvaliacoes = avaliacoes;
    });
  }
  
  novo(){
    this.router.navigate(['avaliacoes/novo'])
  }

    alterar(avaliacao:Avaliacao){
      this.router.navigate(['avaliacoes/alterar', avaliacao.id]);
  }

  abrirConfirmacao(avaliacao:Avaliacao) {
    this.avaliacaoSelecionada = avaliacao;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
  }

  fecharConfirmacao() {
    this.modal.hide();
  }

  confirmarExclusao() {
    this.avaliacaoService.excluirAvaliacao(this.avaliacaoSelecionada.id).subscribe(
        () => {
            this.fecharConfirmacao();
            this.avaliacaoService.getAvaliacoes().subscribe(
              avaliacoes => {
                this.listaAvaliacoes = avaliacoes;
              }
            );
        },
        error => {
            console.error('Erro ao excluir cliente:', error);
        }
    );
}
}

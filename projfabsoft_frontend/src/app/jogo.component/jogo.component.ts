import { Component, ElementRef, ViewChild } from '@angular/core';
import { Jogo } from '../model/jogo';
import { JogoService } from '../service/jogo.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-jogo.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './jogo.component.html',
  styleUrl: './jogo.component.css',
  providers: [JogoService, Router]
})
export class JogoComponent {
  listaJogos: Jogo[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private jogoSelecionado!: Jogo;

  constructor(private jogoService: JogoService,
    private router:Router
  ) {}

  ngOnInit(){
    console.log("Carregando jogos...");
    this.jogoService.getJogos().subscribe(jogos => {
      this.listaJogos = jogos;
    });
  }

  novo(){
  this.router.navigate(['jogos/novo']);
}

  alterar(jogo:Jogo){
      this.router.navigate(['jogos/alterar', jogo.id]);
  }

abrirConfirmacao(jogo:Jogo) {
    this.jogoSelecionado = jogo;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
}

fecharConfirmacao() {
  this.modal.hide();
}

confirmarExclusao() {
    this.jogoService.excluirJogo(this.jogoSelecionado.id).subscribe(
        () => {
            this.fecharConfirmacao();
            this.jogoService.getJogos().subscribe(
              jogos => {
                this.listaJogos = jogos;
              }
            );
        },
        error => {
            console.error('Erro ao excluir jogo:', error);
        }
    );
}

voltarMenu() {
  this.router.navigate(['']).then(() => {
    window.location.reload();
  });
}
};

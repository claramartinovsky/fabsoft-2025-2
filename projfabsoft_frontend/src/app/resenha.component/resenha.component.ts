import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { Resenha } from '../model/resenha';
import { ResenhaService } from '../service/resenha.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-resenha.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './resenha.component.html',
  styleUrl: './resenha.component.css',
  providers: [ ResenhaService, Router ]
})
export class ResenhaComponent {

  listaResenhas: Resenha[] = [];

@ViewChild('myModal') modalElement!: ElementRef;
private modal!: bootstrap.Modal;

private resenhaSelecionada!: Resenha;

  constructor(private resenhaService: ResenhaService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("Carregando resenhas...");
    this.resenhaService.getResenhas().subscribe(resenhas => {
      this.listaResenhas = resenhas;
    });
  }

novo(){
  this.router.navigate(['resenhas/novo']);
}

  alterar(resenha:Resenha){
      this.router.navigate(['resenhas/alterar', resenha.id]);
  }

abrirConfirmacao(resenha:Resenha) {
    this.resenhaSelecionada = resenha;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
}

fecharConfirmacao() {
  this.modal.hide();
}

confirmarExclusao() {
    this.resenhaService.excluirResenha(this.resenhaSelecionada.id).subscribe(
        () => {
            this.fecharConfirmacao();
            this.resenhaService.getResenhas().subscribe(
              resenhas => {
                this.listaResenhas = resenhas;
              }
            );
        },
        error => {
            console.error('Erro ao excluir resenha:', error);
        }
    );
}
voltarMenu() {
  this.router.navigate(['']).then(() => {
    window.location.reload();
  });
}
}

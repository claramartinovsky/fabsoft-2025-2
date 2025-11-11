import { Component } from '@angular/core';
import { Jogo } from '../model/jogo';
import { JogoService } from '../service/jogo.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jogo.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './jogo.component.html',
  styleUrl: './jogo.component.css',
  providers: [JogoService, Router]
})
export class JogoComponent {
  listaJogos: Jogo[] = [];

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
};

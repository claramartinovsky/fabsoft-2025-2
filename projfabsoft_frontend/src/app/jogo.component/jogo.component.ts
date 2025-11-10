import { Component } from '@angular/core';
import { Jogo } from '../model/jogo';
import { JogoService } from '../service/jogo.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-jogo.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './jogo.component.html',
  styleUrl: './jogo.component.css',
  providers: [JogoService]
})
export class JogoComponent {
  listaJogos: Jogo[] = [];

  constructor(private jogoService: JogoService) {}

  ngOnInit(){
    console.log("Carregando jogos...");
    this.jogoService.getJogos().subscribe(jogos => {
      this.listaJogos = jogos;
    });
  }
}

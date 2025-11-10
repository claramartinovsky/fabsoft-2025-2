import { Component } from '@angular/core';
import { Avaliacao } from '../model/avaliacao';
import { AvaliacaoService } from '../service/avaliacao.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avaliacao.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './avaliacao.component.html',
  styleUrl: './avaliacao.component.css',
  providers: [AvaliacaoService]
})
export class AvaliacaoComponent {
  listaAvaliacoes: Avaliacao[] = [];

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
}

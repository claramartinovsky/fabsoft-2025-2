import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvaliacaoService } from '../service/avaliacao.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Avaliacao } from '../model/avaliacao';

@Component({
  selector: 'app-form-avaliacao',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-avaliacao.html',
  styleUrl: './form-avaliacao.css',
  providers: [AvaliacaoService, Router]
})
export class FormAvaliacao {
  avaliacao: Avaliacao = new Avaliacao();

  constructor(
    private avaliacaoService:AvaliacaoService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ){
    const id = this.activeRouter.snapshot.paramMap.get('id');

    if(id) {
      this.avaliacaoService.getAvaliacaoById(id).subscribe(avaliacao => {this.avaliacao = avaliacao} )
    }
  }

  salvar(){
    this.avaliacaoService.saveAvaliacoes(this.avaliacao)
    .subscribe(resultado => {
      this.router.navigate(['avaliacoes'])
    });
  }
}

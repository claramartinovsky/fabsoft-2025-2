import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColecaoService } from '../service/colecao.service';
import { Router } from '@angular/router';
import { Colecao } from '../model/colecao';

@Component({
  selector: 'app-form-colecao',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-colecao.html',
  styleUrl: './form-colecao.css',
  providers: [ColecaoService, Router]
})
export class FormColecao {
    colecao: Colecao = new Colecao();

    constructor(
      private colecaoService:ColecaoService,
      private router:Router
    ){}

    salvar(){
      this.colecaoService.saveColecao(this.colecao)
        .subscribe(resultado => {
            this.router.navigate(['colecoes']);
        });
    }
}

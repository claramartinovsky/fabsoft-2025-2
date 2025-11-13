import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColecaoService } from '../service/colecao.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
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
      private router:Router,
      private activeRouter: ActivatedRoute
    ){

        const id = this.activeRouter.snapshot.paramMap.get('id');
        
        if (id) {
          this.colecaoService.getColecaoById(id).subscribe(colecao => {
            this.colecao = colecao;
        });
        
      }
    }

    salvar(){
      this.colecaoService.saveColecao(this.colecao)
        .subscribe(resultado => {
            this.router.navigate(['colecoes']);
        });
    }
}

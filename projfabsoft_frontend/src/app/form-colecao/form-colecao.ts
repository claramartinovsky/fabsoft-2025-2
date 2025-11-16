import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ColecaoService } from '../service/colecao.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Colecao } from '../model/colecao';

import { Jogo } from '../model/jogo';
import { JogoService } from '../service/jogo.service';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-form-colecao',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-colecao.html',
  styleUrl: './form-colecao.css',
  providers: [ColecaoService, Router, UsuarioService, JogoService]
})
export class FormColecao {
    colecao: Colecao = new Colecao();
    
    listaJogos:Jogo[] = [];
    listaUsuarios:Usuario[] = [];

    constructor(
      private usuarioService:UsuarioService,
      private jogoService:JogoService,
      private colecaoService:ColecaoService,
      private router:Router,
      private activeRouter: ActivatedRoute
    ){

        const id = this.activeRouter.snapshot.paramMap.get('id');
        
        this.jogoService.getJogos().subscribe(listaJogos =>{
          this.listaJogos = listaJogos
        })

        this.usuarioService.getUsuarios().subscribe(listaUsuarios =>{
          this.listaUsuarios = listaUsuarios
        })

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

    comparaUsuarios(obj1: Usuario, obj2: Usuario): boolean{
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2
  }

    comparaJogos(obj1: Jogo, obj2: Jogo): boolean{
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2
  }

}

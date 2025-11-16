import { Component } from '@angular/core';
import { Resenha } from '../model/resenha';
import { ResenhaService } from '../service/resenha.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';

import { Jogo } from '../model/jogo';
import { JogoService } from '../service/jogo.service';

@Component({
  selector: 'app-form-resenha',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-resenha.html',
  styleUrl: './form-resenha.css',
  providers: [ResenhaService, Router, JogoService, UsuarioService]
})
export class FormResenha {
    resenha: Resenha = new Resenha();

    listaJogos:Jogo[] = [];
    listaUsuarios:Usuario[] = [];
    constructor(
      private resenhaService:ResenhaService,
      private jogoService:JogoService,
      private usuarioService:UsuarioService,
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
          this.resenhaService.getResenhaById(id).subscribe(resenha => {
            this.resenha = resenha;
        });
      }
    }

    salvar(){
      this.resenhaService.saveResenha(this.resenha)
        .subscribe(resultado => {
            this.router.navigate(['resenhas']);
        });
    }

    comparaUsuarios(obj1: Usuario, obj2: Usuario): boolean{
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2
  }

    comparaJogos(obj1: Jogo, obj2: Jogo): boolean{
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2
  }

}

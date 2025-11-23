import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AvaliacaoService } from '../service/avaliacao.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Avaliacao } from '../model/avaliacao';

import { Jogo } from '../model/jogo';
import { JogoService } from '../service/jogo.service';
import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-form-avaliacao',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-avaliacao.html',
  styleUrl: './form-avaliacao.css',
  providers: [AvaliacaoService, Router, UsuarioService, JogoService]
})
export class FormAvaliacao {
  avaliacao: Avaliacao = new Avaliacao();

    listaJogos:Jogo[] = [];
    listaUsuarios:Usuario[] = [];

  constructor(
    private usuarioService:UsuarioService,
    private jogoService:JogoService,
    private avaliacaoService:AvaliacaoService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ){
    const id = this.activeRouter.snapshot.paramMap.get('id');

        this.jogoService.getJogos().subscribe(listaJogos =>{
          this.listaJogos = listaJogos
        })

        this.usuarioService.getUsuarios().subscribe(listaUsuarios =>{
          this.listaUsuarios = listaUsuarios
        })
      
    if(id) {
      this.avaliacaoService.getAvaliacaoById(id).subscribe(avaliacao => {this.avaliacao = avaliacao} )
    }
  }

salvar() {

  const payload: Avaliacao = {
    id: this.avaliacao.id,
    nota: this.avaliacao.nota,
    usuario: { id: this.avaliacao.usuario.id, nome: this.avaliacao.usuario.nome },
    jogo: { id: this.avaliacao.jogo.id, nome: this.avaliacao.jogo.nome }
  };

  this.avaliacaoService.saveAvaliacoes(payload)
    .subscribe(() => this.router.navigate(['avaliacoes']));
}



    comparaUsuarios(obj1: Usuario, obj2: Usuario): boolean{
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2
  }

    comparaJogos(obj1: Jogo, obj2: Jogo): boolean{
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2
  }

}

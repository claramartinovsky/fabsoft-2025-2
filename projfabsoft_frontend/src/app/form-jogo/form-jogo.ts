import { Component } from '@angular/core';
import { JogoService } from '../service/jogo.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Jogo } from '../model/jogo';

import { Plataforma } from '../model/plataforma';
import { PlataformaService } from '../service/plataforma.service';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-form-jogo',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-jogo.html',
  styleUrl: './form-jogo.css',
  providers: [JogoService, Router, PlataformaService, CategoriaService]
})
export class FormJogo {
    jogo: Jogo = new Jogo();

    listaPlataformas:Plataforma[] = [];
    listaCategorias:Categoria[] = [];


    constructor(
      private jogoService:JogoService,
      private router:Router,
      private activeRouter: ActivatedRoute,
      private plataformaService:PlataformaService,
      private categoriaService:CategoriaService
    ){
      const id = this.activeRouter.snapshot.paramMap.get('id');
        
      this.plataformaService.getPlataformas().subscribe(listaPlataformas =>{
        this.listaPlataformas = listaPlataformas
      });

      this.categoriaService.getCategorias().subscribe(listaCategorias =>{
        this.listaCategorias = listaCategorias
      })


        if (id) {
          this.jogoService.getJogoById(id).subscribe(jogo => {
            this.jogo = jogo;
        });
    }
  }
    salvar(){
      this.jogoService.saveJogo(this.jogo)
        .subscribe(resultado => {
            this.router.navigate(['jogos']);
        });
    }

      comparaPlataformas(obj1: Plataforma, obj2: Plataforma): boolean{
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2
  }

    comparaCategorias(obj1: Categoria, obj2: Categoria): boolean{
      return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2
  }

}

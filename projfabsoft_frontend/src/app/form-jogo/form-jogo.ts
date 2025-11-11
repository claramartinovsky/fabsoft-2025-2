import { Component } from '@angular/core';
import { JogoService } from '../service/jogo.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Jogo } from '../model/jogo';

@Component({
  selector: 'app-form-jogo',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-jogo.html',
  styleUrl: './form-jogo.css',
  providers: [JogoService, Router]
})
export class FormJogo {
    jogo: Jogo = new Jogo();

    constructor(
      private jogoService:JogoService,
      private router:Router,
      private activeRouter: ActivatedRoute
    ){
      const id = this.activeRouter.snapshot.paramMap.get('id');
        
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
}

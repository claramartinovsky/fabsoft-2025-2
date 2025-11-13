import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlataformaService } from '../service/plataforma.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Plataforma } from '../model/plataforma';

@Component({
  selector: 'app-form-plataforma',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-plataforma.html',
  styleUrl: './form-plataforma.css',
  providers: [PlataformaService, Router]
})
export class FormPlataforma {
  plataforma: Plataforma = new Plataforma();

  constructor(
    private plataformaService: PlataformaService,
    private router:Router,
    private activeRouter: ActivatedRoute
  ){
    const id = this.activeRouter.snapshot.paramMap.get('id');

    if(id){
      this.plataformaService.getPlataformaById(id).subscribe(plataforma => {
        this.plataforma = plataforma;
      });
    }
  }

    salvar(){
      this.plataformaService.savePlataforma(this.plataforma)
        .subscribe(resultado => {
            this.router.navigate(['plataformas']);
        });
    }
}

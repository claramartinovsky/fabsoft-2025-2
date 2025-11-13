import { Component } from '@angular/core';
import { Resenha } from '../model/resenha';
import { ResenhaService } from '../service/resenha.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-resenha',
  imports: [HttpClientModule, CommonModule, FormsModule],
  templateUrl: './form-resenha.html',
  styleUrl: './form-resenha.css',
  providers: [ResenhaService, Router]
})
export class FormResenha {
    resenha: Resenha = new Resenha();

    constructor(
      private resenhaService:ResenhaService,
      private router:Router
    ){}

    salvar(){
      this.resenhaService.saveResenha(this.resenha)
        .subscribe(resultado => {
            this.router.navigate(['resenhas']);
        });
    }
}

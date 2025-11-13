import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { Resenha } from '../model/resenha';
import { ResenhaService } from '../service/resenha.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resenha.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './resenha.component.html',
  styleUrl: './resenha.component.css',
  providers: [ ResenhaService, Router ]
})
export class ResenhaComponent {

  listaResenhas: Resenha[] = [];

  constructor(private resenhaService: ResenhaService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log("Carregando resenhas...");
    this.resenhaService.getResenhas().subscribe(resenhas => {
      this.listaResenhas = resenhas;
    });
  }

novo(){
  this.router.navigate(['resenhas/novo']);
}    
}

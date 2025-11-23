import { Component, ElementRef, ViewChild } from '@angular/core';
import { Plataforma } from '../model/plataforma';
import { PlataformaService } from '../service/plataforma.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-plataforma.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './plataforma.component.html',
  styleUrl: './plataforma.component.css',
  providers: [PlataformaService, Router]
})
export class PlataformaComponent {
  listaPlataformas: Plataforma[] = [];

  @ViewChild('myModal') modalElement!: ElementRef;
  private modal!: bootstrap.Modal;

  private plataformaSelecionada!: Plataforma;


  constructor(private plataformaService: PlataformaService,
    private router:Router
  ) {}

  ngOnInit() {
    console.log("Carregando plataformas...");
    this.plataformaService.getPlataformas().subscribe(plataformas => {
      this.listaPlataformas = plataformas;
    });
  }

 novo(){
  this.router.navigate(['plataformas/novo']);
}

  alterar(plataforma:Plataforma){
      this.router.navigate(['plataformas/alterar', plataforma.id]);
  }

abrirConfirmacao(plataforma:Plataforma) {
    this.plataformaSelecionada = plataforma;
    this.modal = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modal.show();
}

fecharConfirmacao() {
  this.modal.hide();
}

confirmarExclusao() {
    this.plataformaService.excluirPlataforma(this.plataformaSelecionada.id).subscribe(
        () => {
            this.fecharConfirmacao();
            this.plataformaService.getPlataformas().subscribe(
              plataformas => {
                this.listaPlataformas = plataformas;
              }
            );
        },
        error => {
            console.error('Erro ao excluir plataforma:', error);
        }
    );
}
voltarMenu() {
  this.router.navigate(['']).then(() => {
    window.location.reload();
  });
}
}

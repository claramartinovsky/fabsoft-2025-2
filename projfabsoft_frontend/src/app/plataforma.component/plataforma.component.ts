import { Component } from '@angular/core';
import { Plataforma } from '../model/plataforma';
import { PlataformaService } from '../service/plataforma.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plataforma.component',
  imports: [HttpClientModule,CommonModule],
  templateUrl: './plataforma.component.html',
  styleUrl: './plataforma.component.css',
  providers: [PlataformaService]
})
export class PlataformaComponent {
  listaPlataformas: Plataforma[] = [];

  constructor(private plataformaService: PlataformaService) {}

  ngOnInit() {
    console.log("Carregando plataformas...");
    this.plataformaService.getPlataformas().subscribe(plataformas => {
      this.listaPlataformas = plataformas;
    });
  }
}

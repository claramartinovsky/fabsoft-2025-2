import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormUsuario } from './form-usuario/form-usuario';
import { CategoriaComponent } from './categoria.component/categoria.component';
import { FormCategoria } from './form-categoria/form-categoria';
import { AvaliacaoComponent } from './avaliacao.component/avaliacao.component';
import { FormAvaliacao } from './form-avaliacao/form-avaliacao';
import { JogoComponent } from './jogo.component/jogo.component';
import { FormJogo } from './form-jogo/form-jogo';
import { PlataformaComponent } from './plataforma.component/plataforma.component';
import { FormPlataforma } from './form-plataforma/form-plataforma';
import { ResenhaComponent } from './resenha.component/resenha.component';
import { FormResenha } from './form-resenha/form-resenha';

export const routes: Routes = [
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'usuarios/novo', component: FormUsuario },
    { path: 'usuarios/alterar/:id', component: FormUsuario },

    { path: 'categorias', component: CategoriaComponent },
    { path: 'categorias/novo', component: FormCategoria },
    { path: 'categorias/alterar/:id', component: FormCategoria },

    { path: 'avaliacoes', component: AvaliacaoComponent },
    { path: 'avaliacoes/novo', component: FormAvaliacao },
    { path: 'avaliacoes/alterar/:id', component: FormAvaliacao },

    { path: 'jogos', component: JogoComponent },
    { path: 'jogos/novo', component: FormJogo },
    { path: 'jogos/alterar/:id', component: FormJogo },

    { path: 'plataformas', component: PlataformaComponent },
    { path: 'plataformas/novo', component: FormPlataforma },
    { path: 'plataformas/alterar/:id', component: FormPlataforma },

    { path: 'resenhas', component: ResenhaComponent },
    { path: 'resenhas/novo', component: FormResenha },

];

import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormUsuario } from './form-usuario/form-usuario';
import { CategoriaComponent } from './categoria.component/categoria.component';
import { FormCategoria } from './form-categoria/form-categoria';
import { AvaliacaoComponent } from './avaliacao.component/avaliacao.component';
import { FormAvaliacao } from './form-avaliacao/form-avaliacao';
import { JogoComponent } from './jogo.component/jogo.component';

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



];

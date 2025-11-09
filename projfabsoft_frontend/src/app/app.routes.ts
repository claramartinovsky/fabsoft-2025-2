import { Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { FormUsuario } from './form-usuario/form-usuario';
import { CategoriaComponent } from './categoria.component/categoria.component';
import { FormCategoria } from './form-categoria/form-categoria';

export const routes: Routes = [
    { path: 'usuarios', component: UsuarioComponent },
    { path: 'usuarios/novo', component: FormUsuario },
    { path: 'usuarios/alterar/:id', component: FormUsuario },

    { path: 'categorias', component: CategoriaComponent },
    { path: 'categorias/novo', component: FormCategoria }
];

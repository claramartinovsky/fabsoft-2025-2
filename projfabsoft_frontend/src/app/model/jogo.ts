import { Categoria } from "./categoria";
import { Plataforma } from "./plataforma";

export class Jogo {
    id: number;
    nome: string;
    descricao: string;
    dataLancamento: Date;
    plataformas: Plataforma[] = [];
    categorias: Categoria[] =[];
}

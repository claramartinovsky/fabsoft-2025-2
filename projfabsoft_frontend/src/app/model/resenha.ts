import { Jogo } from "./jogo";
import { Usuario } from "./usuario";

export class Resenha {
    id: number;
    conteudo: string;
    jogo: Jogo;
    usuario: Usuario
}

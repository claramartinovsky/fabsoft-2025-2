import { Jogo } from "./jogo";
import { Usuario } from "./usuario";

export class Colecao {
    id: number;
    usuario:Usuario;
    jogos: Jogo[] =[];
}

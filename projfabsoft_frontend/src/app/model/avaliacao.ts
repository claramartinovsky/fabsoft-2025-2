import { Jogo } from "./jogo";
import { Usuario } from "./usuario";

export class Avaliacao {
    id?: number; 
    nota: number;
    usuario: { id: number, nome: string }; 
    jogo: { id: number, nome: string }; 
}

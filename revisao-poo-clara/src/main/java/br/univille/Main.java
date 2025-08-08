package br.univille;

import br.univille.entity.Cidade;
import br.univille.entity.Cliente;

public class Main {
    public static void main(String[] args) {
        //System.out.println("Hello world!");
        var Cliente = new Cliente();
        Cliente.setNome("zezinho");
        Cliente.setIdade(20);
        Cliente.setPeso(70);

        Cidade cidade = new Cidade("joinville");

        Cliente.setCidade(cidade);
    } 
}
package br.univille.fabsoft_backend.entity;


@Entity
public class Resenha {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long usuarioId;
    private long jogoId;
    private String conteudo;
}


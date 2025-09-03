package br.univille.fabsoft_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Resenha {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long usuarioId;
    private long jogoId;
    private String conteudo;
    
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public long getUsuarioId() {
        return usuarioId;
    }
    public void setUsuarioId(long usuarioId) {
        this.usuarioId = usuarioId;
    }
    public long getJogoId() {
        return jogoId;
    }
    public void setJogoId(long jogoId) {
        this.jogoId = jogoId;
    }
    public String getConteudo() {
        return conteudo;
    }
    public void setConteudo(String conteudo) {
        this.conteudo = conteudo;
    }
}


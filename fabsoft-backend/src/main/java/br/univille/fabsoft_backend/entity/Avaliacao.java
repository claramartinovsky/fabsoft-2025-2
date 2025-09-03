package br.univille.fabsoft_backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Avaliacao {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long usuarioId;
    private long jogoId;
    private int nota;
    private String comentario;
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
    public int getNota() {
        return nota;
    }
    public void setNota(int nota) {
        this.nota = nota;
    }
    public String getComentario() {
        return comentario;
    }
    public void setComentario(String comentario) {
        this.comentario = comentario;
    }
}

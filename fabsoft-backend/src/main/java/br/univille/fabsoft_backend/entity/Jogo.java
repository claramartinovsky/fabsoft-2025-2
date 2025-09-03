package br.univille.fabsoft_backend.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Jogo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
    private String descricao;
    private Date dataLancamento;
    private long categoriaId;
    private long plataformaId;
    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }
    public String getDescricao() {
        return descricao;
    }
    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }
    public Date getDataLancamento() {
        return dataLancamento;
    }
    public void setDataLancamento(Date dataLancamento) {
        this.dataLancamento = dataLancamento;
    }
    public long getCategoriaId() {
        return categoriaId;
    }
    public void setCategoriaId(long categoriaId) {
        this.categoriaId = categoriaId;
    }
    public long getPlataformaId() {
        return plataformaId;
    }
    public void setPlataformaId(long plataformaId) {
        this.plataformaId = plataformaId;
    }
}

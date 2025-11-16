package br.univille.fabsoft_backend.entity;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
public class Jogo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String nome;
    private String descricao;

    @Temporal(TemporalType.DATE)
    private Date dataLancamento;


    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.REFRESH})
    @JoinTable(
        name = "jogo_categoria",
        joinColumns = @JoinColumn(name = "jogo_id"),
        inverseJoinColumns = @JoinColumn(name = "categoria_id"))
    private List<Categoria> categorias;


    @ManyToMany(cascade = {CascadeType.MERGE, CascadeType.REFRESH})
    @JoinTable(
        name = "jogo_plataforma",
        joinColumns = @JoinColumn(name = "jogo_id"),
        inverseJoinColumns = @JoinColumn(name = "plataforma_id"))
    private List<Plataforma> plataformas;


    @OneToMany(mappedBy = "jogo")
    @JsonIgnoreProperties("jogo")
    private List<Resenha> resenhas;

 
    @OneToMany(mappedBy = "jogo")
    @JsonIgnoreProperties({"jogo", "usuario"})
    private List<Avaliacao> avaliacoes;


    @ManyToMany(mappedBy = "jogos")
    @JsonIgnoreProperties({"jogos", "colecoes"})
    private List<Colecao> colecoes;

  
    public List<Resenha> getResenhas() {
        return resenhas;
    }   
    public void setResenhas(List<Resenha> resenhas) {
        this.resenhas = resenhas;
    }

    public List<Avaliacao> getAvaliacoes() {
        return avaliacoes;
    }
    public void setAvaliacoes(List<Avaliacao> avaliacoes) {
        this.avaliacoes = avaliacoes;
    }

    public List<Colecao> getColecoes() {
        return colecoes;
    }
    public void setColecoes(List<Colecao> colecoes) {
        this.colecoes = colecoes;
    }

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

    public List<Categoria> getCategorias() {
        return categorias;
    }
    public void setCategorias(List<Categoria> categorias) {
        this.categorias = categorias;
    }

    public List<Plataforma> getPlataformas() {
        return plataformas;
    }
    public void setPlataformas(List<Plataforma> plataformas) {
        this.plataformas = plataformas;
    }
}

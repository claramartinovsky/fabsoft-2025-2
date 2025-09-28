package br.univille.fabsoft_backend.service;

import java.util.List;

import br.univille.fabsoft_backend.entity.Resenha;

public interface ResenhaService {
    List<Resenha> getAll();
    Resenha save(Resenha resenha) throws Exception;
    Resenha update(long id, Resenha resenha) throws Exception;
    Resenha delete(long id) throws Exception;

    List<Resenha> getByUsuario(long usuarioId);
    List<Resenha> getByJogo(long jogoId);
}


package br.univille.fabsoft_backend.service;

import java.util.List;

import br.univille.fabsoft_backend.entity.Plataforma;

public interface PlataformaService {
    List<Plataforma> getAll();
    Plataforma save(Plataforma plataforma);
    Plataforma update(long id, Plataforma plataforma) throws Exception;
    Plataforma delete(long id) throws Exception;
}

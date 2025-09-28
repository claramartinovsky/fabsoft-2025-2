package br.univille.fabsoft_backend.service;

import java.util.List;
import br.univille.fabsoft_backend.entity.Colecao;

public interface ColecaoService {
    List<Colecao> getAll();
    Colecao save(Colecao colecao);
    Colecao update(long id, Colecao colecao);
    Colecao delete(long id);

    List<Colecao> getByUsuario(long usuarioId);
}

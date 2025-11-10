package br.univille.fabsoft_backend.service;

import java.util.List;
import br.univille.fabsoft_backend.entity.Avaliacao;

public interface AvaliacaoService {
    List<Avaliacao> getAll();
    Avaliacao save(Avaliacao avaliacao);
    Avaliacao update(long id, Avaliacao avaliacao);
    Avaliacao delete(long id);

    List<Avaliacao> getByUsuario(long usuarioId);
    List<Avaliacao> getByJogo(long jogoId);

    Avaliacao getById(long id);
}

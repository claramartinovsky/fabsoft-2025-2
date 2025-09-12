package br.univille.fabsoft_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.fabsoft_backend.entity.Avaliacao;

public interface AvaliacaoRepository extends JpaRepository<Avaliacao, Long> {
    List<Avaliacao> findByUsuarioId(Long usuarioId);
    List<Avaliacao> findByJogoId(Long jogoId);
}

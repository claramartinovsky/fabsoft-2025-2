package br.univille.fabsoft_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.fabsoft_backend.entity.Resenha;

public interface ResenhaRepository extends JpaRepository<Resenha, Long> {
    List<Resenha> findByUsuarioId(Long usuarioId);
    List<Resenha> findByJogoId(Long jogoId);
}

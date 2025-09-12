package br.univille.fabsoft_backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.fabsoft_backend.entity.Colecao;

public interface ColecaoRepository extends JpaRepository<Colecao, Long> {
    List<Colecao> findByUsuarioId(Long usuarioId);
}


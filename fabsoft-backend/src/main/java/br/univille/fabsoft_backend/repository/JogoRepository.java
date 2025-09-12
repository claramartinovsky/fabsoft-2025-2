package br.univille.fabsoft_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.fabsoft_backend.entity.Jogo;

public interface JogoRepository extends JpaRepository<Jogo, Long> {
}

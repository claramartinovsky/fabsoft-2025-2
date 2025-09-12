package br.univille.fabsoft_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.fabsoft_backend.entity.Plataforma;

public interface PlataformaRepository extends JpaRepository<Plataforma, Long> {
}

package br.univille.fabsoft_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.fabsoft_backend.entity.Categoria;

public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
}

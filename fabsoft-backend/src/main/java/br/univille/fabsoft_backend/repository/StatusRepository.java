package br.univille.fabsoft_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import br.univille.fabsoft_backend.entity.Status;

public interface StatusRepository extends JpaRepository<Status, Long> {
}
